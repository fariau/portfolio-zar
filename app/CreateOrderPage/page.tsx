'use client';
import { useState } from 'react';
import CreateOrder from '@/components/CreateOrder'; 

export default function CreateOrderPage() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return <CreateOrder onClose={() => setIsOpen(false)} />;
}
