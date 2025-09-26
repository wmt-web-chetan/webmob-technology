import Image from "next/image";
import CodeSvg from "../../assets/svg/Code.svg";
import VrSvg from "../../assets/svg/Vr.svg";
import DigitalSvg from "../../assets/svg/Digital.svg";
import Web3Svg from "../../assets/svg/Web3.svg";
import AutonomiousSvg from "../../assets/svg/Autonomious.svg";
import TwinSvg from "../../assets/svg/Twin.svg";

const Icon = ({ type, className = "w-12 h-12" }) => {
  const icons = {
    code: (
      <Image
        src={CodeSvg}
        alt="Code Icon"
        width={48}
        height={48}
        className={className}
      />
    ),
    vr: (
      <Image
        src={VrSvg}
        alt="VR Icon"
        width={48}
        height={48}
        className={className}
      />
    ),
    digital: (
      <Image
        src={DigitalSvg}
        alt="Digital Icon"
        width={48}
        height={48}
        className={className}
      />
    ),
    data: (
      <Image
        src={CodeSvg}
        alt="Data Icon"
        width={48}
        height={48}
        className={className}
      />
    ),
    web3: (
      <Image
        src={Web3Svg}
        alt="Data Icon"
        width={48}
        height={48}
        className={className}
      />
    ),
    autonomious: (
      <Image
        src={AutonomiousSvg}
        alt="Data Icon"
        width={48}
        height={48}
        className={className}
      />
    ),
    twin: (
      <Image
        src={TwinSvg}
        alt="Data Icon"
        width={48}
        height={48}
        className={className}
      />
    ),
  };

  return <div className="text-primary">{icons[type] || icons.code}</div>;
};

export default Icon;
