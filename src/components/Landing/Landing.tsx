import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
const Landing = () => {
  const initialData = {
    name: "",
    roomCode: "",
  };
  const [formData, setFormData] = useState(initialData);
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    console.log(formData);
  };
  return (
    <>
      <div className="landing w-[100vw] h-[100vh] bg-background">
        <h1 className="text-primary text-6xl font-rokkitt text-center mt-6">
          Hello Yap God and Goddess!
        </h1>
        <h2 className="text-primary text-3xl text-center font-oswald">
          Welcome to Yap Buddy!
        </h2>
        <h2 className="text-primary text-3xl text-center font-oswald">
          Your space to chat endlessly and comfortably with others.
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex justify-center mt-16 gap-4 w-[50%] items-center">
            <Label className="w-[50%] ">Enter your name</Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
            ></Input>
          </div>
          <div className="flex justify-center mt-7 gap-4 w-[50%] items-center">
            <Label className="w-[50%] ">Enter room code</Label>
            <Input
              name="roomCode"
              value={formData.roomCode}
              onChange={handleChange}
            ></Input>
          </div>
          <Button onClick={handleClick} className="mt-7">
            Start Chatting
          </Button>
        </div>
      </div>
    </>
  );
};

export default Landing;
