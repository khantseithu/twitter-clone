import { type NextPage } from "next";
import { NewTweetForm } from "~/components/NewTweetForm";


const Home: NextPage = () => {

  return (
    <>
    <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b">
      <h1 className="font-bold">Home</h1>
      </header>  
      <NewTweetForm />
    </>
  );
};

export default Home;

