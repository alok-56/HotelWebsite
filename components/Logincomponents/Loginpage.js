"use client";

import { useState } from "react";
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

const Loginpage = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  const sendOtp = () => {
    if (mobileNumber.length >= 10) {
      setOtpSent(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="bg-blue-900 text-white hover:bg-blue-800 text-xs -mr-6 md:-mr-4"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Login to BRILL ROOMS
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="otp" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="otp">OTP Login</TabsTrigger>
            <TabsTrigger value="password">Password Login</TabsTrigger>
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
                  onClick={sendOtp}
                  disabled={mobileNumber.length < 10}
                >
                  Send OTP
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input id="otp" type="text" placeholder="Enter 6-digit OTP" />
                  <p className="text-sm text-muted-foreground">
                    OTP sent to {mobileNumber}
                  </p>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setOtpSent(false)}>
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
          <TabsContent value="password" className="space-y-4 mt-4">
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
          </TabsContent>
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
  );
};

export default Loginpage;
