import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    navBar: {
          home: 'Home',
          about: 'About',
          contact: 'Contact',
    },
    header:{
          title:'Building Dreams',
          title2: 'Transforming Realities',
          description: 'Our mission is to transform ideas into reality, always maintaining our commitment to safety, sustainability and technical rigor.',
          contact: 'CONTACT',
          about: 'ABOUT US',
          btnService: 'Our Services'
    },
    btnContact: 'Contact-us',
    homeAbout: {
      title: 'About Phucoung',
      title2: 'We are Experiencied in This Field',
      p1: 'We are a company specialized in civil construction, recognized for its commitment to excellence and innovation in all phases of its projects.',
      p2: 'We are dedicated to continuously enhancing our operational processes, ensuring not only efficiency but also strict adherence to deadlines and safety standards.',
      btn: 'Read More'

    },
    homeService: {
      title: 'Our Main Services',
      s1:{
        title: 'Construction of Residential and Commercial Building',
        description: 'Our experience in building construction ranges from highend residential projects to largescale commercial complexes.',
      },
      s2:{
        title: 'Insfrastructure and Urbanization',
        description: 'We are involved in insfrastructure projects that include roads, sewage systems, water supply network and public service'
      },
      s3:{
        title: 'Renovations and Extensions',
        description: 'We believe that the renovation and adaptation of existinf structures is essential to ensure their and functionality.'
      },
      s4:{
        title: 'Project Management',
        description: 'We understand the importance of eficient management of resources and deadlines for the success of any project.'
      },
      s5:{
        title: 'Technical Consulting',
        description: 'We offer Specialized technical consulting, helping our clients identify the best solutions for their projects.'
      },
    },
    homeActivity: {
      title: 'Bring A New Experience',
      title2: 'To Your Investiment',
      description: 'We pride ourselves on using the best pratices and top-quality materials, ensuring customer satisfaction.' 
    },
    homeProject: {
      title: 'Projects',
      description: `Our team's experience spans all aspects of construction, from residential and commercial projects to large-scale public insfrastructure , allowing us to adapt and innovate according to market demands.`
    },

    about: {
      description: {
        p1: 'We are a company specialized in civil construction, recognized for its commitment to excellence and innovation in all phases of its projects. Since our inception, our mission has been to build with quality, sustainability and safety, always maintaining a deep respect for deadlines and the needs of our clients.',
        p2: 'We operate in several areas of civil construction, and each of our activities is carefully planned and executed by highly qualified professionals, commited that improve people´s lives.',
      },
      banner: 'Building Dreams, Transforming Realities',
      team: {
        title: 'Team Members',
        general: 'General Director',
        architect: 'Architect',
        manager: 'Building Manager',
        technician: 'Locksmith Technician',
        engineer: 'Engineer',
        accountant: 'Accountant'
      } 
    },
    business: {
      b1: {
        title:'Business Stores',
        description: ' We operate in several areas of civil construction, and each of our activities is carefully planned and executed by highly qualified professionals, committed to sustainable highlight some of our activities.',
        btn: 'Request'
      },
      b2: {
        title:'Construction and Design Execution',
        description: 'We specialize in civil and industrial construction, as well as professional road and urban infrastructure development',
      },
      b3: {
        title:'Construction Consulting',
        description: 'Our team of engineers and Architects is always ready to provide design consultation helping you bring your ideas to life',
      },
      b4: {
        title:'Construction Equipment Rental',
        description: 'We offer a wide range off construction equipament with varying capacities to meet the diverse needs of our clients',
      },
      b5: {
        title:'Maintenance & Repair',
        description: 'Our team of professionals is committed to providing safe and efficient maintenance andrepair services',
      },
    },

    contact: {
      phone: {
        call: {
          title: 'Make a Call',
          description: 'Make a call for all your enquires'
        },
        email:{
          title: 'Send a Email',
          description: 'Send your email for general enquires'
        },
        whatsap:{
          description: 'Call us to answer all your enquires'
        }
      },
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        btn: 'Send Email'
      }

    }
    
  },



   
  pt: {
    navBar: {
          home: 'Início',
          about: 'Sobre',
          contact: 'Contacto',
    },
    header:{
          title:'Construindo Sonhos',
          title2: 'Transformando Realidades',
          description: 'A nossa missão é transformar ideias em realidade, mantendo sempre o compromisso com a segurança, a sustentabilidade e o rigor técnico.',
          contact: 'CONTACTO',
          about: 'SOBRE NÓS',
          btnService: 'Nossos Serviços'
    },
    btnContact: 'Contacta-nos',
    homeAbout: {
      title: 'Sobre Phucoung',
      title2: 'Nós somos experientes neste Campo',
      p1: 'Somos uma empresa especializada em construção civil, reconhecida pelo compromisso com a excelência e inovação em todas as fases dos seus projectos.',
      p2: 'Estamos dedicados a aprimorar continuamente nossos processos operacionais, assegurando não só a eficiência, mas também o cumprimento rigoroso dos prazos e padrões de segurança.',
      btn: 'Ler Mais'

    },
    homeService: {
      title: 'Nossos Principais Serviços',
      s1:{
        title: 'Construção de Edifícios Residenciais e Comerciais',
        description: 'Nossa experiência em construção de edifícios abrange desde projectos residenciais de alto padrão até complexos comerciais de grande escala.',
      },
      s2:{
        title: 'Infraestrutura Urbanização',
        description: 'Nós estamos envolvidos em projectos de infraestrutura que incluem estradas, sistemas de esgoto, redes de abastecimento e serviços públicos.'
      },
      s3:{
        title: 'Reformas e Ampliações',
        description: 'Acreditamos que a renovação e a adaptação de estruturas existentes são essenciais para garantir a sua longevidade e funcionalidade.'
      },
      s4:{
        title: 'Gestão de Projectos',
        description: 'Entendemos a importância da gestão eficiêntes de recursos e prazos para o sucesso de qualquer projecto.'
      },
      s5:{
        title: 'Consultoria Técnica',
        description: 'Nós oferecemos também consultoria técnica especializada, ajudando os nossos clientes a identificar as melhores soluções para seus projectos.'
      },
    },
    homeActivity: {
      title: 'Traz uma nova experiência',
      title2: 'para seu investimento',
      description: 'Nos orgulhamos de utilizar as melhores práticas e materiais de alta qualidade, garantindo a satisfação dos clientes.' 
    },
    homeProject: {
      title: 'Projectos',
      description: 'A experiência da nossa equipe abrange todos os aspectos da construção, desde projetos residenciais e comerciais até infraestrutura pública de grande escala, permitindo-nos adaptar e inovar de acordo com as demandas do mercado.'
    },

    about: {
      description: {
        p1: 'Somos uma empresa especializada em construção civil, reconhecida pelo compromisso com a excelência e inovação em todas as fases de nossos projetos. Desde a nossa fundação, nossa missão tem sido construir com qualidade, sustentabilidade e segurança, sempre mantendo um profundo respeito pelos prazos e pelas necessidades de nossos clientes.',
        p2: 'Atuamos em diversas áreas da construção civil, e cada uma de nossas atividades é cuidadosamente planejada e executada por profissionais altamente qualificados, comprometidos em melhorar a vida das pessoas.',
      },
      banner: 'Construindo Sonhos, Transformando Realidades',
      team: {
        title: 'Membros Da Equipa',
        general: ' Director Geral',
        architect: 'Arquitecto',
        manager: 'Gestor de Obras',
        technician: 'Técnico Serralheiro',
        engineer: 'Engenheiro',
        accountant: 'Contabilista'
      } 
    },
    business: {
      b1: {
        title:'Stores de Negócio',
        description: 'Atuamos em diversas áreas da construção civil, e cada uma de nossas atividades é cuidadosamente planejada e executada por profissionais altamente qualificados, comprometidos com a sustentabilidade. A seguir, destacamos algumas de nossas atividades.',
        btn: 'Requisitar'
      },
      b2: {
        title:'Construção e Execução de Projecto ',
        description: 'Somos especializados em construção civil e industrial, bem como desenvolvimento profissional de infraestrutura rodoviária.',
      },
      b3: {
        title:'Consultoria em Construção',
        description: 'Nossa equipa de engenheiros e arquitetos está sempre pronta para fornecer consultoria de design, ajudando você a dar vida às suas ideias.'
      },
      b4: {
        title:'Aluguel de Equipamento de Construção',
        description: 'Oferecemos uma ampla gama de equipamentos de construção com capacidades variadas para atender às diversas necessidades dos nossos clientes.',
      },
      b5: {
        title:'Manutenção e Reparo',
        description: 'Nossa equipa de profissionais está comprometida em fornecer serviços de manutenção e reparo seguros e eficientes. ',
      },
    },

    contact: {
      phone: {
        call: {
          title: 'Faça uma chamada',
          description: 'Faça uma ligação para esclarecer todas as suas dúvidas.'
        },
        email:{
          title: 'Enviar Email',
          description: 'Envie seu e-mail para consultas gerais.'
        },
        whatsap:{
          description: 'Entre em contato conosco para esclarecer todas as suas dúvidas.'
        }
      },
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
         btn: 'Enviar Email'
      }
    }

  },
};

const i18n = createI18n({
  locale: 'pt', // Idioma padrão
  fallbackLocale: 'en',
  messages,
});

export default i18n;