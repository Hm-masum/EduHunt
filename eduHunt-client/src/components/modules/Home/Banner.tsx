import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  MapPin,
  Search,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-background to-cyan-50" />
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <div className="grid items-center gap-16 grid-cols-1 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 backdrop-blur">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">
                  Bangladesh's Smart Tuition Platform
                </span>
              </div>
            </div>

            <h1 className="text-xl md:text-5xl font-extrabold leading-tight text-center md:text-start">
              Find the
              <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                {" "}Perfect Tutor{" "}
              </span>
              Near You
            </h1>

            <p className="max-w-xl md:text-lg text-muted-foreground text-center md:text-start">
              Connect students with qualified tutors across Bangladesh. Search
              by subject, class, location and schedule within seconds.
            </p>

            <div className="flex justify-center md:justify-start items-center gap-4">
              <Button size="lg" asChild className="bg-purple-600 text-white hover:bg-purple-400">
                <Link href="/tutors">
                  Find Tutor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>

            {/* Features */}
            <div className="mt-10 flex flex-wrap gap-2 md:gap-6">
              <div className="flex items-center gap-1 md:gap-2">
                <Search className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base">Smart Search</span>
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base">Local Tutors</span>
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base">All Subjects</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">
            {/* Main Card */}
            <div className="relative w-full max-w-lg rounded-3xl border bg-background/80 p-8 shadow-2xl backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold">Available Tuition</h3>
                  <p className="text-sm text-muted-foreground">Updated Daily</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="rounded-2xl border bg-background p-5">
                  <Users className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="md:text-2xl font-bold">5000+</h3>
                  <p className="text-sm text-muted-foreground">
                    Registered Tutors
                  </p>
                </div>

                <div className="rounded-2xl border bg-background p-5">
                  <BookOpen className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="md:text-2xl font-bold">10000+</h3>
                  <p className="text-sm text-muted-foreground">
                    Tuition Opportunities
                  </p>
                </div>

                <div className="rounded-2xl border bg-background p-5">
                  <MapPin className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="md:text-2xl font-bold">64</h3>
                  <p className="text-sm text-muted-foreground">
                    District Coverage
                  </p>
                </div>

                <div className="rounded-2xl border bg-background p-5">
                  <GraduationCap className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="md:text-2xl font-bold">All Levels</h3>
                  <p className="text-sm text-muted-foreground">
                    School • College • Admission
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}

            <div className="absolute -left-2 md:-left-6 top-10 rounded-2xl border bg-background p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-green-500" />
                <div>
                  <h4 className="font-bold">5K+</h4>
                  <p className="text-xs text-muted-foreground">Active Tutors</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 md:-right-4 bottom-5 md:bottom-10 rounded-2xl border bg-background p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-violet-500" />
                <div>
                  <h4 className="font-bold">10K+</h4>
                  <p className="text-xs text-muted-foreground">Tuition Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
