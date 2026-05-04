import Banner from "@/components/Banner";
import SummerCare from "@/components/SummerCare";
import TopBrands from "@/components/TopBrads";
import TopGenerations from "@/components/TopGenerations";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopGenerations></TopGenerations>
      <SummerCare></SummerCare>
      <TopBrands></TopBrands>
    </div>
  );
}
