import Link from "next/link";
import PATHS from "./../constants/paths";

const NotFound = () => {
  return (
    <div>
      Please, return
      <Link href={PATHS.HOME}>Home</Link>
    </div>
  );
};

export default NotFound;
