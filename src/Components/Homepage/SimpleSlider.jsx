import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blockchain from "../../Images/blockchain.png";
import matictoken from "../../Images/matictoken.png";
import hero from "../../Images/hero.png";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full flex mb-16 items-center justify-center justify-items-stretch bggradient2 relative mt-[530px] md:mt-36 p-4  md:h-[400px]">
      <div className="shadow-lg flex flex-row md:w-3/4 p-4  bg-white  rounded-lg">
        <div className="w-1/3 px-5 py-0 bg-[#1f3b57]">
          <div className="flex flex-col items-center w-full pb-8 pt-4">
            <img src={blockchain} className="h-32" alt="Blockchain" />
            <p className="text-red-300 txtgradient text-2xl font-bold">
              {" "}
              Blockchain{" "}
            </p>{" "}
            <p className="mt-3 px-3 text-[#dad7d7]">
              Blockchain is a decentralized and distributed digital ledger that
              records and verifies transactions across multiple computers or
              nodes.It is a foundational technology that underlies
              cryptocurrencies like Bitcoin, but its applications go beyond
              digital currencies.In a traditional centralized system,
              transactions and data are typically stored in a single, trusted
              entity such as a bank or a government.In contrast, a blockchain
              network consists of a network of computers, known as nodes, that
              collectively maintain a shared and synchronized ledger.Each
              transaction is grouped into a "block" and added to a chain of
              previous blocks, forming a chronological sequence of records.
            </p>{" "}
          </div>{" "}
        </div>{" "}

        <div className="w-1/3 px-5 py-0 bg-slate-800">
          <div className="flex flex-col items-center w-full pb-10 pt-4">
            <img src={matictoken} className="h-32" alt="Polygon Chain" />
            <p className="text-red-300 txtgradient text-2xl font-bold">
              {" "}
              Polygon Chain{" "}
            </p>{" "}
            <p className="mt-3 px-3 text-[#dad7d7]">
              Polygon(previously known as Matic Network) is a scaling and
              infrastructure framework for Ethereum.It is designed to address
              some of the scalability and usability issues of the Ethereum
              blockchain by providing a sidechain solution.Polygon aims to
              enhance the functionality and performance of Ethereum by offering
              faster and cheaper transactions, along with support for various
              scaling solutions.On the other hand, a blockchain is a distributed
              and decentralized digital ledger that records transactions across
              multiple computers.It consists of blocks linked together in a
              chronological chain, where each block contains a set of
              transactions.Blockchains are known for their security,
              immutability, and transparency.
            </p>{" "}
          </div>{" "}
        </div>{" "}

        <div className="w-1/3 px-5 py-0 bg-[#1f3b57]">
          <div className="flex flex-col items-center w-full pb-8 pt-4">
            <img src={hero} className="h-32" alt="Smart Contracts" />
            <p className="text-red-300 txtgradient text-2xl font-bold">
              {" "}
              Smart Contracts{" "}
            </p>{" "}
            <p className="mt-3 px-3 text-[#dad7d7]">
              Smart contracts are self - executing contracts with the terms of
              the agreement directly written into code.They are built on
              blockchain platforms like Ethereum and are designed to automate
              and facilitate the execution of agreements without the need for
              intermediaries.Smart contracts work by enforcing the predefined
              rules and conditions of an agreement, ensuring that all parties
              involved fulfill their obligations.These contracts are stored and
              replicated across multiple nodes on a decentralized blockchain
              network, making them secure, transparent, and resistant to
              tampering.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default SimpleSlider;