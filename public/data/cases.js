import { Knives } from "./knives";
import { Quality } from "../scripts/drop/quality";

export const Cases = [
  {
    id: 1,
    title: "Prisma 2 Case",
    image: "/images/prisma2case/prisma2case.png",
    items: [
      {
        title: "AWP | Capillary",
        weapon: "AWP",
        skin: "Capillary",
        image: "/images/prisma2case/awpcapillary.png",
        type: 2,
      },
      {
        title: "Desert Eagle | Blue Ply",
        weapon: "Desert Eagle",
        skin: "Blue Ply",
        image: "/images/prisma2case/deserteagleblueply.png",
        type: 2,
      },
      {
        title: "AUG | Tom Cat",
        weapon: "AUG",
        skin: "Tom Cat",
        image: "/images/prisma2case/augtomcat.png",
        type: 2,
      },
      {
        title: "CZ75-Auto | Distressed",
        weapon: "CZ75-Auto",
        skin: "Distressed",
        image: "/images/prisma2case/cz75distressed.png",
        type: 2,
      },
      {
        title: "MP5-SD | Desert Strike",
        weapon: "MP5-SD",
        skin: "Desert Strike",
        image: "/images/prisma2case/mp5desertstrike.png",
        type: 2,
      },
      {
        title: "Negev | Prototype",
        weapon: "Negev",
        skin: "Prototype",
        image: "/images/prisma2case/negevprototype.png",
        type: 2,
      },
      {
        title: "R8 Revolver | Bone Forged",
        weapon: "R8 Revolver",
        skin: "Bone Forged",
        image: "/images/prisma2case/r8boneforged.png",
        type: 2,
      },
      {
        title: "SG 553 | Darkwing",
        weapon: "SG 553",
        skin: "Darkwing",
        image: "/images/prisma2case/sg553darwking.png",
        type: 3,
      },
      {
        title: "SSG 08 | Fever Dream",
        weapon: "SSG 08",
        skin: "Fever Dream",
        image: "/images/prisma2case/ssg08feverdream.png",
        type: 3,
      },
      {
        title: "SCAR-20 | Enforcer",
        weapon: "SCAR-20",
        skin: "Enforcer",
        image: "/images/prisma2case/scarenforcer.png",
        type: 3,
      },
      {
        title: "P2000 | Acid Etched",
        weapon: "P2000",
        skin: "Acid Etched",
        image: "/images/prisma2case/p2000acidetched.png",
        type: 3,
      },
      {
        title: "Sawed-Off | Apocalypto",
        weapon: "Sawed-Off",
        skin: "Apocalypto",
        image: "/images/prisma2case/sawedoffapocalypto.png",
        type: 3,
      },
      {
        title: "AK-47 | Phantom Disruptor",
        weapon: "AK-47",
        skin: "Phantom Disruptor",
        image: "/images/prisma2case/ak47phantomdisruptor.png",
        type: 4,
      },
      {
        title: "MAC-10 | Disco Tech",
        weapon: "MAC-10",
        skin: "Disco Tech",
        image: "/images/prisma2case/mac10discotech.png",
        type: 4,
      },
      {
        title: "MAG-7 | Justice",
        weapon: "MAG-7",
        skin: "Justice",
        image: "/images/prisma2case/mag7justice.png",
        type: 4,
      },
      {
        title: "M4A1-S | Player Two",
        weapon: "M4A1-S",
        skin: "Player Two",
        image: "/images/prisma2case/m4a1splayertwo.png",
        type: 5,
      },
      {
        title: "Glock-18 | Bullet Queen",
        weapon: "Glock-18",
        skin: "Bullet Queen",
        image: "/images/prisma2case/glockbulletqueen.png",
        type: 5,
      },
    ],
    specialItems: Knives[1],
  },
  {
    id: 2,
    title: "Bravo Case",
    image: "/images/bravocase/bravocase.png",
    items: [
      {
        title: "SG 553 | Wave Spray",
        weapon: "SG 553",
        skin: "Wave Spray",
        image: "/images/bravocase/sg553wavespray.png",
        type: 2,
      },
      {
        title: "Dual Berettas | Black Limba",
        weapon: "Dual Berettas",
        skin: "Black Limba",
        image: "/images/bravocase/dualberettasblacklimba.png",
        type: 2,
      },
      {
        title: "Nova | Tempest",
        weapon: "Nova",
        skin: "Tempest",
        image: "/images/bravocase/novatempest.png",
        type: 2,
      },
      {
        title: "Galil AR | Shattered",
        weapon: "Galil AR",
        skin: "Shattered",
        image: "/images/bravocase/galilarshattered.png",
        type: 2,
      },
      {
        title: "UMP-45 | Bone Pile",
        weapon: "UMP-45",
        skin: "Bone Pile",
        image: "/images/bravocase/ump45bonepile.png",
        type: 2,
      },
      {
        title: "G3SG1 | Demeter",
        weapon: "G3SG1",
        skin: "Demeter",
        image: "/images/bravocase/g3sg1demeter.png",
        type: 2,
      },
      {
        title: "USP-S | Overgrowth",
        weapon: "USP-S",
        skin: "Overgrowth",
        image: "/images/bravocase/uspsovergrowth.png",
        type: 3,
      },
      {
        title: "M4A4 | Zirka",
        weapon: "M4A4",
        skin: "Zirka",
        image: "/images/bravocase/m4a4zirka.png",
        type: 3,
      },
      {
        title: "MAC-10 | Graven",
        weapon: "MAC-10",
        skin: "Graven",
        image: "/images/bravocase/mac10graven.png",
        type: 3,
      },
      {
        title: "M4A1-S | Bright Water",
        weapon: "M4A1-S",
        skin: "Bright Water",
        image: "/images/bravocase/m4a1sbrightwater.png",
        quality: [Quality["Field-Tested"], Quality["Minimal Wear"]],
        type: 3,
      },
      {
        title: "P90 | Emerald Dragon",
        weapon: "P90",
        skin: "Emerald Dragon",
        image: "/images/bravocase/p90emeralddragon.png",
        type: 4,
      },
      {
        title: "AWP | Graphite",
        weapon: "AWP",
        skin: "Graphite",
        image: "/images/bravocase/awpgraphite.png",
        quality: [Quality["Minimal Wear"], Quality["Factory New"]],
        type: 4,
      },
      {
        title: "Desert Eagle | Golden Koi",
        weapon: "Desert Eagle",
        skin: "Golden Koi",
        image: "/images/bravocase/deserteaglegoldenkoi.png",
        quality: [Quality["Minimal Wear"], Quality["Factory New"]],
        type: 5,
      },
      {
        title: "AK-47 | Fire Serpent",
        weapon: "AK-47",
        skin: "Fire Serpent",
        image: "/images/bravocase/ak47fireserpent.png",
        type: 5,
      },
    ],
    specialItems: Knives["default"],
  },
];