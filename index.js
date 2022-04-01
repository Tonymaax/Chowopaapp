import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const db = getFirestore(app);

const app = initializeApp({
    "project_info": {
    "project_number": "552914184357",
    "project_id": "chowopa",
    "storage_bucket": "chowopa.appspot.com"
  },
  "client": [
    {
      "client_info": {
        "mobilesdk_app_id": "1:552914184357:android:918170f80b3455fb8b854c",
        "android_client_info": {
          "package_name": "com.chowopa.userapp0"
        }
      },
      "oauth_client": [
        {
          "client_id": "552914184357-dde52tn034ig31nt4tmfikhqjgcn8p83.apps.googleusercontent.com",
          "client_type": 3
        }
      ],
      "api_key": [
        {
          "current_key": "AIzaSyBP24rvtDgoqvXtSu1tCLkmxN1-yuypyzA"
        }
      ],
      "services": {
        "appinvite_service": {
          "other_platform_oauth_client": [
            {
              "client_id": "552914184357-dde52tn034ig31nt4tmfikhqjgcn8p83.apps.googleusercontent.com",
              "client_type": 3
            }
          ]
        }
      }
    }
  ],
  "configuration_version": "1"
})
const firebaseApp = initializeApp({
    "project_info": {
        "project_number": "552914184357",
        "project_id": "chowopa",
        "storage_bucket": "chowopa.appspot.com"
      },
      "client": [
        {
          "client_info": {
            "mobilesdk_app_id": "1:552914184357:android:918170f80b3455fb8b854c",
            "android_client_info": {
              "package_name": "com.chowopa.userapp0"
            }
          },
          "oauth_client": [
            {
              "client_id": "552914184357-dde52tn034ig31nt4tmfikhqjgcn8p83.apps.googleusercontent.com",
              "client_type": 3
            }
          ],
          "api_key": [
            {
              "current_key": "AIzaSyBP24rvtDgoqvXtSu1tCLkmxN1-yuypyzA"
            }
          ],
          "services": {
            "appinvite_service": {
              "other_platform_oauth_client": [
                {
                  "client_id": "552914184357-dde52tn034ig31nt4tmfikhqjgcn8p83.apps.googleusercontent.com",
                  "client_type": 3
                }
              ]
            }
          }
        }
      ],
      "configuration_version": "1"
})
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
