import Link from "next/link";
import { Button } from "../ui/button";
import { PiFishDuotone } from "react-icons/pi";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <PiFishDuotone className="size-6" />
      </Link>
    </Button>
  );
}
export default Logo;
