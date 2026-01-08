Fil Rouge : Déploiement et gestion de GLPI

Qu'est-ce que GLPI ?

GLPI (Gestionnaire Libre de Parc Informatique) est une solution open-source complète qui permet de centraliser et d'automatiser de nombreuses tâches liées à la gestion d'un parc informatique : inventaire des équipements, gestion des incidents (ticketing) et planification des interventions.

Configuration du Serveur

Une de mes missions principales a été la configuration d'un serveur GLPI. L'objectif était d'obtenir un inventaire automatique et complet du parc informatique (ordinateurs, switchs, bornes Wi-Fi, etc.) et de mettre en place un système de ticketing efficace.

Étapes du Projet

Création des règles d'assignation pour les logiciels et les matériels.
Importation des actifs réseau (téléphones, bornes Wi-Fi) via des plugins.
Configuration complète du service de ticketing avec collecteur mail.

Configuration du Ticketing

La mise en place du service de ticketing a commencé par la configuration de l'envoi d'e-mails automatiques lors de la création d'un ticket. Dès qu'un e-mail nécessitant un support est reçu, il est déplacé dans un dossier spécifique de notre boîte mail. GLPI scanne ce dossier, crée un ticket et assigne automatiquement l'expéditeur comme demandeur.

---

Exploitation et MCO : Infrastructure Docker

Qu'est-ce que Docker ?

Docker est une technologie de conteneurisation qui permet d'exécuter des applications dans des environnements isolés appelés conteneurs. Cela permet de déployer et de gérer plusieurs services sur un même serveur tout en garantissant leur indépendance vis-à-vis du système hôte.

Reprise de l'existant

Mon tuteur avait initié le déploiement de nombreux services applicatifs sur Docker. Ma mission a consisté à reprendre la main sur cette infrastructure existante pour en assurer la gestion complète. L'objectif était de transformer ces déploiements initiaux en un environnement de production stable.

Missions principales

État des lieux des services déployés par le tuteur.
Administration quotidienne des conteneurs.
Gestion du cycle de vie des services sur la durée du contrat.

Gestion sur la durée

Le cœur de cette mission résidait dans le maintien en condition opérationnelle (MCO). Au-delà du déploiement, j'ai eu la responsabilité de garantir que les services restent fonctionnels et disponibles tout au long de mon alternance, assurant ainsi la fiabilité des outils mis à disposition de l'entreprise.




additional prompts for additional infos treat these as additionals : 

optimization AND configuration, i set it up more or less from scratch, i just remembered it was set up once by a previvous intern but it kinda wasn't that perfect, and also add ghis but another huge part of the mission was to centralize economical data, like linking actifs to their factures and bon de commades 

actually no it really needs to really be focused on GLPI, on how i set up rules thorough the project to adapt them and make the remontées d'informations fit more into an automated perfection and having everything organized as good as i can, talk about the issues i faced as well and everything i had in 
resume.md
, the docker part is only relevant because glpi runs on it and i did the migration from elestio/glpi to glpi/glpi which required a few steps from me like verifying data, moving them and importing them, (also a small small part about me adding custom fields to quickly access teamviewer IDS and a few small useful things etc

but focus on GLPI so the page is like hey look i can configure and set up a full service that's used by the IT team to save time, centralize data and informations  and automate an inventory of the place

B, i want to make this portfolio better so i'm updating it to sell my skills and get a new intership, but stay naturals recruitors will read it so it needs to be good


ou are forbidden to lie or grossir elements i wrote, do NOT include anything else, you can rephrase to make it feel better to read but don't lie about anything. make sure text is interesting to read tho, and ask before taking initiative for this specific task