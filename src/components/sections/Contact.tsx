"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { Notification } from "@/components/ui/notification";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong.");
        // Auto-dismiss error after 1 second
        setTimeout(() => setError(""), 2000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setError("An unexpected error occurred.");
      // Auto-dismiss error after 1 second
      setTimeout(() => setError(""), 2000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-24 pb-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Have an idea or a project in mind? Let's talk!</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto text-left space-y-6 px-4"
        >
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              placeholder="Your message..."
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}
          <Button 
            type="submit" 
            disabled={isLoading}
            size="lg"
            className="w-full"
          >
            {isLoading ? (
              <>
                <Spinner className="mr-2" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </div>
      {showSuccess && (
        <Notification
          message="Message sent successfully! I'll get back to you soon."
          onClose={() => setShowSuccess(false)}
        />
      )}
    </section>
  );
}
