/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable camelcase */
// [START drive_quickstart]
const fs = require("fs").promises;
const path = require("path");
const process = require("process");
const { authenticate } = require("@google-cloud/local-auth");
const { google } = require("googleapis");
const { error } = require("console");

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/drive"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), "token.json");
const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: "authorized_user",
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}
const FOLDER_ID = "17R3TReYVLCm_WkjwIpz8ybQsC66aNhgk";
/**
 * Lists the names and IDs of up to 10 files.
//  * An authorized OAuth2 client.
 */
async function listFiles() {
  const authClient = await authorize()
  const drive = google.drive({ version: "v3", auth: authClient });

  const res = await drive.files.list({
    pageSize: 10,
    fields: "nextPageToken, files(id, name)",
  });
  const files = res.data.files;
  if (files.length === 0) {
    console.log("No files found.");
    return;
  }

  console.log("Files:");
  files.map((file) => {
    console.log(`${file.name} (${file.id})`);
  });
}
/**
 * @param {OAuth2Client} authClient An authorized OAuth2 client.
 */

async function createAccountFile(account, folderId) {
  const auth = await authorize();
  const drive = google.drive({ version: "v3", auth: auth });

  try {
    const res = await drive.files.create({
      requestBody: {
        name: `${account.account_number}.json`,
        mimeType: "application/json",
        parents: [folderId],
      },
      media: {
        mimeType: "application/json",
        body: JSON.stringify(account),
      },
    });

    console.log("New account file created:", res.data);
  } catch (error) {
    console.error("Error creating account file:", error);
  }
}
// Search for a file by account number and return its file ID
async function findFileIdByAccountNumber(accountNumber) {
  const auth = await authorize();
  const drive = google.drive({ version: "v3", auth: auth });
  
  try {
    const res = await drive.files.list({
      q: `name contains '${accountNumber}' and trashed=false`,
      fields: "files(id)",
    });
    console.log(res.data);
    const files = res.data.files;
    if (files.length > 0) {
      return files[0].id; // Return the first matching file's ID
    } else {
      console.log(`File not found for account number: ${accountNumber}`);
      return null;
    }
  } catch (error) {
    console.error("Error searching for file:", error.message);
    return null;
  }
}

// Example: Update an account file by account number
async function updateAccount(accountNumber, updatedData) {
  const auth = await authorize();
  const fileId = await findFileIdByAccountNumber( accountNumber);

  if (fileId) {
    const drive = google.drive({ version: "v3", auth: auth });

    try {
      const media = {
        mimeType: "application/json",
        body: JSON.stringify(updatedData),
      };

      const res = await drive.files.update({
        fileId: fileId,
        media: media,
      });

      console.log("File updated successfully:", res.data);
    } catch (error) {
      console.error("Error updating file:", error.message);
    }
  }
}

// Example: Delete an account file by account number
async function deleteAccount(accountNumber) {
  const auth = await authorize();
  const fileId = await findFileIdByAccountNumber(auth, accountNumber);

  if (fileId) {
    const drive = google.drive({ version: "v3", auth: auth });

    try {
      await drive.files.delete({
        fileId: fileId,
      });

      console.log("File deleted successfully.");
    } catch (error) {
      console.error("Error deleting file:", error.message);
    }
  }
}

const account = { account_number: " 123456", balance: "9899" };
// createAccountFile(account, FOLDER_ID);
// authorize().then(listFiles).catch(error => console.log(error))
async function withdraw(sum, account_number) {
  const auth = await authorize();
  const fileId = await findFileIdByAccountNumber( account_number);
  console.log(fileId);
  if (fileId) {
    const drive = google.drive({ version: "v3", auth: auth });
    console.log(fileId);
    try {
      const account = await drive.files.get({fileId: fileId, alt: 'media'})
      console.log(account.data);
      const currentBanlance = account.data.balance;

      if(currentBanlance - sum < 0){
        throw new Error('not enough money')
      }
      const newBalance = currentBanlance - sum;
      let data = account.data;
      data.balance = newBalance;
      updateAccount(account_number, data)
    } catch (error) {
      console.log(error);
      return error
    }
  }
}
async function deposit(sum, account_number) {
  const auth = await authorize();
  const fileId = await findFileIdByAccountNumber( account_number);
  console.log(fileId);
  if (fileId) {
    const drive = google.drive({ version: "v3", auth: auth });
    console.log(fileId);
    try {
      const account = await drive.files.get({fileId: fileId, alt: 'media'})
      console.log(account.data);
      const currentBanlance = account.data.balance;

      
      const newBalance = currentBanlance + sum;
      let data = account.data;
      data.balance = newBalance;
      updateAccount(account_number, data)
    } catch (error) {
      console.log(error);
      return error
    }
  }
}

// withdraw(12292, 123456)
module.exports = {
  authorize,
  findFileIdByAccountNumber,
  updateAccount,
  deleteAccount,
  withdraw,
  deposit
};

// [END drive_quickstart]
