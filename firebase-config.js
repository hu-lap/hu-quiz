import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKmHVgYmmGAyJRM0f6gVf7YMzAEbYc4As",
  authDomain: "claude-hu-quiz.firebaseapp.com",
  databaseURL: "https://claude-hu-quiz-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "claude-hu-quiz",
  storageBucket: "claude-hu-quiz.firebasestorage.app",
  messagingSenderId: "408922067085",
  appId: "1:408922067085:web:bdfbbda2b6f5d8c9c792c4"
};

// Firebase 콘솔 Authentication > 사용자 탭에 만든 관리자 이메일을 여기에 적으세요.
// 로그인 화면에서는 비밀번호만 입력하고, 이 이메일이 자동으로 함께 사용돼요.
export const ADMIN_EMAIL = "admin@hu-lab.com";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
