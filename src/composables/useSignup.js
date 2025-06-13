import { ref } from 'vue';
import { auth }  from '../firebase/config';

let error = ref(null);

let createAccount = async (name, email, password) => {
  error.value = null;

  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    await res.user.updateProfile({ displayName: name });
    return res;
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};

let useSignup = () => {
  return { error, createAccount };
};

export default useSignup;
