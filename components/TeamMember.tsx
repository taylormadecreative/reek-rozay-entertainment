"use client";

import { motion } from "framer-motion";
import type { TeamMember as TeamMemberType } from "@/data/team";

interface TeamMemberProps {
  member: TeamMemberType;
  index?: number;
}

export default function TeamMember({ member, index = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group text-center"
    >
      {/* Photo */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/5 group-hover:border-brand-gold/30 transition-all duration-500">
        {/* REPLACE: Client headshot */}
        <div className="placeholder-image absolute inset-0 rounded-full">
          <span className="!text-xs">{member.imageAlt}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent" />
      </div>

      {/* Info */}
      <h3 className="font-display text-xl text-brand-cream group-hover:text-brand-gold transition-colors duration-300">
        {member.name}
      </h3>
      <p className="label-accent mt-2 text-[11px]">{member.role}</p>
    </motion.div>
  );
}
