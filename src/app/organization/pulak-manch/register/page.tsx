"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Building2, Calendar } from "lucide-react";

/* ================= OPTIONS ================= */

const positions = [
  "Upadhyaksh","Adhyaksh","Sanyojak","Mahamantri","Koshadhyaksh",
  "Sanyojika","Sanskratik Mantri","Mantri","Adhyaksha","Pravakta",
  "Karyadhyaksh","Sahayak Mantri","Karyadhyaksha",
  "Karyavyaksh","Karyadhyakshika","Other"
];

const zones = [
  "Zone - 1","Zone - 2","Zone - 3","Zone - 4",
  "Zone - 5","Zone - 6","Zone - 7","Zone - 8",
  "Zone - 9","Any other Zone"
];

const organizations = [
  "Akhil Bhartiya Pulak Jan Chetna Manch (Regd.)",
  "Rashtriya Jain Mahila Jagriti Manch (Regd.)",
  "Any Other"
];

export default function RegisterPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    organization: "",
    position: "",
    zone: "",
    state: "",
    branch: "",
    gender: "",
    dateOfBirth: "",
    dateOfMarriage: "",
  });

  const [otherPosition, setOtherPosition] = useState("");
  const [otherZone, setOtherZone] = useState("");
  const [otherOrganization, setOtherOrganization] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData();

    const finalPosition =
      form.position === "Other" ? otherPosition : form.position;

    const finalZone =
      form.zone === "Any other Zone" ? otherZone : form.zone;

    const finalOrganization =
      form.organization === "Any Other"
        ? otherOrganization
        : form.organization;

    Object.entries({
      ...form,
      position: finalPosition,
      zone: finalZone,
      organization: finalOrganization,
    }).forEach(([k, v]) => v && fd.append(k, v));

    if (file) fd.append("photo", file);

    try {
      const res = await fetch("/api/directory/register", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Registration failed");

      toast.success("Registered — pending admin approval");
    } catch (err: any) {
      toast.error(err.message || "Failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFF3C4] via-[#FFF8E7] to-[#FFE7B3] py-20 px-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[#6A0000] mb-4">
            Pulak Manch Registration
          </h1>
          <p className="text-lg text-[#4B1E00]">
            Join the Jinsharnam Parivar and become part of our spiritual mission.
          </p>
        </div>

        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-xl border border-amber-200 rounded-3xl shadow-2xl p-10"
        >

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* PERSONAL INFO */}
            <div>
              <h2 className="text-xl font-semibold text-[#6A0000] mb-4">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Input icon={<User size={18}/>} placeholder="Full Name"
                  value={form.name}
                  onChange={(v:string)=>setForm({...form,name:v})}
                />
                <Input icon={<Mail size={18}/>} placeholder="Email"
                  value={form.email}
                  onChange={(v:string)=>setForm({...form,email:v})}
                />
                <Input icon={<Phone size={18}/>} placeholder="Mobile"
                  value={form.phone}
                  onChange={(v:string)=>setForm({...form,phone:v})}
                />
                <Input icon={<MapPin size={18}/>} placeholder="Address"
                  value={form.address}
                  onChange={(v:string)=>setForm({...form,address:v})}
                />
              </div>
            </div>

            {/* ORGANIZATION DETAILS */}
            <div>
              <h2 className="text-xl font-semibold text-[#6A0000] mb-4">
                Organization Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <Select value={form.organization}
                  onChange={(v:string)=>setForm({...form,organization:v})}
                  options={organizations}
                  placeholder="Select Organization"
                />

                <Select value={form.position}
                  onChange={(v:string)=>setForm({...form,position:v})}
                  options={positions}
                  placeholder="Select Position"
                />

                <Select value={form.zone}
                  onChange={(v:string)=>setForm({...form,zone:v})}
                  options={zones}
                  placeholder="Select Zone"
                />

                <Input placeholder="State"
                  value={form.state}
                  onChange={(v:string)=>setForm({...form,state:v})}
                />

                <Input placeholder="Branch"
                  value={form.branch}
                  onChange={(v:string)=>setForm({...form,branch:v})}
                />

                <Select value={form.gender}
                  onChange={(v:string)=>setForm({...form,gender:v})}
                  options={["Gents","Ladies"]}
                  placeholder="Select Gender"
                />

                <Input type="date"
                  value={form.dateOfBirth}
                  onChange={(v:string)=>setForm({...form,dateOfBirth:v})}
                />

                <Input type="date"
                  value={form.dateOfMarriage}
                  onChange={(v:string)=>setForm({...form,dateOfMarriage:v})}
                />

              </div>
            </div>

            {/* PHOTO UPLOAD */}
            <div>
              <h2 className="text-xl font-semibold text-[#6A0000] mb-4">
                Profile Photo
              </h2>

              <div className="border-2 border-dashed border-amber-300 rounded-xl p-6 text-center hover:bg-amber-50 transition">
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => setFile(e.target.files?.[0] ?? null)}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Upload a clear passport-size photo (optional)
                </p>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="text-center pt-6">
              <button
                disabled={submitting}
                className="px-12 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[#6A0000] to-[#8B0000] shadow-xl hover:scale-105 transition"
              >
                {submitting ? "Submitting..." : "Register Now"}
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= REUSABLE INPUT ================= */

function Input({ icon, placeholder, value, onChange, type="text" }: any) {
  return (
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6A0000]">{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-xl border border-amber-300 bg-white/80 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition"
      />
    </div>
  );
}

function Select({ value, onChange, options, placeholder }: any) {
  return (
    <select
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl border border-amber-300 bg-white/80 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition"
    >
      <option value="">{placeholder}</option>
      {options.map((o:any)=>(
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}