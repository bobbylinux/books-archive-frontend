import { Button } from "@/components/ui/button";

function Header() {
  return (
    <>
      <h1>Header</h1>
      <Button onClick={() => console.log("Funziona!")}>Cliccami</Button>
    </>
  );
}

export default Header;
