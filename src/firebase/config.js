import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDGlzB1Dtx1s3ZNt08jNKUb4SKIOAV3OMM',
  authDomain: 'a-lanterna.firebaseapp.com',
  projectId: 'a-lanterna',
  storageBucket: 'a-lanterna.appspot.com',
  messagingSenderId: '132138664248',
  appId: '1:132138664248:web:edc2e421bcf84eb5ab01cd',
  measurementId: 'G-9492RPYY3R',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const db = getFirestore(app)
