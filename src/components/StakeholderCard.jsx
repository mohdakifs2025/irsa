import React from 'react';
import { 
  Building2, 
  Car, 
  Coins, 
  Globe, 
  Users, 
  Zap, 
  GraduationCap, 
  Newspaper 
} from 'lucide-react';

const ICON_MAP = {
  Building2,
  Car,
  Coins,
  Globe,
  Users,
  Zap,
  GraduationCap,
  Newspaper
};

export default function StakeholderCard({ title, description, iconName = 'Building2' }) {
  const IconComponent = ICON_MAP[iconName] || Building2;

  return (
    <div className="editorial-card p-6 space-y-3 bg-white">
      <div className="w-11 h-11 rounded-md bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#111111]">
        <IconComponent className="w-5 h-5 text-[#FFC629]" />
      </div>
      
      <h3 className="card-heading text-base text-[#111111]">
        {title}
      </h3>
      
      <p className="body-copy text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
