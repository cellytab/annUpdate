import { useState } from "react";
import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import useLogin from "../../hooks/useLogin";
/*  
Main differences
-pink
-console log inputs for testing
solid
*/
function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, error, login } = useLogin();

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="text"
        value={inputs.email}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        fontSize={14}
        type="password"
        value={inputs.password}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        w={"full"}
        color="white"
        bgColor="#E3B3B7"
        size={"sm"}
        fontSize={14}
        isLoading={loading}
        onClick={() => {
          login(inputs);
        }}
      >
        Log in
      </Button>
    </>
  );
}

export default Login;
