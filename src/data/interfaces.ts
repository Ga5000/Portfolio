

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
  stacks: string[]
}


interface Skill {
  image: string;
  name: string;
}

export { TimeLineItem, ProjectInterface, Skill };
