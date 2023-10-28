import usePhone from "@hooks/use-phone";
import DwebHomeContact from "@modules/home/contact/dweb-contact";
import MwebHomeContact from "@modules/home/contact/mweb-contact";

export default function HomeContact() {
  const isPhone = usePhone();
  if (isPhone) {
    return <MwebHomeContact />;
  } else {
    return <DwebHomeContact />;
  }
}
