import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { login } from "@/api/loginApi";
import { setToken } from "@/services/tokenService";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const auth = await login({ username, password });

      setToken(auth.accessToken);

      // TODO: redirect o gestione stato globale
      alert("Login successful");
    } catch (err) {
      console.error("Login failed", err);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-items-center min-h-screen pt-50">
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <p className="m-5">Login</p>
          <Input
            className="m-5"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            className="m-5"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button className="m-5 w-97" type="submit">
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default Login;
