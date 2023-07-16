import Link from "next/link";

const Chat = () => {
  return (
    <>
      <div className="fixed bottom-16 lg:right-4 right-2 z-10">
        <Link href="/">
          <span className="text-white lg:text-base text-xs bg-black lg:px-8 lg:py-2 px-2 py-1">
            Let's Chat
          </span>
        </Link>
      </div>
    </>
  );
};
export default Chat;
