import Chat from "./Chat";
import Footer from "./Footer";
import Navbar from "./NavBar";
import Icons from "./SideIcons";
import RelPro from "./RelPro";
import ProDeails from "./ProDeails";


export default function Pdp() {


  return (
    <>
      <div className="lg:px-16 lg:py-7 px-6 py-2">
        <Navbar />
        <Icons />
        <Chat />
        <ProDeails />
        <RelPro/>
        <Footer />
      </div>
    </>
  );
};

