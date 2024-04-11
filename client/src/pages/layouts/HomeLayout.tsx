import { Navigation } from "@/components/layout/Navigation";

export function HomeLayout(props: {
  showBg: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation bg={props.showBg} />
      {props.children}
    </>
  );
}
