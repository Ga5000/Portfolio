import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IconType } from "react-icons";


enum StatusEN {
  Active = "active",
  Completed = "completed",
  Archived = "archived",
}

enum StatusPT {
  Ativo = "ativo",
  Completo = "completo",
  Arquivado = "arquivado",
}

interface TimeLineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}



interface ProjectInterface {
  id: number;
  title: string;
  description : string;
  status: StatusEN | StatusPT;
  repo: string;
  stacks: IconType[]
}


interface Skill {
  image: IconType;
  name: string;
  type: string;
}

export { TimeLineItem, ProjectInterface, Skill };
