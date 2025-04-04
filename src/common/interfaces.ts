import { LucideIcon } from "lucide-react";
import { CategoryType } from "../types";

export interface Skill {
    icon: LucideIcon;
    name: string;
    type: string;
}


export interface TimeLineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: LucideIcon;
}

export enum StatusEN {
  Active = "active",
  Completed = "completed",
  Archived = "archived",
}

export enum StatusPT {
  Ativo = "ativo",
  Completo = "completo",
  Arquivado = "arquivado",
}

export interface Stack {
  icon: LucideIcon;
  name: string;
}

export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  status: StatusEN | StatusPT;
  repo: string;
  stacks: Stack[];
}

export interface Certificate{
  title: string;
  issuer: string;
  date: string;
  category: CategoryType;
  badgeNumber: string | null
  link: string;
  relevant: number;
}
