import LoginForm from "@/components/LoginForm";
import MainContentContainer from "@/components/MainContentContainer";


export default function Home() {
  return (
    <MainContentContainer extraStyles={{display: "flex", justifyContent: "center"}}>
      <LoginForm />
    </MainContentContainer>
  );
}
