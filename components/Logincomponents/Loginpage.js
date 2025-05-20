"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import { Userlogin } from "@/lib/API/User";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming you have this

const Loginpage = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const sendOtp = () => {
    if (mobileNumber.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // --- Validation ---
    if (!mobileNumber) {
      alert("enter mobile number");
      return;
    }

    setIsLoading(true);

    try {
      const result = await Userlogin(mobileNumber);
      if (result && result.status === true) {
        Cookies.set("token", result.token);
         Cookies.set("phone", result.number);
        setIsLoggedIn(true);
        setDialogOpen(false);
        router.push("/");
      } else {
        alert(result?.message || "Invalid email or password.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <div className="p-1 rounded-full bg-gray-200">
                <User className="h-5 w-5 text-gray-700" />
              </div>
              <span className="hidden md:inline">Login / Signup</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-bold">
                Login to BRILL ROOMS
              </DialogTitle>
            </DialogHeader>

            <Tabs defaultValue="otp" className="w-full mt-4">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="otp">Login</TabsTrigger>
                {/* <TabsTrigger value="password">Password Login</TabsTrigger> */}
              </TabsList>

              {/* OTP Login Tab */}
              <TabsContent value="otp" className="space-y-4 mt-4">
                {!otpSent ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="Enter your mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </div>
                    <Button
                      className="bg-blue-900 text-white hover:bg-blue-800 w-full"
                      onClick={handleLogin}
                      disabled={mobileNumber.length < 10}
                    >
                     {isLoading?<span className="loader2"></span>:"Login"}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                      />
                      <p className="text-sm text-muted-foreground">
                        OTP sent to {mobileNumber}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setOtpSent(false)}
                      >
                        Change Number
                      </Button>
                      <Button
                        variant="link text-blue-900"
                        onClick={sendOtp}
                        className="text-sm"
                      >
                        Resend OTP
                      </Button>
                    </div>
                    <Button className="bg-blue-900 text-white hover:bg-blue-800 w-full">
                      Verify & Login
                    </Button>
                  </div>
                )}
              </TabsContent>

              {/* Password Login Tab */}
              {/* <TabsContent value="password" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username or Email</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username or email"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button variant="link" className="text-xs p-0 h-auto">
                  Forgot Password?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <Button className="bg-blue-900 text-white hover:bg-blue-800 w-full">
              Login
            </Button>
          </TabsContent> */}
            </Tabs>

            <div className="mt-4 text-center text-sm">
              <p className="text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Button variant="link" className="p-0 h-auto">
                  Register Now
                </Button>
              </p>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png"  alt="User" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      )}
    </>
  );
};

export default Loginpage;
