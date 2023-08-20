import { redirect } from "react-router-dom";
export function getAuthToken() {
  const duration = getTokenDuration();
  
  if (duration < 0) {
    return "EXPIRED";
  }
  const token = localStorage.getItem("token");

  if (!token){
    return null;
  }
  return token;
}

export function getTokenDuration() {
  const expirationTime = localStorage.getItem("expirateTime");
  const expirationDate = new Date(expirationTime);
  const now = new Date();

  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkoutToken() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
  return null;
}
