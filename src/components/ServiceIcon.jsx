import React from 'react';
import {
  Globe,
  Code2,
  Server,
  Sliders,
  Terminal,
  LayoutGrid,
  ArrowLeftRight,
  Mail,
  FileText,
  Cloud,
  Smartphone,
  Laptop,
  ShieldCheck,
  Activity,
  ShieldAlert,
  Sparkles,
  Layers
} from 'lucide-react';

const iconMap = {
  'globe': Globe,
  'code': Code2,
  'server': Server,
  'settings': Sliders,
  'cpu': Terminal,
  'grid': LayoutGrid,
  'arrow-left-right': ArrowLeftRight,
  'mail': Mail,
  'signature': FileText,
  'cloud': Cloud,
  'smartphone': Smartphone,
  'laptop': Laptop,
  'shield': ShieldCheck,
  'activity': Activity,
  'shield-alert': ShieldAlert,
  'check-circle': Sparkles,
};

export default function ServiceIcon({ type, size = 20, className = "" }) {
  const IconComponent = iconMap[type] || Layers;
  return <IconComponent size={size} className={className} />;
}

