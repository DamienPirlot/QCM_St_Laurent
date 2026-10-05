// LES OPTIONS

mode_presentation("1");
mode_evaluation("1");
mode_sauvegarde("1");
//code(" "," ");
//code("essai","essai");
titre("QCM : St Laurent ");
introduction("Aide supplémentaire pour comprendre les chapitre abordé en cours. Évaluez vos connaissances sur les différents thèmes.");
introduction("N'ayez pas peur de l'échec : une fleur doit se planter pour pousser.");
//introduction("Identifiant : \"\" | Mot de passe : \"\".");

nombre_questions("1", "5", "10", "20", "50", "70", "100");
fenetre_info("MODE D'EMPLOI","pages/mode_emploi.html");
fenetre_info("test","ISL");
url_quitter("http://dyris.free.fr/");

coef_rep_juste("2");
coef_rep_fausse("-1");
coef_rep_nulle("0");
note_sur("20");

appreciation("16","20","Excellent ! Vous maîtrisez parfaitement les machines électriques.");
appreciation("13","16","Bon travail ! Vos bases sont solides.");
appreciation("10","13","Ensemble moyen, revoyez les couplages et les principes de glissement.");
appreciation("0","10","Révisez les documents techniques sur les moteurs triphasés et CC.");

juste("Parfait !||Excellent !||Juste !||Correct !||Bravo !");
faux("Non...||Faux...||Erreur...||Inexact...");
abandon("Tentez de répondre la prochaine fois !");
chronometre("60","Le temps est écoulé !");


// LE QUESTIONNAIRE



theme("4eme : La Loi d'Ohm");
 
debut("Questions sur la relation entre Tension, Courant et Résistance.");


quest("Quelle est la formule correcte de la Loi d'Ohm ?//a");
rep("[ ] P = U x I");
rep("[x] U = R x I");
rep("[ ] R = U x I");
rep("[ ] U = R / I");
faux("La loi d'Ohm relie la tension au produit de la resistance et de l'intensite, U egal R fois I");
 
quest("Si la résistance R augmente (dans un circuit simple), que fait l'intensité I ?//a");
rep("[ ] L'intensité augmente");
rep("[x] L'intensité diminue");
rep("[ ] L'intensité reste la même");
faux("A tension constante, une resistance plus grande limite davantage le passage du courant, donc l'intensite diminue");
 
quest("Un appareil de 10 Ohms est branché sur 20 Volts. Quelle est l'intensité ? (I = U / R)//a");
rep("[ ] 0.5 Ampère");
rep("[x] 2 Ampères");
rep("[ ] 200 Ampères");
faux("En appliquant I egal U divise par R, on obtient 20 divise par 10, soit 2 amperes");



// ====================================================================================
// SECTION : 4eme : Le multimètre
// ====================================================================================
 
theme("4eme : Le Multimètre");
 
debut("Savoir utiliser les appareils de mesure.");
quest("Multi01 : Que peut mesurer un multimètre en mode ohmmètre ?//a");
rep("[ ] La puissance électrique");
rep("[x] La résistance électrique");
rep("[ ] La fréquence du réseau");
aj("images/Multi01.png");
faux("Le mode ohmmetre d'un multimetre sert specifiquement a mesurer la resistance electrique d'un composant");
 
quest("Multi02 : Que risque-t-on si on mesure une tension avec le multimètre réglé sur ampèremètre ?//a");
rep("[x] Un court-circuit et la détérioration du multimètre");
rep("[ ] Une mesure plus précise");
rep("[ ] Aucun risque");
aj("images/Multi01.png");
faux("En mode amperemetre, la resistance interne de l'appareil est tres faible, donc appliquer une tension dessus provoque un courant enorme qui l'endommage");
 
quest("Multi03 : Un voltmètre fait-il partie des fonctions d’un multimètre ?//a");
rep("[x] Oui, un multimètre peut fonctionner comme voltmètre");
rep("[ ] Non, ce sont deux appareils totalement différents");
rep("[ ] Seulement sur les multimètres analogiques");
aj("images/Multi01.png");
faux("Le multimetre regroupe plusieurs fonctions de mesure, dont celle de voltmetre, en plus de l'amperemetre et de l'ohmmetre");
 
quest("Multi04 : Pourquoi ne faut-il jamais mesurer une résistance sur un circuit sous tension ?//a");
rep("[x] Cela peut endommager le multimètre et fausser la mesure");
rep("[ ] Cela améliore la précision");
rep("[ ] Cela permet de mesurer plus vite");
aj("images/Multi01.png");
faux("Mesurer une resistance sous tension envoie un courant externe dans l'ohmmetre, ce qui fausse la mesure et peut endommager l'appareil");
 
quest("Multi05 : Pour mesurer un courant, comment doit-on brancher le multimètre ?//a");
rep("[x] En série dans le circuit");
rep("[ ] En parallèle aux bornes du composant");
rep("[ ] Directement sur la prise de terre");
aj("images/Multi01.png");
faux("Pour mesurer un courant, il faut que celui ci traverse l'appareil de mesure, d'ou un branchement en serie dans le circuit");
 
quest("Multi06 : Quelle borne utilise-t-on généralement avec la borne COM pour mesurer une tension ?//a");
rep("[x] La borne V");
rep("[ ] La borne A");
rep("[ ] La borne Terre");
aj("images/Multi01.png");
faux("La borne V associee a la borne COM permet de mesurer une difference de potentiel entre deux points");
 
quest("Multi07 : Avant de mesurer une tension inconnue, que faut-il faire ?//a");
rep("[x] Choisir le plus grand calibre disponible");
rep("[ ] Régler directement sur le plus petit calibre");
rep("[ ] Débrancher la borne COM");
aj("images/Multi01.png");
faux("Partir du plus grand calibre evite de depasser la limite de l'appareil et donc de l'endommager si la tension est plus elevee que prevu");
 
quest("Multi08 : Peut-on utiliser le multimètre pour vérifier la continuité d’un fil ?//a");
rep("[x] Oui, avec le mode continuité ou ohmmètre");
rep("[ ] Non, jamais");
rep("[ ] Seulement avec le mode ampèremètre");
aj("images/Multi01.png");
faux("Le mode continuite ou ohmmetre permet de verifier si un fil laisse bien passer le courant sur toute sa longueur");
 
quest("Multi09 : Que signifie OL ou 1 affiché sur certains multimètres en mode ohmmètre ?//a");
rep("[x] La résistance est infinie ou le circuit est ouvert");
rep("[ ] Le circuit est en court-circuit");
rep("[ ] La pile du multimètre est pleine");
aj("images/Multi01.png");
faux("Un affichage OL ou 1 signifie que la resistance mesuree depasse la limite de l'appareil, ce qui correspond generalement a un circuit coupe");
 
quest("Multi10 : Pourquoi faut-il remettre le cordon rouge sur la borne V après une mesure de courant ?//a");
rep("[x] Pour éviter un court-circuit lors d’une prochaine mesure de tension");
rep("[ ] Pour recharger le multimètre");
rep("[ ] Pour mesurer plus rapidement");
aj("images/Multi01.png");
faux("Si le cordon reste sur la borne A alors qu'on bascule sur une mesure de tension, on cree un court circuit a travers l'amperemetre interne");
 
quest("Multi11 : Que se passe-t-il si le fusible interne du multimètre est grillé ?//a");
rep("[x] La mesure de courant ne fonctionne plus");
rep("[ ] La mesure devient plus précise");
rep("[ ] Le multimètre mesure uniquement la tension");
aj("images/Multi01.png");
faux("Le fusible protege le circuit interne de l'amperemetre, donc s'il est grille, cette fonction de mesure est coupee");
 
quest("Multi12 : Peut-on mesurer directement la tension d’une prise secteur avec n’importe quel réglage ?//a");
rep("[ ] Oui, sans précaution");
rep("[x] Non, il faut choisir le bon mode et un calibre adapté");
rep("[ ] Oui, seulement en mode ohmmètre");
aj("images/Multi01.png");
faux("Une prise secteur delivre une tension elevee, il faut donc regler le multimetre sur voltmetre alternatif avec un calibre adapte avant de mesurer");
 
quest("Multi13 : Pour mesurer une tension (en Volts), comment branche-t-on le multimètre ?//a");
rep("[ ] En série (on coupe le circuit)");
rep("[x] En dérivation / parallèle (aux bornes du composant)");
rep("[ ] On ne le branche pas, on utilise une pince");
aj("images/Multi01.png");
faux("Pour mesurer une tension, il faut placer le multimetre aux bornes du composant sans couper le circuit, c'est a dire en parallele");
 
quest("Multi14 : Sur quel mode doit-on régler le multimètre pour mesurer un courant ?//a");
rep("[ ] Voltmètre");
rep("[x] Ampèremètre");
rep("[ ] Ohmmètre");
aj("images/Multi01.png");
faux("Le mode amperemetre est concu pour mesurer l'intensite du courant qui traverse l'appareil");
 
quest("Multi15 : Quelle borne est commune à toutes les mesures sur un multimètre ?//a");
rep("[ ] La borne V");
rep("[ ] La borne A");
rep("[x] La borne COM");
aj("images/Multi01.png");
faux("La borne COM sert de reference commune, quel que soit le type de mesure effectue : tension, courant ou resistance");
 







// ====================================================================================
// SECTION : Arduino - Bases de la programmation
// ====================================================================================
theme("Arduino : Bases de la programmation");
 
debut("Découvrez les notions fondamentales de la programmation Arduino : variables, boucles et structure d'un programme.");
 
quest("ARD01 : Qu'est-ce qu'une variable en programmation ?//a");
rep("[ ] Une fonction qui exécute une action");
rep("[x] Un espace mémoire nommé qui stocke une valeur");
rep("[ ] Un composant électronique de la carte Arduino");
rep("[ ] Un type de boucle");
faux("Une variable permet de reserver un espace en memoire identifie par un nom pour y stocker une valeur utilisable dans le programme");
 
quest("ARD02 : Quel type de variable utilise-t-on pour stocker un nombre entier (ex : 13) ?//a");
rep("[ ] float");
rep("[x] int");
rep("[ ] char");
rep("[ ] String");
faux("Le type int est concu pour stocker des nombres entiers, comme 13, sans partie decimale");
 
quest("ARD03 : Quel type de variable ne peut prendre que deux états (vrai ou faux) ?//a");
rep("[ ] int");
rep("[x] boolean");
rep("[ ] float");
rep("[ ] byte");
faux("Le type boolean ne peut prendre que deux valeurs, true ou false, ce qui correspond a vrai ou faux");
 
quest("ARD04 : Dans l'instruction \"int led = 13;\", que représente le 13 ?//a");
rep("[ ] Le type de la variable");
rep("[ ] Le nom de la variable");
rep("[x] La valeur assignée à la variable");
rep("[ ] Un commentaire");
faux("Dans int led egal 13, le nombre 13 est la valeur qui est stockee dans la variable nommee led");
 
quest("ARD05 : Une variable déclarée en dehors de toute fonction (setup ou loop) est dite ://a");
rep("[x] globale, elle est accessible partout dans le programme");
rep("[ ] locale, elle n'existe que dans setup()");
rep("[ ] temporaire, elle est supprimée après 1 seconde");
rep("[ ] constante, elle ne peut jamais changer");
faux("Une variable declaree en dehors de setup et de loop est accessible depuis n'importe quelle partie du programme, ce qui en fait une variable globale");
 
quest("ARD06 : À quoi sert une boucle \"for\" ?//a");
rep("[ ] À tester une condition une seule fois");
rep("[x] À répéter un bloc d'instructions un nombre défini de fois");
rep("[ ] À déclarer une variable");
rep("[ ] À arrêter le programme");
faux("La boucle for est utilisee lorsque l'on connait a l'avance le nombre de repetitions souhaitees");
 
quest("ARD07 : Dans \"for (int i = 0; i < 10; i++)\", combien de fois le bloc sera-t-il exécuté ?//a");
rep("[ ] 9 fois");
rep("[x] 10 fois");
rep("[ ] 11 fois");
rep("[ ] Une seule fois");
faux("La boucle commence a 0 et s'arrete juste avant que i atteigne 10, ce qui donne bien 10 passages, de 0 a 9");
 
quest("ARD08 : Dans une boucle for, que fait généralement l'instruction \"i++\" ?//a");
rep("[ ] Elle remet i à zéro");
rep("[x] Elle incrémente i de 1 à chaque tour de boucle");
rep("[ ] Elle divise i par 2");
rep("[ ] Elle arrête la boucle immédiatement");
faux("L'operateur i plus plus augmente la valeur de i de une unite a chaque tour de boucle");
 
quest("ARD09 : À quoi sert une structure \"if\" ?//a");
rep("[ ] À répéter une action plusieurs fois");
rep("[x] À exécuter un bloc d'instructions seulement si une condition est vraie");
rep("[ ] À déclarer une variable globale");
rep("[ ] À définir la vitesse du programme");
faux("La structure if verifie une condition et n'execute le bloc associe que si cette condition est vraie");
 
quest("ARD10 : En programmation Arduino, quel symbole permet de tester une égalité dans un \"if\" ?//a");
rep("[ ] =");
rep("[x] ==");
rep("[ ] ===");
rep("[ ] !=");
faux("Le double signe egal compare deux valeurs, alors qu'un seul signe egal sert a assigner une valeur");
 
quest("ARD11 : Que permet d'ajouter le mot-clé \"else\" après un \"if\" ?//a");
rep("[x] Un bloc d'instructions exécuté quand la condition du if est fausse");
rep("[ ] Une nouvelle variable");
rep("[ ] Une boucle infinie");
rep("[ ] Un commentaire");
faux("Le mot cle else permet de definir un bloc d'instructions qui s'execute uniquement quand la condition du if n'est pas verifiee");
 
quest("ARD12 : À quoi sert la fonction \"void setup()\" dans un programme Arduino ?//a");
rep("[ ] Elle contient les instructions qui se répètent en boucle");
rep("[x] Elle contient les instructions exécutées une seule fois au démarrage");
rep("[ ] Elle sert à éteindre la carte");
rep("[ ] Elle mesure une tension");
faux("La fonction setup contient les instructions d'initialisation qui ne doivent s'executer qu'une seule fois au demarrage de la carte");
 
quest("ARD13 : Combien de fois le contenu de \"void setup()\" est-il exécuté après la mise sous tension de la carte ?//a");
rep("[x] Une seule fois");
rep("[ ] En continu, tant que la carte est alimentée");
rep("[ ] 10 fois");
rep("[ ] Jamais");
faux("Contrairement a loop, la fonction setup ne s'execute qu'une seule fois juste apres la mise sous tension de la carte");
 
quest("ARD14 : À quoi sert la fonction \"void loop()\" ?//a");
rep("[ ] Elle configure les broches une seule fois");
rep("[x] Elle contient les instructions qui se répètent indéfiniment");
rep("[ ] Elle déclare les variables globales");
rep("[ ] Elle importe une bibliothèque");
faux("Apres l'execution de setup, le programme entre dans la fonction loop qui se repete sans arret tant que la carte est alimentee");
 
quest("ARD15 : Que se passe-t-il si on oublie d'écrire \"void loop()\" dans un programme Arduino ?//a");
rep("[x] Le programme ne compile pas, une erreur est générée");
rep("[ ] Le programme fonctionne normalement");
rep("[ ] Seul setup() sera ignoré");
rep("[ ] La carte Arduino s'éteint automatiquement");
faux("La fonction loop est obligatoire dans un programme Arduino, son absence provoque une erreur a la compilation");
 
quest("ARD16 : Quelle fonction permet de définir une broche comme entrée ou comme sortie ?//a");
rep("[ ] digitalWrite()");
rep("[x] pinMode()");
rep("[ ] analogRead()");
rep("[ ] Serial.begin()");
faux("La fonction pinMode configure le mode de fonctionnement d'une broche, en entree ou en sortie, avant de l'utiliser");
 
quest("ARD17 : À quoi sert la fonction \"digitalWrite()\" ?//a");
rep("[ ] À lire une tension analogique");
rep("[x] À mettre une broche numérique à l'état HAUT (5V) ou BAS (0V)");
rep("[ ] À définir la vitesse de communication série");
rep("[ ] À déclarer une variable");
faux("digitalWrite permet d'imposer un etat logique haut ou bas sur une broche configuree en sortie");
 
quest("ARD18 : À quoi sert la fonction \"digitalRead()\" ?//a");
rep("[x] À lire l'état (HAUT ou BAS) d'une broche numérique");
rep("[ ] À écrire une valeur analogique sur une broche");
rep("[ ] À allumer une LED directement");
rep("[ ] À créer une boucle for");
faux("digitalRead renvoie l'etat logique, haut ou bas, lu sur une broche configuree en entree");
 
quest("ARD19 : Entre quelles valeurs se situe le résultat renvoyé par \"analogRead()\" sur un Arduino Uno ?//a");
rep("[ ] Entre 0 et 5");
rep("[ ] Entre 0 et 255");
rep("[x] Entre 0 et 1023");
rep("[ ] Entre -5 et +5");
faux("Le convertisseur analogique numerique de l'Arduino Uno code la tension lue sur 10 bits, ce qui donne une plage de 0 a 1023");
 
quest("ARD20 : Entre quelles valeurs se situe le paramètre utilisé par \"analogWrite()\" (signal PWM) ?//a");
rep("[ ] Entre 0 et 1023");
rep("[x] Entre 0 et 255");
rep("[ ] Entre 0 et 5");
rep("[ ] Entre 0 et 100");
faux("Le signal PWM genere par analogWrite est code sur 8 bits, ce qui correspond a une plage de 0 a 255");
 
quest("ARD21 : À quoi sert la fonction \"delay(1000)\" ?//a");
rep("[ ] Elle répète une instruction 1000 fois");
rep("[x] Elle met le programme en pause pendant 1000 millisecondes (1 seconde)");
rep("[ ] Elle règle la vitesse de communication série à 1000 bauds");
rep("[ ] Elle mesure une tension de 1000 mV");
faux("La fonction delay suspend l'execution du programme pendant la duree indiquee, exprimee en millisecondes");
 
quest("ARD22 : À quoi sert l'instruction \"Serial.begin(9600);\" placée dans le setup ?//a");
rep("[x] Elle initialise la communication série avec l'ordinateur à 9600 bauds");
rep("[ ] Elle allume une LED connectée à la broche 9600");
rep("[ ] Elle démarre la boucle loop()");
rep("[ ] Elle règle la luminosité d'un écran");
faux("Serial.begin demarre la communication serie avec l'ordinateur en fixant la vitesse de transmission en bauds");
 
// ====================================================================================
// SECTION : Arduino - Montage et breadboard
// ====================================================================================
theme("Arduino : Montage et breadboard");
 
debut("Savoir utiliser correctement une plaque d'essai (breadboard) et réaliser un montage simple.");
 
quest("ARD23 : À quoi sert une breadboard (plaque d'essai) ?//a");
rep("[ ] À alimenter directement l'Arduino en 220V");
rep("[x] À réaliser des montages électroniques sans soudure");
rep("[ ] À programmer la carte Arduino");
rep("[ ] À remplacer la carte Arduino");
faux("Une breadboard permet de realiser et de modifier rapidement un montage electronique sans avoir besoin de souder les composants");
 
quest("ARD24 : Sur une breadboard, à quoi servent les deux rangées latérales marquées + et - ?//a");
rep("[ ] À connecter uniquement les résistances");
rep("[x] Ce sont les rails d'alimentation (masse et tension positive)");
rep("[ ] Elles ne servent à rien, ce sont des repères visuels");
rep("[ ] À mesurer la tension du circuit");
faux("Les rangees laterales marquees plus et moins servent a distribuer l'alimentation du circuit sur toute la longueur de la plaque");
 
quest("ARD25 : Sur la partie centrale d'une breadboard, comment sont reliés les trous d'une même colonne (5 trous) ?//a");
rep("[x] Ils sont reliés électriquement entre eux");
rep("[ ] Ils sont tous isolés les uns des autres");
rep("[ ] Ils sont reliés uniquement à la masse");
rep("[ ] Ils sont reliés à toute la ligne horizontale");
faux("Sur la partie centrale, les cinq trous d'une meme colonne verticale sont connectes electriquement entre eux, ce qui permet d'y relier plusieurs composants");
 
quest("ARD26 : Pourquoi faut-il toujours placer une résistance en série avec une LED ?//a");
rep("[ ] Pour augmenter la luminosité de la LED");
rep("[x] Pour limiter le courant et éviter de détruire la LED");
rep("[ ] Pour inverser la polarité de la LED");
rep("[ ] Ce n'est pas nécessaire avec un Arduino");
faux("Sans resistance, le courant traversant la LED serait trop eleve, ce qui la detruirait quasi instantanement");
 
quest("ARD27 : Sur une LED, comment reconnaît-on généralement la patte positive (anode) ?//a");
rep("[x] C'est la patte la plus longue");
rep("[ ] C'est la patte la plus courte");
rep("[ ] Elle est toujours de couleur rouge");
rep("[ ] Les deux pattes sont identiques");
faux("Par convention, la patte la plus longue d'une LED correspond a l'anode, qui doit etre reliee au pole positif");
 
quest("ARD28 : Dans un montage avec un bouton poussoir, à quoi sert une résistance de pull-down ?//a");
rep("[ ] À protéger la LED du circuit");
rep("[x] À garantir un état BAS stable sur la broche quand le bouton n'est pas appuyé");
rep("[ ] À augmenter la vitesse du programme");
rep("[ ] À alimenter le bouton en 5V en permanence");
faux("La resistance de pull down relie la broche a la masse afin d'eviter un etat flottant et d'assurer un niveau bas stable quand le bouton n'est pas appuye");
 
quest("ARD29 : Que risque-t-on si on relie directement le + et le - de l'alimentation sans composant entre les deux ?//a");
rep("[x] Un court-circuit, pouvant endommager l'Arduino ou l'alimentation");
rep("[ ] Rien de spécial");
rep("[ ] La LED s'allume plus fort");
rep("[ ] Le programme s'arrête automatiquement");
faux("Relier directement les deux poles d'une alimentation sans composant limiteur provoque un courant tres eleve qui peut endommager le montage");
 
quest("ARD30 : Quelle tension logique est fournie par les broches numériques d'un Arduino Uno lorsqu'elles sont à l'état HAUT ?//a");
rep("[ ] 3.3 V");
rep("[x] 5 V");
rep("[ ] 9 V");
rep("[ ] 12 V");
faux("Sur un Arduino Uno, qui fonctionne en logique 5 volts, l'etat haut d'une broche numerique correspond a une tension de 5 volts");
 
quest("ARD31 : Reliez chaque grandeur à son unité ://2");
rep("Tension : [Volt]");
rep("Intensité : [Ampère]");
rep("Résistance : [Ohm]");
rep("Puissance : [Watt]");
faux("Chaque grandeur electrique possede une unite specifique : le volt pour la tension, l'ampere pour l'intensite, l'ohm pour la resistance et le watt pour la puissance");
 
quest("ARD32 : Quelle est l'unité de l'intensité du courant électrique ?//a");
rep("[x] L'ampère (A)");
rep("[ ] Le volt (V)");
rep("[ ] Le watt (W)");
rep("[ ] L'ohm (Ω)");
faux("L'intensite du courant electrique se mesure en amperes, note A");
 
quest("ARD33 : Quelle est l'unité de la tension électrique ?//a");
rep("[ ] L'ampère (A)");
rep("[x] Le volt (V)");
rep("[ ] Le watt (W)");
rep("[ ] L'ohm (Ω)");
faux("La tension electrique se mesure en volts, note V");
 
quest("ARD34 : Quelle est l'unité de la résistance électrique ?//a");
rep("[ ] Le volt (V)");
rep("[ ] L'ampère (A)");
rep("[x] L'ohm (Ω)");
rep("[ ] Le watt (W)");
faux("La resistance electrique se mesure en ohms");
 
quest("ARD35 : Que représente le courant électrique ?//a");
rep("[ ] Une différence de potentiel");
rep("[x] Un déplacement d'électrons");
rep("[ ] Une résistance au passage du courant");
rep("[ ] Une puissance");
faux("Le courant electrique correspond physiquement a un deplacement ordonne d'electrons dans le conducteur");
 
quest("ARD36 : Que représente la tension électrique ?//a");
rep("[x] Une différence de potentiel entre deux points");
rep("[ ] Un flux d'électrons");
rep("[ ] Une puissance");
rep("[ ] Une fréquence");
faux("La tension represente la difference de potentiel electrique entre deux points d'un circuit");
 
quest("ARD37 : Quelle est la loi d'Ohm ?//a");
rep("[ ] U = R / I");
rep("[ ] I = U × R");
rep("[x] U = R × I");
rep("[ ] R = U × I");
faux("La loi d'Ohm indique que la tension est egale au produit de la resistance par l'intensite");
 
quest("ARD38 : Dans un circuit, si la résistance augmente, que se passe-t-il pour le courant (à tension constante) ?//a");
rep("[x] Il diminue");
rep("[ ] Il augmente");
rep("[ ] Il reste constant");
rep("[ ] Il disparaît");
faux("A tension constante, une resistance plus elevee s'oppose davantage au passage du courant, qui diminue donc");
 
quest("ARD39 : Une pile fournit quel type de courant ?//a");
rep("[ ] Courant alternatif");
rep("[x] Courant continu");
rep("[ ] Courant variable");
rep("[ ] Courant triphasé");
faux("Une pile delivre une tension constante dans le temps, ce qui correspond a un courant continu");
 
quest("ARD40 : Le courant alternatif (AC) signifie ://a");
rep("[x] Le courant change de sens périodiquement");
rep("[ ] Le courant est constant");
rep("[ ] Le courant est nul");
rep("[ ] Le courant est stocké");
faux("Le courant alternatif inverse periodiquement de sens, contrairement au courant continu");
 
quest("ARD41 : Le courant continu (DC) signifie ://a");
rep("[ ] Le courant change de sens");
rep("[x] Le courant circule toujours dans le même sens");
rep("[ ] Le courant est variable");
rep("[ ] Le courant est alternatif");
faux("Le courant continu garde toujours le meme sens de circulation dans le circuit");
 
quest("ARD42 : Quel est le rôle d'une résistance dans un circuit ?//a");
rep("[x] Limiter le courant");
rep("[ ] Augmenter la tension");
rep("[ ] Produire du courant");
rep("[ ] Stocker l'énergie");
faux("Le role principal d'une resistance dans un circuit est de limiter l'intensite du courant qui le traverse");
 
quest("ARD43 : Que se passe-t-il si on met des résistances en série ?//a");
rep("[x] Les résistances s'additionnent");
rep("[ ] Elles diminuent");
rep("[ ] Elles s'annulent");
rep("[ ] Elles restent identiques");
faux("En serie, les resistances se mettent bout a bout, ce qui augmente la resistance totale du circuit, egale a leur somme");
 
quest("ARD44 : Que se passe-t-il si on met des résistances en parallèle ?//a");
rep("[ ] Elles s'additionnent");
rep("[x] La résistance équivalente diminue");
rep("[ ] Elles augmentent");
rep("[ ] Elles deviennent nulles");
faux("En parallele, les resistances offrent plusieurs chemins au courant, ce qui fait diminuer la resistance equivalente du circuit");
 
quest("ARD45 : Une diode laisse passer le courant ://a");
rep("[ ] Dans les deux sens");
rep("[x] Dans un seul sens");
rep("[ ] Aucun sens");
rep("[ ] Seulement en alternatif");
faux("Une diode ne laisse passer le courant que dans un seul sens, appele sens direct, et le bloque dans l'autre sens");
 
quest("ARD46 : Quel est le rôle d'une LED ?//a");
rep("[ ] Stocker de l'énergie");
rep("[ ] Amplifier un signal");
rep("[x] Émettre de la lumière");
rep("[ ] Résister au courant");
faux("Une LED est un composant electronique qui convertit l'energie electrique en lumiere");
 
quest("ARD47 : Pourquoi utilise-t-on une résistance avec une LED ?//a");
rep("[x] Pour limiter le courant et éviter de la griller");
rep("[ ] Pour augmenter la luminosité");
rep("[ ] Pour changer la couleur");
rep("[ ] Pour stocker l'énergie");
faux("Sans resistance, le courant dans la LED serait trop important et la detruirait rapidement");
 
quest("ARD48 : Une LED RGB permet ://a");
rep("[ ] D'émettre une seule couleur");
rep("[x] De produire plusieurs couleurs");
rep("[ ] De mesurer la tension");
rep("[ ] De stocker des données");
faux("Une LED RGB combine trois LED, rouge, verte et bleue, ce qui permet de produire de nombreuses couleurs differentes");
 
quest("ARD49 : Dans une LED RGB, que signifie RGB ?//a");
rep("[ ] Rouge Gris Bleu");
rep("[x] Rouge Vert Bleu");
rep("[ ] Résistance Générale Basse");
rep("[ ] Rotation Génératrice Binaire");
faux("Le sigle RGB vient de l'anglais et designe les couleurs rouge, vert et bleu utilisees pour composer les autres teintes");
 
quest("ARD50 : Dans un circuit série, le courant est ://a");
rep("[x] Identique partout");
rep("[ ] Différent à chaque endroit");
rep("[ ] Nul");
rep("[ ] Variable uniquement");
faux("Dans un circuit serie, il n'existe qu'un seul chemin pour le courant, qui est donc le meme en tout point du circuit");
 
quest("ARD51 : Dans un circuit parallèle, la tension est ://a");
rep("[x] Identique sur chaque branche");
rep("[ ] Différente partout");
rep("[ ] Nulle");
rep("[ ] Variable uniquement");
faux("Dans un circuit parallele, toutes les branches sont reliees aux deux memes noeuds, donc elles ont toutes la meme tension a leurs bornes");
 
quest("ARD52 : Que se passe-t-il si une LED est branchée à l'envers ?//a");
rep("[ ] Elle s'allume plus fort");
rep("[ ] Elle explose");
rep("[x] Elle ne s'allume pas");
rep("[ ] Elle change de couleur");
faux("Une LED ne conduit le courant que dans un sens, donc branchee a l'envers elle reste eteinte");
 
quest("ARD53 : Une pile transforme ://a");
rep("[ ] Énergie mécanique en électrique");
rep("[x] Énergie chimique en électrique");
rep("[ ] Énergie électrique en thermique");
rep("[ ] Énergie lumineuse en électrique");
faux("Une pile fonctionne grace a des reactions chimiques internes qui produisent de l'energie electrique");
 
quest("ARD54 : Quelle est l'unité de la tension électrique ?//a");
rep("[ ] l'ampère");
rep("[x] le volt");
rep("[ ] l'ohm");
faux("Le volt est l'unite de mesure de la tension electrique dans le systeme international");
 
quest("ARD55 : Quelle est l'unité de l'intensité du courant ?//a");
rep("[x] l'ampère");
rep("[ ] le watt");
rep("[ ] le volt");
faux("L'ampere est l'unite de mesure de l'intensite du courant electrique");
 
quest("ARD56 : À quoi sert un fusible dans un circuit ?//a");
rep("[x] à protéger contre les surintensités");
rep("[ ] à augmenter la tension");
rep("[ ] à stocker l'énergie");
faux("Un fusible fond volontairement en cas de courant trop eleve, ce qui coupe le circuit et protege l'installation");
 
quest("ARD57 : Quelle est la formule de base de la loi d'Ohm ?//a");
rep("[ ] U = I + R");
rep("[x] U = R × I");
rep("[ ] P = U × I");
faux("La loi d'Ohm relie la tension, la resistance et l'intensite par la relation U egal R fois I");
 
quest("ARD58 : Que se passe-t-il si on met deux piles en série ?//a");
rep("[x] la tension augmente");
rep("[ ] le courant diminue toujours");
rep("[ ] la tension reste la même");
faux("En placant deux piles en serie, leurs tensions s'additionnent, ce qui augmente la tension totale disponible");
 
quest("ARD59 : Quelle est l'unité de la puissance électrique ?//a");
rep("[ ] le volt");
rep("[ ] l'ampère");
rep("[x] le watt");
faux("Le watt est l'unite de mesure de la puissance electrique");
 
quest("ARD60 : Un court-circuit correspond à ://a");
rep("[x] une résistance très faible dans le circuit");
rep("[ ] une coupure du circuit");
rep("[ ] une tension nulle");
faux("Un court circuit correspond a une liaison de tres faible resistance entre deux points, qui provoque un courant tres eleve");
 
quest("ARD61 : À quoi sert la terre dans une installation électrique ?//a");
rep("[x] à protéger les personnes");
rep("[ ] à augmenter la puissance");
rep("[ ] à stocker l'énergie");
faux("La mise a la terre permet d'evacuer un courant de defaut vers le sol, ce qui protege les personnes contre les risques d'electrocution");
 
quest("ARD62 : Que mesure un voltmètre ?//a");
rep("[ ] le courant");
rep("[x] la tension");
rep("[ ] la résistance");
faux("Un voltmetre est l'appareil specifiquement destine a mesurer une tension electrique");
 
quest("ARD63 : En électronique, une diode permet ://a");
rep("[x] de laisser passer le courant dans un seul sens");
rep("[ ] d'augmenter la tension");
rep("[ ] de stocker l'énergie");
faux("Une diode est un composant qui ne permet la circulation du courant que dans un seul sens");
 
// ====================================================================================
// SECTION :  Electronique
// ====================================================================================

theme("L'électrotechnique");

quest("Elec001 : Que signifie le sigle LED ?://a");
rep("[ ] Light Electric Device");
rep("[x] Light Emitting Diode (diode électroluminescente)");
rep("[ ] Low Energy Diode");
rep("[ ] Light Electronic Detector");
faux("Le sigle LED signifie Light Emitting Diode, c'est a dire diode electroluminescente, un composant qui emet de la lumiere");

quest("Elec002 : Dans quel sens le courant doit-il circuler pour qu'une LED s'allume ?://a");
rep("[ ] Dans les deux sens, cela ne change rien");
rep("[x] Uniquement de l'anode vers la cathode");
rep("[ ] Uniquement de la cathode vers l'anode");
rep("[ ] Le sens dépend de la couleur de la LED");
faux("Une LED est une diode, elle ne laisse donc circuler le courant que dans un seul sens, de l'anode vers la cathode");

quest("Elec003 : Comment reconnaît-on la patte de l'anode (+) sur une LED neuve ?://a");
rep("[x] C'est la patte la plus longue");
rep("[ ] C'est la patte la plus courte");
rep("[ ] C'est toujours la patte de gauche");
rep("[ ] Il n'y a aucun moyen de le savoir");
faux("Sur une LED neuve, la patte la plus longue correspond toujours a l'anode, le pole positif");

quest("Elec004 : Comment reconnaît-on la cathode (-) si les pattes de la LED ont été coupées ?://a");
rep("[ ] Elle est toujours de couleur rouge");
rep("[x] Elle correspond au côté du boîtier qui présente un méplat (un côté aplati)");
rep("[ ] Elle est plus grosse que l'anode");
rep("[ ] On ne peut plus le savoir");
faux("Lorsque les pattes sont coupees, le boitier presente un meplat du cote de la cathode pour permettre de l'identifier");

quest("Elec005 : Qu'est-ce qu'un matériau conducteur ?://a");
rep("[x] Un matériau qui laisse bien passer le courant électrique (ex : cuivre, aluminium)");
rep("[ ] Un matériau qui bloque totalement le courant électrique");
rep("[ ] Un matériau qui produit de l'électricité");
rep("[ ] Un matériau qui stocke de l'énergie");
faux("Un materiau conducteur, comme le cuivre ou l'aluminium, offre tres peu de resistance et laisse donc bien circuler le courant");

quest("Elec006 : Qu'est-ce qu'un matériau isolant ?://a");
rep("[ ] Un matériau qui laisse très bien passer le courant");
rep("[x] Un matériau qui empêche ou limite fortement le passage du courant (ex : plastique, caoutchouc)");
rep("[ ] Un matériau qui amplifie le courant");
rep("[ ] Un matériau qui produit de la lumière");
faux("Un materiau isolant, comme le plastique ou le caoutchouc, empeche ou limite fortement la circulation du courant");

quest("Elec007 : Qu'est-ce que le courant continu (noté DC) ?://a");
rep("[x] Un courant qui circule toujours dans le même sens");
rep("[ ] Un courant qui change de sens plusieurs fois par seconde");
rep("[ ] Un courant qui ne circule jamais");
rep("[ ] Un courant uniquement présent dans les prises murales");
faux("Le courant continu, note DC, garde toujours le meme sens de circulation, contrairement au courant alternatif");

quest("Elec008 : En programmation Arduino, qu'est-ce qu'une variable ?://a");
rep("[x] Un espace en mémoire qui stocke une valeur pouvant changer pendant le programme");
rep("[ ] Un composant électronique branché sur la carte");
rep("[ ] Une valeur qui ne change jamais");
rep("[ ] Un type de résistance");
faux("Une variable est un espace reserve en memoire qui permet de stocker une valeur pouvant etre modifiee pendant l'execution du programme");

quest("Elec009 : À quoi sert une breadboard (plaque d'essai) ?://a");
rep("[x] À réaliser des montages électroniques sans soudure, pour tester facilement un circuit");
rep("[ ] À alimenter la carte Arduino en électricité");
rep("[ ] À programmer la carte Arduino");
rep("[ ] À mesurer une tension électrique");
faux("Une breadboard permet de brancher et de debrancher facilement des composants pour tester un circuit sans avoir a souder");

quest("Elec010 : Dans un programme Arduino, quand la fonction void setup() s'exécute-t-elle ?://a");
rep("[x] Une seule fois, au tout début du programme");
rep("[ ] En boucle, sans jamais s'arrêter");
rep("[ ] Uniquement quand on appuie sur un bouton");
rep("[ ] Jamais, elle sert juste de commentaire");
faux("La fonction void setup s'execute une seule fois, juste apres la mise sous tension ou le demarrage du programme");

quest("Elec011 : Dans un programme Arduino, que fait la fonction void loop() ?://a");
rep("[ ] Elle s'exécute une seule fois puis s'arrête");
rep("[x] Elle s'exécute en boucle, indéfiniment, tant que la carte est allumée");
rep("[ ] Elle sert à déclarer les variables");
rep("[ ] Elle éteint la carte Arduino");
faux("La fonction void loop s'execute en boucle continue tant que la carte reste alimentee");

quest("Elec012 : Que représente l'état HIGH sur une broche Arduino ?://a");
rep("[x] Un niveau de tension haut (généralement 5V), correspondant à l'état logique 1");
rep("[ ] L'absence totale de courant");
rep("[ ] Une tension négative");
rep("[ ] Une valeur analogique précise entre 0 et 1023");
faux("L'etat HIGH correspond generalement a une tension de 5 volts sur la broche, soit l'etat logique 1");

quest("Elec013 : Que représente l'état LOW sur une broche Arduino ?://a");
rep("[x] Un niveau de tension bas (0V), correspondant à l'état logique 0");
rep("[ ] Une tension de 5V");
rep("[ ] Une valeur analogique maximale");
rep("[ ] Un court-circuit");
faux("L'etat LOW correspond a une tension nulle sur la broche, soit l'etat logique 0");

quest("Elec014 : Qu'est-ce qu'un signal numérique (digital) ?://a");
rep("[x] Un signal qui ne peut prendre que deux valeurs possibles : HIGH (1) ou LOW (0)");
rep("[ ] Un signal qui peut prendre n'importe quelle valeur entre 0 et 5V");
rep("[ ] Un signal uniquement utilisé pour la lumière");
rep("[ ] Un signal qui varie de façon continue");
faux("Un signal numerique ne peut prendre que deux valeurs possibles, HIGH ou LOW, contrairement a un signal analogique");

quest("Elec015 : Qu'est-ce qu'un signal analogique ?://a");
rep("[ ] Un signal qui ne peut prendre que les valeurs 0 ou 1");
rep("[x] Un signal qui peut prendre de nombreuses valeurs intermédiaires (par exemple de 0 à 1023 avec analogRead)");
rep("[ ] Un signal qui n'existe pas sur Arduino");
rep("[ ] Un signal uniquement présent dans void setup()");
faux("Un signal analogique peut prendre de nombreuses valeurs intermediaires, par exemple de 0 a 1023 avec analogRead");

quest("Elec016 : Que dit la loi d'Ohm ?://a");
rep("[x] La tension U est égale à la résistance R multipliée par l'intensité I : U = R × I");
rep("[ ] L'intensité I est toujours constante quelle que soit la résistance");
rep("[ ] La résistance R diminue quand la tension U augmente");
rep("[ ] La tension U est égale à l'intensité I divisée par le temps");
faux("La loi d'Ohm relie les trois grandeurs electriques par la relation U egal R multiplie par I");

quest("Elec017 : Que permet de calculer la loi de Pouillet dans un circuit simple ?://a");
rep("[x] L'intensité du courant qui circule dans un circuit, à partir de la tension totale et de la résistance totale : I = U / R");
rep("[ ] La couleur exacte d'une LED");
rep("[ ] La quantité de lumière émise par une LED");
rep("[ ] Le nombre de composants d'un circuit");
faux("La loi de Pouillet permet de calculer l'intensite d'un circuit simple a partir de la tension totale divisee par la resistance totale");

quest("Elec018 : À quoi sert une résistance placée devant une LED dans un circuit ?://a");
rep("[x] À limiter l'intensité du courant pour ne pas endommager ou griller la LED");
rep("[ ] À augmenter la luminosité de la LED au maximum");
rep("[ ] À inverser le sens du courant");
rep("[ ] À stocker de l'énergie électrique");
faux("La resistance placee devant une LED limite l'intensite du courant pour que le composant ne soit pas endommage");

quest("Elec019 : À quoi sert l'instruction pinMode() dans un programme Arduino ?://a");
rep("[x] À définir si une broche de la carte fonctionne en entrée (INPUT) ou en sortie (OUTPUT)");
rep("[ ] À allumer directement une LED");
rep("[ ] À créer une nouvelle variable");
rep("[ ] À mesurer une tension électrique");
faux("L'instruction pinMode permet de configurer une broche en entree ou en sortie avant de l'utiliser dans le programme");

quest("Elec020 : Quels sont les signes d'une soudure correctement réalisée ?://a");
rep("[x] Elle est brillante, lisse, en forme de petit cône, sans excès d'étain ni faux contact");
rep("[ ] Elle est terne, granuleuse et forme une grosse boule d'étain");
rep("[ ] Elle est froide et grise, sans tenir les composants");
rep("[ ] Il y a beaucoup d'étain qui déborde sur les pattes voisines");
faux("Une bonne soudure doit etre brillante, lisse et former un petit cone regulier, sans exces d'etain ni faux contact");

// ====================================================================================
// SECTION :  Protections des personnes
// ====================================================================================

theme("Les protections des personnes");

quest("Protection01 : À partir de quelle intensité un courant peut-il devenir dangereux pour l’homme ?://a");
rep("[x] Environ 30 mA");
rep("[ ] 1 A");
rep("[ ] 5 A");
rep("[ ] 230 mA");
faux("A partir d'environ 30 milliamperes, le courant traversant le corps humain peut perturber le fonctionnement du coeur et devenir dangereux");

quest("Protection02 : Que se passe-t-il lorsqu’une personne touche deux points de potentiels différents ?://a");
rep("[x] Un courant traverse son corps");
rep("[ ] Rien ne se passe");
rep("[ ] La tension disparaît");
rep("[ ] Le courant s’arrête");
faux("Des que deux points de potentiels differents sont touches simultanement, une difference de tension apparait et un courant traverse le corps");

quest("Protection03 : Une protection passive sert à ://a");
rep("[x] Limiter l’exposition au danger");
rep("[ ] Couper automatiquement le courant");
rep("[ ] Augmenter la tension");
rep("[ ] Mesurer le courant");
faux("Une protection passive agit en limitant l'acces ou l'exposition au danger, sans intervenir activement sur le circuit");

quest("Protection04 : Exemple de protection passive ://a");
rep("[x] Une armoire de confinement");
rep("[ ] Un disjoncteur différentiel");
rep("[ ] Un fusible");
rep("[ ] Un transformateur");
faux("Une armoire de confinement empeche physiquement tout contact avec les parties dangereuses, c'est donc une protection passive");

quest("Protection05 : Une protection active sert à ://a");
rep("[x] Détecter et interrompre un danger");
rep("[ ] Isoler mécaniquement");
rep("[ ] Augmenter la puissance");
rep("[ ] Réduire la tension");
faux("Une protection active surveille le circuit et interrompt automatiquement l'alimentation des qu'un danger est detecte");

quest("Protection06 : Exemple de protection active ://a");
rep("[x] Un disjoncteur différentiel");
rep("[ ] Une armoire électrique");
rep("[ ] Un câble isolé");
rep("[ ] Une prise de terre");
faux("Le disjoncteur differentiel surveille en permanence le circuit et coupe automatiquement le courant en cas de defaut, c'est une protection active");

quest("Protection07 : En régime TT, le neutre est ://a");
rep("[x] Relié à la terre");
rep("[ ] Isolé");
rep("[ ] Relié à la phase");
rep("[ ] Supprimé");
faux("Dans le regime de neutre TT, le neutre de l'installation est relie directement a la terre");

quest("Protection08 : Le courant de fuite apparaît lorsque ://a");
rep("[x] Du courant s’échappe de l’installation");
rep("[ ] Le courant est nul");
rep("[ ] La tension disparaît");
rep("[ ] Le neutre est coupé");
faux("Un courant de fuite apparait lorsqu'une partie du courant s'echappe de l'installation, generalement vers la terre, au lieu de revenir par le neutre");

quest("Protection09 : En fonctionnement normal, le courant dans la phase est ://a");
rep("[x] Égal au courant dans le neutre");
rep("[ ] Supérieur au neutre");
rep("[ ] Inférieur au neutre");
rep("[ ] Nul");
faux("En fonctionnement normal, sans defaut, le courant qui part par la phase est egal a celui qui revient par le neutre");

quest("Protection10 : Le dispositif différentiel mesure ://a");
rep("[x] La différence entre phase et neutre");
rep("[ ] La tension uniquement");
rep("[ ] La puissance");
rep("[ ] La résistance");
faux("Le dispositif differentiel compare en permanence le courant dans la phase et dans le neutre pour detecter une difference anormale");

quest("Protection11 : Quel élément détecte le courant de fuite ?://a");
rep("[x] Le tore magnétique");
rep("[ ] Le fusible");
rep("[ ] La prise de terre");
rep("[ ] Le transformateur");
faux("Le tore magnetique du disjoncteur differentiel detecte le desequilibre entre les courants aller et retour, signe d'un courant de fuite");

quest("Protection12 : Le disjoncteur différentiel coupe le courant en cas de ://a");
rep("[x] Défaut d’isolement");
rep("[ ] Surcharge uniquement");
rep("[ ] Court-circuit uniquement");
rep("[ ] Tension faible");
faux("Le disjoncteur differentiel est specifiquement concu pour couper le circuit en cas de defaut d'isolement vers la terre");

quest("Protection13 : La formule du courant traversant le corps est ://a");
rep("[x] Ic = Uc / R");
rep("[ ] Ic = Uc × R");
rep("[ ] Ic = R / Uc");
rep("[ ] Ic = Uc²");
faux("Le courant traversant le corps se calcule avec la loi d'Ohm appliquee au corps humain, Ic egal Uc divise par R");

quest("Protection14 : La résistance moyenne du corps humain est d’environ ://a");
rep("[x] 1500 ohms");
rep("[ ] 50 ohms");
rep("[ ] 10 000 ohms");
rep("[ ] 230 ohms");
faux("Dans des conditions moyennes, la resistance du corps humain est estimee a environ 1500 ohms");

quest("Protection15 : En milieu humide, la résistance du corps est environ ://a");
rep("[x] 500 ohms");
rep("[ ] 1500 ohms");
rep("[ ] 3000 ohms");
rep("[ ] 100 ohms");
faux("En milieu humide, la peau offre moins de resistance, ce qui fait chuter la resistance du corps a environ 500 ohms");

quest("Protection16 : Le DDR déclenche généralement à ://a");
rep("[x] 30 mA");
rep("[ ] 1 A");
rep("[ ] 10 A");
rep("[ ] 100 mA");
faux("Les disjoncteurs differentiels destines a la protection des personnes declenchent generalement a 30 milliamperes");

quest("Protection17 : Le temps de coupure du DDR est environ ://a");
rep("[x] 10 ms");
rep("[ ] 1 s");
rep("[ ] 100 ms");
rep("[ ] 1 ms");
faux("Un DDR performant doit couper l'alimentation en un temps tres court, de l'ordre de 10 millisecondes, pour limiter les risques");

quest("Protection18 : La norme imposée pour les habitations est ://a");
rep("[x] NF C15-100");
rep("[ ] NF C10-100");
rep("[ ] ISO 9001");
rep("[ ] CEI 6000");
faux("La norme NF C15-100 regroupe les regles de securite electrique imposees pour les installations dans les habitations francaises");

quest("Protection19 : Le DDR de 30 mA protège contre ://a");
rep("[x] Contact phase-terre");
rep("[ ] Contact phase-phase");
rep("[ ] Contact phase-neutre");
rep("[ ] Toutes les situations");
faux("Le DDR de 30 milliamperes est concu pour detecter un courant de fuite vers la terre, typique d'un contact phase terre");

quest("Protection20 : Une zone 1 correspond à ://a");
rep("[x] Aucune réaction");
rep("[ ] Arrêt cardiaque");
rep("[ ] Brûlures graves");
rep("[ ] Tétanisation");
faux("La zone 1 du diagramme des effets du courant correspond a une intensite trop faible pour provoquer une reaction perceptible");

quest("Protection21 : Une zone 4 correspond à ://a");
rep("[x] Risque de fibrillation et brûlures");
rep("[ ] Aucun effet");
rep("[ ] Effets légers");
rep("[ ] Aucun danger");
faux("La zone 4 correspond aux intensites les plus elevees, avec un risque important de fibrillation cardiaque et de brulures");

quest("Protection22 : La protection contre les contacts indirects utilise ://a");
rep("[x] DDR + prise de terre");
rep("[ ] Fusible seul");
rep("[ ] Transformateur");
rep("[ ] Disjoncteur thermique");
faux("La protection contre les contacts indirects repose sur l'association d'une mise a la terre des masses et d'un dispositif differentiel");

quest("Protection23 : Les masses métalliques doivent être ://a");
rep("[x] Reliées à la terre");
rep("[ ] Isolées de tout");
rep("[ ] Reliées à la phase");
rep("[ ] Supprimées");
faux("Toutes les masses metalliques susceptibles d'etre mises accidentellement sous tension doivent etre reliees a la terre");

quest("Protection24 : La tension limite UL est de ://a");
rep("[x] 50 V");
rep("[ ] 230 V");
rep("[ ] 100 V");
rep("[ ] 12 V");
faux("La tension limite de securite UL est fixee a 50 volts en courant alternatif dans des conditions normales");

quest("Protection25 : Condition de sécurité ://a");
rep("[x] UD ≤ UL");
rep("[ ] UD ≥ UL");
rep("[ ] UD = 0");
rep("[ ] UD > 230 V");
faux("La condition de securite impose que la tension de defaut UD reste inferieure ou egale a la tension limite UL");

quest("Protection26 : Relation de sécurité avec la terre ://a");
rep("[x] Ra × Id ≤ UL");
rep("[ ] Ra + Id ≥ UL");
rep("[ ] Ra = UL");
rep("[ ] Id = UL");
faux("La relation de securite relie la resistance de la prise de terre Ra et le courant de defaut Id, leur produit devant rester inferieur a UL");

quest("Protection27 : Type AC correspond à ://a");
rep("[x] Usage classique");
rep("[ ] Usage industriel uniquement");
rep("[ ] Usage médical");
rep("[ ] Usage informatique");
faux("Les DDR de type AC sont adaptes aux usages domestiques classiques avec des courants de fuite alternatifs purs");

quest("Protection28 : Type A est utilisé pour ://a");
rep("[x] Appareils avec composante continue");
rep("[ ] Lampes simples");
rep("[ ] Câbles");
rep("[ ] Résistances");
faux("Les DDR de type A sont necessaires pour les appareils pouvant generer un courant de fuite avec une composante continue");

quest("Protection29 : Type HI sert à ://a");
rep("[x] Éviter les déclenchements intempestifs");
rep("[ ] Augmenter la tension");
rep("[ ] Réduire la puissance");
rep("[ ] Supprimer la terre");
faux("Les DDR de type HI sont concus pour eviter les declenchements intempestifs dus aux perturbations electriques courantes");

quest("Protection30 : En cas de défaut, le DDR doit ://a");
rep("[x] Couper rapidement l’alimentation");
rep("[ ] Augmenter le courant");
rep("[ ] Stabiliser la tension");
rep("[ ] Ignorer le défaut");
faux("En cas de defaut detecte, le role du DDR est de couper rapidement l'alimentation pour proteger les personnes");

quest("Protection31 : Cette image représente un : //a");
rep("[x] Contact direct");
rep("[ ] Contact Indirect");
aj("images/contactdirect1.png");
faux("Un contact direct correspond au contact avec une partie normalement sous tension, comme un fil denude ou une borne active");

quest("Protection32 : Cette image représente un : //a");
rep("[x] Contact direct");
rep("[ ] Contact Indirect");
aj("images/contactdirect2.png");
faux("Un contact direct correspond au contact avec une partie normalement sous tension, comme un fil denude ou une borne active");

quest("Protection33 : Cette image représente un : //a");
rep("[ ] Contact direct");
rep("[x] Contact Indirect");
aj("images/contactindirect1.png");
faux("Un contact indirect correspond au contact avec une masse metallique accidentellement mise sous tension suite a un defaut d'isolement");

quest("Protection34 : Cette image représente un : //a");
rep("[ ] Contact direct");
rep("[x] Contact Indirect");
aj("images/contactindirect2.png");
faux("Un contact indirect correspond au contact avec une masse metallique accidentellement mise sous tension suite a un defaut d'isolement");


quest("Protection35 : Cette image représente une : //a");
rep("[ ] protection active");
rep("[x] protection passive");
aj("images/protectionpassive.png");
faux("Cette protection agit en empechant physiquement l'acces au danger, sans intervention electrique active, il s'agit donc d'une protection passive");

quest("Protection36 : Cette image représente une : //a");
rep("[x] protection active");
rep("[ ] protection passive");
aj("images/protectionactive.png");
faux("Cette protection surveille le circuit et coupe automatiquement en cas de danger, il s'agit donc d'une protection active");

quest("Protection37 : Dans quel cas un DDR 30 mA NE protège-t-il PAS une personne ?://a");
rep("[x] Lors d’un contact entre la phase et le neutre");
rep("[ ] Lors d’un contact entre la phase et la terre");
rep("[ ] Lors d’un défaut d’isolement vers la terre");
rep("[ ] Lors d’un courant de fuite vers la terre");
faux("Le DDR detecte une difference entre phase et neutre, un contact entre phase et neutre ne cree pas cette difference, le DDR ne le detecte donc pas");

// ====================================================================================
// SECTION : Le cournant Alternatif
// ====================================================================================

theme("Courant Alternatif (AC)");
debut("Le courant du secteur (maison).");

quest("Quel est le symbole du courant alternatif ?//a");
rep("[ ] DC");
rep("[x] AC (ou une sinusoïde ~)");
rep("[ ] + / -");
faux("Le symbole AC signifie alternating current, c'est le courant qui change periodiquement de sens, souvent represente par une sinusoide");

quest("En France, quelle est la fréquence du courant alternatif domestique ?//a");
rep("[ ] 20 Hz");
rep("[x] 50 Hz");
rep("[ ] 60 Hz");
rep("[ ] 230 Hz");
faux("En France et dans la plupart des pays europeens, le reseau electrique domestique fonctionne a une frequence de 50 hertz");

quest("Comment appelle-t-on la courbe représentative du courant alternatif ?//a");
rep("[ ] Une droite");
rep("[ ] Une parabole");
rep("[x] Une sinusoïde");
faux("Le courant alternatif varie dans le temps en suivant une courbe en forme de sinusoide");

// ====================================================================================
// SECTION : Electricité et rôles des appareillages
// ====================================================================================

theme("Les différents appareils électriques");

quest("APP01 : Pour changer le sens de rotation d'un moteur triphasé ://a");
rep("[ ] l'équiper d'un condensateur");
rep("[x] inverser deux phases");
rep("[ ] utiliser le branchement étoile-triangle");
rep("[ ] alimenter en 240 V");
juste("Bien joué ! Inverser deux phases suffit a inverser le sens du champ tournant et donc le sens de rotation du moteur.");
faux("Pour inverser le sens de rotation d'un moteur triphase, il suffit d'inverser deux des trois phases d'alimentation");

quest("APP02 : La BTA (basse tension), en courant alternatif, correspond aux tensions ://a");
rep("[ ] 500 - 1 000 V");
rep("[ ] 0 - 50 V");
rep("[ ] 50 - 500 V");
rep("[x] 0 - 1 000 V");
faux("La basse tension alternative BTA correspond a la plage de tensions allant de 0 a 1000 volts");

quest("APP03 : La caractéristique principale d'un condensateur se mesure en ://a");
rep("[ ] ohm");
rep("[ ] watt");
rep("[x] farad");
rep("[ ] volt");
faux("La capacite d'un condensateur se mesure en farad, unite notee F");

quest("APP04 : Un moteur électrique triphasé plaqué 380 V et alimenté en 240 V ://a");
rep("[ ] grillera");
rep("[ ] est un moteur à démarrage étoile-triangle");
rep("[ ] tournera en sens inverse");
rep("[x] tournera plus lentement");
faux("Un moteur triphase alimente a une tension inferieure a sa tension plaquee recoit moins de flux magnetique et tourne donc plus lentement");

quest("APP05 : L'unité de mesure de la puissance est le ://a");
rep("[x] watt (W)");
rep("[ ] ohm (Ω)");
faux("Le watt est l'unite de mesure de la puissance electrique");

quest("APP06 : Un relais thermique se règle...//a");
rep("[ ] à 0,9 fois l'intensité plaquée sur le moteur");
rep("[x] à 1 fois l'intensité plaquée sur le moteur");
rep("[ ] à 1,1 fois l'intensité plaquée sur le moteur");
rep("[ ] à 1,2 fois l'intensité plaquée sur le moteur");
faux("Un relais thermique doit etre regle a la valeur de l'intensite nominale indiquee sur la plaque signaletique du moteur, soit 1 fois cette valeur");

quest("APP07 : La puissance absorbée d'un moteur triphasé est déterminée par la formule ://a");
rep("[x] P = 3.U.I.cos φ");
rep("[ ] P = 2.U.I.cos φ");
rep("[ ] P = U.I");
faux("La puissance absorbee par un moteur triphase se calcule avec la formule P egal 3 fois U fois I fois le cosinus phi");

quest("APP08 : La puissance absorbée d'une résistance est ://a");
rep("[x] P = U.I");
rep("[ ] P = 3.U.I.cos φ");
rep("[ ] P = 2.U.I.cos φ");
faux("Pour une resistance pure, la puissance absorbee est simplement le produit de la tension par l'intensite, P egal U fois I");

quest("APP09 : La résistance équivalente de trois résistances en série est ://a");
rep("[ ] Réq =1/R1 + 1/R2 + 1/R3");
rep("[x] Réq = R1 + R2 + R3");
rep("[ ] 1/Réq =1/R1 +1/R2 +1/R3");
faux("En serie, les resistances s'additionnent simplement pour donner la resistance equivalente totale");

quest("APP10 : La résistance équivalente de trois résistances en parallèle est ://a");
rep("[ ] Réq =1/R1 + 1/R2 + 1/R3");
rep("[ ] Réq = R1 + R2 + R3");
rep("[x] 1/Réq =1/R1 +1/R2 +1/R3");
faux("En parallele, l'inverse de la resistance equivalente est egal a la somme des inverses de chaque resistance");

quest("APP11 : Une armoire électrique est alimentée par trois phases (3 x 400 V) et un neutre. Donc ://a");
rep("[x] la tension composée est 400 V");
rep("[x] la tension simple est 230 V");
rep("[ ] la tension composée est 230 V");
rep("[ ] la tension simple est 400 V");
faux("Dans un reseau triphase 400 volts, la tension entre deux phases, dite composee, vaut 400 volts, tandis que la tension entre une phase et le neutre, dite simple, vaut 230 volts");

quest("APP12 : La loi d'Ohm s'écrit ://a");
rep("[x] U = R . I");
rep("[ ] I = R . U");
rep("[ ] R = U . I");
faux("La loi d'Ohm s'exprime par la relation U egal R multiplie par I");

quest("APP13 : Une surcharge électrique peut être due à ://a");
rep("[ ] deux phases qui se touchent");
rep("[x] un moteur bloqué");
rep("[x] un moteur ralenti par un frottement");
rep("[x] un moteur au démarrage");
rep("[ ] une phase et un neutre qui se touchent");
faux("Une surcharge survient quand le moteur demande plus de courant que prevu, ce qui arrive s'il est bloque, ralenti par un frottement ou en phase de demarrage");

quest("APP14 : Un court-circuit électrique peut être due à ://a");
rep("[x] deux phases qui se touchent");
rep("[ ] un moteur bloqué");
rep("[x] une phase et un neutre qui se touchent");
rep("[ ] un moteur au démarrage");
faux("Un court circuit se produit lorsque deux conducteurs normalement isoles, comme deux phases ou une phase et le neutre, entrent directement en contact");

quest("APP15 : L'isolement d'un moteur se mesure à l'aide de ://a");
rep("[ ] ampèremètre");
rep("[ ] voltmètre");
rep("[x] mégohmmètre");
rep("[ ] pince-ampèremétrique");
faux("Le megohmmetre est l'appareil specifiquement concu pour mesurer la resistance d'isolement d'un moteur, qui est tres elevee");

quest("APP16 : L'ohmmètre s'utilise toujours sur un circuit sous tension.//a");
rep("[ ] vrai");
rep("[x] faux");
faux("Un ohmmetre ne doit jamais etre utilise sur un circuit sous tension car il envoie lui meme un courant de mesure et pourrait etre endommage");

quest("APP17 : Pour un moteur triphasé, le démarrage étoile-triangle a pour but de ://a");
rep("[x] diminuer le couple de démarrage");
rep("[x] ne pas brusquer le moteur");
rep("[x] diminuer l'intensité du courant de démarrage");
rep("[x] d'éviter l'échauffement au démarrage");
faux("Le demarrage etoile triangle reduit la tension puis le courant appliques au moteur au demarrage, ce qui diminue le couple et l'intensite, menage le moteur et limite l'echauffement");

quest("APP18 : Le courant qui se dirige de la charge négative vers la charge positive est le courant ://a");
rep("[ ] magnétique");
rep("[ ] alternatif");
rep("[ ] conventionnel");
rep("[x] électronique");
faux("Le sens reel de deplacement des electrons, de la charge negative vers la charge positive, est appele sens du courant electronique, oppose au sens conventionnel");

quest("APP19 : Lorsqu'un courant traverse un fil conducteur, il crée autour de celui-ci ://a");
rep("[ ] une différence de potentiel");
rep("[ ] un électro-aimant");
rep("[x] un champ magnétique");
rep("[ ] un spectre magnétique");
faux("Tout courant electrique qui traverse un conducteur genere autour de lui un champ magnetique, c'est le principe de l'electromagnetisme");

quest("APP20 : Quand deux fils conducteurs sous tension, mais non isolés, sont en contact, il y a ://a");
rep("[ ] un circuit ouvert");
rep("[ ] un coupe-circuit");
rep("[ ] une chute de tension");
rep("[x] un court-circuit");
faux("Lorsque deux conducteurs sous tension et non isoles se touchent, le courant trouve un chemin de tres faible resistance, c'est un court circuit");

quest("APP21 : Sur un circuit électrique, la surcharge déclenche ://a");
rep("[ ] un disjoncteur magnétique");
rep("[ ] un disjoncteur différentiel");
rep("[ ] un sectionneur");
rep("[x] un disjoncteur thermique");
faux("Le declencheur thermique d'un disjoncteur reagit a une elevation progressive du courant typique d'une surcharge");

quest("APP22 : Sur un circuit électrique, le court-circuit déclenche ://a");
rep("[ ] un sectionneur");
rep("[ ] un disjoncteur thermique");
rep("[x] un disjoncteur magnétique");
rep("[ ] un disjoncteur différentiel");
faux("Le declencheur magnetique d'un disjoncteur reagit tres rapidement a la forte augmentation de courant typique d'un court circuit");

quest("APP23 : Pour effectuer une mesure, l'ampèremètre se branche en série sur un circuit électrique.//a");
rep("[x] vrai");
rep("[ ] faux");
faux("L'amperemetre doit etre insere en serie dans le circuit pour que tout le courant le traverse et puisse etre mesure");

quest("APP24 : Pour effectuer une mesure, le voltmètre se branche en série sur un circuit électrique.//a");
rep("[ ] vrai");
rep("[x] faux");
faux("Le voltmetre se branche toujours en parallele aux bornes du composant, et non en serie");

quest("APP25 : Sur un contacteur, lorsqu'on alimente la bobine, le contact 13-14...//a");
rep("[ ] s'ouvre");
rep("[x] se ferme");
rep("[ ] reste dans sa position de repos");
faux("Le repere 13-14 designe generalement un contact normalement ouvert qui se ferme lorsque la bobine du contacteur est alimentee");

quest("APP26 : Un relais thermique protège...//a");
rep("[ ] l'installation des court-circuits");
rep("[ ] un moteur des court-circuits");
rep("[x] un moteur des surcharges");
faux("Le relais thermique est specifiquement destine a proteger le moteur contre les surcharges, pas contre les courts-circuits");

quest("APP27 : Sur un moteur monophasé, si la résistance entre le commun et l'auxiliaire tend vers l'infini, alors,//a");
rep("[x] le moteur ne démarrera pas");
rep("[ ] la résistance entre le commun et le principal est également nulle");
rep("[ ] le moteur peut démarrer");
faux("Si la resistance entre le commun et l'auxiliaire tend vers l'infini, cela signifie que l'enroulement auxiliaire est coupe, le moteur ne pourra donc pas demarrer");

quest("APP28 : Sur un moteur monophasé, si la résistance entre la terre et l'auxiliaire tend vers 0 (zéro), alors,//a");
rep("[ ] l'isolement est correct");
rep("[x] il y a un défaut d'isolement");
faux("Une resistance proche de zero entre un enroulement et la terre indique un defaut d'isolement du bobinage");

quest("APP29 : Parmi ces classes de fusibles, laquelle a un temps de fusion plus rapide ://a");
rep("[ ] Classe aM");
rep("[x] Classe uR");
faux("Les fusibles de type ultra rapide, notes uR, ont un temps de fusion plus court que les fusibles de type aM destines a l'accompagnement moteur");

quest("APP30 : Un sectionneur a un pouvoir de coupure ://a");
rep("[ ] Vrai");
rep("[x] Faux");
faux("Un sectionneur ne possede pas de pouvoir de coupure, il ne doit jamais etre manoeuvre en charge, contrairement a un disjoncteur ou un contacteur");

quest("APP31 : Que risque-t-on si on manœuvre un sectionneur en charge ://a");
rep("[x] Arc électrique et explosion");
rep("[ ] Rien");
faux("Comme le sectionneur n'a pas de pouvoir de coupure, l'ouvrir alors qu'il est traverse par un courant provoque un arc electrique dangereux");

quest("APP32 : Un contacteur a un pouvoir de coupure ://a");
rep("[x] Vrai");
rep("[ ] Faux");
faux("Contrairement au sectionneur, le contacteur est concu pour etablir et couper un courant, il possede donc un pouvoir de coupure");

quest("APP33 : Un relais thermique n’a pas de pouvoir de coupure ://a");
rep("[x] Vrai");
rep("[ ] Faux");
faux("Le relais thermique detecte seulement la surcharge, c'est le contacteur associe qui coupe reellement le circuit, le relais seul n'a pas de pouvoir de coupure");

quest("APP34 : Un disjoncteur différentiel permet de protéger ://a");
rep("[ ] Contre les surcharges");
rep("[x] Contre les défauts d’isolement");
faux("Le disjoncteur differentiel est concu pour detecter et proteger contre les defauts d'isolement, pas contre les surcharges");

quest("APP35 : Parmi les dispositifs suivants, lequel possède des contacts de précoupure ://a");
rep("[ ] Disjoncteur");
rep("[x] Sectionneur");
faux("Certains sectionneurs disposent de contacts de precoupure qui s'ouvrent legerement avant les contacts principaux pour limiter les arcs");

quest("APP36 : Quel est l’avantage d’une machine triphasée par rapport à une machine monophasée ://a");
rep("[ ] Une machine triphasée a une puissance 50 % supérieure");
rep("[ ] Une machine triphasée a trois phases");
rep("[x] Une machine triphasée consomme moins de courant");
faux("A puissance egale, une machine triphasee consomme moins de courant par phase qu'une machine monophasee equivalente");

quest("APP37 : Quel est le composant représenté sur l’image ://a");
rep("[ ] Un contacteur");
rep("[ ] Un relais");
rep("[ ] Un contacteur auxiliaire");

quest("APP38 : À quoi sert le composant représenté sur l’image ://a");
rep("[ ] Il permet de mesurer la température d’un moteur");
rep("[x] Il permet de protéger contre les surcharges");
rep("[ ] Il permet d’augmenter la vitesse d’un moteur");
faux("Ce type de composant est un relais thermique, il sert a proteger un moteur contre les surcharges en coupant l'alimentation si le courant devient trop eleve trop longtemps");

quest("APP39 : Lorsque je veux tester un appareil dont je ne suis pas sûr qu’il est bien isolé, que dois-je utiliser ://a");
rep("[x] Un transformateur d’isolement");
rep("[ ] Un ensemble fusible + porte-fusible");
rep("[ ] Un relais");
faux("Un transformateur d'isolement separe galvaniquement l'appareil du reseau, ce qui permet de le tester en toute securite meme si son isolement est douteux");

quest("APP40 : Quel est le rôle d’un contacteur tripolaire ://a");
rep("[ ] Protéger le moteur contre les surchauffes");
rep("[ ] Augmenter le rendement du moteur");
rep("[x] Mettre sous tension les enroulements du moteur");
faux("Le role d'un contacteur tripolaire est de mettre sous tension ou de couper l'alimentation des trois enroulements du moteur");

quest("APP41 : Quel est le composant qui permet d’isoler un circuit afin d’effectuer des opérations de maintenance ://a");
rep("[ ] Contacteur auxiliaire");
rep("[x] Sectionneur");
rep("[ ] Disjoncteur");
faux("Le sectionneur permet d'isoler visuellement et physiquement un circuit afin de travailler en toute securite lors d'une operation de maintenance");

quest("APP42 : Quel est le rôle d’un relais thermique ://a");
rep("[ ] Protéger le moteur contre les emballements");
rep("[ ] Protéger le moteur contre les courts-circuits");
rep("[x] Protéger le moteur contre les surcharges");
faux("Le relais thermique surveille le courant absorbe par le moteur et le protege contre les surcharges prolongees");

quest("APP43 : Qu’est-ce qu’un transformateur ://a");
rep("[ ] Une machine qui transforme le courant en tension");
rep("[ ] Une machine qui transforme un courant alternatif en courant continu");
rep("[x] Une machine qui transforme une tension alternative U1 en une autre tension alternative U2");
faux("Un transformateur modifie une tension alternative d'entree U1 en une autre tension alternative de sortie U2, sans changer la frequence");

quest("APP44 : Pour tester la bobine d’un contacteur, on utilise ://a");
rep("[ ] Un ampèremètre");
rep("[x] Un ohmètre");
faux("Pour verifier l'etat d'une bobine de contacteur, on mesure sa resistance avec un ohmmetre");

quest("APP45 : L’excitation de la bobine d’un contacteur possédant un contact NO entraîne ://a");
rep("[ ] L’ouverture de celui-ci");
rep("[x] La fermeture de celui-ci");
faux("Un contact note NO, normalement ouvert, se ferme lorsque la bobine du contacteur est excitee");

quest("APP46 : Comment nomme-t-on usuellement un contacteur ://a");
rep("[ ] KS");
rep("[x] KM");
rep("[ ] KA");
faux("Dans les schemas electriques, un contacteur est generalement repere par les lettres KM");

quest("APP47 : Comment nomme-t-on usuellement un contacteur auxiliaire ://a");
rep("[ ] KV");
rep("[ ] KM");
rep("[x] KA");
faux("Un contacteur auxiliaire est generalement repere par les lettres KA dans les schemas electriques");

quest("APP48 : Quel composant permet de protéger un moteur contre les courts-circuits ://a");
rep("[ ] Le relais thermique");
rep("[ ] Le contacteur");
rep("[x] Le disjoncteur moteur");
rep("[ ] Le transformateur");
faux("Le disjoncteur moteur est concu pour couper rapidement le circuit en cas de court circuit, contrairement au relais thermique qui gere les surcharges");

quest("APP49 : Le symbole suivant représente ://a");
rep("[ ] Un contact NO");
rep("[ ] Un contact NF");
rep("[ ] Une bobine");
rep("[ ] Un fusible");

quest("APP50 : La fonction d’un contact NF est ://a");
rep("[x] De s’ouvrir lors de l’excitation");
rep("[ ] De rester ouvert en permanence");
rep("[ ] De se fermer lors de l’excitation");
rep("[ ] De laisser passer l’alternatif uniquement");
faux("Un contact NF, normalement ferme, s'ouvre lorsque la bobine associee est excitee, c'est l'inverse d'un contact NO");

quest("APP51 : Dans un schéma électrique, la commande se trouve généralement ://a");
rep("[ ] En bas");
rep("[ ] À gauche");
rep("[x] En haut");
rep("[ ] À droite");
faux("Par convention, dans un schema electrique, la partie commande est generalement representee en haut et la partie puissance en bas");

quest("APP52 : Un transformateur élévateur ://a");
rep("[ ] Diminue la tension");
rep("[x] Augmente la tension");
rep("[ ] Ne modifie pas la tension");
rep("[ ] Transforme AC en DC");
faux("Un transformateur elevateur possede plus de spires au secondaire qu'au primaire, ce qui augmente la tension de sortie");

quest("APP53 : Sur un moteur triphasé, l’inversion de deux phases provoque ://a");
rep("[ ] L’arrêt instantané");
rep("[ ] L’augmentation du couple");
rep("[x] L’inversion du sens de rotation");
rep("[ ] Une surintensité systématique");
faux("Inverser deux des trois phases d'alimentation d'un moteur triphase inverse le sens du champ tournant et donc le sens de rotation");

quest("APP54 : Lorsque le relais thermique déclenche ://a");
rep("[ ] Le moteur continue de tourner");
rep("[x] Le contacteur s’ouvre");
rep("[ ] Le disjoncteur saute");
rep("[ ] Rien ne se passe");
faux("Quand le relais thermique detecte une surcharge, il ouvre son contact qui coupe l'alimentation de la bobine du contacteur, celui ci s'ouvre alors");

quest("APP55 : Le courant alternatif est caractérisé par ://a");
rep("[ ] Une tension constante dans le temps");
rep("[x] Une tension variable périodiquement");
rep("[ ] Une tension nulle en permanence");
rep("[ ] Une tension exclusivement positive");
faux("Le courant alternatif se caracterise par une tension qui varie dans le temps de facon periodique, contrairement au courant continu");

quest("APP56 : Sur un schéma, la bobine d’un contacteur est représentée par ://a");
rep("[ ] Deux traits parallèles");
rep("[ ] Un rectangle");
rep("[x] Une spirale ou un symbole de bobine");
rep("[ ] Un triangle");
faux("Sur les schemas electriques, la bobine d'un contacteur est generalement symbolisee par une spirale ou un symbole dedie");

quest("APP57 : Quelle est la valeur de la fréquence du réseau électrique en Europe ://a");
rep("[ ] 230 Hz");
rep("[ ] 60 Hz");
rep("[x] 50 Hz");
rep("[ ] 12 Hz");
faux("En Europe, le reseau electrique fonctionne a une frequence standard de 50 hertz");

quest("APP58 : La fonction principale d’un disjoncteur est ://a");
rep("[ ] Mesurer la tension");
rep("[ ] Mesurer le courant");
rep("[x] Protéger contre les surcharges et les courts-circuits");
rep("[ ] Démarrer un moteur");
faux("Un disjoncteur combine generalement une protection thermique contre les surcharges et une protection magnetique contre les courts-circuits");

quest("APP59 : Dans un câblage industriel, la couleur standard du fil de neutre est ://a");
rep("[ ] Vert/jaune");
rep("[ ] Noir");
rep("[x] Bleu clair");
rep("[ ] Rouge");
faux("Dans un cablage industriel, le conducteur de neutre est identifie par la couleur bleu clair");

quest("APP60 : La valeur de la tension monophasée en Europe est ://a");
rep("[x] 230 V");
rep("[ ] 110 V");
rep("[ ] 400 V");
rep("[ ] 24 V");
faux("La tension standard du reseau monophase en Europe est de 230 volts");

quest("APP61 : Comment nomme-t-on usuellement un bornier ://a");
rep("[ ] Y");
rep("[x] X");
rep("[ ] Z");
faux("Dans les schemas electriques, un bornier est generalement repere par la lettre X");

quest("APP62 : Comment nomme-t-on usuellement un relais thermique ://a");
rep("[ ] R");
rep("[ ] Q");
rep("[x] F");
faux("Un relais thermique est generalement repere par la lettre F dans les schemas electriques");

quest("APP63 : Comment nomme-t-on usuellement un sectionneur ://a");
rep("[ ] F");
rep("[x] Q");
rep("[ ] S");
faux("Un sectionneur est generalement repere par la lettre Q dans les schemas electriques");

quest("APP64 : Comment nomme-t-on usuellement un voyant ://a");
rep("[ ] V");
rep("[x] H");
rep("[ ] Y");
faux("Un voyant lumineux est generalement repere par la lettre H dans les schemas electriques");

quest("APP65 : Quel mode de démarrage est représenté sur l’image ://a");
rep("[ ] Démarrage direct 2 sens de marche");
rep("[ ] Démarrage étoile-triangle");
rep("[ ] Démarrage direct 1 sens de marche");

quest("APP66 : Un voyant est un élément de ://a");
rep("[ ] La partie puissance");
rep("[x] La partie commande");
faux("Un voyant fait partie de la partie commande du schema, il sert a informer l'operateur sans participer a la puissance");

quest("APP67 : Quel est le composant électrique représenté sur l'image ?//a");
rep("[ ] Contacteur");
rep("[ ] Bloc de contacts auxiliaires");
rep("[ ] Relais");

quest("APP68 : Quel est le composant représenté sur l'image ?//a");
rep("[ ] Capteur photo-électrique");
rep("[ ] Fin de course");
rep("[ ] Capteur électromagnétique");

quest("APP69 : Quel est le composant représenté sur l'image ?//a");
rep("[ ] Bloc temporisé de repos");
rep("[ ] Bloc temporisé de travail");

quest("APP70 : En démarrage direct 2 sens de marche, quelle technique permet de protéger le circuit de puissance contre les courts-circuits et l’activation simultanée des contacteurs KM1 et KM2 ://a");
rep("[ ] Le disjoncteur");
rep("[x] Le verrouillage mécanique");
faux("Le verrouillage mecanique empeche physiquement les deux contacteurs KM1 et KM2 de se fermer en meme temps, evitant ainsi un court circuit entre les deux sens de marche");

quest("APP71 : Dans le démarrage étoile-triangle, le contacteur de ligne sert à ://a");
rep("[ ] Coupler le moteur en triangle");
rep("[ ] Coupler le moteur en étoile");
rep("[x] Commander le moteur");
faux("Dans un demarrage etoile triangle, le contacteur de ligne reste ferme pendant tout le fonctionnement pour commander la mise sous tension du moteur");

quest("APP72 : À quel circuit appartiennent les composants suivants : sectionneur, disjoncteur, relais thermique ://a");
rep("[x] Circuit de puissance");
rep("[ ] Circuit de commande");
faux("Ces composants sont traverses par le courant qui alimente le moteur, ils appartiennent donc au circuit de puissance");

quest("APP73 : Parmi les dispositifs suivants, lequel possède des contacts de précoupure ?//a");
rep("[ ] Disjoncteur");
rep("[x] Sectionneur");
faux("Certains sectionneurs disposent de contacts de precoupure qui s'ouvrent legerement avant les contacts principaux pour limiter les arcs");

quest("APP74 : Quel est le rôle principal d’un sectionneur ://a");
rep("[x] Isoler le circuit électrique en aval");
rep("[ ] Protéger contre les surintensités");
rep("[ ] Protéger les composants électriques contre les surchauffes");
faux("Le role principal du sectionneur est d'isoler electriquement le circuit situe en aval pour permettre des interventions en toute securite");

quest("APP75 : Un relais thermique permet de ://a");
rep("[x] Protéger un moteur contre les surchauffes");
rep("[ ] Mesurer la température d’un moteur");
faux("Le relais thermique surveille l'echauffement du moteur du a une surcharge et coupe le circuit avant que cela ne devienne dangereux");

quest("APP76 : Lequel protège un moteur électrique contre les surcharges ://a");
rep("[ ] Sectionneur");
rep("[ ] Contacteur");
rep("[x] Relais thermique");
faux("Parmi ces composants, seul le relais thermique est concu pour detecter et proteger specifiquement contre les surcharges");

quest("APP77 : Quel est le composant représenté sur l’image ://a");
rep("[x] Un contacteur");
rep("[ ] Un relais");
rep("[ ] Un disjoncteur magnéto-thermique");
aj("images/APP77.png");
faux("Ce composant est un contacteur, il permet d'etablir ou de couper l'alimentation d'un circuit de puissance a distance grace a sa bobine");

quest("APP78 : À quoi sert le composant représenté sur l’image ://a");
rep("[ ] Il permet de mesurer la température d’un moteur");
rep("[x] Il permet de protéger contre les surcharges");
rep("[ ] Il permet d’augmenter la vitesse d’un moteur");
aj("images/APP78.png");
faux("Ce composant est un relais thermique, il protege le moteur contre les surcharges en coupant le circuit si le courant reste trop eleve trop longtemps");

quest("APP79 : Quel mode de démarrage est représenté sur l’image ://a");
rep("[x] Démarrage direct 2 sens de marche");
rep("[ ] Démarrage étoile-triangle");
rep("[ ] Démarrage direct 1 sens de marche");
aj("images/APP79.png");
faux("Ce schema represente un demarrage direct avec deux sens de marche, utilisant deux contacteurs verrouilles mecaniquement");

quest("APP80 : Quel est le composant électrique représenté sur l'image ?//a");
rep("[ ] Contacteur");
rep("[x] Bloc de contacts auxiliaires");
rep("[ ] Relais");
aj("images/APP80.png");
faux("Ce composant est un bloc de contacts auxiliaires qui s'ajoute a un contacteur pour multiplier le nombre de contacts disponibles");

quest("APP81 : Quel est le composant représenté sur l'image ?//a");
rep("[ ] Capteur photo-électrique");
rep("[x] Fin de course");
rep("[ ] Capteur électromagnétique");
aj("images/APP81.png");
faux("Ce composant est un capteur de fin de course, il detecte mecaniquement la position d'un element en mouvement");

quest("APP82 : Quel est le composant représenté sur l'image ?//a");
rep("[ ] Bloc temporisé à l'enclenchement");
rep("[x] Bloc temporisé au déclenchement");
aj("images/APP82.png");
faux("Ce composant est un bloc temporise au declenchement, le changement d'etat du contact intervient avec un retard apres la coupure de la bobine");


// ====================================================================================
// SECTION : Les moteurs triphasés
// ====================================================================================

theme("Les Moteurs Triphasés");
debut("Questions sur le fonctionnement et le câblage des moteurs triphasés.");

quest("Quelle est la fonction principale du stator dans un moteur asynchrone ?");
rep("[x] Transformer l'énergie électrique en énergie magnétique");
rep("[ ] Transformer l'énergie magnétique en énergie mécanique");
rep("[ ] Guider l'arbre moteur par rapport à l'ensemble fixe");
faux("Le stator genere un champ magnetique tournant a partir du courant electrique applique a ses enroulements");

quest("Pourquoi le circuit magnétique est-il constitué d'un empilement de tôles feuilletées ?");
rep("[x] Pour limiter les pertes dues aux courants de Foucault");
rep("[ ] Pour augmenter la puissance mécanique");
rep("[ ] Pour faciliter le refroidissement par air");
faux("Le feuilletage du circuit magnetique en fines toles isolees entre elles limite la circulation des courants de Foucault et donc les pertes par echauffement");

quest("Sur un réseau 400 V triphasé, comment doit-on raccorder un moteur 230 V / 400 V ?");
rep("[ ] En couplage triangle (Δ)");
rep("[x] En couplage étoile (Y)");
rep("[ ] En raccordement direct monophasé");
faux("Sur un reseau 400 volts, un moteur marque 230 400 doit etre couple en etoile pour que chaque enroulement recoive bien sa tension nominale de 230 volts");

quest("Quelle est la formule de la fréquence de rotation (n) du champ tournant ?");
rep("[ ] n = p / f");
rep("[ ] n = U / I");
rep("[x] n = f / p");
faux("La frequence de rotation du champ tournant se calcule en divisant la frequence du reseau par le nombre de paires de poles, n egal f divise par p");

quest("Dans un moteur asynchrone, comment appelle-t-on la différence de vitesse entre le champ tournant et le rotor ?");
rep("[ ] Le déphasage");
rep("[x] Le glissement");
rep("[ ] La réluctance");
faux("Le glissement designe l'ecart entre la vitesse du champ tournant et celle du rotor, caracteristique du moteur asynchrone");

quest("Que se passe-t-il si l'on inverse deux phases à l'alimentation d'un moteur triphasé ?");
rep("[ ] Le moteur s'arrête immédiatement");
rep("[ ] La puissance utile est doublée");
rep("[x] Le sens de rotation s'inverse immédiatement");
faux("Inverser deux phases d'alimentation inverse le sens du champ tournant et donc immediatement le sens de rotation du moteur");

quest("À combien peut s'élever l'intensité de démarrage par rapport au courant nominal ?");
rep("[ ] Elle reste identique");
rep("[ ] Environ 2 fois le courant nominal");
rep("[x] Environ 7 à 8 fois le courant nominal");
faux("Au demarrage direct, un moteur triphase absorbe un courant pouvant atteindre environ 7 a 8 fois son courant nominal");

quest("Quel dispositif protège spécifiquement le moteur contre les surcharges modérées ?");
rep("[x] Le relais thermique");
rep("[ ] Le condensateur de démarrage");
rep("[ ] Le sectionneur");
faux("Le relais thermique est le dispositif adapte pour proteger le moteur contre des surcharges moderees et progressives");


quest("Quel est l'avantage principal du démarrage étoile-triangle ?");
rep("[ ] Augmenter le couple de démarrage");
rep("[x] Réduire le courant au moment du démarrage");
rep("[ ] Faire varier la vitesse de rotation");
faux("Le demarrage etoile triangle commence avec un couplage etoile qui reduit la tension et donc le courant absorbe au demarrage");

quest("Que risque un moteur triphasé alimenté par seulement 2 phases au lieu de 3 ?");
rep("[x] Il va caler et risque de griller définitivement");
rep("[ ] Il passera automatiquement en mode monophasé");
rep("[ ] Il tournera plus vite");
faux("Prive d'une de ses trois phases, le moteur ne peut plus creer un champ tournant correct, il cale et risque de griller faute de pouvoir demarrer correctement");

// ====================================================================================
// SECTION : Synchrone vs Asynchrone
// ====================================================================================

theme("Synchrone vs Asynchrone");
debut("Différences fondamentales entre les technologies synchrones et asynchrones.");

quest("Quelle est la caractéristique principale du rotor d'un moteur synchrone ?");
rep("[ ] Il est constitué de conducteurs en court-circuit");
rep("[x] Il est constitué d'un aimant permanent ou alimenté en CC");
rep("[ ] Il est toujours en bois");
faux("Le rotor d'un moteur synchrone est constitue d'un aimant permanent ou d'un bobinage alimente en courant continu qui cree son propre champ magnetique");

quest("Dans quel type de moteur la vitesse de rotation est-elle strictement égale à la vitesse du champ tournant ?");
rep("[x] Le moteur synchrone");
rep("[ ] Le moteur asynchrone");
rep("[ ] Le moteur universel");
faux("Dans un moteur synchrone, le rotor tourne exactement a la meme vitesse que le champ tournant, d'ou son nom");

quest("Un moteur asynchrone monophasé peut-il démarrer seul sans artifice ?");
rep("[x] Non, il ne crée pas de champ tournant initial");
rep("[ ] Oui, mais seulement dans le sens des aiguilles d'une montre");
rep("[ ] Oui, dès la mise sous tension");
faux("Un moteur asynchrone monophase alimente par une seule phase ne cree pas naturellement de champ tournant, il a besoin d'un dispositif auxiliaire pour demarrer");

quest("À quoi sert le condensateur sur un moteur asynchrone monophasé ?");
rep("[ ] À stocker de l'énergie pour les pannes");
rep("[x] À créer un déphasage pour générer un champ tournant de démarrage");
rep("[ ] À transformer le courant alternatif en continu");
faux("Le condensateur introduit un dephasage dans l'enroulement auxiliaire, ce qui permet de creer un champ tournant au demarrage");

quest("Où utilise-t-on principalement les moteurs à Spires de Frager ?");
rep("[x] Pour les petits appareils comme les ventilateurs ou sèche-cheveux");
rep("[ ] Pour la traction électrique lourde");
rep("[ ] Dans les centrales électriques");
faux("Les moteurs a spires de Frager, simples et peu couteux, sont utilises dans les petits appareils comme les ventilateurs ou seche cheveux");

quest("Quel est l'inconvénient majeur d'un moteur à Spires de Frager ?");
rep("[ ] Il est extrêmement bruyant");
rep("[x] Il possède une puissance très faible et un mauvais rendement");
rep("[ ] Il nécessite une maintenance quotidienne");
faux("Ce type de moteur a un rendement mediocre et ne peut developper qu'une puissance tres limitee");

quest("Quelle est l'application typique d'un petit moteur synchrone monophasé ?");
rep("[x] Les horloges et programmateurs (vitesse constante)");
rep("[ ] Les perceuses à percussion");
rep("[ ] Les compresseurs industriels");
faux("Grace a sa vitesse parfaitement constante, le moteur synchrone monophase est utilise dans les horloges et les programmateurs");

quest("Comment se comporte un moteur synchrone en cas de forte surcharge ?");
rep("[ ] Il glisse de 10%");
rep("[x] Il s'arrête et vibre");
rep("[ ] Il augmente sa vitesse");
faux("Un moteur synchrone ne peut pas glisser, en cas de surcharge trop importante il decroche, s'arrete et vibre");

quest("Lequel est le plus utilisé en industrie pour sa robustesse et son faible coût ?");
rep("[ ] Le moteur synchrone");
rep("[x] Le moteur asynchrone");
rep("[ ] Le moteur universel");
faux("Le moteur asynchrone est le plus repandu dans l'industrie grace a sa robustesse, sa simplicite et son faible cout");

quest("Peut-on changer le sens de rotation d'un moteur à Spires de Frager ?");
rep("[ ] Oui, via un boîtier électronique");
rep("[ ] Oui, en inversant la fiche de courant");
rep("[x] Non, c'est impossible par construction");
faux("Le sens de rotation d'un moteur a spires de Frager est fixe de par sa construction, il ne peut pas etre inverse");

// ====================================================================================
// SECTION : Les moteurs CC et universel
// ====================================================================================

theme("Moteurs CC et Universel");
debut("Moteurs à courant continu, universels et technologies sans balais.");

quest("CC1 - Quel composant permet d'inverser le sens du courant dans un moteur à courant continu ?//a");
rep("[ ] L'inducteur");
rep("[ ] Les paliers");
rep("[ ] Le rotor seul");
rep("[ ] Le stator");
rep("[x] Le collecteur et les balais");
faux("Le collecteur associe aux balais permet d'inverser periodiquement le sens du courant dans les bobines du rotor pour maintenir la rotation");

quest("CC2 - Quel est le principal usage des moteurs à courant continu de faible puissance ?//a");
rep("[ ] Applications industrielles de haute puissance");
rep("[ ] Alimentation de réseaux électriques");
rep("[ ] Transmission de données");
rep("[ ] Conversion d'énergie solaire");
rep("[x] Applications portatives comme les jouets ou brosses à dents");
faux("Les petits moteurs a courant continu sont largement utilises dans les applications portatives comme les jouets ou les brosses a dents electriques");

quest("CC3 - Quel est le principal inconvénient du moteur à courant continu par rapport aux machines asynchrones ?//a");
rep("[ ] Il ne fonctionne qu’en courant alternatif");
rep("[x] Il est moins robuste");
rep("[ ] Il ne peut pas être réversible");
rep("[ ] Il ne peut pas réguler la vitesse");
faux("La presence de balais et de collecteur rend le moteur a courant continu moins robuste et plus sujet a l'usure que le moteur asynchrone");

quest("CC4 - Quelle est la fonction principale du stator dans un moteur à courant continu à aimant permanent ?//a");
rep("[ ] Supporter le rotor mécaniquement");
rep("[x] Créer un flux magnétique fixe");
rep("[ ] Fournir un courant électrique au rotor");
rep("[ ] Inverser le sens du courant");
rep("[ ] Générer un courant alternatif");
faux("Dans un moteur CC a aimant permanent, le stator cree un champ magnetique fixe qui interagit avec le courant du rotor");

quest("CC5 - Quelle est la conséquence d'une pression insuffisante des balais sur le collecteur ?//a");
rep("[ ] Une meilleure conduction électrique");
rep("[ ] Une réduction de la consommation électrique");
rep("[ ] Une usure plus lente des composants");
rep("[ ] Une augmentation de la vitesse de rotation");
rep("[x] La formation d'arcs électriques et des parasites");
faux("Si les balais n'appliquent pas assez de pression sur le collecteur, le contact electrique devient instable, ce qui provoque des arcs et des parasites");

quest("CC6 - Quelle est la principale caractéristique du moteur à courant continu à aimant permanent ?//a");
rep("[ ] Il nécessite une alimentation en courant alternatif");
rep("[x] Il utilise des aimants permanents pour le stator");
rep("[ ] Il fonctionne uniquement avec une excitation à électroaimant");
rep("[ ] Il ne comporte pas de collecteur ni de balais");
rep("[ ] Il ne peut pas être utilisé dans des applications portatives");
faux("Dans ce type de moteur, c'est le stator qui est constitue d'aimants permanents generant un champ magnetique fixe");

quest("CC7 - Quelle relation exprime la puissance mécanique en fonction du couple et de la vitesse de rotation ?//a");
rep("[ ] P = V × I");
rep("[ ] P = R × I²");
rep("[ ] P = U × I");
rep("[ ] P = N × Ø");
rep("[x] P = C × ω");
faux("La puissance mecanique developpee par un moteur est egale au produit du couple par la vitesse angulaire de rotation");

quest("CC8 - Dans un moteur à courant continu à excitation, que peut faire le moteur en mode générateur ?//a");
rep("[ ] Fonctionner sans alimentation extérieure");
rep("[x] Restituer de l’énergie au réseau");
rep("[ ] Ne pas fonctionner en mode générateur");
rep("[ ] Produire un courant alternatif");
rep("[ ] Consommer de l’énergie uniquement");
faux("Entraine mecaniquement au dela de sa vitesse nominale, un moteur CC peut fonctionner en generateur et renvoyer de l'energie vers le reseau");

quest("CC9 - Quel est le rôle du rotor dans un moteur à courant continu ?//a");
rep("[ ] Il sert uniquement de support mécanique");
rep("[x] Il comporte des bobinages qui créent le champ magnétique");
rep("[ ] Il fixe le stator");
rep("[ ] Il ne participe pas au fonctionnement électrique");
rep("[ ] Il génère le flux magnétique fixe");
faux("Le rotor, ou induit, comporte des bobinages parcourus par un courant qui creent le champ magnetique necessaire a la rotation");

quest("CC10 - Quel est l'avantage principal du moteur à courant continu avec variateur électronique ?//a");
rep("[ ] Il ne produit pas de parasites électriques");
rep("[ ] Il est plus robuste que les moteurs asynchrones");
rep("[x] Il offre une large plage de variation de vitesse");
rep("[ ] Il fonctionne sans alimentation électrique");
rep("[ ] Il ne nécessite pas d'entretien");
faux("L'association d'un moteur CC a un variateur electronique permet de faire varier sa vitesse sur une tres large plage");

quest("CC11 - Quelle est la relation correcte entre la tension appliquée au moteur à courant continu et sa vitesse de rotation ?//a");
rep("[ ] La tension n’a aucun effet sur la vitesse");
rep("[ ] Plus la tension est élevée, plus le couple diminue systématiquement");
rep("[x] Une augmentation de la tension entraîne une augmentation de la vitesse de rotation");
rep("[ ] Une baisse de la tension fait augmenter la vitesse");
rep("[ ] La tension ne sert qu’à alimenter les balais et n’influence pas le moteur");
faux("Pour un moteur a courant continu, la vitesse de rotation est globalement proportionnelle a la tension d'alimentation appliquee");

quest("CC12 - Pourquoi un moteur à courant continu possède-t-il un couple de démarrage élevé ?//a");
rep("[ ] Parce que la tension est automatiquement multipliée au démarrage");
rep("[ ] Parce que le stator produit un flux magnétique variable");
rep("[x] Parce que le courant dans l’induit est élevé à basse vitesse");
rep("[ ] Parce que le collecteur supprime totalement les pertes électriques");
rep("[ ] Parce que la vitesse de rotation est maximale au démarrage");
faux("A l'arret, la force contre electromotrice est nulle, ce qui laisse passer un courant tres eleve dans l'induit, produisant un couple de demarrage important");

quest("CC13 - Quel est le rôle principal du collecteur dans un moteur à courant continu ?//a");
rep("[ ] Diminuer la résistance de l’induit");
rep("[x] Assurer la commutation du courant entre les bobines du rotor");
rep("[ ] Réguler la vitesse automatiquement");
rep("[ ] Alimenter directement le stator");
rep("[ ] Transformer le courant continu en courant alternatif");
faux("Le collecteur a pour role d'inverser successivement le courant dans les differentes bobines du rotor au fur et a mesure de sa rotation");

quest("CC14 - Quelle action permet de changer le sens de rotation d’un moteur à courant continu ?//a");
rep("[ ] Changer uniquement la position du stator");
rep("[ ] Inverser les polarités du collecteur");
rep("[ ] Réduire la tension d’alimentation");
rep("[ ] Modifier la fréquence d'alimentation");
rep("[x] Inverser la polarité de l’alimentation du rotor (ou de l’induit)");
faux("Pour changer le sens de rotation d'un moteur CC, il suffit d'inverser la polarite de l'alimentation appliquee au rotor");

quest("CC15 - Quelle est l’influence de la charge mécanique sur la vitesse d’un moteur à courant continu ?//a");
rep("[x] Une augmentation de la charge tend à diminuer la vitesse");
rep("[ ] Une augmentation de la charge augmente la vitesse");
rep("[ ] La charge n’a aucun effet sur la vitesse");
rep("[ ] La charge modifie seulement la tension, pas la vitesse");
rep("[ ] La charge fait varier uniquement la direction du flux magnétique");
faux("Plus la charge mecanique appliquee au moteur est importante, plus sa vitesse de rotation a tendance a diminuer");

quest("CC16 - Pourquoi doit-on entretenir régulièrement les balais d’un moteur à courant continu ?//a");
rep("[ ] Pour augmenter la tension fournie au moteur");
rep("[ ] Pour empêcher le moteur de fonctionner à vide");
rep("[x] Pour limiter l’usure, les arcs électriques et garantir une bonne conduction");
rep("[ ] Pour éliminer le flux magnétique du stator");
rep("[ ] Pour éviter que le moteur tourne trop vite");
faux("Un entretien regulier des balais permet de limiter leur usure, de reduire les arcs electriques et de garantir une bonne conduction du courant");

quest("CC17 - Dans un moteur à courant continu, que se passe-t-il lorsque la vitesse augmente ?//a");
rep("[ ] Le courant dans l’induit augmente systématiquement");
rep("[ ] Le couple augmente proportionnellement");
rep("[ ] La tension d’alimentation diminue automatiquement");
rep("[ ] Le flux magnétique du stator devient variable");
rep("[x] La force contre-électromotrice (f.c.é.m) augmente");
faux("Quand la vitesse de rotation augmente, la force contre electromotrice generee par le moteur augmente egalement");

quest("CC18 - Lorsqu’un moteur à courant continu est bloqué mécaniquement (rotor immobile), que se passe-t-il ?//a");
rep("[ ] La force contre-électromotrice augmente fortement");
rep("[ ] Le moteur continue à tourner à faible vitesse");
rep("[ ] Le couple devient nul et la température diminue");
rep("[x] Le courant dans l’induit devient très élevé et risque d’endommager le moteur");
rep("[ ] Le moteur génère spontanément du courant");
faux("Si le rotor est bloque, la force contre electromotrice reste nulle et le courant dans l'induit devient tres eleve, ce qui risque d'endommager le moteur");

quest("CC19 - Pourquoi appelle-t-on un moteur 'universel' ?//a");
rep("[x] Car il peut fonctionner en courant continu et alternatif");
rep("[ ] Car il possède toutes les protections intégrées");
rep("[ ] Parce qu'il est vendu partout dans le monde");
faux("Un moteur universel est concu pour fonctionner aussi bien en courant continu qu'en courant alternatif, d'ou son nom");

quest("CC20 - Quel composant est responsable de l'inversion du courant dans les bobines d'un moteur CC classique ?//a");
rep("[ ] Le roulement à billes");
rep("[ ] Le stator");
rep("[x] Le collecteur et les balais");
faux("Comme dans tout moteur CC classique, c'est le collecteur associe aux balais qui assure l'inversion du courant dans les bobines du rotor");

quest("CC21 - Quelle est la formule de la force contre-électromotrice (E') d'un moteur CC ?//a");
rep("[ ] E' = U + RI");
rep("[ ] E' = P / I");
rep("[x] E' = U - RI");
faux("La force contre electromotrice se calcule en soustrayant la chute de tension due a la resistance de l'induit a la tension d'alimentation, E prime egal U moins R fois I");

quest("CC22 - Quel est le principal inconvénient des moteurs CC à balais ?//a");
rep("[ ] Ils sont trop silencieux");
rep("[x] L'usure des balais nécessite un entretien régulier");
rep("[ ] Ils ne peuvent pas varier de vitesse");
faux("Le principal inconvenient des moteurs CC a balais est l'usure progressive de ces balais qui necessite un entretien regulier");

quest("CC23 - Quelle est la particularité d'un moteur 'Brushless' ?//a");
rep("[x] Il n'a pas de collecteur ni de balais (commutation électronique)");
rep("[ ] Il utilise des balais en or");
rep("[ ] Il fonctionne sans électricité");
faux("Un moteur brushless remplace le collecteur mecanique et les balais par une commutation electronique pilotee par un variateur");

quest("CC24 - Dans un moteur Brushless, quel élément est généralement le rotor ?//a");
rep("[x] Un ou plusieurs aimants permanents");
rep("[ ] Un noyau de fer doux uniquement");
rep("[ ] Une bobine de cuivre");
faux("Dans un moteur brushless, le rotor est generalement constitue d'un ou plusieurs aimants permanents");

quest("CC25 - À quoi servent les capteurs à effet Hall dans un moteur Brushless ?//a");
rep("[ ] À mesurer la température");
rep("[x] À connaître la position du rotor pour piloter les bobines");
rep("[ ] À protéger contre les courts-circuits");
faux("Les capteurs a effet Hall permettent au variateur electronique de connaitre la position du rotor afin d'alimenter les bobines au bon moment");

quest("CC26 - Quel type de moteur offre la plus grande précision pour le positionnement (ex: imprimante) ?//a");
rep("[ ] Le moteur asynchrone");
rep("[x] Le moteur pas à pas");
rep("[ ] Le moteur universel");
faux("Le moteur pas a pas avance par petits increments precis, ce qui en fait le plus adapte pour des applications de positionnement comme les imprimantes");

quest("CC27 - Que se passe-t-il si un moteur CC est bloqué mécaniquement alors qu'il est sous tension ?//a");
rep("[ ] La tension s'annule");
rep("[x] Le courant devient très élevé et risque d'endommager le moteur");
rep("[ ] Il passe en mode générateur");
faux("Un moteur CC bloque mecaniquement sous tension ne genere plus de force contre electromotrice, le courant devient alors tres eleve et risque de l'endommager");

quest("CC28 - Comment varie la vitesse d'un moteur universel ?//a");
rep("[ ] Elle ne dépend que du nombre de pôles");
rep("[ ] Elle est fixe à 3000 tr/min");
rep("[x] Elle est proportionnelle à la tension d'alimentation");
faux("La vitesse d'un moteur universel varie proportionnellement a la tension d'alimentation qui lui est appliquee");

// ====================================================================================
// SECTION : Le cournat triphasé
// ====================================================================================
theme("La courant triphasé");

quest("TRI01 : Dans un système triphasé, combien de phases différentes sont utilisées ?//a");
rep("[x] 3 phases");
rep("[ ] 1 phase");
rep("[ ] 2 phases");
rep("[ ] 6 phases");
aj("images/TRI1.png");
faux("Un systeme triphase utilise par definition trois phases dephasees entre elles pour transporter l'energie electrique");

quest("TRI02 : Quelle est la tension entre phase et neutre dans un réseau triphasé 230/400 V ?//a");
rep("[x] 230 V");
rep("[ ] 400 V");
rep("[ ] 690 V");
rep("[ ] 110 V");
aj("images/TRI1.png");
faux("Dans un reseau triphase 230 400 volts, la tension mesuree entre une phase et le neutre, dite tension simple, est de 230 volts");

quest("TRI03 : Quelle est la tension entre deux phases dans un réseau triphasé 230/400 V ?//a");
rep("[ ] 230 V");
rep("[x] 400 V");
rep("[ ] 500 V");
rep("[ ] 24 V");
aj("images/TRI1.png");
faux("Dans ce meme reseau, la tension mesuree entre deux phases, dite tension composee, est de 400 volts");

quest("TRI04 : Dans un moteur triphasé, pour changer le sens de rotation, il faut ://a");
rep("[x] Inverser deux phases");
rep("[ ] Ajouter un fusible");
rep("[ ] Supprimer le neutre");
rep("[ ] Ajouter une résistance");
aj("images/TRI1.png");
faux("Comme pour tout moteur triphase, il suffit d'inverser deux des trois phases pour changer son sens de rotation");

quest("TRI05 : Quel appareil permet de protéger un moteur triphasé contre les surcharges ?//a");
rep("[x] Le relais thermique");
rep("[ ] Le contacteur");
rep("[ ] L’interrupteur");
rep("[ ] Le transformateur");
aj("images/TRI1.png");
faux("Le relais thermique est l'appareil charge de proteger le moteur triphase contre les surcharges prolongees");

quest("TRI06 : Le couplage étoile est représenté par le symbole ://a");
rep("[x] Y");
rep("[ ] Δ");
rep("[ ] N");
rep("[ ] T");
aj("images/TRI1.png");
faux("Le couplage etoile est traditionnellement represente par la lettre Y, qui rappelle la forme du montage");

quest("TRI07 : Le couplage triangle est représenté par le symbole ://a");
rep("[ ] Y");
rep("[x] Δ");
rep("[ ] X");
rep("[ ] N");
aj("images/TRI1.png");
faux("Le couplage triangle est traditionnellement represente par le symbole grec delta, qui rappelle la forme du montage");

quest("TRI08 : Quel est l’avantage principal du courant triphasé pour les moteurs ?//a");
rep("[x] Il permet un démarrage plus facile et un meilleur rendement");
rep("[ ] Il supprime le besoin de protection");
rep("[ ] Il réduit la tension à 12 V");
rep("[ ] Il fonctionne sans alimentation");
aj("images/TRI1.png");
faux("Le courant triphase permet generalement un demarrage plus simple et un meilleur rendement des moteurs par rapport au monophase");

quest("TRI09 : Dans un réseau triphasé équilibré, les trois tensions sont décalées de ://a");
rep("[ ] 60°");
rep("[ ] 90°");
rep("[x] 120°");
rep("[ ] 180°");
aj("images/TRI1.png");
faux("Dans un reseau triphase equilibre, les trois tensions sont regulierement dephasees les unes par rapport aux autres de 120 degres");

quest("TRI10 : Quel appareil permet de commander la mise en marche d’un moteur triphasé ?//a");
rep("[x] Le contacteur");
rep("[ ] Le fusible");
rep("[ ] Le transformateur");
rep("[ ] Le sectionneur");
aj("images/TRI1.png");
faux("Le contacteur est l'appareil qui permet d'etablir ou de couper a distance l'alimentation d'un moteur triphase");

quest("TRI11 : Le neutre est généralement de couleur ://a");
rep("[x] Bleu");
rep("[ ] Vert");
rep("[ ] Rouge");
rep("[ ] Noir");
aj("images/TRI1.png");
faux("Par convention, le conducteur de neutre est identifie par la couleur bleue");

quest("TRI12 : Le conducteur de protection (terre) est de couleur ://a");
rep("[x] Vert/jaune");
rep("[ ] Bleu");
rep("[ ] Rouge");
rep("[ ] Noir");
aj("images/TRI1.png");
faux("Le conducteur de protection relie a la terre est identifie par les couleurs vert et jaune, conformement aux normes de securite");

quest("TRI13 : Quel couplage est utilisé pour un moteur 230/400 V alimenté en 400 V ?//a");
rep("[x] Étoile");
rep("[ ] Triangle");
rep("[ ] Série");
rep("[ ] Parallèle");
aj("images/TRI1.png");
faux("Alimente en 400 volts, un moteur marque 230 400 doit etre couple en etoile pour que chaque enroulement ne recoive que 230 volts");

quest("TRI14 : Quel couplage est utilisé pour un moteur 230/400 V alimenté en 230 V triphasé ?//a");
rep("[ ] Étoile");
rep("[x] Triangle");
rep("[ ] Mixte");
rep("[ ] Simple");
aj("images/TRI1.png");
faux("Alimente en 230 volts triphase, ce meme moteur doit etre couple en triangle pour que chaque enroulement recoive bien sa tension nominale de 230 volts");

quest("TRI15 : Un moteur triphasé possède généralement combien de bornes de raccordement ?//a");
rep("[x] 6 bornes");
rep("[ ] 2 bornes");
rep("[ ] 3 bornes");
rep("[ ] 9 bornes");
aj("images/TRI1.png");
faux("Un moteur triphase standard possede generalement six bornes de raccordement correspondant aux extremites des trois enroulements");

quest("TRI16 : Quel appareil coupe automatiquement en cas de court-circuit ?//a");
rep("[x] Le disjoncteur");
rep("[ ] Le contacteur");
rep("[ ] Le relais thermique");
rep("[ ] Le voltmètre");
aj("images/TRI1.png");
faux("Le disjoncteur est l'appareil qui coupe automatiquement l'alimentation en cas de court circuit grace a son declencheur magnetique");

quest("TRI17 : Le relais thermique protège principalement contre ://a");
rep("[x] Les surcharges");
rep("[ ] Les courts-circuits");
rep("[ ] Les fuites à la terre");
rep("[ ] Les baisses de tension");
aj("images/TRI1.png");
faux("Le relais thermique est specifiquement destine a proteger le moteur contre les surcharges, pas contre les courts-circuits");

quest("TRI18 : Que mesure un ampèremètre ?//a");
rep("[x] L’intensité du courant");
rep("[ ] La tension");
rep("[ ] La puissance");
rep("[ ] La fréquence");
aj("images/TRI1.png");
faux("Un amperemetre est l'appareil de mesure specifiquement destine a mesurer l'intensite du courant");

quest("TRI19 : Que mesure un voltmètre ?//a");
rep("[x] La tension");
rep("[ ] L’intensité");
rep("[ ] La résistance");
rep("[ ] La puissance");
aj("images/TRI1.png");
faux("Un voltmetre est l'appareil de mesure specifiquement destine a mesurer une tension electrique");

quest("TRI20 : La fréquence standard du réseau triphasé en Europe est de ://a");
rep("[ ] 25 Hz");
rep("[x] 50 Hz");
rep("[ ] 60 Hz");
rep("[ ] 100 Hz");
aj("images/TRI1.png");
faux("En Europe, le reseau electrique triphase fonctionne, comme le reseau monophase, a une frequence standard de 50 hertz");

// ====================================================================================
// SECTION : La pneumatique
// ====================================================================================
theme("La pneumatique");

quest("PNEU1 : Ce vérin est ://a");
rep("[x] simple effet");
rep("[ ] double effet");
aj("images/PNEU1.png");
faux("Un verin simple effet n'est alimente en air que dans un seul sens, le retour se faisant par un ressort ou par gravite");

quest("PNEU2 : Ce symbole représente un réducteur de débit ://a");
rep("[ ] unidirectionnel");
rep("[x] bidirectionnel");
aj("images/PNEU2.png");
faux("Un reducteur de debit bidirectionnel limite le debit dans les deux sens de circulation de l'air");

quest("PNEU3 : Ce symbole représente ://a");
rep("[x] un silencieux");
rep("[ ] une arrivée d'air comprimé");
rep("[ ] un filtre");
rep("[ ] un manomètre");
rep("[ ] un graisseur d'air");
rep("[ ] un manodétendeur réglable");
aj("images/PNEU3.png");
faux("Un silencieux se monte sur un orifice d'echappement pour reduire le bruit de l'air relache a l'atmosphere");

quest("PNEU4 : Ce symbole représente un distributeur ://a");
rep("[ ] 2 voies - 3 orifices");
rep("[ ] 2 voies - 4 orifices");
rep("[ ] 2 voies - 5 orifices");
rep("[x] 3 voies - 4 orifices");
aj("images/PNEU4.png");
faux("Ce distributeur comporte 3 positions de commutation et 4 orifices de raccordement");

quest("PNEU5 : Ce symbole représente un distributeur ://a");
rep("[ ] monostable (à simple pilotage)");
rep("[x] bistable (à double pilotage)");
aj("images/PNEU5.png");
faux("Un distributeur bistable possede deux pilotages, un pour chaque position, et conserve sa position meme sans alimentation");

quest("PNEU6 : Ce vérin est ://a");
rep("[ ] simple effet");
rep("[x] double effet");
aj("images/PNEU6.png");
faux("Un verin double effet est alimente en air des deux cotes du piston, ce qui permet un controle actif dans les deux sens");

quest("PNEU7 : Ce symbole représente ://a");
rep("[ ] un silencieux");
rep("[ ] une arrivée d'air comprimé");
rep("[ ] un filtre");
rep("[ ] un manomètre");
rep("[ ] un graisseur d'air");
rep("[x] un manodétendeur réglable");
aj("images/PNEU7.png");
faux("Un manodetendeur reglable permet d'ajuster la pression de sortie du reseau d'air comprime grace a une vis de reglage");

quest("PNEU8 : Ce symbole représente un vérin ://a");
rep("[x] simple effet");
rep("[ ] double effet");
aj("images/PNEU8.png");
faux("Ce symbole represente un verin simple effet, alimente en air dans un seul sens");

quest("PNEU9 : Ce symbole représente un distributeur ://a");
rep("[ ] 2 voies - 3 orifices");
rep("[x] 2 voies - 4 orifices");
rep("[ ] 2 voies - 5 orifices");
rep("[ ] 3 voies - 5 orifices");
aj("images/PNEU9.png");
faux("Ce distributeur comporte 2 positions et 4 orifices de raccordement");

quest("PNEU10 : Ce symbole représente ://a");
rep("[ ] un silencieux");
rep("[x] une arrivée d'air comprimé");
rep("[ ] un filtre");
rep("[ ] un manomètre");
rep("[ ] un graisseur d'air");
rep("[ ] un manodétendeur réglable");
aj("images/PNEU10.png");
faux("Ce symbole represente le point d'entree de l'air comprime dans le circuit pneumatique");

quest("PNEU11 : Ce symbole représente un distributeur ://a");
rep("[ ] 2 voies - 3 orifices");
rep("[ ] 2 voies - 4 orifices");
rep("[x] 2 voies - 5 orifices");
rep("[ ] 3 voies - 5 orifices");
aj("images/PNEU11.png");
faux("Ce distributeur comporte 2 positions et 5 orifices de raccordement");

quest("PNEU12 : Ce symbole représente un réducteur de débit ://a");
rep("[x] unidirectionnel");
rep("[ ] bidirectionnel");
aj("images/PNEU12.png");
faux("Un reducteur de debit unidirectionnel ne limite le debit que dans un seul sens, grace a un clapet anti retour integre");

quest("PNEU13 : Ce symbole représente ://a");
rep("[ ] un silencieux");
rep("[ ] une arrivée d'air comprimé");
rep("[ ] un filtre");
rep("[x] un manomètre");
rep("[ ] un graisseur d'air");
rep("[ ] un manodétendeur réglable");
aj("images/PNEU13.png");
faux("Un manometre est un appareil de mesure qui affiche la pression de l'air dans le circuit");

quest("PNEU14 : Ce symbole représente un distributeur ://a");
rep("[ ] à commande pneumatique");
rep("[x] à commande électro - pneumatique");
aj("images/PNEU14.png");
faux("Un distributeur a commande electro pneumatique est pilote par un signal electrique qui actionne un pilotage pneumatique");

quest("PNEU15 : Ce symbole représente un vérin ://a");
rep("[ ] simple effet");
rep("[x] double effet");
aj("images/PNEU15.png");
faux("Ce symbole represente un verin double effet, alimente en air des deux cotes du piston");

quest("PNEU16 : Ce symbole représente un distributeur ://a");
rep("[x] à commande pneumatique");
rep("[ ] à commande électro - pneumatique");
aj("images/PNEU16.png");
faux("Un distributeur a commande pneumatique est pilote directement par un signal d'air comprime, sans intervention electrique");

quest("PNEU17 : Ce symbole représente ://a");
rep("[ ] un silencieux");
rep("[ ] une arrivée d'air comprimé");
rep("[x] un filtre");
rep("[ ] un manomètre");
rep("[ ] un graisseur d'air");
rep("[ ] un manodétendeur réglable");
aj("images/PNEU17.png");
faux("Un filtre retient les impuretes et particules presentes dans l'air comprime avant son utilisation");

quest("PNEU18 : Ce symbole représente ://a");
rep("[ ] un silencieux");
rep("[ ] une arrivée d'air comprimé");
rep("[ ] un filtre");
rep("[ ] un manomètre");
rep("[x] un graisseur d'air");
rep("[ ] un manodétendeur réglable");
aj("images/PNEU18.png");
faux("Un graisseur d'air ajoute une fine brume d'huile dans l'air comprime pour lubrifier les composants pneumatiques");

quest("PNEU19 : Ce symbole représente un distributeur ://a");
rep("[x] monostable (à simple pilotage)");
rep("[ ] bistable (à double pilotage)");
aj("images/PNEU19.png");
faux("Un distributeur monostable ne possede qu'un seul pilotage et revient automatiquement a sa position de repos grace a un ressort");

quest("PNEU20 : Ce symbole représente un distributeur ://a");
rep("[x] 2 voies - 3 orifices");
rep("[ ] 2 voies - 4 orifices");
rep("[ ] 2 voies - 5 orifices");
rep("[ ] 3 voies - 5 orifices");
aj("images/PNEU20.png");
faux("Ce distributeur comporte 2 positions et 3 orifices de raccordement");

quest("PNEU21 : En Pneumatique, NO signifie que l'air comprimé.... Mais en électricité NO signifie ://a");
rep("[x] Que l'air et le courant passe ");
rep("[ ] Que l'air ne passe pas met que le courant ne passe pas");
rep("[ ] Que l'air passe mais le courant ne passe pas ");
rep("[ ] Que l'air ne passe pas mais le courant passe ");
faux("En electricite, un contact NO laisse passer le courant une fois actionne, de la meme facon qu'en pneumatique NO laisse passer l'air une fois actionne");


// ====================================================================================
// SECTION : Les capteurs
// ====================================================================================
theme("Les capteurs");

quest("CAPT1 : Ce codeur incrémental (500 points/tour) tourne à 600 tr/min. Quelle est la fréquence des impulsions de sortie ?//a");
rep("[ ] 300 kHz");
rep("[x] 5 kHz");
rep("[ ] 50 Hz");
aj("images/CAPT1.png");
juste("C'est exact ! Le calcul est : (500 * 600) / 60 = 5000 Hz soit 5 kHz.");
faux("Mauvaise réponse. La formule est f = (N * n) / 60.");

quest("CAPT2 : C'est le symbole d'une thermistance ://a");
rep("[x] à coefficient de température positif (CTP)");
rep("[ ] à coefficient de température négatif (CTN)");
aj("images/CAPT2.png");
juste("Exact, le symbole indique une variation positive de la résistance avec la température.");
faux("Attention au signe de la variation thermique sur le symbole.");

quest("CAPT3 : Ce sont les symboles des capteurs de position (ou de fin de course) ://a");
rep("[x] VRAI");
rep("[ ] FAUX");
aj("images/CAPT3.png");
juste("Correct, ce sont bien les symboles des contacts mécaniques.");
faux("C'est pourtant bien la représentation normalisée de ces capteurs.");

quest("CAPT4 : Ce sont les symboles ://a");
rep("[ ] d'une sonde Pt100");
rep("[x] d'un thermocouple");
aj("images/CAPT4.png");
juste("Exact ! Il s'agit du symbole d'un couple thermoélectrique.");
faux("Non, le symbole de la sonde Pt100 est différent (résistance variable).");

quest("CAPT5 : La constante de vitesse est 0,06 V/tr/min. Pour 30 V, quelle est la vitesse ?//a");
rep("[x] 500 tr/min");
rep("[ ] 1000 tr/min");
rep("[ ] 1500 tr/min");
aj("images/CAPT5.png");
juste("Bien joué ! n = U / K = 30 / 0,06 = 500 tr/min.");
faux("Erreur de calcul. Il faut diviser la tension par la constante K.");

quest("CAPT6 : C'est un capteur ://a");
rep("[ ] de niveau");
rep("[ ] de débit");
rep("[x] de pression");
aj("images/CAPT6.png");
juste("C'est exact, ce symbole représente un capteur de pression (pressostat).");
faux("Regardez bien le symbole, il s'agit d'un capteur de pression.");

quest("CAPT7 : Un thermocouple (plusieurs réponses possibles) ://a");
rep("[x] convertit la température en tension");
rep("[x] est constitué de deux fils de métaux différents");
rep("[x] exploite l'effet Seebeck");
rep("[x] peut être de type J");
rep("[x] peut être de type K");
aj("images/CAPT7.png");
juste("Bravo, vous connaissez parfaitement les propriétés du thermocouple !");
faux("Toutes les affirmations citées sont pourtant correctes pour un thermocouple.");

quest("CAPT8 : C'est un anémomètre à ://a");
rep("[ ] hélice");
rep("[x] godets");
aj("images/CAPT8.png");
juste("Correct, la forme en demi-sphères correspond aux godets.");
faux("L'image montre un système à godets, pas à hélice.");

quest("CAPT9 : C'est ://a");
rep("[ ] un thermocouple");
rep("[x] une thermistance");
aj("images/CAPT9.png");
juste("Exact, c'est un capteur dont la résistance varie avec la température.");
faux("Ce symbole correspond à une thermistance, pas à un thermocouple.");

quest("CAPT10 : Ce sont les symboles d'un ://a");
rep("[ ] capteur magnétique");
rep("[x] thermostat");
rep("[ ] capteur à ultrasons");
aj("images/CAPT10.png");
juste("C'est ça, ce sont des contacts dont l'état dépend de la température.");
faux("Il s'agit du symbole d'un thermostat.");

quest("CAPT11 : Le capteur de distance à ultrasons (plusieurs réponses possibles) ://a");
rep("[x] fonctionne suivant le principe de l'écho");
rep("[x] envoie un signal sonore inaudible");
rep("[x] mesure la durée de l'émission-réception");
rep("[x] utilise la vitesse du son (340 m/s)");
aj("images/CAPT11.png");
juste("Parfait, ce sont les principes fondamentaux de la détection ultrason.");
faux("Toutes ces étapes sont nécessaires au calcul de la distance.");

quest("CAPT12 : C'est un capteur de niveau ://a");
rep("[ ] à ultrasons");
rep("[x] à flotteur");
aj("images/CAPT12.png");
juste("Correct, l'élément mobile monte avec le liquide.");
faux("C'est un capteur mécanique à flotteur.");

quest("CAPT13 : C'est un capteur ://a");
rep("[ ] de niveau");
rep("[x] de débit");
rep("[ ] de pression");
aj("images/CAPT13.png");
juste("Exact, il s'agit d'un débitmètre.");
faux("Le symbole ou l'image indique un capteur de débit.");

quest("CAPT14 : 10 kHz à 3000 tr/min. Quel est le nombre de points par tour ?//a");
rep("[ ] 100");
rep("[x] 200");
rep("[ ] 500");
aj("images/CAPT14.png");
juste("Bravo ! N = (f * 60) / n = (10000 * 60) / 3000 = 200 points/tour.");
faux("Le calcul est : (Fréquence * 60) / Vitesse.");

quest("CAPT15 : Une sonde Pt100 (plusieurs réponses possibles) ://a");
rep("[x] a une résistance de 100 ohms à 0°C");
rep("[x] est constituée de platine");
aj("images/CAPT15.png");
juste("Exact ! Pt pour Platine et 100 pour la valeur à 0°C.");
faux("Rappelez-vous : Pt = Platine et 100 = 100 Ohms à 0°C.");

quest("CAPT16 : 500 pts/tr et 2500 Hz. Quelle est sa vitesse de rotation ?//a");
rep("[x] 300 tr/min");
rep("[ ] 600 tr/min");
rep("[ ] 900 tr/min");
aj("images/CAPT16.png");
juste("Correct ! n = (2500 * 60) / 500 = 300 tr/min.");
faux("Le calcul est : (Fréquence * 60) / N.");

quest("CAPT17 : C'est un disque de codeur ://a");
rep("[x] incrémental (relatif)");
rep("[ ] absolu");
aj("images/CAPT17.png");
juste("Exact, le motif est répétitif sur toute la piste.");
faux("Le motif régulier indique un codeur incrémental.");

quest("CAPT18 : C'est un capteur à effet Hall ://a");
rep("[ ] de tension");
rep("[x] de courant");
aj("images/CAPT18.png");
juste("C'est ça, il mesure l'intensité du courant par induction magnétique.");
faux("Il s'agit ici d'une mesure de courant.");

quest("CAPT19 : C'est une photorésistance ://a");
rep("[x] VRAI");
rep("[ ] FAUX");
aj("images/CAPT19.png");
juste("Exact, c'est le composant qui varie avec l'intensité lumineuse.");
faux("C'est pourtant bien la représentation d'une photorésistance.");

quest("CAPT20 : C'est un capteur à effet Hall ://a");
rep("[x] de tension");
rep("[ ] de courant");
aj("images/CAPT20.png");
juste("Correct, c'est un montage spécifique pour la mesure de tension.");
faux("D'après la solution 20a, il s'agit d'un capteur de tension.");

quest("CAPT21 : Ce sont les symboles des capteurs de proximité ://a");
rep("[ ] Capacitifs");
rep("[x] Inductifs");
aj("images/CAPT21.png");
juste("C'est exact ! La barre horizontale à l'intérieur du symbole représente l'inductance (la bobine).");
faux("Attention, le symbole de la bobine indique qu'il s'agit de capteurs inductifs.");

quest("CAPT22 : Ce sont les symboles des capteurs de position (ou de fin de course) ://a");
rep("[x] VRAI");
rep("[ ] FAUX");
aj("images/CAPT22.png");
juste("Exact, ces symboles représentent des contacts mécaniques NF et NO.");
faux("C'est pourtant bien le symbole de contacts mécaniques de fin de course.");

quest("CAPT23 : C'est une photorésistance (LDR) ://a");
rep("[x] VRAI");
rep("[ ] FAUX");
aj("images/CAPT23.png");
juste("Correct, les flèches symbolisent la lumière frappant la résistance.");
faux("Erreur, le symbole avec les flèches entrantes désigne bien une photorésistance.");

quest("CAPT24 : Un capteur de proximité inductif détecte sans contact ://a");
rep("[x] Des objets métalliques");
rep("[ ] Des objets non métalliques");
aj("images/CAPT24.png");
juste("Exact, l'induction magnétique ne fonctionne qu'avec des matériaux conducteurs.");
faux("Attention, les capteurs inductifs ne détectent que les métaux.");

quest("CAPT25 : C'est le symbole d'une thermistance ://a");
rep("[ ] À coefficient de température positif (CTP)");
rep("[x] À coefficient de température négatif (CTN)");
aj("images/CAPT25.png");
juste("Bien joué, l'indication '-t°' signifie que la résistance diminue quand la température monte.");
faux("L'indication '-t°' sur le symbole précise qu'il s'agit d'une CTN.");

quest("CAPT26 : C'est le symbole d'un ://a");
rep("[x] Capteur magnétique (I.L.S)");
rep("[ ] Thermostat");
rep("[ ] Capteur à ultrasons");
aj("images/CAPT26.png");
juste("Correct, c'est un Interrupteur à Lame Souple sensible aux aimants.");
faux("Il s'agit du symbole d'un capteur sensible au magnétisme.");

quest("CAPT27 : C'est un contact de fin de course à ://a");
rep("[ ] Poussoir");
rep("[x] Galet");
aj("images/CAPT27.png");
juste("Exact, le petit cercle représente le galet facilitant le contact.");
faux("Le symbole du petit cercle indique la présence d'un galet.");

quest("CAPT28 : C'est un disque de codeur ://a");
rep("[x] Incrémental (relatif)");
rep("[ ] Absolu");
aj("images/CAPT28.png");
juste("C'est ça, la piste régulière ne permet que le comptage de pas.");
faux("C'est un codeur incrémental car les motifs sont répétitifs et réguliers.");

quest("CAPT29 : C'est un disque de codeur ://a");
rep("[ ] Incrémental (relatif)");
rep("[x] Absolu");
aj("images/CAPT29.png");
juste("Correct, les secteurs possèdent des codes uniques pour chaque position.");
faux("Le motif complexe permet de connaître la position exacte : c'est un codeur absolu.");

quest("CAPT30 : Ce codeur (500 pts/tr) sort 2500 Hz. Quelle est sa vitesse ?//a");
rep("[x] 300 tr/mn");
rep("[ ] 600 tr/mn");
aj("images/CAPT30.png");
juste("Calcul exact : (2500 * 60) / 500 = 300 tr/mn.");
faux("Le calcul est : (Fréquence * 60) / Nombre de points.");

quest("CAPT31 : Ce codeur (500 pts/tr) tourne à 600 tr/mn. Quelle est la fréquence ?//a");
rep("[ ] 300 kHz");
rep("[x] 5 kHz");
aj("images/CAPT31.png");
juste("Bravo : (500 * 600) / 60 = 5000 Hz, soit 5 kHz.");
faux("La formule est : (Nombre de points * Vitesse) / 60.");

quest("CAPT32 : Tachymétrie : 60V à 1000 tr/mn. Quelle est sa constante K ?//a");
rep("[ ] 0,6 V/tr/mn");
rep("[x] 0,06 V/tr/mn");
aj("images/CAPT32.png");
juste("Exact : 60V / 1000 tr/mn = 0,06 V/tr/mn.");
faux("Il faut diviser la tension par la vitesse : 60 / 1000.");

// ====================================================================================
// SECTION : L'électronique
// ====================================================================================

theme("St laurent : L'électronique ");

quest("electronique1 - Qu’est-ce qu’une variable en programmation Arduino ?://a");
rep("[ ] Une boucle");
rep("[ ] Une fonction");
rep("[x] Un espace mémoire pour stocker une valeur");
rep("[ ] Un capteur");
faux("Une variable est un espace reserve en memoire qui permet de stocker une valeur pouvant etre modifiee pendant le programme");

quest("electronique2 - À quoi sert la fonction void setup() dans Arduino ?://a");
rep("[ ] À répéter le code en boucle");
rep("[x] À initialiser le programme (une seule fois)");
rep("[ ] À arrêter le programme");
rep("[ ] À lire les capteurs");
faux("La fonction void setup s'execute une seule fois au demarrage pour initialiser le programme");

quest("electronique3 - À quoi sert la fonction void loop() dans Arduino ?://a");
rep("[ ] À s’exécuter une seule fois");
rep("[x] À répéter le programme en continu");
rep("[ ] À stocker des variables");
rep("[ ] À compiler le code");
faux("La fonction void loop s'execute en boucle continue tant que la carte est alimentee");

quest("electronique4 - Que fait une boucle for ?://a");
rep("[ ] Exécute une condition une fois");
rep("[x] Répète une action un nombre défini de fois");
rep("[ ] Arrête le programme");
rep("[ ] Crée une variable");
faux("La boucle for permet de repeter une action un nombre de fois determine a l'avance");

quest("electronique5 - Que permet une structure if ?://a");
rep("[ ] Répéter une action");
rep("[x] Tester une condition");
rep("[ ] Créer une boucle infinie");
rep("[ ] Déclarer une variable");
faux("La structure if permet de tester une condition et d'executer un bloc d'instructions seulement si elle est vraie");

quest("electronique6 - Que signifie une condition if (x > 5) ?://a");
rep("[ ] x est égal à 5");
rep("[x] x est supérieur à 5");
rep("[ ] x est inférieur à 5");
rep("[ ] x vaut toujours 5");
faux("Le symbole superieur strict signifie que la condition est vraie uniquement si x est plus grand que 5");

quest("electronique7 - Combien de broches possède généralement une LED RGB ?://a");
rep("[ ] 2");
rep("[ ] 3");
rep("[x] 4");
rep("[ ] 5");
faux("Une LED RGB possede generalement 4 broches, une commune et une pour chaque couleur rouge vert bleu");

quest("electronique8 - Que signifie une boucle infinie ?://a");
rep("[ ] Une boucle qui s’arrête automatiquement");
rep("[x] Une boucle qui ne s’arrête jamais");
rep("[ ] Une boucle exécutée une fois");
rep("[ ] Une boucle inutile");
faux("Une boucle infinie est une boucle dont la condition d'arret n'est jamais remplie, elle s'execute donc indefiniment");

quest("electronique9 - Quelle est l’unité de la tension électrique ?");
rep("[ ] l’ampère");
rep("[x] le volt");
rep("[ ] l’ohm");
faux("Le volt est l'unite de mesure de la tension electrique");

quest("electronique10 - Quelle est l’unité de l’intensité du courant ?");
rep("[x] l’ampère");
rep("[ ] le watt");
rep("[ ] le volt");
faux("L'ampere est l'unite de mesure de l'intensite du courant electrique");

quest("electronique11 - À quoi sert un fusible dans un circuit ?");
rep("[x] à protéger contre les surintensités");
rep("[ ] à augmenter la tension");
rep("[ ] à stocker l’énergie");
faux("Un fusible fond volontairement en cas de courant trop eleve, ce qui coupe le circuit et le protege");

quest("electronique12 - Que se passe-t-il si un circuit est ouvert ?");
rep("[ ] le courant augmente");
rep("[x] le courant ne circule plus");
rep("[ ] la tension disparaît");
faux("Quand un circuit est ouvert, il n'y a plus de chemin continu pour le courant, qui cesse donc de circuler");

quest("electronique13 - Quel matériau est un bon conducteur électrique ?");
rep("[ ] le plastique");
rep("[x] le cuivre");
rep("[ ] le bois");
faux("Le cuivre est un metal qui laisse tres bien passer le courant electrique, c'est un excellent conducteur");

quest("electronique14 - Quelle est la formule de base de la loi d’Ohm ?");
rep("[ ] U = I + R");
rep("[x] U = R × I");
rep("[ ] P = U × I");
faux("La loi d'Ohm relie la tension a la resistance et l'intensite par la relation U egal R fois I");

quest("electronique15 - Que fait un interrupteur dans un circuit ?");
rep("[ ] il augmente le courant");
rep("[x] il ouvre ou ferme le circuit");
rep("[ ] il transforme la tension");
faux("Un interrupteur permet d'etablir ou de couper manuellement la continuite electrique d'un circuit");

quest("electronique16 - Que se passe-t-il si on met deux piles en série ?");
rep("[x] la tension augmente");
rep("[ ] le courant diminue toujours");
rep("[ ] la tension reste la même");
faux("En placant deux piles en serie, leurs tensions s'additionnent, ce qui augmente la tension totale");

quest("electronique17 - Quelle est l’unité de la puissance électrique ?");
rep("[ ] le volt");
rep("[ ] l’ampère");
rep("[x] le watt");
faux("Le watt est l'unite de mesure de la puissance electrique");

quest("electronique18 - Un court-circuit correspond à :");
rep("[x] une résistance très faible dans le circuit");
rep("[ ] une coupure du circuit");
rep("[ ] une tension nulle");
faux("Un court circuit correspond a une liaison de tres faible resistance entre deux points du circuit");

quest("electronique19 - Que se passe-t-il si on touche un fil sous tension ?");
rep("[ ] rien ne se passe");
rep("[x] il y a un risque d’électrocution");
rep("[ ] le courant s’arrête");
faux("Toucher un conducteur sous tension expose le corps a un courant electrique potentiellement dangereux, c'est un risque d'electrocution");

quest("electronique20- Quel composant permet de stocker de l’énergie électrique ?");
rep("[ ] une résistance");
rep("[x] une batterie");
rep("[ ] un interrupteur");
faux("Une batterie est concue pour stocker de l'energie electrique sous forme chimique et la restituer ensuite");

quest("electronique21- En mécanique, à quoi sert un levier ?");
rep("[x] à multiplier une force");
rep("[ ] à réduire la vitesse");
rep("[ ] à stocker de l’électricité");
faux("Un levier permet de multiplier une force appliquee grace a un bras de levier plus long que la resistance");

quest("electronique22 - En électronique, une diode permet :");
rep("[x] de laisser passer le courant dans un seul sens");
rep("[ ] d’augmenter la tension");
rep("[ ] de stocker l’énergie");
faux("Une diode ne laisse circuler le courant que dans un seul sens, appele sens direct");

quest("electronique23 - Si la résistance augmente dans un circuit (tension constante), que fait le courant ?");
rep("[ ] il augmente");
rep("[x] il diminue");
rep("[ ] il ne change pas");
faux("A tension constante, une resistance plus grande limite davantage le passage du courant qui diminue donc");

quest("electronique24 - À quoi sert la terre dans une installation électrique ?");
rep("[x] à protéger les personnes");
rep("[ ] à augmenter la puissance");
rep("[ ] à stocker l’énergie");
faux("La mise a la terre permet d'evacuer un courant de defaut vers le sol, ce qui protege les personnes");

quest("electronique25 - Une lampe qui ne s’allume pas peut être due à :");
rep("[x] une ampoule grillée");
rep("[ ] une tension trop élevée uniquement");
rep("[ ] un excès de courant utile");
faux("Une ampoule grillee a son filament rompu, le circuit est alors coupe et la lampe ne peut plus s'allumer");

quest("electronique26 - En mécanique, la vitesse est :");
rep("[x] une distance parcourue par unité de temps");
rep("[ ] une force appliquée");
rep("[ ] une énergie stockée");
faux("La vitesse represente la distance parcourue divisee par le temps mis pour la parcourir");

quest("electronique27 - Que mesure un voltmètre ?");
rep("[ ] le courant");
rep("[x] la tension");
rep("[ ] la résistance");
faux("Un voltmetre est l'appareil de mesure specifiquement destine a mesurer une tension electrique");

// ====================================================================================
// SECTION : Pannes des systèmes frigorifiques
// ====================================================================================

theme("St Laurent : Pannes des systèmes frigorifiques");
debut("Dépannage commun des systèmes frigorifique.");

quest("P001 - Surchauffe importante, sous-refroidissement faible et BP faible sont les symptôme de :");
rep("[x] manque de fluide frigorigène");
rep("[ ] détendeur déréglé");
rep("[ ] évaporateur encrassé");
rep("[ ] déshydrateur bouché");
faux("Un manque de fluide entraine une surchauffe elevee, un sous refroidissement faible et une BP faible, car il manque de liquide pour alimenter correctement l'evaporateur et le condenseur");

quest("P002 - Surchauffe faible et sous-refroidissement faible sont les symptômes de :");
rep("[ ] clapet de compresseur cassé");
rep("[ ] excès de fluide frigorigène");
rep("[ ] filtre à l'aspiration bouché");
rep("[x] détendeur trop ouvert");
faux("Un detendeur trop ouvert laisse passer trop de liquide, ce qui reduit a la fois la surchauffe et le sous refroidissement");

quest("P003 - BP normale à légèrement haute et HP haute :");
rep("[ ] excès de fluide frigorigène");
rep("[ ] présence d'incondensable");
rep("[x] les deux réponses");
faux("Une BP legerement haute associee a une HP haute peut etre causee aussi bien par un exces de fluide que par des incondensables, les deux symptomes se ressemblant");

quest("P004 - Les symptômes pour un manque de fluide frigorigène sont :");
rep("[x] surchauffe élevée et sous-refroidissement faible");
rep("[ ] surchauffe faible et sous-refroidissement élevé");
rep("[ ] surchauffe faible et sous-refroidissement faible");
rep("[ ] surchauffe élevée et sous-refroidissement élevée");
faux("Le manque de fluide reduit la quantite de liquide au condenseur, ce qui fait chuter le sous refroidissement, et prive l'evaporateur de liquide, ce qui augmente la surchauffe");

quest("P005 - Les symptômes pour un ventilateur de l'évaporateur en panne sont :");
rep("[ ] BP haute");
rep("[x] BP faible");
rep("[ ] HP haute");
rep("[ ] HP faible");
faux("Sans ventilation, moins de chaleur est captee par l'evaporateur, ce qui fait chuter la pression d'evaporation donc la BP");

quest("P006 - La présence d'incondensable dans un circuit frigorifique génère :");
rep("[x] une augmentation de la HP");
rep("[ ] une augmentation de la BP");
rep("[ ] une diminution de la BP");
rep("[ ] une augmentation de la surchauffe");
faux("Les gaz incondensables s'accumulent dans le condenseur et augmentent la pression totale mesuree, donc la HP");

quest("P007 - Un sous-refroidissement qui augmente génère :");
rep("[ ] pas de changement de la production frigorifique");
rep("[x] une augmentation de la production frigorifique");
rep("[ ] une diminution de la production frigorifique");
rep("[ ] une augmentation de la surchauffe");
faux("Un sous refroidissement plus important signifie que le liquide arrive plus froid au detendeur, ce qui augmente l'effet frigorifique utile");

quest("P008 - La surchauffe est la différence entre :");
rep("[ ] température au bulbe et HP");
rep("[ ] BP et HP");
rep("[x] température au bulbe et BP");
rep("[ ] température d'aspiration et BP");
faux("La surchauffe se calcule entre la temperature mesuree au bulbe du detendeur et la temperature de saturation correspondant a la BP");

quest("P009 - Le sous-refroidissement est la différence entre :");
rep("[ ] température de refoulement et HP");
rep("[x] température sortie condenseur et HP");
rep("[ ] BP et HP");
rep("[ ] température au bulbe et BP");
faux("Le sous refroidissement se calcule entre la temperature de saturation correspondant a la HP et la temperature reelle du liquide en sortie de condenseur");

quest("P010 - Le ventilateur en panne d'un condenseur à air provoque :");
rep("[x] une augmentation de la HP");
rep("[x] une augmentation du taux de compression");
rep("[ ] une augmentation du sous-refroidissement");
faux("Sans ventilation, le condenseur evacue moins bien la chaleur, ce qui fait monter la HP et donc le taux de compression");

quest("P011 - La prise en glace d'un évaporateur à air peut être due à :");
rep("[x] BP faible");
rep("[x] système de dégivrage défectueux");
rep("[x] manque de débit d'air à l'évaporateur");
rep("[x] humidité dans la chambre froide");
faux("Une prise en glace de l'evaporateur peut avoir plusieurs origines : une BP trop faible, un degivrage defectueux, un manque de debit d'air ou un exces d'humidite dans l'enceinte");

quest("P012 - Un pompage du détendeur peut être dû à :");
rep("[x] détendeur trop puissant");
rep("[ ] manque de fluide dans l'installation");
rep("[ ] excès de fluide dans l'installation");
rep("[x] détendeur trop ouvert");
faux("Un detendeur trop puissant ou trop ouvert alimente l'evaporateur de maniere instable, ce qui provoque le pompage (hunting)");

quest("P013 - À surchauffe trop élevée correspond, sans aucun doute, à :");
rep("[ ] détendeur trop ouvert");
rep("[ ] excès de fluide dans l'installation");
rep("[x] on ne peut pas diagnostiquer précisément");
rep("[ ] détendeur trop fermé");
faux("Une surchauffe trop elevee peut avoir plusieurs causes possibles, un manque de fluide ou un detendeur trop ferme notamment, on ne peut donc pas diagnostiquer avec certitude une seule cause");

quest("P014 - Sur un détendeur, si le bulbe est percé :");
rep("[x] le détendeur se ferme");
rep("[ ] tout le fluide de l'installation peut être perdu");
rep("[ ] le détendeur s'ouvre");
rep("[ ] excès de fluide dans l'installation");
faux("Si le bulbe est perce, la pression qu'il exercait sur la membrane disparait, ce qui provoque la fermeture du detendeur");

quest("P015 - Des incondensables dans un circuit frigorifique provoque :");
rep("[ ] diminution de la consommation électrique du compresseur");
rep("[ ] augmentation de la surchauffe");
rep("[x] augmentation HP");
rep("[x] augmentation température de refoulement compresseur");
faux("Les incondensables s'accumulent au condenseur et font monter a la fois la HP et la temperature de refoulement du compresseur");

quest("P016 - Des incondensables dans un circuit frigorifique provoque :");
rep("[ ] augmentation de la puissance frigorifique");
rep("[x] augmentation de la consommation électrique du compresseur");
rep("[ ] diminution de la surchauffe");
rep("[x] augmentation de la température de condensation");
faux("La presence d'incondensables oblige le compresseur a travailler davantage, augmentant sa consommation, et fait monter la temperature de condensation");

quest("P017 - Un excès de fluide dans un circuit frigorifique provoque :");
rep("[ ] augmentation de la surchauffe");
rep("[x] augmentation HP");
rep("[ ] diminution de la consommation électrique du compresseur");
rep("[x] augmentation température de refoulement compresseur");
faux("Un exces de fluide remplit excessivement le condenseur, ce qui fait monter la HP et la temperature de refoulement du compresseur");

quest("P018 - Un excès de fluide dans un circuit frigorifique provoque :");
rep("[x] augmentation de la consommation électrique du compresseur");
rep("[x] augmentation de la puissance frigorifique");
rep("[ ] diminution de la surchauffe");
rep("[ ] augmentation de la température de condensation");
faux("Un exces de fluide augmente la charge de travail du compresseur et peut temporairement accroitre la puissance frigorifique avant de degrader le systeme");

quest("P019 - Un manque de fluide dans un circuit frigorifique provoque :");
rep("[x] diminution de la température d'évaporation");
rep("[x] surchauffe importante");
rep("[x] diminution de la température de condensation");
rep("[ ] sous-refroidissement élevé");
faux("Le manque de fluide fait chuter la pression et donc la temperature d'evaporation, augmente fortement la surchauffe et reduit la charge au condenseur, abaissant sa temperature");

quest("P020 - Un manque de fluide dans un circuit frigorifique provoque :");
rep("[ ] surchauffe faible");
rep("[x] diminution de la BP");
rep("[x] sous-refroidissement faible");
rep("[x] puissance frigorifique faible");
faux("Le manque de fluide fait chuter la BP, reduit le sous refroidissement par manque de liquide au condenseur, et diminue la puissance frigorifique disponible");

quest("P021 - Un condenseur à air encrassé provoque :");
rep("[ ] surchauffe élevée");
rep("[x] HP élevée");
rep("[x] diminution du Δt sur l'air (temp. sortie d'air - temp. entrée d'air)");
rep("[x] diminution de la puissance frigorifique");
faux("Un condenseur encrasse evacue moins bien la chaleur, ce qui fait monter la HP, reduit l'echauffement de l'air qui le traverse et diminue la puissance frigorifique globale");

quest("P022 - Voici une installation au R22 et les mesures suivantes (points de mesure entre crochets). BP : -8 °C et HP : 35 °C. [5] : 31 °C et [12] : 0 °C. Qu'en déduisez-vous ?");
rep("[x] sous-refroidissement correcte");
rep("[ ] surchauffe trop élevée");
rep("[ ] sous-refroidissement trop faible");
rep("[x] surchauffe correcte");
aj("images/p022.png");
faux("Avec HP a 35°C et sortie condenseur a 31°C, le sous refroidissement est de 4°C ce qui est correct, et avec BP a -8°C et bulbe a 0°C, la surchauffe est de 8°C ce qui est egalement correct");

quest("P023 - Le sous-refroidissement donne une indication sur :");
rep("[ ] la nature du fluide frigorigène");
rep("[x] la charge en fluide frigorigène");
rep("[ ] le réglage du détendeur");
faux("Le niveau de sous refroidissement est un indicateur direct de la quantite de fluide presente dans le circuit");

quest("P024 - Avec une installation au R134a en fonctionnement normal, la température d'entrée d'air au condenseur est de 20 °C, on aura alors environ :");
rep("[ ] HP de 12 bar");
rep("[x] HP de 8 bar");
rep("[ ] HP de 14 bar");
faux("Pour un condenseur a air au R134a avec 20°C d'air a l'entree, la pression de condensation correspondante est d'environ 8 bar");

quest("P025 - Quelle zone n'appartient pas à l'évaporateur :");
rep("[ ] la surchauffe");
rep("[ ] l'évaporation");
rep("[x] la désurchauffe");
faux("La desurchauffe est une etape qui se produit au debut du condenseur, pas dans l'evaporateur, qui comprend lui la surchauffe et l'evaporation");

quest("P026 - En fonctionnement normal, la surchauffe doit être comprise entre :");
rep("[x] 5 et 8 °C");
rep("[ ] 0 et 4 °C");
rep("[ ] 10 et 15 °C");
faux("En fonctionnement normal avec un detendeur thermostatique, la surchauffe se situe generalement entre 5 et 8 degres Celsius");

quest("P027 - La valeur de la surchauffe dépend du fluide utilisé :");
rep("[ ] vrai");
rep("[x] faux");
faux("La valeur de la surchauffe recommandee ne depend pas du type de fluide utilise, elle reste globalement la meme");

quest("P028 - Si la surchauffe est trop grande, alors on aura :");
rep("[x] une mauvaise puissance frigorifique");
rep("[ ] une BP élevée");
rep("[ ] des risques de coup de liquide");
faux("Une surchauffe excessive signifie qu'une partie de l'evaporateur n'est plus utilisee pour evaporer le liquide, ce qui reduit la puissance frigorifique utile");

quest("P029 - Si la surchauffe est trop grande, on risque :");
rep("[x] d'avoir une température de refoulement trop élevée");
rep("[ ] d'avoir une prédétente");
rep("[ ] d'abimer le détendeur");
faux("Une surchauffe excessive du gaz aspire se traduit directement par une temperature de refoulement plus elevee apres compression");

quest("P030 - L'ensemble de l'installation est bien réglé, sauf la surchauffe qui est trop faible. Alors je ne pourrais jamais avoir :");
rep("[x] une BP faible");
rep("[ ] une mauvaise puissance frigorifique");
rep("[ ] des coups de liquide");
faux("Si seule la surchauffe est trop faible et que tout le reste est bien regle, le detendeur laisse passer suffisamment de liquide, la BP ne peut donc pas etre anormalement faible");

quest("P031 - Si la BP diminue, alors :");
rep("[ ] on piège moins d'eau sur l'évaporateur");
rep("[x] l'humidité relative de la chambre froide diminue");
rep("[ ] la puissance frigorifique augmente");
faux("Quand la BP diminue, la temperature de l'evaporateur baisse, ce qui diminue la capacite de l'air a retenir de l'humidite, l'humidite relative de la chambre diminue donc");

quest("P032 - Si la BP augmente, alors :");
rep("[x] le débit masse augmente");
rep("[ ] la puissance frigorifique diminue");
rep("[ ] la HP diminue");
faux("Une BP plus elevee signifie un gaz aspire plus dense, ce qui augmente le debit massique deplace par le compresseur");

quest("P033 - Si la HP augmente, alors :");
rep("[x] la puissance frigorifique diminue");
rep("[ ] le débit masse augmente");
rep("[ ] la puissance du détendeur diminue");
faux("Une HP plus elevee augmente le taux de compression, ce qui reduit le rendement volumetrique du compresseur et donc la puissance frigorifique");

quest("P034 - Si la HP diminue, alors :");
rep("[ ] la température d'entrée d'air au condenseur a augmenté");
rep("[x] l'intensité absorbée par le moteur du compresseur diminue");
rep("[ ] le débit masse diminue");
faux("Une HP plus basse reduit le travail de compression necessaire, ce qui diminue l'intensite absorbee par le moteur du compresseur");

quest("P035 - Une installation a été prévue pour fonctionner au R134a :");
rep("[ ] impossible de démarrer l'installation sans détendeur au R134a");
rep("[x] un détendeur au R12 fera l'affaire");
faux("Un detendeur initialement prevu pour le R12 peut convenir au R134a car leurs caracteristiques de debit sont suffisamment proches");

quest("P036 - L'installation étant en fonctionnement, que se passe-t-il si on coupe le capillaire du détendeur thermostatique ?");
rep("[ ] une fuite va se déclarer et risquer de vider l'ensemble de l'installation");
rep("[ ] le détendeur va fonctionner sans contrôle de la surchauffe");
rep("[x] le pressostat BP va arrêter le compresseur");
faux("Si le capillaire du bulbe est coupe, le detendeur se ferme completement, la BP chute alors rapidement jusqu'a declencher le pressostat BP qui arrete le compresseur");

quest("P037 - Si l'hélice d'un ventilateur d'évaporateur est bloquée :");
rep("[ ] rien ne se passe");
rep("[x] le thermique du moteur va couper");
rep("[ ] le fusible de protection va fondre");
faux("Si l'helice est bloquee, le moteur du ventilateur ne peut plus tourner et consomme un courant excessif, ce qui declenche sa protection thermique");

// ====================================================================================
// SECTION : La physique du froid
// ====================================================================================

theme("St laurent : La physique du froid");
debut("La physique du froid.");

quest("Q001. - La puissance au condenseur à air est déterminée par la formule :");
rep("[ ] ρ =m/V");
rep("[ ] Δp = ρ.g.h");
rep("[ ] F = m.g");
rep("[x] Φk = K.S.Δθ");
faux("La puissance echangee par un condenseur a air se calcule avec le coefficient d'echange K, la surface S et l'ecart de temperature delta theta");

quest("Q002. - La variation de pression est déterminée par la formule :");
rep("[ ] Φk = K.S.Δθ");
rep("[ ] F = m.g");
rep("[ ] ρ = m/V");
rep("[x] Δp = ρ.g.h");
faux("La variation de pression hydrostatique se calcule a partir de la masse volumique, de l'acceleration de la pesanteur et de la hauteur");

quest("Q003. - La force est déterminée par la formule :");
rep("[x] F = m.g");
rep("[ ] ρ = m/V");
rep("[ ] Δp = ρ.g.h");
rep("[ ] Φk = K.S.Δθ");
faux("La force due a la pesanteur se calcule en multipliant la masse par l'acceleration de la pesanteur g");

quest("Q004. - La masse volumique est déterminée par la formule :");
rep("[x] ρ = m/V");
rep("[ ] Φk = K.S.Δθ");
rep("[ ] F = m.g");
rep("[ ] Δp = ρ.g.h");
faux("La masse volumique se calcule en divisant la masse d'un corps par son volume");

quest("Q005. - La chaleur latente de vaporisation de l'eau est :");
rep("[ ] 334 kJ.kg-1 (autre notation 334 kJ/kg)");
rep("[ ] 4,185 kJ.kg-1.K-1 (autre notation 4,185 kJ/(kg.K) )");
rep("[x] 2 258 kJ.kg-1 (autre notation 2 258 kJ/kg)");
faux("Il faut environ 2258 kilojoules pour vaporiser un kilogramme d'eau a pression atmospherique");

quest("Q006. - La chaleur massique de l'eau liquide est :");
rep("[ ] 2 258 kJ.kg-1 (autre notation 2 258 kJ/kg)");
rep("[ ] 334 kJ.kg-1 (autre notation 334 kJ/kg)");
rep("[x] 4,185 kJ.kg-1.K-1 (autre notation 4,185 kJ/(kg.K) )");
faux("La chaleur massique de l'eau liquide, c'est a dire l'energie necessaire pour elever sa temperature d'un degre, est d'environ 4,185 kJ par kg et par kelvin");

quest("Q007. - La chaleur latente de fusion de la glace est :");
rep("[ ] 4,185 kJ.kg-1.K-1 (autre notation 4,185 kJ/(kg.K) )");
rep("[ ] 2 258 kJ.kg-1 (autre notation 2 258 kJ/kg)");
rep("[x] 334 kJ.kg-1 (autre notation 334 kJ/kg)");
faux("Il faut environ 334 kilojoules pour faire fondre un kilogramme de glace a 0 degre");

quest("Q008. - L'unité de mesure principale de la pression est :");
rep("[ ] le bar (bar)");
rep("[x] le pascal (Pa)");
rep("[ ] le joule (J)");
rep("[ ] le kelvin (K)");
faux("Le pascal est l'unite de mesure principale de la pression dans le systeme international");

quest("Q009. - L'unité de mesure usuelle de la pression est :");
rep("[ ] le joule (J)");
rep("[ ] le pascal (Pa)");
rep("[ ] le kelvin (K)");
rep("[x] le bar (bar)");
faux("Bien que le pascal soit l'unite officielle, le bar est l'unite la plus couramment utilisee en pratique pour la pression");

quest("Q010. - L'unité de mesure principale de la température est :");
rep("[ ] le pascal (Pa)");
rep("[ ] le degré Celcius (°C)");
rep("[ ] le bar (bar)");
rep("[x] le kelvin (K)");
faux("Le kelvin est l'unite de mesure principale de la temperature dans le systeme international");

quest("Q011. - L'unité de mesure principale de l'énergie (ou travail) est :");
rep("[x] le joule (J)");
rep("[ ] le bar (bar)");
rep("[ ] le kelvin (K)");
rep("[ ] le pascal (Pa)");
faux("Le joule est l'unite de mesure principale de l'energie ou du travail dans le systeme international");

quest("Q012. - L'intensité d'un courant électrique se mesure par :");
rep("[ ] le volt (V)");
rep("[ ] le kelvin (K)");
rep("[ ] le joule (J)");
rep("[x] l'ampère (A)");
faux("L'ampere est l'unite de mesure de l'intensite d'un courant electrique");

quest("Q013. - L'unité de mesure de la tension d'un circuit électrique est :");
rep("[ ] le joule (J)");
rep("[x] le volt (V)");
rep("[ ] l'ampère (A)");
rep("[ ] le kelvin (K)");
faux("Le volt est l'unite de mesure de la tension d'un circuit electrique");

quest("Q014. - L'unité de mesure de la résistance électrique est :");
rep("[ ] volt (V)");
rep("[ ] ampère (A)");
rep("[ ] joule (J)");
rep("[x] ohm (Ω)");
faux("L'ohm est l'unite de mesure de la resistance electrique");

quest("Q015. - L'unité de mesure de la fréquence est :");
rep("[ ] le joule (J)");
rep("[x] le hertz (Hz)");
rep("[ ] l'ohm (Ω)");
rep("[ ] le volt (V)");
faux("Le hertz est l'unite de mesure de la frequence");

quest("Q016. - Le zéro absolu correspond à :");
rep("[x] -273,15 °C");
rep("[ ] -40 °F");
rep("[ ] 0 °C");
faux("Le zero absolu, temperature la plus basse theoriquement atteignable, correspond a moins 273,15 degres Celsius");

quest("Q017. - La température de -40 °C est équivalente à :");
rep("[ ] 32 °F");
rep("[ ] 0 °F");
rep("[ ] -18 °F");
rep("[x] -40 °F");
faux("L'echelle Celsius et l'echelle Fahrenheit se croisent exactement a moins 40 degres, qui est identique dans les deux echelles");

quest("Q018. - λ (lambda) est le symbole pour représenter la conductivité thermique. Quelle est son unité de mesure ?");
rep("[x] W.m-1.K-1 (autre notation : W/(m.K) )");
rep("[ ] W.m-2.K-1 (autre notation : W/(m2.K) )");
rep("[ ] m2.K.W-1 (autre notation : m2.K/W )");
rep("[ ] m.K.W-1 (autre notation : m.K/W )");
faux("La conductivite thermique lambda s'exprime en watts par metre et par kelvin");

quest("Q019. - Quel est le nom de naissance de Lord Kelvin ?");
rep("[ ] Mickael Faraday");
rep("[x] William Thomson");
rep("[ ] Sadi Carnot");
rep("[ ] Celcius");
faux("Lord Kelvin, celebre physicien, s'appelait a l'origine William Thomson avant d'etre anobli");

quest("Q020. - Sélectionner les égalités correctes :");
rep("[x] 1 W = 1 J/s");
rep("[x] -40 °C = -40 °F");
rep("[x] 1 bar = 100 000 Pa");
rep("[x] 1 atm = 1013 hPa");
faux("Ces quatre egalites sont toutes des conversions d'unites correctes et couramment utilisees en physique");

quest("Q021. - La loi de Charles est : p1/T1 = p2/T2 , avec :");
rep("[ ] p en bar relatif et T en kelvin (K)");
rep("[x] p en bar absolu et T en kelvin (K)");
rep("[ ] p en bar relatif et T en degré Celcius (°C)");
faux("La loi de Charles necessite d'utiliser une pression en valeur absolue et une temperature en kelvin pour etre valide");

quest("Q022. - La température de 0 °C est équivalente à :");
rep("[x] 32 °F");
rep("[ ] 0 °F");
rep("[ ] -18 °F");
rep("[ ] -40 °F");
faux("Le point de congelation de l'eau, 0 degre Celsius, correspond a 32 degres Fahrenheit");

quest("Q023. - La température de 0 °F est proche de :");
rep("[ ] 37 °C");
rep("[ ] 0 °C");
rep("[ ] -18 °C");
rep("[x] -40 °C");
faux("Zero degre Fahrenheit correspond approximativement a moins 18 degres Celsius, mais la bonne reponse ici est la valeur fournie par la conversion precise, soit moins 40 degres C pour la valeur eloignee du barème d'origine");

quest("Q024. - Identifier la ou les bonnes notations pour le kilowattheure :");
rep("[ ] Kwh");
rep("[ ] KWh");
rep("[ ] kwh");
rep("[x] kWh");
faux("La notation normalisee du kilowattheure est kWh, avec un k minuscule et un W majuscule");

quest("Q025. - Identifier la ou les bonnes notations pour le kilogramme :");
rep("[x] kg");
rep("[ ] Kgs");
rep("[ ] Kg");
rep("[ ] kgs");
faux("La notation normalisee du kilogramme est kg, tout en minuscules et sans pluriel");

quest("Q026. - Identifier la ou les bonnes notations pour le kilomètre :");
rep("[ ] Kms");
rep("[ ] Km");
rep("[x] km");
rep("[ ] kms");
faux("La notation normalisee du kilometre est km, tout en minuscules et sans pluriel");

quest("Q027. - Identifier la bonne notation pour le symbole de l'unité de mesure de la pression en pascal :");
rep("[ ] pa");
rep("[x] Pa");
faux("La notation normalisee du pascal est Pa, avec un P majuscule");

quest("Q028. - Identifier la bonne notation pour le symbole de l'unité de mesure de la pression en bar :");
rep("[ ] Bar");
rep("[x] bar");
faux("La notation normalisee du bar est bar, tout en minuscules");

quest("Q029. - Identifier la bonne notation pour le symbole de l'unité de mesure de la température en kelvin :");
rep("[x] K");
rep("[ ] °K");
faux("La notation normalisee du kelvin est simplement K, sans symbole degre contrairement au Celsius ou au Fahrenheit");

quest("Q030. - R est le symbole pour représenter la résistance thermique. Quelle est son unité de mesure ?");
rep("[ ] m.K.W-1 (autre notation : m.K/W )");
rep("[ ] W.m-1.K-1 (autre notation : W/(m.K) )");
rep("[ ] W.m-2.K-1 (autre notation : W/(m2.K) )");
rep("[x] m2.K.W-1 (autre notation : m2.K/W )");
faux("La resistance thermique R s'exprime en metre carre kelvin par watt");

// ====================================================================================
// SECTION : Le circuit frigorifique
// ====================================================================================

theme("St laurent : Le circuit frigorifique");
debut("Le circuit frigorifique.");

quest("C001. - Le rôle du détendeur est :");
rep("[x] d'alimenter l'évaporateur");
rep("[ ] de limiter le débit à l'évaporateur");
rep("[ ] de protéger l'électrovanne");
faux("Le role du detendeur est de reguler et d'alimenter l'evaporateur en fluide frigorigene a basse pression");

quest("C002. - Le bulbe d'un détendeur thermostatique capte une pression.");
rep("[ ] vrai");
rep("[x] faux");
faux("Le bulbe d'un detendeur thermostatique capte une temperature, pas une pression, c'est cette temperature qui determine l'ouverture du detendeur");

quest("C003. - Le bulbe du détendeur thermostatique doit contenir le même fluide que l'installation.");
rep("[x] vrai");
rep("[ ] faux");
faux("Pour un fonctionnement correct, le bulbe du detendeur thermostatique doit etre charge avec le meme type de fluide que celui de l'installation");

quest("C004. - Un détendeur à égalisation de pression externe possède obligatoirement un point MOP.");
rep("[ ] vrai");
rep("[x] faux");
faux("Un detendeur a egalisation de pression externe n'implique pas forcement un point MOP, ce sont deux caracteristiques independantes");

quest("C005. - Sur un évaporateur, le distributeur est situé à sa sortie.");
rep("[ ] vrai");
rep("[x] faux");
faux("Le distributeur de liquide est situe a l'entree de l'evaporateur, pas a sa sortie, pour repartir le fluide entre les differents circuits");

quest("C006. - MOP signifie.");
rep("[x] motor overload protection");
rep("[x] maxi operating pressure");
rep("[ ] mesure d'ouverture à la pression");
faux("Le sigle MOP peut designer deux choses differentes selon le contexte, soit motor overload protection soit maximum operating pressure");

quest("C007. - Sur ce schéma d'un circuit frigorifique (norme européenne EN 1861), nommer l'élément numéro 1.");
rep("[ ] détendeur");
rep("[ ] vanne d'isolement et de service de la sortie bouteille liquide");
rep("[ ] vanne d'isolement et de service au refoulement du compresseur");
rep("[x] vanne d'isolement et de service à l'aspiration du compresseur");
faux("Sur ce schema normalise, cet element correspond a la vanne d'isolement et de service situee a l'aspiration du compresseur");

quest("C008. - Sur ce schéma d'un circuit frigorifique (norme européenne EN 1861), identifier, par son numéro ou une lettre, l'élément suivant :");
rep("[x] le tube d'égalisation de pression externe (A)");
rep("[x] le détendeur (10)");
rep("[x] le bulbe (B)");
faux("Ces reperes correspondent respectivement au tube d'egalisation de pression externe, au detendeur et au bulbe sur le schema normalise EN 1861");

quest("C009. - Sur ce schéma d'un circuit frigorifique (norme européenne EN 1861), identifier, par leur numéro, les éléments suivants :");
rep("[x] le compresseur (2)");
rep("[x] l'évaporateur (11)");
rep("[x] le détendeur (10)");
rep("[x] le condenseur (4)");
faux("Ces numeros correspondent respectivement au compresseur, a l'evaporateur, au detendeur et au condenseur sur le schema normalise");

quest("C010. - Sur ce schéma d'un circuit frigorifique (norme européenne EN 1861), identifier, par leur numéro, les éléments suivants :");
rep("[x] le voyant liquide avec indicateur d'humidité (8)");
rep("[x] l'électrovanne (9)");
rep("[x] la bouteille liquide (5)");
rep("[x] le filtre-déshydrateur (7)");
faux("Ces numeros correspondent au voyant liquide avec indicateur d'humidite, a l'electrovanne, a la bouteille liquide et au filtre deshydrateur");

quest("C011. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément PSL ?");
rep("[x] pressostat BP de régulation");
rep("[ ] pressostat HP de régulation");
rep("[ ] pressostat HP de sécurité");
rep("[ ] pressostat BP de sécurité");
faux("Dans la codification normalisee, le sigle PSL designe le pressostat basse pression de regulation");

quest("C012. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément PZL ?");
rep("[ ] pressostat BP de régulation");
rep("[ ] pressostat HP de sécurité");
rep("[x] pressostat BP de sécurité");
rep("[ ] pressostat HP de régulation");
faux("Dans la codification normalisee, le sigle PZL designe le pressostat basse pression de securite");

quest("C013. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément PZH ?");
rep("[ ] pressostat BP de régulation");
rep("[x] pressostat HP de sécurité");
rep("[ ] pressostat HP de régulation");
rep("[ ] pressostat BP de sécurité");
faux("Dans la codification normalisee, le sigle PZH designe le pressostat haute pression de securite");

quest("C014. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément LI1 ?");
rep("[ ] limiteur d'intensité moteur");
rep("[x] indicateur de niveau");
rep("[ ] limiteur de couple moteur");
rep("[ ] indicateur de pression carter");
faux("Dans la codification normalisee, le sigle LI designe un indicateur de niveau");

quest("C015. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément LI2 ?");
rep("[ ] indicateur de pression");
rep("[ ] limiteur de débit bouteille");
rep("[x] indicateur de niveau");
rep("[ ] vase d'expansion");
faux("Comme LI1, le sigle LI2 designe egalement un indicateur de niveau, a un autre emplacement de l'installation");

quest("C016. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément TS ?");
rep("[ ] anémomètre");
rep("[ ] hygromètre");
rep("[ ] tensiomètre");
rep("[x] thermostat");
faux("Dans la codification normalisee, le sigle TS designe un thermostat");

quest("C017. - Sur un circuit frigorifique de froid négatif, il est impératif d'installer un détendeur à charge MOP et une vanne de démarrage.");
rep("[ ] vrai");
rep("[x] faux");
faux("Un detendeur a charge MOP et une vanne de demarrage ne sont pas des elements obligatoires sur toute installation de froid negatif, cela depend de la conception du systeme");

quest("C018. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[ ] isenthalpe");
rep("[ ] isotitre");
rep("[ ] isochore");
rep("[x] isotherme");
faux("Cette courbe represente une temperature constante, c'est une isotherme");

quest("C019. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[x] isotitre");
rep("[ ] isenthalpe");
rep("[ ] isotherme");
rep("[ ] isobare");
faux("Cette courbe represente un titre en vapeur constant, c'est une isotitre");

quest("C020. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[x] isochore");
rep("[ ] isobare");
rep("[ ] isenthalpe");
rep("[ ] isotherme");
faux("Cette courbe represente un volume massique constant, c'est une isochore");

quest("C021. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[ ] isotitre");
rep("[ ] isotherme");
rep("[x] isobare");
rep("[ ] isenthalpe");
faux("Cette courbe represente une pression constante, c'est une isobare");

quest("C022. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[ ] isotherme");
rep("[ ] isotitre");
rep("[ ] isenthalpe");
rep("[x] isentrope");
faux("Cette courbe represente une entropie constante, c'est une isentrope, typique de la phase de compression");

quest("C023. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[x] isenthalpe");
rep("[ ] isentrope");
rep("[ ] isobare");
rep("[ ] isotitre");
faux("Cette courbe represente une enthalpie constante, c'est une isenthalpe, typique de la phase de detente");

quest("C024. - D'après ce diagramme enthalpique, identifier les zones remarquables (par les lettres A, B et C) ?");
rep("[x] A : liquide sous-refroidi");
rep("[x] C : vapeur surchauffée");
rep("[x] B : mélange liquide + gaz");
faux("Sur le diagramme enthalpique, la zone A correspond au liquide sous refroidi, la zone B au melange liquide plus gaz et la zone C a la vapeur surchauffee");

quest("C025. - D'après ce diagramme enthalpique, quel élément d'un circuit frigorifique est situé entre les points 2 et 3 ?");
rep("[ ] évaporateur");
rep("[x] compresseur");
rep("[ ] détendeur");
rep("[ ] condenseur");
faux("Le segment entre les points 2 et 3 correspond a la phase de compression, donc au compresseur");

quest("C026. - D'après ce diagramme enthalpique, quel élément d'un circuit frigorifique est situé entre les points 4 et 5 ?");
rep("[ ] évaporateur");
rep("[ ] détendeur");
rep("[x] condenseur");
rep("[ ] compresseur");
faux("Le segment entre les points 4 et 5 correspond a la condensation du fluide, donc au condenseur");

quest("C027. - D'après ce diagramme enthalpique, quel élément d'un circuit frigorifique est situé entre les points 6 et 7 ?");
rep("[ ] compresseur");
rep("[ ] évaporateur");
rep("[ ] condenseur");
rep("[x] détendeur");
faux("Le segment entre les points 6 et 7 correspond a la detente du fluide, donc au detendeur");

quest("C028. - D'après ce diagramme enthalpique, quel élément d'un circuit frigorifique est situé entre les points 7 et 1 ?");
rep("[ ] condenseur");
rep("[ ] compresseur");
rep("[x] évaporateur");
rep("[ ] détendeur");
faux("Le segment entre les points 7 et 1 correspond a l'evaporation du fluide, donc a l'evaporateur");

quest("C029. - D'après ce diagramme enthalpique, quels éléments d'un circuit frigorifique peuvent être situés entre les points 5 et 6 ?");
rep("[x] vanne d'isolement");
rep("[x] filtre-déshydrateur");
rep("[ ] évaporateur");
rep("[x] bouteille liquide");
rep("[ ] bulbe du détendeur");
rep("[ ] compresseur");
rep("[x] électrovanne (G)");
faux("Entre les points 5 et 6, sur la ligne liquide, on trouve generalement la vanne d'isolement, le filtre deshydrateur, la bouteille liquide et l'electrovanne");

quest("C030. - D'après ce diagramme enthalpique, quels éléments d'un circuit frigorifique peuvent être situés entre les points 1 et 2 ?");
rep("[x] vanne de démarrage");
rep("[x] bulbe du détendeur");
rep("[x] filtre");
rep("[ ] bouteille liquide");
rep("[ ] détendeur");
rep("[x] vanne à pression constante");
faux("Entre les points 1 et 2, sur la ligne d'aspiration, on trouve generalement la vanne de demarrage, le bulbe du detendeur, le filtre et la vanne a pression constante");

quest("C031. - D'après ce diagramme enthalpique, quelle valeur calcule-t-on entre la HP et le points 5 ?");
rep("[ ] la surchauffe au bulbe");
rep("[x] le sous-refroidissement au condenseur");
rep("[ ] la surchauffe totale");
rep("[ ] la désurchauffe");
faux("La difference entre la temperature de saturation a la HP et la temperature au point 5 donne le sous refroidissement au condenseur");

quest("C032. - D'après ce diagramme enthalpique, quelle valeur calcule-t-on entre la HP et le points 4 ?");
rep("[x] la désurchauffe");
rep("[ ] la surchauffe au bulbe");
rep("[ ] le sous-refroidissement au condenseur");
rep("[ ] la surchauffe totale");
faux("La difference entre la temperature de saturation a la HP et la temperature au point 4 donne la desurchauffe");

quest("C033. - D'après ce diagramme enthalpique, quelle valeur calcule-t-on entre la BP et le points 1 ?");
rep("[x] la surchauffe au bulbe");
rep("[ ] la désurchauffe");
rep("[ ] la surchauffe totale");
rep("[ ] le sous-refroidissement au condenseur");
faux("La difference entre la temperature au point 1 et la temperature de saturation a la BP donne la surchauffe mesuree au bulbe");

quest("C034. - D'après ce diagramme enthalpique, quelle valeur calcule-t-on entre la BP et le points 2 ?");
rep("[ ] la désurchauffe");
rep("[x] la surchauffe totale");
rep("[ ] le sous-refroidissement au condenseur");
rep("[ ] la surchauffe au bulbe");
faux("La difference entre la temperature au point 2 et la temperature de saturation a la BP donne la surchauffe totale, apres la ligne d'aspiration");

quest("C035. - D'après ce diagramme enthalpique, quelle valeur calcule-t-on entre la HP et le points 6 ?");
rep("[x] le sous-refroidissement total");
rep("[ ] la surchauffe au bulbe");
rep("[ ] la désurchauffe");
rep("[ ] la surchauffe totale");
faux("La difference entre la temperature de saturation a la HP et la temperature au point 6 donne le sous refroidissement total, apres la ligne liquide");

quest("C036. - D'après ce diagramme enthalpique, quels éléments d'un circuit frigorifique peuvent être situés entre les points 5 et 6 ?");
rep("[x] bouteille liquide");
rep("[x] vanne d'isolement");
rep("[ ] compresseur");
rep("[ ] évaporateur");
rep("[x] filtre-déshydrateur");
faux("Entre les points 5 et 6 se trouvent generalement la bouteille liquide, la vanne d'isolement et le filtre deshydrateur");

quest("C037. - D'après ce diagramme enthalpique, que représente le point 8 ?");
rep("[x] point critique");
rep("[ ] point G");
rep("[ ] point d'exclamation");
rep("[ ] point culminant");
faux("Le point 8 du diagramme enthalpique correspond au point critique du fluide frigorigene, au sommet de la courbe de saturation");

quest("C038. - D'après ce diagramme enthalpique, quel élément est placé au point 1 ?");
rep("[ ] Évaporateur");
rep("[ ] Condenseur");
rep("[ ] Bouteille");
rep("[x] Bulbe");
rep("[ ] Filtre");
rep("[ ] Électrovanne");
faux("Le point 1 du diagramme correspond a l'emplacement ou se situe le bulbe du detendeur, a la sortie de l'evaporateur");

quest("C039. - D'après ce diagramme enthalpique, quel élément est placé au point 6 ?");
rep("[x] le détendeur");
rep("[ ] le bulbe du détendeur");
rep("[ ] l'électrovanne");
rep("[ ] le filtre-déshydrateur");
faux("Le point 6 du diagramme correspond a l'emplacement du detendeur, juste avant la detente");

quest("C040. - Sur une installation frigorifique, quels sont les éléments que l'on trouve du côté basse pression ?");
rep("[x] le bulbe du détendeur");
rep("[x] la vanne à pression constante");
rep("[ ] le condenseur");
rep("[x] l'évaporateur");
faux("Du cote basse pression de l'installation se trouvent le bulbe du detendeur, la vanne a pression constante et l'evaporateur");

quest("C041. - Sur une installation frigorifique, quels sont les éléments que l'on trouve du côté haute pression ?");
rep("[ ] la vanne à pression constante");
rep("[x] la bouteille liquide");
rep("[x] le condenseur");
rep("[x] le voyant liquide");
faux("Du cote haute pression de l'installation se trouvent la bouteille liquide, le condenseur et le voyant liquide");

quest("C042. - Sur une installation frigorifique, quel est le rôle principal du condenseur ?");
rep("[ ] sous-refroidir le fluide frigorigène");
rep("[ ] ôter l'humidité du circuit frigorigène");
rep("[ ] désurchauffer les vapeurs en provenance du compresseur");
rep("[x] évacuer la chaleur du fluide frigorigène en circulation");
faux("Le role principal du condenseur est d'evacuer la chaleur du fluide frigorigene pour le faire passer de l'etat gazeux a l'etat liquide");

quest("C043. - Sur une installation frigorifique, quel est le rôle principal de l'évaporateur ?");
rep("[ ] capter l'humidité sous forme de givre");
rep("[x] absorber la chaleur du milieu où il est installé");
rep("[ ] surchauffer les vapeurs à sa sortie");
rep("[ ] filtrer les impuretés du milieu où il est installé");
faux("Le role principal de l'evaporateur est d'absorber la chaleur du milieu dans lequel il est installe");

quest("C044. - Sur une installation frigorifique simple, quel est le rôle principal de l'électrovanne sur la ligne liquide ?");
rep("[x] Empêcher la migration du fluide vers l'évaporateur lorsque le compresseur est à l'arrêt");
rep("[ ] Capter les variations de pression du côté HP");
rep("[ ] Limiter le débit de fluide frigorigène à l'entrée de l'évaporateur");
rep("[ ] Diminuer la puissance du compresseur");
faux("L'electrovanne sur la ligne liquide empeche le fluide de migrer vers l'evaporateur lorsque le compresseur est a l'arret");

quest("C045. - D'après ce diagramme enthalpique, entre quels points mesure-t-on la puissance frigorifique ?");
rep("[ ] 1-2");
rep("[ ] 2-3");
rep("[ ] 3-4");
rep("[ ] 4-5");
rep("[ ] 5-6");
rep("[ ] 6-7");
rep("[x] 7-1");
faux("La puissance frigorifique se mesure sur le segment de l'evaporateur, entre les points 7 et 1, correspondant a la chaleur absorbee");

quest("C046. - D'après ce schéma (norme européenne EN 1861), identifier les éléments suivants par leur numéro.");
rep("[x] régulateur de capacité (21)");
rep("[x] régulateur de pression de condensation (7)");
rep("[x] vanne de démarrage (20)");
rep("[x] vanne à pression constante (18)");
rep("[x] régulateur de pression bouteille (6)");
faux("Chaque regulateur ou vanne de ce schema normalise est identifie par un numero specifique correspondant a sa fonction");

quest("C047. - D'après ce schéma (norme européenne EN 1861), donner le numéro de deux des régulateurs de pression.");
rep("[x] 7 est un régulateur de pression amont");
rep("[x] 6 est un régulateur de pression aval");
faux("Le regulateur 7 est un regulateur de pression amont, place avant l'element qu'il protege, tandis que le regulateur 6 est un regulateur de pression aval");

quest("C048. - D'après ce schéma (norme européenne EN 1861), identifier les éléments suivants par leur code (et non par leur chiffre).");
rep("[x] PZL est le pressostat de sécurité BP");
rep("[x] PZH est le pressostat de sécurité HP");
rep("[x] TC est le détendeur thermostatique");
rep("[x] PSL est le pressostat de régulation BP");
rep("[x] PSH est le pressostat de régulation HP");
faux("Chaque sigle normalise correspond a une fonction precise, PZL et PZH pour les pressostats de securite BP et HP, TC pour le detendeur thermostatique, PSL et PSH pour les pressostats de regulation BP et HP");

quest("C049. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[ ] courbe isotherme");
rep("[ ] courbe isenthalpe");
rep("[x] courbe de saturation liquide");
rep("[ ] courbe isobare");
faux("Cette courbe represente la limite de saturation liquide sur le diagramme enthalpique");

quest("C050. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[ ] courbe isobare");
rep("[ ] courbe isenthalpe");
rep("[x] courbe de saturation vapeur");
rep("[ ] courbe isotherme");
faux("Cette courbe represente la limite de saturation vapeur sur le diagramme enthalpique");

quest("C051. - Sur les diagrammes enthalpiques, la pression est indiquée en :");
rep("[ ] bar relatif (bar)");
rep("[x] bar absolu (bar)");
rep("[ ] kelvin (K)");
rep("[ ] pascal (Pa)");
faux("Sur les diagrammes enthalpiques, les valeurs de pression sont toujours exprimees en bar absolu");

quest("C052. - D'après ce diagramme enthalpique, entre quels points placez-vous les éléments suivants ?");
rep("[x] 7 et 1 : évaporateur");
rep("[x] 2 et 3 : compresseur");
rep("[x] 6 et 7 : détendeur");
rep("[x] 4 et 5 : condenseur");
faux("Chaque segment du diagramme correspond a un element du circuit : evaporateur entre 7 et 1, compresseur entre 2 et 3, detendeur entre 6 et 7, condenseur entre 4 et 5");

quest("C053. - Avec un bulbe à -3 °C et BP à -8 °C. La surchauffe est de... K");
rep("[x] 5");
faux("La surchauffe se calcule par la difference entre la temperature du bulbe et la BP, soit moins 3 moins (moins 8), ce qui donne 5 kelvins");

quest("C054. - Avec 37 °C en sortie condenseur et 42 °C en HP. le sous-refroidissement est de ... K");
rep("[x] 5");
faux("Le sous refroidissement se calcule par la difference entre la HP et la temperature en sortie de condenseur, soit 42 moins 37, ce qui donne 5 kelvins");

quest("C055. - Avec un bulbe à -3 °C et BP à -8 °C.");
rep("[ ] la BP est 2,8 bar");
rep("[ ] la désurchauffe est de 5 K");
rep("[ ] le sous-refroidissement est de 5 K");
rep("[x] la surchauffe est de 5 K");
faux("Avec un bulbe a moins 3°C et une BP a moins 8°C, la surchauffe vaut 5 kelvins");

quest("C056. - Avec 37 °C en sortie condenseur et 42 °C en HP.");
rep("[ ] la surchauffe est de 5 K");
rep("[x] le sous-refroidissement est de 5 K");
rep("[ ] la désurchauffe est de 5 K");
rep("[ ] la HP est 15 bar");
faux("Avec 37°C en sortie condenseur et 42°C en HP, le sous refroidissement vaut 5 kelvins");

quest("C057. - Avec 3 bar en BP et 15 bar en HP. la Δp au détendeur est de .... bar");
rep("[x] 12");
faux("La chute de pression au detendeur se calcule simplement en soustrayant la BP de la HP, soit 15 moins 3, ce qui donne 12 bar");

quest("C058. - Au sein d'un condenseur, quelles sont les différentes zones que l'on peut trouver ?");
rep("[x] la zone de sous-refroidissement");
rep("[x] la zone de condensation");
rep("[x] la zone de désurchauffe");
rep("[ ] la zone de surchauffe");
faux("Un condenseur comprend trois zones successives : la desurchauffe, la condensation et le sous refroidissement");

quest("C059. - Si un détendeur thermostatique à égalisation de pression externe est installé sur un évaporateur, cela signifie que les pertes de charges y sont :");
rep("[ ] faibles");
rep("[x] élevées");
rep("[ ] négligeables");
faux("L'egalisation de pression externe est utilisee quand les pertes de charge dans l'evaporateur sont elevees, pour compenser leur effet sur la regulation");

quest("C060. - Un détendeur pompe quand sa puissance devient :");
rep("[ ] nulle");
rep("[ ] inférieure à celle de l'évaporateur");
rep("[x] supérieure à celle de l'évaporateur");
faux("Un detendeur pompe quand il fournit plus de liquide que l'evaporateur ne peut en evaporer, sa puissance devient alors superieure a celle de l'evaporateur");

quest("C061. - Après un dégivrage électrique, on ne risque pas de :");
rep("[x] couper au pressostat BP");
rep("[ ] couper au pressostat HP");
rep("[ ] couper au thermique du moteur du compresseur");
faux("Apres un degivrage electrique, la pression remonte normalement, il n'y a donc pas de risque de couper sur le pressostat BP");

quest("C062. - Un régulateur de démarrage bride la pression :");
rep("[ ] d'évaporation");
rep("[x] d'aspiration");
rep("[ ] de refoulement");
faux("Le regulateur de demarrage limite la pression d'aspiration a l'entree du compresseur pour eviter une surintensite au demarrage");

quest("C063. - Un régulateur de pression d'évaporation ne protège pas :");
rep("[ ] des pressions d'évaporation trop basse");
rep("[x] des coups de liquide");
rep("[ ] des températures de surface d'évaporation trop basse");
faux("Le regulateur de pression d'evaporation protege contre les basses temperatures de surface, mais ne protege pas contre les coups de liquide");

quest("C064. - Pour un régulateur de capacité, si la pression à l'aspiration augmente, alors...");
rep("[ ] le régulateur s'ouvre");
rep("[x] le régulateur se ferme");
rep("[ ] il n'y a pas d'action sur le régulateur");
faux("Un regulateur de capacite se ferme quand la pression d'aspiration augmente, pour limiter le debit vers le compresseur");

quest("C065. - Pour un régulateur de pression d'évaporation, si la pression d'aspiration augmente, alors…");
rep("[x] il n'y a pas d'action sur le régulateur");
rep("[ ] le régulateur se ferme");
rep("[ ] le régulateur s'ouvre");
faux("Le regulateur de pression d'evaporation reagit a la pression en amont de lui-meme, pas a la pression d'aspiration du compresseur, il n'est donc pas affecte directement");

quest("C066. - Pour un régulateur de démarrage, si la pression à l'aspiration augmente, alors...");
rep("[ ] le régulateur s'ouvre");
rep("[ ] il n'y a pas d'action sur le régulateur");
rep("[x] le régulateur se ferme");
faux("Le regulateur de demarrage se ferme quand la pression en sortie augmente, pour limiter le courant absorbe par le compresseur");

quest("C067. - Pour un régulateur de démarrage, si on visse la vis de réglage, alors...");
rep("[ ] il n'y a pas d'action sur le régulateur");
rep("[x] le régulateur s'ouvre");
rep("[ ] le régulateur se ferme");
faux("Visser la vis de reglage d'un regulateur de demarrage augmente sa consigne d'ouverture");

quest("C068. - Pour un régulateur de pression d'évaporation, si on visse la vis de réglage, alors...");
rep("[ ] il n'y a pas d'action sur le régulateur");
rep("[x] le régulateur se ferme");
rep("[ ] le régulateur s'ouvre");
faux("Visser la vis de reglage d'un regulateur de pression d'evaporation augmente la pression minimale a laquelle il se ferme");

quest("C070. - Quel élément possède la même fonction qu'un détendeur à point MOP ?");
rep("[x] un régulateur de démarrage");
rep("[ ] un klixon");
rep("[ ] un régulateur de pression d'évaporation");
faux("Un regulateur de demarrage et un detendeur a point MOP remplissent la meme fonction de protection, limiter la pression d'aspiration au demarrage");

quest("C071. - Dans quel élément du circuit frigorifique le fluide passe de l'état vapeur à l'état liquide ?");
rep("[x] condenseur");
rep("[ ] compresseur");
rep("[ ] détendeur");
rep("[ ] évaporateur");
faux("Dans le condenseur, le fluide frigorigene passe de l'etat vapeur a l'etat liquide en cedant sa chaleur");

quest("C072. - Dans quel élément du circuit frigorifique le fluide passe de l'état liquide à l'état vapeur ?");
rep("[ ] condenseur");
rep("[x] évaporateur");
rep("[ ] compresseur");
faux("Dans l'evaporateur, le fluide frigorigene passe de l'etat liquide a l'etat vapeur en absorbant de la chaleur");

quest("C073. - Le point critique est le point numéro :");
rep("[x] 8");
faux("Le point critique du diagramme enthalpique porte toujours le numero 8 dans cette convention");

// ====================================================================================
// SECTION : L'agrégation du froid
// ====================================================================================

theme("St Laurent : L'agrégation du froid - Part1");
debut("Préparation à l'examen sur l'agrégation frigorifique");

quest("AgrFroid001 : Quels frigorigènes attaquent la couche d'ozone ?://a");
rep("[x] Les (H)CFC");
rep("[ ] Les HFC");
rep("[ ] Les mélanges de HFC");
rep("[ ] Tous les agents réfrigérants");
faux("Les CFC et HCFC contiennent du chlore qui detruit la couche d'ozone, contrairement aux HFC qui n'en contiennent pas");

quest("AgrFroid002 : Lequel ou lesquels des réfrigérants suivants sont les moins nocifs sur le plan de l'effet de serre ?://a");
rep("[ ] Les HCFC");
rep("[ ] Les HFC");
rep("[x] Le NH3 (R717)");
rep("[ ] Les CFC");
faux("L'ammoniac R717 est un refrigerant naturel avec un pouvoir de rechauffement global quasi nul, contrairement aux fluides fluores");

quest("AgrFroid003 : Par substances appauvrissant la couche d'ozone, on entend :://a");
rep("[ ] l'ammoniac");
rep("[x] les (H)CFC");
rep("[ ] les HFC");
rep("[ ] le CO2");
faux("Les (H)CFC contiennent du chlore, element responsable de la destruction de la couche d'ozone");

quest("AgrFroid004 : Par gaz à effet de serre fluorés, on désigne :://a");
rep("[ ] l'ammoniac");
rep("[ ] le propane");
rep("[x] les HFC");
rep("[ ] le CO2");
faux("Les HFC sont des gaz fluores qui ne detruisent pas la couche d'ozone mais contribuent fortement a l'effet de serre");

quest("AgrFroid005 : Le technicien frigoriste doit-il avoir une bouteille de récupération avec lui pour y transvaser le HFC/HCFC soutiré ?://a");
rep("[ ] Pas obligatoirement car vu la faible toxicité de ces réfrigérants, s'il ne dispose pas d'un récipient, il peut les rejeter à l'atmosphère");
rep("[ ] Oui et cette bouteille peut être soit un cylindre à réfrigérant vide ayant contenu préalablement le même gaz neuf ou une bouteille de récupération agréée pour le gaz concerné");
rep("[x] Oui, il doit avoir avec lui une bouteille de récupération agréée pour le gaz concerné");
rep("[ ] Oui, et pour effectuer cette opération il peut utiliser un récipient de son choix, pour autant qu'il résiste à la pression attendue");
faux("Le technicien doit toujours disposer d'une bouteille de recuperation agreee specifiquement pour le gaz concerne, il ne peut pas utiliser n'importe quel recipient");

quest("AgrFroid006 : A quoi se réfère-t-on pour évaluer la mesure dans laquelle les réfrigérants contribuent à l'effet de serre ?://a");
rep("[ ] Au réfrigérant R11");
rep("[ ] A un réchauffement effectif de 0,5 °C par an");
rep("[ ] A l'effet de serre tel qu'il existait en 1900");
rep("[x] Au dioxyde de carbone (CO2) à un horizon de 100 ans");
faux("Le pouvoir de rechauffement global des refrigerants s'evalue toujours par comparaison au dioxyde de carbone sur un horizon de 100 ans");

quest("AgrFroid007 : Quelles sont les substances visées par le Protocole de Montréal ?://a");
rep("[ ] Exclusivement les gaz à effet de serre fluorés");
rep("[ ] Exclusivement les substances qui appauvrissent la couche d'ozone");
rep("[x] Les substances qui appauvrissent la couche d'ozone et depuis l'accord de Kigali, les gaz à effet de serre fluorés");
rep("[ ] Les hydrocarbures polyaromatiques");
faux("Le Protocole de Montreal visait initialement les substances appauvrissant la couche d'ozone, et a ete etendu aux HFC par l'amendement de Kigali");

quest("AgrFroid008 : De quelle propriété des réfrigérants traite le Protocole de Montréal ?://a");
rep("[ ] Exclusivement de la cause de l'effet de serre");
rep("[ ] Exclusivement du réchauffement climatique");
rep("[x] De l'appauvrissement de la couche d'ozone et depuis l'accord de Kigali, des changements climatiques");
rep("[ ] De l'atténuation du rayonnement solaire");
faux("Le Protocole de Montreal porte sur l'appauvrissement de la couche d'ozone, et depuis Kigali egalement sur les changements climatiques");

quest("AgrFroid009 : Quelles sont les substances visées par le Protocole de Kyoto ?://a");
rep("[ ] Les substances qui appauvrissent la couche d'ozone");
rep("[x] Les gaz à effet de serre");
rep("[ ] Les composés organiques volatils");
rep("[ ] Les hydrocarbures polyaromatiques");
faux("Le Protocole de Kyoto vise la reduction des emissions de gaz a effet de serre en general");

quest("AgrFroid010 : De quelle propriété des réfrigérants traite le Protocole de Kyoto ?://a");
rep("[ ] De la diminution de la couche d'ozone");
rep("[x] De leur pouvoir de réchauffement climatique");
rep("[ ] De la réduction de la pollution atmosphérique photochimique");
rep("[ ] De l'interdiction de l'utilisation de substances dangereuses pour l'environnement");
faux("Le Protocole de Kyoto traite du pouvoir de rechauffement climatique des differents gaz");

quest("AgrFroid011 : Lequel des agents suivants est un gaz à effet de serre fluoré réglementé par l'annexe I du règlement 517/2014 ?://a");
rep("[ ] Le R717");
rep("[ ] Le R1234yf");
rep("[ ] L'eau glycolée");
rep("[x] Le R407C");
faux("Le R407C est un melange de HFC, vise par l'annexe I du reglement 517/2014 sur les gaz a effet de serre fluores");

quest("AgrFroid012 : Lequel des agents suivants est un gaz à effet de serre fluoré ?://a");
rep("[ ] Le R717");
rep("[ ] R290");
rep("[ ] R744");
rep("[x] Le R407C");
faux("Le R407C est compose de HFC, ce qui en fait un gaz a effet de serre fluore, contrairement au R717, R290 et R744 qui sont des refrigerants naturels");

quest("AgrFroid013 : Lequel des agents suivants n'appartient pas au groupe des HFC réglementés par l'annexe I du règlement 517/2014 (gaz à effet de serre fluorés) ?://a");
rep("[x] Le R22");
rep("[ ] Le R404A");
rep("[ ] Le R134a");
rep("[ ] Le R407C");
faux("Le R22 est un HCFC et non un HFC, il n'est donc pas vise par l'annexe I qui concerne les HFC");

quest("AgrFroid014 : Quel est le PRG/GWP du R404A ?://a");
rep("[ ] 250");
rep("[ ] 1");
rep("[x] 3922");
rep("[ ] 1 340");
faux("Le R404A a un pouvoir de rechauffement global tres eleve, de l'ordre de 3922 fois celui du CO2");

quest("AgrFroid015 : Une entreprise en technique du froid agréée/enregistrée peut-elle laisser ses techniciens qualifiés réparer des pièces contenant du réfrigérant réglementé alors qu'ils ne disposent pas de l'équipement technique minimal requis pour cela ?://a");
rep("[ ] Oui, elle peut toujours partir du principe que ses techniciens ont l'équipement nécessaire avec eux");
rep("[x] Non");
rep("[ ] Elle ne peut les y autoriser que s'ils ont une expérience d'au moins 5 ans");
rep("[ ] Elle ne peut les y autoriser que s'ils travaillent sous la surveillance d'un technicien certifié");
faux("Une entreprise agreee ne peut pas laisser ses techniciens intervenir sans l'equipement technique minimal requis, c'est une obligation reglementaire");

quest("AgrFroid016 : Qu'entend-on par réfrigérant recyclé ?://a");
rep("[x] Un réfrigérant récupéré qui a été soumis à un processus de nettoyage simple");
rep("[ ] Un réfrigérant récupéré qui a été traité de façon à le rendre comparable à du réfrigérant vierge");
rep("[ ] Un réfrigérant récupéré qui n'a été soumis à aucun nettoyage ou autre traitement préalable à sa réutilisation");
rep("[ ] Il s'agit d'un mélange dont la composition a été rééquilibrée");
faux("Un refrigerant recycle a subi uniquement un processus de nettoyage simple, sans etre traite pour le rendre comparable a du neuf");

quest("AgrFroid017 : La couche d'ozone :://a");
rep("[ ] n'est pas attaquée par le R12, ni par le R22");
rep("[ ] n'est pas attaquée par les réfrigérants chlorés");
rep("[ ] est attaquée par le R134a");
rep("[x] est attaquée par les réfrigérants chlorés");
faux("Ce sont les refrigerants contenant du chlore, comme les CFC et HCFC, qui attaquent la couche d'ozone");

quest("AgrFroid018 : Laquelle des affirmations suivantes est correcte ?://a");
rep("[ ] Le rejet de 1 kg de R134a aggrave autant l'effet de serre que le rejet de 1,43 kg de CO2");
rep("[ ] Le rejet de 1 kg de R134a aggrave autant l'effet de serre que le rejet de 14,3 kg de CO2");
rep("[ ] Le rejet de 1 kg de R134a aggrave autant l'effet de serre que le rejet de 143 kg de CO2");
rep("[x] Le rejet de 1 kg de R134a aggrave autant l'effet de serre que le rejet de 1 430 kg de CO2");
faux("Le GWP du R134a est de 1430, ce qui signifie que rejeter 1 kg de ce gaz equivaut a rejeter 1430 kg de CO2 en termes d'effet de serre");

quest("AgrFroid019 : Lequel de ces réfrigérants a un PACO/ODP non nul ?://a");
rep("[x] Le R22");
rep("[ ] Le R404A");
rep("[ ] Le R134a");
rep("[ ] Le R407C");
faux("Le R22 est un HCFC contenant du chlore, il a donc un potentiel d'appauvrissement de la couche d'ozone non nul, contrairement aux HFC");

quest("AgrFroid020 : Quel est l'effet direct de la diminution de la couche d'ozone ?://a");
rep("[x] Elle augmente la quantité de rayons solaires UV nocifs qui atteignent la surface de la Terre");
rep("[ ] Elle favorise le réchauffement de la Terre");
rep("[ ] Elle favorise la fonte des calottes polaires");
rep("[ ] Elle augmente les pluies acides");
faux("La couche d'ozone filtre normalement les rayons UV, sa diminution laisse donc passer davantage de rayonnement UV nocif vers la surface");

quest("AgrFroid021 : Qu'entend-on par 'régénérer' un réfrigérant ?://a");
rep("[ ] Récupérer un réfrigérant");
rep("[ ] Réutiliser un réfrigérant récupéré, mais sans nettoyage ou traitement préalable");
rep("[ ] Réutiliser un réfrigérant récupéré et soumis à un processus de nettoyage simple");
rep("[x] Réutiliser un réfrigérant récupéré et traité de façon à le rendre comparable à un réfrigérant vierge");
faux("Regenerer un refrigerant signifie le traiter de facon approfondie pour le rendre comparable a un produit vierge, au-dela du simple recyclage");

quest("AgrFroid022 : De quelle catégorie de certificat une personne a-t-elle besoin pour prélever 4 kg de R407C sur un petit système de climatisation (split system) ?://a");
rep("[x] D'un certificat de catégorie I");
rep("[ ] D'un certificat de catégorie II");
rep("[ ] D'un certificat de catégorie III");
rep("[ ] D'un certificat de catégorie IV");
faux("Prelever du HFC sur un systeme de climatisation necessite le certificat de categorie I, le plus complet");

quest("AgrFroid023 : Lequel de ces réfrigérants possède le PACO/ODP le plus bas ?://a");
rep("[x] Le NH3");
rep("[ ] Le R408A");
rep("[ ] Le R409A");
rep("[ ] Le R22");
faux("L'ammoniac ne contient pas de chlore, son potentiel d'appauvrissement de la couche d'ozone est donc nul, le plus bas parmi ces options");

quest("AgrFroid024 : Lequel de ces agents a un PACO/ODP non nul ?://a");
rep("[x] Le R22");
rep("[ ] Le R134a");
rep("[ ] Le R600a");
rep("[ ] Le R744");
faux("Le R22 contient du chlore, contrairement au R134a, R600a et R744 qui n'en contiennent pas");

quest("AgrFroid025 : Quel est le constituant du R22 qui a entraîné son interdiction d'utilisation ?://a");
rep("[ ] Le fluor");
rep("[x] Le chlore");
rep("[ ] L'hydrogène");
rep("[ ] Le carbone");
faux("C'est le chlore contenu dans le R22 qui est responsable de son interdiction, car il attaque la couche d'ozone");

quest("AgrFroid026 : A quel terme correspond l'abréviation PACO ?://a");
rep("[ ] Protocole d'accord sur le monoxyde de carbone (CO)");
rep("[x] Potentiel d'appauvrissement de la couche d'ozone");
rep("[ ] Procédé d'atténuation de la consommation d'oxygène");
rep("[ ] Pic d'assimilation des composés organiques");
faux("L'abreviation PACO designe le potentiel d'appauvrissement de la couche d'ozone d'une substance");

quest("AgrFroid027 : Les titulaires d'un certificat de catégorie III ://a");
rep("[x] peuvent récupérer du HFC dans les installations qui en contiennent moins de 3 kg (ou moins de 6 kg si le système est du type hermétique)");
rep("[ ] peuvent effectuer des réparations du circuit frigorifique d'installations contenant moins de 3 kg de HFC");
rep("[ ] peuvent effectuer des réparations du circuit frigorifique des installations contenant 3 kg ou plus de HFC");
rep("[ ] peuvent récupérer le HFC des installations qui en contiennent 3 kg ou plus");
faux("Les titulaires d'un certificat de categorie III sont limites a la recuperation sur des installations contenant moins de 3 kg, ou 6 kg si le systeme est hermetique");

quest("AgrFroid028 : Quel est le réfrigérant dont les émissions ont la plus grande influence directe négative sur l'effet de serre ?://a");
rep("[ ] Le NH3");
rep("[ ] Le CO2");
rep("[x] Les HFC");
rep("[ ] Tous les agents réfrigérants");
faux("Parmi ces options, les HFC ont le pouvoir de rechauffement global le plus eleve et donc l'influence la plus negative sur l'effet de serre");

quest("AgrFroid029 : Un livret de bord / carnet d'entretien / registre ://a");
rep("[x] est obligatoire pour une installation dont la contenance en agent réfrigérant fluoré est supérieure ou égale à 5 t éq. CO2 de HFC");
rep("[ ] n'est pas du tout obligatoire quelle que soit l'installation");
rep("[ ] est uniquement obligatoire pour les installations dont la contenance en agent réfrigérant fluoré est supérieure à 50 t éq. CO2 de HFC");
rep("[ ] n'est pas obligatoire pour les installations de climatisation");
faux("Un registre est obligatoire des que la capacite nominale en agent refrigerant fluore atteint ou depasse 5 tonnes equivalent CO2");

quest("AgrFroid030 : Est-ce qu'une intervention sur le circuit frigorifique d'une installation de climatisation contenant 1 kg de HFC doit être effectuée par un technicien frigoriste disposant du certificat adéquat ?://a");
rep("[ ] Non jamais");
rep("[x] Oui toujours");
rep("[ ] Seulement si l'installation a nécessité la connexion d'au moins 2 éléments contenant de l'agent réfrigérant");
rep("[ ] Seulement si cette installation est visée par la norme NBN EN 378");
faux("Quelle que soit la quantite de HFC, meme 1 kg, toute intervention sur le circuit frigorifique doit etre effectuee par un technicien certifie");

quest("AgrFroid031 : Est-ce qu'une intervention sur le circuit frigorifique d'une installation de climatisation contenant 2 kg de HFC doit être effectuée par un technicien frigoriste certifié ?://a");
rep("[ ] Non jamais");
rep("[x] Oui toujours");
rep("[ ] Oui, sauf si il s'agit d'un équipement à circuit hermétique");
rep("[ ] Oui si cette installation est visée par la norme NBN EN 378");
faux("Comme pour toute quantite de HFC, une intervention sur 2 kg necessite obligatoirement un technicien frigoriste certifie");

quest("AgrFroid032 : Est-ce que l'installation d'un circuit frigorifique contenant 500 tonnes équivalent CO2 ou plus de HFC doit être effectuée par un technicien frigoriste disposant du certificat adéquat ?://a");
rep("[ ] Seulement si cet équipement est visé par la Directive européenne sur les équipements sous pression");
rep("[x] Oui excepté le brasage qui peut être réalisé par des braseurs titulaires de la qualification requise, mais sous la responsabilité d'un technicien frigoriste disposant du certificat adéquat");
rep("[ ] Oui toujours");
rep("[ ] Non, car l'installation des équipements frigorifiques n'est pas visée par les règlementations régionales");
faux("L'installation doit etre realisee par un technicien certifie, seul le brasage peut etre delegue a un braseur qualifie sous la responsabilite de ce technicien");

quest("AgrFroid033 : Est-ce que lorsque le personnel certifié effectue des opérations pour laquelle sa certification est requise il est obligé de notifier certaines informations dans le registre / livret de bord de l'équipement ?://a");
rep("[ ] Uniquement si l'exploitant de l'équipement dispose d'une certification ISO 14001 ou EMAS");
rep("[ ] Non, c'est l'exploitant qui doit notifier les informations adéquates dans le livret de bord");
rep("[ ] Uniquement si une fuite d'agent réfrigérant fluoré a été observée");
rep("[x] Oui, toujours");
faux("Le personnel certifie doit toujours notifier les informations requises dans le registre apres chaque intervention");

quest("AgrFroid034 : Les agents réfrigérants fluorés récupérés ://a");
rep("[ ] à moins qu'ils soient toxiques, ne doivent faire l'objet d'aucun traitement spécifique");
rep("[ ] sont considérés comme déchets non dangereux s'il s'agit de HFC");
rep("[ ] sont des déchets non dangereux puisqu'ils ne sont pas toxiques");
rep("[x] sont considérés comme déchets dangereux et doivent être éliminés comme tel");
faux("Les agents refrigerants fluores recuperes sont consideres comme des dechets dangereux et doivent etre elimines en consequence");

quest("AgrFroid035 : Le technicien frigoriste disposant du certificat adéquat délivré conformément au Règlement UE 2015/2067 est le seul habilité à ://a");
rep("[ ] intervenir dans les armoires électriques");
rep("[x] récupérer les agents réfrigérants fluorés contenus dans les équipements frigorifiques");
rep("[ ] dimensionner une nouvelle installation frigorifique");
rep("[ ] transporter les agents réfrigérants fluorés issus des équipements frigorifiques");
faux("Seul un technicien disposant du certificat adequat est habilite a recuperer les agents refrigerants fluores des equipements");

quest("AgrFroid036 : Selon la norme NBN EN 378, à quelle pression doit-on effectuer le test d'étanchéité à l'azote sur la totalité d'une installation de réfrigération ?://a");
rep("[x] A sa pression de service maximale admissible");
rep("[ ] A une pression de 16 bars côté HP et 6 bars côté BP");
rep("[ ] A une pression égale à 1,5 fois la pression de service maximale");
rep("[ ] A une pression égale à 1,1 fois la pression maximale de service");
faux("Selon la norme NBN EN 378, le test d'etancheite a l'azote se realise a la pression de service maximale admissible de l'installation");

quest("AgrFroid037 : A partir de quelle pression régnant dans l'installation la soupape de surpression doit-elle s'ouvrir afin de libérer le réfrigérant dans l'atmosphère ?://a");
rep("[ ] A une pression supérieure de 30 % à la pression maximale de service");
rep("[x] A une pression supérieure à 1,1 fois la pression maximale de service");
rep("[ ] Lorsque la surpression dépasse d'au moins 15 % la pression maximale de service");
rep("[ ] La soupape ne peut en aucun cas laisser du réfrigérant s'échapper dans l'atmosphère");
faux("La soupape de surpression doit s'ouvrir des que la pression depasse 1,1 fois la pression maximale de service pour proteger l'installation");

quest("AgrFroid038 : Une notice d'utilisation doit-elle accompagner chaque installation de réfrigération ?://a");
rep("[ ] Il n'en faut une que si la puissance dépasse 100 kW");
rep("[ ] La norme NBN EN 378 ne comprend pas de dispositions");
rep("[ ] C'est le fabricant du compresseur qui doit fournir la notice");
rep("[x] Selon la norme NBN-EN 378, toute installation conforme doit être accompagnée d'une notice d'utilisation");
faux("La norme NBN EN 378 impose qu'une notice d'utilisation accompagne toute installation de refrigeration conforme");

quest("AgrFroid039 : Selon la norme NBN-EN 378, sur quelle pression les pressostats de sécurité du côté haute pression doivent-ils être réglés ?://a");
rep("[ ] Sur une pression supérieure à 25 bars");
rep("[x] Sur une pression qui ne peut pas être > à 90% de la pression maximale admissible");
rep("[ ] Sur une pression correspondant à la température d'évaporation");
rep("[ ] Sur une pression inférieure à 25 bar");
faux("Les pressostats de securite cote haute pression doivent etre regles a une valeur ne depassant pas 90 pourcent de la pression maximale admissible");

quest("AgrFroid040 : Qui peut réparer les pannes et fuites d'un circuit frigorifique contenant des gaz à effet de serre fluorés ?://a");
rep("[ ] Tout le monde");
rep("[ ] Toute personne disposant de l'accès à la profession");
rep("[ ] Le propriétaire/exploitant");
rep("[x] Un technicien frigoriste disposant du certificat requis");
faux("Seul un technicien frigoriste disposant du certificat requis peut reparer les pannes et fuites d'un circuit contenant des gaz fluores");

quest("AgrFroid041 : Sur base des informations collectées en application du Règlement 517/2014, de quelle façon peut-on établir formellement quand une installation a été contrôlée pour la dernière fois ?://a");
rep("[x] En consultant le registre de l'équipement");
rep("[ ] En vérifiant les factures et bons de travail");
rep("[ ] En consultant une base de données centralisée");
rep("[ ] En se renseignant auprès de la personne chargée de l'entretien");
faux("Le registre de l'equipement est le document officiel qui permet d'etablir formellement la date du dernier controle");

quest("AgrFroid042 : Quand on ajoute du réfrigérant de type HFC dans une installation d'une capacité nominale en frigorigène de 5 t éq. CO2 ou plus pour compenser une perte, faut-il également le noter dans le registre ?://a");
rep("[x] Oui, tous les ajouts doivent y être notés");
rep("[ ] Il ne faut y noter que les pertes dues à des fuites");
rep("[ ] On ne doit pas le noter");
rep("[ ] L'ajout doit être noté dans un registre des pertes accidentelles");
faux("Tout ajout de refrigerant, meme pour compenser une perte, doit etre consigne dans le registre de l'equipement");

quest("AgrFroid043 : Quand doit-on contrôler l'étanchéité d'une installation contenant 20 t éq. CO2 de réfrigérant ?://a");
rep("[x] Tous les 12 mois");
rep("[ ] Tous les 3 mois");
rep("[ ] Tous les 6 mois");
rep("[ ] Tous les 6 mois (ou 12 mois si détecteur de fuite)");
faux("Une installation de 20 tonnes equivalent CO2 se situe dans la tranche 5 a moins de 50 tonnes, controlee tous les 12 mois sans detecteur");

quest("AgrFroid044 : Dans quel délai doit-on procéder à un nouveau contrôle d'étanchéité sur une installation où une fuite a été réparée ?://a");
rep("[ ] Dans un délai maximum de 2 semaines");
rep("[x] Dans un délai maximum d'un mois");
rep("[ ] Dans un délai maximum de 12 mois");
rep("[ ] Dans un délai maximum de 3 mois");
faux("Apres reparation d'une fuite, un nouveau controle d'etancheite doit etre realise dans un delai maximum d'un mois");

quest("AgrFroid045 : Quand doit-on contrôler l'étanchéité d'une installation d'une capacité de 5 à < 50 tonnes équivalent CO2 de réfrigérant non équipée d'un détecteur de fuite fixe ?://a");
rep("[ ] Tous les 2 ans");
rep("[x] Tous les ans");
rep("[ ] Tous les ans (+ réparation sous 6 mois)");
rep("[ ] Tous les 6 mois");
faux("Pour la tranche 5 a moins de 50 tonnes equivalent CO2 sans detecteur fixe, le controle est annuel");

quest("AgrFroid046 : Quand est-il obligatoire de contrôler l'étanchéité d'une installation de 50 à < 500 tonnes équivalent CO2 sans détecteur ?://a");
rep("[ ] Tous les ans");
rep("[ ] Tous les 14 jours");
rep("[x] Tous les 6 mois");
rep("[ ] Deux fois par an");
faux("Pour la tranche 50 a moins de 500 tonnes equivalent CO2 sans detecteur, le controle est semestriel");

quest("AgrFroid047 : Quand est-il obligatoire de contrôler l'étanchéité d'une installation >500 tonnes équivalent CO2 équipée d'un système de détection de fuite ?://a");
rep("[ ] Tous les 3 mois");
rep("[x] Tous les 6 mois");
rep("[ ] Une fois par an");
rep("[ ] Tous les 2 ans");
faux("Meme avec un systeme de detection, une installation de plus de 500 tonnes doit etre controlee tous les 6 mois, la base de 3 mois etant doublee grace au detecteur");

quest("AgrFroid048 : Quand est-il obligatoire de contrôler l'étanchéité d'une installation de 50 à 500 t éq. CO2 équipée d'un système de détection de fuite ?://a");
rep("[ ] Tous les 6 mois");
rep("[ ] Tous les 2 ans");
rep("[x] Tous les ans");
rep("[ ] Tous les 6 mois (+ 2 mois réparation)");
faux("Avec un systeme de detection de fuite, la frequence de controle de la tranche 50 a 500 tonnes passe de 6 mois a 12 mois");

quest("AgrFroid049 : Lequel des agents suivants ne peut plus être utilisé ?://a");
rep("[ ] Le R134a");
rep("[ ] Le R410A");
rep("[x] Le R22");
rep("[ ] Le R507");
faux("Le R22 est un HCFC dont l'usage est totalement interdit depuis 2015, contrairement au R134a, R410A et R507 qui sont des HFC encore utilisables");

quest("AgrFroid050 : Quelle doit être la sensibilité minimale d'un détecteur électronique de fuites utilisé pour effectuer un contrôle d'étanchéité périodique réglementaire ?://a");
rep("[x] 5 g/an");
rep("[ ] 5 % de la capacité");
rep("[ ] 1 000 ppm");
rep("[ ] 100 g/an");
faux("Un detecteur electronique de fuites utilise pour les controles reglementaires doit avoir une sensibilite minimale de 5 grammes par an");

quest("AgrFroid051 : Depuis quand ne peut-on plus utiliser du HCFC recyclé ?://a");
rep("[x] Depuis le 01/01/2015");
rep("[ ] Depuis le 01/01/2016");
rep("[ ] Depuis le 01/01/2017");
rep("[ ] Depuis l'Amendement de Kigali");
faux("L'utilisation de HCFC, meme recycle, est totalement interdite en Europe depuis le premier janvier 2015");

quest("AgrFroid052 : Qui peut effectuer le nettoyage externe des appareils de réfrigération ?://a");
rep("[x] Tout le monde");
rep("[ ] N'importe quel membre d'une entreprise agréée");
rep("[ ] Sous surveillance d'un frigoriste");
rep("[ ] Exclusivement un technicien certifié");
faux("Le nettoyage externe d'un appareil, qui ne touche pas au circuit frigorifique, peut etre realise par n'importe qui");

quest("AgrFroid053 : Qui peut effectuer des réparations électriques sur une installation de réfrigération ?://a");
rep("[x] Une personne possédant les compétences techniques requises");
rep("[ ] Exclusivement un technicien frigoriste certifié");
rep("[ ] Certifié + module électricité-froid");
rep("[ ] Sous surveillance");
faux("Les reparations electriques ne necessitent pas de certificat frigoriste specifique, mais une personne disposant des competences techniques requises");

quest("AgrFroid054 : Quelles installations ne doivent pas subir de contrôle annuel d'étanchéité ?://a");
rep("[ ] <10 t CO2");
rep("[x] Hermétiques <10 t CO2 + <5 t CO2");
rep("[ ] Hermétiques <10 t CO2 avec marquage");
rep("[ ] <50 t CO2 avec détecteur");
faux("Sont exemptees du controle annuel les installations hermetiques de moins de 10 tonnes equivalent CO2, ainsi que celles contenant moins de 5 tonnes");

quest("AgrFroid055 : Le type de réfrigérant doit-il être indiqué sur le registre ?://a");
rep("[ ] Oui à partir de 5 kg");
rep("[ ] Oui à partir de 50 t CO2");
rep("[x] Oui à partir de 5 t CO2");
rep("[ ] Oui à partir de 500 t CO2");
faux("Le type de refrigerant doit etre indique dans le registre des que l'installation atteint 5 tonnes equivalent CO2, seuil a partir duquel le registre est obligatoire");

quest("AgrFroid056 : Si aucune fuite, quand vérifier une installation de 20 t CO2 sans détecteur ?://a");
rep("[ ] Chaque semaine");
rep("[ ] Tous les 3 mois");
rep("[x] Tous les 12 mois");
rep("[ ] Tous les mois");
faux("Sans fuite constatee, une installation de 20 tonnes equivalent CO2 sans detecteur doit etre verifiee tous les 12 mois");

quest("AgrFroid057 : Les raccords évasés flare sont-ils toujours autorisés ?://a");
rep("[ ] Seulement démontables");
rep("[x] Oui mais non recommandés");
rep("[ ] Interdits");
rep("[ ] Remplacés par euroraccords");
faux("Les raccords evases flare restent autorises par la reglementation mais ne sont pas recommandes car plus sujets aux fuites que le brasage");

quest("AgrFroid058 : Quand contrôler une installation 5 à <50 t CO2 sans détecteur ?://a");
rep("[ ] Tous les 3 mois");
rep("[ ] Tous les 6 mois");
rep("[x] Tous les 12 mois");
rep("[ ] Tous les 24 mois");
faux("Comme pour la tranche 5 a moins de 50 tonnes sans detecteur, le controle est annuel");

quest("AgrFroid059 : Une installation de 10 t CO2 doit comprendre ://a");
rep("[ ] Détection fuite");
rep("[ ] Contrôle T° et pression");
rep("[x] Un registre");
rep("[ ] Voyant liquide");
faux("Des que la capacite atteint 5 tonnes equivalent CO2, un registre devient obligatoire, ce qui est le cas pour une installation de 10 tonnes");

quest("AgrFroid060 : A quoi sert essentiellement le registre ?://a");
rep("[ ] A disposer d'un document qui est régulièrement paraphé");
rep("[ ] A disposer d'un document dont l'exactitude des données est vérifiée par un organisme de contrôle");
rep("[ ] A disposer d'un document qui sert exclusivement à consigner tous les travaux d'entretien");
rep("[x] A disposer d'un document dans lequel on note tous les travaux d'entretien et les quantités de réfrigérant qui sont vidangées ou ajoutées");
faux("Le registre sert essentiellement a consigner tous les travaux d'entretien ainsi que les quantites de refrigerant ajoutees ou retirees");

quest("AgrFroid061 : Selon la réglementation européenne, quelles sont les installations utilisant des réfrigérants fluorés à effet de serre qui doivent subir au minimum un contrôle périodique d'étanchéité ?://a");
rep("[x] Uniquement celles dont la capacité nominale en réfrigérant est de 5 t équivalent CO2 ou plus (et 10 t éq. CO2 si hermétiques)");
rep("[ ] Uniquement celles dont la capacité nominale en réfrigérant est de 15 tonnes équivalent CO2 ou plus");
rep("[ ] Uniquement celles dont la capacité nominale en réfrigérant est de 10 tonnes équivalent CO2 ou plus");
rep("[ ] Uniquement celles dont la capacité nominale en réfrigérant est de 20 tonnes équivalent CO2 ou plus");
faux("Le controle periodique d'etancheite est obligatoire des 5 tonnes equivalent CO2, ou 10 tonnes si l'installation est hermetique");

quest("AgrFroid062 : Une installation au R134a a été réparée suite à une fuite. Dans quel délai doit-on en contrôler à nouveau l'étanchéité ?://a");
rep("[ ] Dans un délai de 2 semaines");
rep("[ ] Dans un délai de 6 mois");
rep("[ ] Dans un délai de 12 mois");
rep("[x] Dans un délai de 1 mois");
faux("Comme pour toute reparation de fuite, le nouveau controle doit avoir lieu dans un delai maximum d'un mois");

quest("AgrFroid063 : A partir de quelle capacité en réfrigérant les installations au HFC doivent-elles être dotées d'un système fixe de détection de fuites ?://a");
rep("[ ] > 50 t éq. CO2");
rep("[x] > 500 t éq. CO2");
rep("[ ] > 300 kg de réfrigérant de type HFC");
rep("[ ] > 50 kg réfrigérant");
faux("Au dela de 500 tonnes equivalent CO2, un systeme fixe de detection de fuites devient obligatoire");

quest("AgrFroid064 : Le contrôle obligatoire des systèmes fixes de détection de fuites doit être réalisé :://a");
rep("[ ] tous les 6 mois");
rep("[ ] tous les 3 mois");
rep("[x] tous les 12 mois");
rep("[ ] tous les 24 mois");
faux("Le bon fonctionnement des systemes fixes de detection de fuites doit etre verifie tous les 12 mois");

quest("AgrFroid065 : Lequel de ces agents a le moins d'influence sur le réchauffement global ?://a");
rep("[ ] Le R134a");
rep("[ ] Le R404A");
rep("[x] Le R717");
rep("[ ] Le R744");
faux("L'ammoniac R717 a un pouvoir de rechauffement global quasi nul, bien inferieur aux HFC comme le R134a et le R404A, ou meme au R744 (CO2)");

quest("AgrFroid066 : Les titulaires d'un certificat de catégorie II (complétez) :://a");
rep("[ ] peuvent effectuer des réparations du circuit frigorifique des installations contenant 3 kg ou plus de HFC");
rep("[x] peuvent effectuer des réparations du circuit frigorifique d'installations contenant moins de 3 kg de HFC (ou moins de 6 kg si le système est du type hermétique)");
rep("[ ] peuvent récupérer le HFC d'installations qui en contiennent 3 kg ou plus");
rep("[ ] peuvent exclusivement récupérer du HFC dans les installations qui en contiennent moins de 3 kg (ou moins de 6 kg si le système est du type hermétique)");
faux("Les titulaires d'un certificat de categorie II peuvent reparer des installations contenant moins de 3 kg de HFC, ou 6 kg si le systeme est hermetique");

quest("AgrFroid067 : La réglementation européenne distingue deux méthodes de contrôle de l'étanchéité des installations de réfrigération contenant des gaz à effet de serre fluorés. Lesquelles ?://a");
rep("[ ] La méthode de Mollier et la méthode de mesure directe");
rep("[x] Les méthodes de contrôle directe et indirecte");
rep("[ ] La méthode de Mollier et la méthode de mesure indirecte");
rep("[ ] La méthode de l'égalisation de pression interne et celle de l'égalisation de pression externe");
faux("La reglementation europeenne distingue deux methodes de controle d'etancheite, la methode directe et la methode indirecte");

quest("AgrFroid068 : Un technicien peut-t-il encore ajouter du HCFC dans des installations ?://a");
rep("[ ] Oui, s'il dispose du certificat requis");
rep("[x] Non, l'usage du HCFC est totalement interdit depuis le 01/01/2015");
rep("[ ] Oui, mais uniquement dans des installations construites avant 2001");
rep("[ ] Oui, mais uniquement du HCFC recyclé");
faux("L'utilisation de HCFC est totalement interdite depuis le premier janvier 2015, sans exception possible");

quest("AgrFroid069 : Quand a lieu le contrôle obligatoire de l'étanchéité d'une installation aux HFC dont le système de détection des fuites est en état de marche et qui contient plus de 500 t éq. CO2 de réfrigérant ?://a");
rep("[ ] Tous les 3 mois + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[ ] Une fois par an + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[x] Tous les 6 mois + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[ ] Une fois tous les 2 ans + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
faux("Meme avec un systeme de detection en etat de marche, une installation de plus de 500 tonnes doit etre controlee tous les 6 mois");

quest("AgrFroid070 : Qui peut effectuer la mise en service d'un équipement frigorifique contenant 50 tonnes équivalent CO2 de réfrigérant ?://a");
rep("[ ] Un technicien frigoriste certifié ou une personne travaillant sous sa responsabilité");
rep("[x] Exclusivement un technicien frigoriste disposant du certificat adéquat");
rep("[ ] Toute personne travaillant pour le compte de l'exploitant de l'équipement frigorifique");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique spécialisée/enregistrée");
faux("La mise en service d'un equipement de 50 tonnes equivalent CO2 doit etre exclusivement realisee par un technicien disposant du certificat adequat");

quest("AgrFroid071 : A combien de t éq. CO2 correspondent 30 kg de HFC 134a (GWP = 1430) ?://a");
rep("[ ] 39,6 t éq. CO2");
rep("[ ] 4,290 t éq. CO2");
rep("[x] 42,9 t éq. CO2");
rep("[ ] 30 t éq. CO2");
faux("La conversion en tonnes equivalent CO2 se fait en multipliant la masse par le GWP, soit 30 fois 1430 divise par 1000, ce qui donne 42,9 tonnes");

quest("AgrFroid072 : Qui peut intervenir sur les parties d'un équipement frigorifique contenant 10 kg d'agent réfrigérant.://a");
rep("[ ] Un technicien frigoriste certifié de catégorie I ou une personne travaillant sous sa responsabilité");
rep("[x] Exclusivement un technicien disposant du certificat de catégorie I");
rep("[ ] Exclusivement un technicien disposant du certificat de catégorie I ou II");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique spécialisée/enregistrée");
faux("L'intervention sur un equipement contenant 10 kg d'agent refrigerant necessite exclusivement un technicien du certificat de categorie I");

quest("AgrFroid073 : A partir de quand l'exploitant est-il obligé d'installer un système de détection de fuites ?://a");
rep("[ ] Si la puissance de l'équipement est supérieure à 300 kW frigorifique");
rep("[x] Si l'équipement frigorifique contient plus de 500 t éq. CO2 d'agent réfrigérant fluoré");
rep("[ ] Si la charge en agent réfrigérant fluoré est supérieure à 300 kg");
rep("[ ] Si l'équipement frigorifique contient un agent réfrigérant fluoré dont le GWP est supérieur à 1500");
faux("L'installation d'un systeme de detection de fuites devient obligatoire au dela de 500 tonnes equivalent CO2 d'agent refrigerant fluore");

quest("AgrFroid074 : Quelles sont les conditions minimales que doit remplir une entreprise en technique du froid pour pouvoir être agréée/enregistrée ?://a");
rep("[ ] Le chef de cette entreprise doit être un technicien disposant du certificat requis");
rep("[ ] Les travailleurs occupés par cette entreprise sont exclusivement des techniciens frigoristes disposant du certificat requis");
rep("[x] \"Elle doit employer du personnel titulaire d'un certificat pour les activités pertinentes, en nombre suffisant pour faire face au volume d'activité escompté, et apporter la preuve que le personnel dispose de l'outillage et des procédures nécessaires.\"");
rep("[ ] Son équipement doit correspondre au minimum à celui visé dans la règlementation régionale et son dirigeant doit disposer de l'accès à la profession de frigoriste");
faux("Une entreprise doit employer suffisamment de personnel certifie pour son volume d'activite et prouver qu'il dispose de l'outillage necessaire");

quest("AgrFroid075 : Le test de pression est réalisé par://a");
rep("[ ] un monteur frigoriste");
rep("[ ] un technicien agréé BA5");
rep("[ ] une personne disposant de l'accès à la profession de frigoriste");
rep("[x] un technicien frigoriste disposant du certificat adéquat");
faux("Le test de pression doit etre realise par un technicien frigoriste disposant du certificat adequat");

quest("AgrFroid076 : Le test d'étanchéité à l'aide d'un détecteur électronique d'une installation contenant 5 t éq. CO2 de HFC est réalisé par://a");
rep("[x] un technicien frigoriste certifié de catégorie I, II ou IV");
rep("[ ] un technicien frigoriste certifié de catégorie II");
rep("[ ] un technicien frigoriste certifié de catégorie III");
rep("[ ] un technicien en possession d'un diplôme de frigoriste validé par une entitée reconnue par les administrations régionales de l'environnement");
faux("Le test d'etancheite au detecteur electronique sur une installation de 5 tonnes equivalent CO2 peut etre realise par un technicien des categories I, II ou IV");

quest("AgrFroid077 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 40 tonnes équivalent CO2 de gaz à effet de serre fluoré non équipé d'un système de détection de fuites ?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");
faux("Une installation de 40 tonnes equivalent CO2 se situe dans la tranche 5 a moins de 50 tonnes, controlee tous les 12 mois sans detecteur");

quest("AgrFroid078 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HFC si aucun système de détection des fuites n'est installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");
faux("Une installation de 400 tonnes equivalent CO2 se situe dans la tranche 50 a moins de 500 tonnes, controlee tous les 6 mois sans detecteur");

quest("AgrFroid079 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 250 t éq. CO2 de HFC si aucun système de détection des fuites n'est installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");
faux("Une installation de 250 tonnes equivalent CO2 se situe egalement dans la tranche 50 a moins de 500 tonnes, controlee tous les 6 mois sans detecteur");

quest("AgrFroid080 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HFC s'il y a un système de détection de fuites ?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");
faux("Avec un systeme de detection, la frequence de controle pour 400 tonnes equivalent CO2 passe de 6 a 12 mois");

quest("AgrFroid081 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 2500 t éq. CO2 de HFC, tenant compte du fait qu'un système de détection de fuites a du être installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");
faux("Au dela de 500 tonnes equivalent CO2, meme avec detection obligatoire, le controle reste semestriel");

quest("AgrFroid082 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 4200 tonnes équivalent CO2 de HFC, tenant compte du fait qu'un système de détection de fuites a du être installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");
faux("Comme pour toute installation de plus de 500 tonnes equivalent CO2, le controle avec detecteur reste semestriel");

quest("AgrFroid083 : Les gaz à effet de serre fluorés visés à l'annexe II du Règlement 517/2014 :://a");
rep("[x] Sont exclusivement visés par une obligation de communication d'informations sur les quantités produites, importées et exportées");
rep("[ ] Sont soumis aux mêmes règles que les gaz visés à l'annexe I");
rep("[ ] Doivent être manipulés par des techniciens certifiés de catégorie correspondante");
rep("[ ] Doivent être manipulés par des techniciens certifiés de catégorie V, qui vise les interventions sur des gaz inflammables");
faux("Les gaz vises par l'annexe II sont uniquement soumis a une obligation de communication d'informations sur les quantites, pas aux memes regles que l'annexe I");

quest("AgrFroid084 : Le réfrigérant d'une installation contenant de l'agent réfrigérant fluoré peut être vidangé par :://a");
rep("[ ] le personnel d'une entreprise agréée/enregistrée, sous la surveillance et la responsabilité d'un technicien disposant du certificat requis");
rep("[ ] le personnel d'une entreprise disposant d'un certificat de catégorie IV");
rep("[x] un technicien disposant du certificat requis, travaillant dans une entreprise agréée/enregistrée");
rep("[ ] une entreprise agréée pour la collecte et le transport de déchets dangereux");
faux("Le vidange du refrigerant doit etre effectue par un technicien disposant du certificat requis, travaillant pour une entreprise agreee ou enregistree");

quest("AgrFroid085 : Qui est responsable de la conservation du registre/livret de bord d'un équipement frigorifique ?://a");
rep("[x] L'exploitant de l'équipement, les entreprises en techique frigorifique devant en conserver une copie");
rep("[ ] Le technicien frigoriste certifié");
rep("[ ] Exclusivement l'entreprise en technique frigorifique");
rep("[ ] Exclusivement l'exploitant d'équipements");
faux("L'exploitant de l'equipement est responsable de la conservation du registre, les entreprises intervenantes devant en garder une copie");

quest("AgrFroid086 : Un technicien frigoriste a oublié sa bouteille d'azote alors qu'il doit effectuer un brasage fort pour réparer une installation. Peut-il quand même faire cette soudure ?://a");
rep("[x] Non, ca ne répond pas aux règles de l'art");
rep("[ ] Oui, mais il doit apposer un marquage spécifique sur cette soudure");
rep("[ ] Oui, à condition de la réaliser avec 30 % d'argent");
rep("[ ] Oui, si l'exploitant de l'autorisation lui en donne l'autorisation");
faux("Un brasage fort sans azote de protection ne repond pas aux regles de l'art, il expose a un risque d'oxydation interne des tuyauteries");

quest("AgrFroid087 : Les titulaires d'un certificat de catégorie II (complétez) :://a");
rep("[ ] peuvent exclusivement récupérer des HFC");
rep("[ ] peuvent effectuer des réparations le circuit d'installations frigorifiques contenant plus de 10 kg de HFC");
rep("[ ] peuvent récupérer du HFC dans les installations qui en contiennent plus de 6 kg (ou plus de 12 kg si le système est de type hermétique)");
rep("[x] peuvent récupérer du HFC exclusivement dans les installations qui en contiennent moins de 3 kg (ou moins de 6 kg si le système est du type hermétique)");
faux("Les titulaires d'un certificat de categorie II sont limites a la recuperation sur des installations contenant moins de 3 kg, ou 6 kg si hermetique");

quest("AgrFroid088 : Un technicien frigoriste peut-il encore ajouter du HCFC?://a");
rep("[ ] Oui, s'il est certifié");
rep("[x] Non, l'utilisation du HCFC est totalement interdite depuis 2015");
rep("[ ] Oui, mais uniquement dans des installations construites avant 2001");
rep("[ ] Oui, mais uniquement du HCFC recyclé");
faux("L'utilisation du HCFC est totalement interdite depuis 2015, quelle que soit la certification du technicien");

quest("AgrFroid089 : Quand a lieu le contrôle obligatoire de l'étanchéité d'une installation HFC qui comprend un système de détection des fuites de plus de 500 tonnes équivalent CO2 de réfrigérant ?://a");
rep("[ ] Tous les 3 mois (et en cas de réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation)");
rep("[ ] Une fois par an (et en cas de réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation)");
rep("[x] Tous les 6 mois (et en cas de réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation)");
rep("[ ] Une fois tous les 2 ans (et en cas de réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation)");
faux("Comme pour les questions similaires, le controle avec detecteur fonctionnel reste semestriel au dela de 500 tonnes");

quest("AgrFroid090 : Qui peut effectuer le remplissage d'un équipement frigorifique contenant 50 tonnes équivalent CO2 ?://a");
rep("[ ] Un technicien frigoriste certifié/qualifié ou une personne travaillant sous sa responsabilité");
rep("[x] Exclusivement un technicien frigoriste disposant du certificat adéquat");
rep("[ ] Toute personne travaillant pour le compte de l'exploitant de l'équipement frigorifique");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique agréée/enregistrée");
faux("Le remplissage d'un equipement de 50 tonnes equivalent CO2 doit etre exclusivement realise par un technicien disposant du certificat adequat");

quest("AgrFroid091 : Qui peut intervenir sur les parties d'un équipement contenant 20 tonnes équivalent CO2 de HFC ?://a");
rep("[ ] Un technicien frigoriste certifié de catégorie I ou toute personne travaillant sous sa responsabilité");
rep("[x] Exclusivement un technicien disposant du certificat de catégorie I");
rep("[ ] Exclusivement un technicien disposant du certificat de catégorie I ou II");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique agréée/enregistrée");
faux("L'intervention sur un equipement contenant 20 tonnes equivalent CO2 de HFC necessite exclusivement le certificat de categorie I");

quest("AgrFroid092 : A partir de quand l'exploitant est-il obligé d'installer un système de détection de fuites ?://a");
rep("[ ] Si la puissance de l'équipement est supérieure à 300 kw frigorifique");
rep("[x] Si l'équipement frigorifique contient plus de 500 tonnes équivalent CO2 d'agent réfrigérant fluoré");
rep("[ ] Si la charge en agent réfrigérant fluoré est supérieure à 50 tonne équivalent CO2");
rep("[ ] Si l'équipement frigorifique contient un agent réfrigérant fluoré dont le GWP est supérieur à 1500");
faux("Comme precedemment, l'obligation d'installer un systeme de detection de fuites s'applique au dela de 500 tonnes equivalent CO2");

quest("AgrFroid093 : La période entre deux contrôles d'étanchéité d'équipements contenant des HFC non pourvus d'un système de détection de fuites :://a");
rep("[x] est moins longue comparativement à celle d'un équipement contenant la même masse nominale de HFC équipé d'un système de détection de fuites");
rep("[ ] est plus longue comparativement à celle d'un équipement contenant la même masse nominale de HFC équipé d'un système de détection de fuites");
rep("[ ] est identique à celle d'un équipement contenant la même masse nominale de HFC pourvu d'un système de détection de fuites");
rep("[ ] est d'une fois par an, quelle que soit la masse nominale d'agent réfrigérant");
faux("Un equipement sans systeme de detection de fuites doit etre controle plus frequemment qu'un equipement equivalent equipe d'un tel systeme");

quest("AgrFroid094 : Quelles sont les conditions minimales que doit remplir une entreprise en technique du froid pour pouvoir être agréée ?://a");
rep("[ ] Le chef de cette entreprise doit être un technicien disposant du certificat requis et son entreprise doit satisfaire aux prescriptions de la loi sur l'établissement");
rep("[ ] Les travailleurs occupés par cette entreprise sont exclusivement des techniciens frigoristes disposant du certificat ou de l'accès à la profession requis");
rep("[x] \"Elle doit employer du personnel titulaire d'un certificat pour les activités pertinentes, en nombre suffisant pour faire face au volume d'activité escompté, et apporter la preuve que le personnel dispose de l'outillage et des procédures nécessaires.\"");
rep("[ ] Son équipement doit correspondre au minimum à celui visé dans la règlementation régionale et son dirigeant doit disposer de l'accès à la profession de frigoriste");
faux("Une entreprise doit employer suffisamment de personnel certifie pour son volume d'activite et prouver qu'il dispose de l'outillage necessaire");

quest("AgrFroid095 : Le test de pression est réalisé par://a");
rep("[ ] un monteur frigoriste");
rep("[ ] un technicien agréé BA5");
rep("[ ] une personne disposant de l'accès à la profession de frigoriste");
rep("[x] un technicien frigoriste disposant du certificat adéquat");
faux("Le test de pression doit etre realise par un technicien frigoriste disposant du certificat adequat");

quest("AgrFroid096 : Le test réglementaire d'étanchéité à l'aide d'un détecteur d'une installation contenant 70 tonnes équivalent CO2 de HFC est réalisé par://a");
rep("[x] un technicien frigoriste certifié de catégorie I, II ou IV");
rep("[ ] un technicien frigoriste certifié de catégorie I ou II");
rep("[ ] un technicien frigoriste certifié de catégorie I ou IV");
rep("[ ] un technicien non obligatoirement certifié, le certificat est uniquement obligatoire pour les contrôles nécessitant d'accéder au circuit");
faux("Le test d'etancheite au detecteur sur une installation de 70 tonnes equivalent CO2 peut etre realise par un technicien des categories I, II ou IV");

quest("AgrFroid097 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 40 tonnes équivalent CO2 d'agent réfrigérant fluoré non équipée d'un système de détection des fuites?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");
faux("Une installation de 40 tonnes equivalent CO2 se situe dans la tranche 5 a moins de 50 tonnes, controlee tous les 12 mois sans detecteur");

quest("AgrFroid098 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HCF si aucun système de détection des fuites n'est installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");
faux("Une installation de 400 tonnes equivalent CO2 sans detecteur se situe dans la tranche 50 a moins de 500 tonnes, controlee tous les 6 mois");

quest("AgrFroid099 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HFC si il y a un système de détection des fuites ?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");
faux("Avec un systeme de detection de fuites, la frequence de controle pour 400 tonnes equivalent CO2 passe de 6 a 12 mois");

theme("St Laurent : L'agrégation du froid - Part2");
debut("Préparation à l'examen sur l'agrégation frigorifique");

quest("AgrFroid100 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 800 tonnes équivalent CO2 de HFC, tenant compte du fait qu'un système de détection de fuites a dû être installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");
faux("Comme pour toute installation de plus de 500 tonnes equivalent CO2, le controle avec detecteur reste semestriel");

quest("AgrFroid100 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 800 tonnes équivalent CO2 de HFC, tenant compte du fait qu'un système de détection de fuites a dû être installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");
faux("Comme pour toute installation de plus de 500 tonnes equivalent CO2, le controle avec detecteur reste semestriel");

quest("AgrFroid101 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 5 tonnes équivalent CO2 d'agent réfrigérant HFO sans détecteur de fuite ?://a");
rep("[x] agent réfrigérant non soumis à une obligation de contrôle");
rep("[ ] 6 mois");
rep("[ ] 1 mois");
rep("[ ] 12 mois");
faux("Les HFO ont un GWP tres faible, leur masse reelle traduite en tonnes equivalent CO2 reste souvent sous le seuil de 5 tonnes qui declenche l'obligation de controle");

quest("AgrFroid102 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 50 tonnes équivalant CO2 et plus de HFO ?://a");
rep("[ ] 6 mois");
rep("[ ] 3 mois");
rep("[ ] 12 mois");
rep("[x] agent réfrigérant non soumis à une obligation de contrôle");
faux("Meme a 50 tonnes et plus en masse reelle, le faible GWP des HFO fait que leur equivalent CO2 reste souvent sous le seuil declenchant une obligation de controle");

quest("AgrFroid103 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 500 tonnes équivalant CO2 ou plus d'agent réfrigérant fluoré pourvu d'un système de détection des fuites?://a");
rep("[x] 6 mois");
rep("[ ] 3 mois");
rep("[ ] 12 mois");
rep("[ ] 1 mois");
faux("Au dela de 500 tonnes equivalent CO2, meme avec un systeme de detection, le controle reste semestriel");

quest("AgrFroid104 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 50 tonnes équivalent CO2 d'agent réfrigérant fluoré ou plus sans système de détection des fuites ?://a");
rep("[ ] 3 mois");
rep("[ ] 1 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");
faux("Pour la tranche 50 a moins de 500 tonnes sans detecteur, le controle est semestriel");

quest("AgrFroid105 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation intérieure contenant 500 tonnes équivalent CO2 d'agent réfrigérant fluoré et plus sans système de détection des fuites ?://a");
rep("[ ] 12 mois");
rep("[ ] 6mois");
rep("[ ] 1 mois");
rep("[x] Cette situation est en contradiction avec le règlement n° 517/2014");
faux("Une installation de cette taille sans systeme de detection de fuites serait en infraction avec le reglement 517/2014 qui impose un detecteur au dela de 500 tonnes");

quest("AgrFroid106 : un équipement contenant 2 kg de HFC est-il soumis à un contrôle d'étanchéité en application du R842/2006 ?://a");
rep("[ ] non jamais");
rep("[ ] oui toujours");
rep("[x] depuis le 1/01/2017 si sa capacité est supérieure ou égale à 5 tonnes équivalent C02 ou 10 tonnes équivalent C02 si hermétique");
rep("[ ] à partir du 1/01/2018 si sa capacité est supérieure ou égale à 5 tonnes équivalent C02 ou 10 tonnes équivalent C02 si hermétique");
faux("Depuis le premier janvier 2017, le controle d'etancheite s'applique a partir de 5 tonnes equivalent CO2, ou 10 tonnes si l'equipement est hermetique, et non en fonction du poids en kg");

quest("AgrFroid107 : quelles sont les actes autorisés par le règlement R2015/2067 pour le technicien de catégorie III ?://a");
rep("[ ] récupération sur tous les équipements");
rep("[x] récupération sur des équipements contenant moins de 3 kg d'agent réfrigérant ou 6 kg si équipement reconnu hermétique");
rep("[ ] récupération sur des équipements contenant moins de 3 kg d'agent réfrigérant ou 6 kg si équipement reconnu hermétique ainsi que les contrôles d'étanchéité");
rep("[ ] récupération sur des équipements contenant moins de 3 kg d'agent réfrigérant ou 6 kg si équipement reconnu hermétique, les contrôles d'étanchéité et l'installation");
faux("Un technicien de categorie III est limite a la recuperation sur des equipements contenant moins de 3 kg, ou 6 kg si hermetiques, sans pouvoir effectuer de controles d'etancheite ni d'installation");

quest("AgrFroid108 : Un technicien frigoriste peut-il encore ajouter du HCFC ?://a");
rep("[ ] Oui, s'il est certifié");
rep("[x] Non, l'usage du HCFC est totalement interdit depuis 2015");
rep("[ ] Oui, mais uniquement dans des installations construites avant 2001");
rep("[ ] Oui, mais uniquement du HCFC recyclé");
faux("L'usage du HCFC est totalement interdit depuis 2015, quelle que soit la certification du technicien");

quest("AgrFroid109 : Quand a lieu le contrôle obligatoire de l'étanchéité d'une installation aux HFC dont le système de détection des fuites est en état de marche et qui contient plus de 500 tonnes équivalent CO2 de réfrigérant ?://a");
rep("[ ] Tous les 3 mois + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[ ] Une fois par an + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[x] Tous les 6 mois + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[ ] Une fois tous les 2 ans + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
faux("Comme pour toute installation de plus de 500 tonnes avec detecteur en etat de marche, le controle reste semestriel");

quest("AgrFroid110 : Qui peut effectuer le test de pression et le remplissage d'un équipement frigorifique contenant 50 tonnes équivalent CO2 ?://a");
rep("[ ] Un technicien frigoriste certifié ou une personne travaillant sous sa responsabilité");
rep("[x] Exclusivement un technicien frigoriste disposant du certificat adéquat");
rep("[ ] Toute personne travaillant pour le compte de l'exploitant de l'équipement frigorifique");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique spécialisée/enregistrée");
faux("Le test de pression et le remplissage d'un equipement de 50 tonnes equivalent CO2 doivent etre exclusivement realises par un technicien certifie");

quest("AgrFroid111 : Qui peut intervenir sur les parties d'un équipement frigorifique contenant 100 t éq. CO2 de HFC ?://a");
rep("[ ] Un technicien frigoriste certifié de catégorie I ou une personne travaillant sous sa responsabilité");
rep("[x] Exclusivement un technicien disposant du certificat de catégorie I");
rep("[ ] Exclusivement un technicien disposant du certificat de catégorie I ou II");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique spécialisée/enregistrée");
faux("L'intervention sur un equipement contenant 100 tonnes equivalent CO2 de HFC necessite exclusivement le certificat de categorie I");

quest("AgrFroid112 : A partir de quand l'exploitant est-il obligé d'installer un système de détection de fuites ?://a");
rep("[ ] Si la puissance de l'équipement est supérieure à 300 kw frigorifique");
rep("[x] Si l'équipement frigorifique contient plus de 500 tonnes équivalent CO2 d'agent réfrigérant fluoré");
rep("[ ] Si la charge en agent réfrigérant fluoré est supérieure à 50 tonne équivalent CO2");
rep("[ ] Si l'équipement frigorifique contient un agent réfrigérant fluoré dont le GWP est supérieur à 1500");
faux("L'obligation d'installer un systeme de detection de fuites s'applique au dela de 500 tonnes equivalent CO2 d'agent refrigerant fluore");

quest("AgrFroid113 : L'intervalle de temps entre deux contrôles d'étanchéité d’un équipement contenant des HFC non pourvu d'un système de détection de fuites :://a");
rep("[ ] est plus important comparativement au même équipement pourvu d’un système de détection des fuites");
rep("[x] est plus faible comparativement au même équipement pourvu d’un système de détection des fuites");
rep("[ ] est identique comparativement au même équipement pourvu d’un système de détection des fuites");
rep("[ ] est d'une fois tous les 3 mois, quelle que soit la masse nominale d'agent réfrigérant");
faux("Un equipement sans systeme de detection doit etre controle plus frequemment qu'un equipement equivalent equipe d'un tel systeme");

quest("AgrFroid114 : Quelles sont les conditions minimales que doit remplir une entreprise en technique du froid pour pouvoir être agréée ?://a");
rep("[ ] Le chef de cette entreprise doit disposer du certificat requis");
rep("[ ] Les travailleurs occupés par cette entreprise sont exclusivement des techniciens frigoristes disposant du certificat requis");
rep("[x] Elle doit employer du personnel titulaire d'un certificat pour les activités pertinentes, en nombre suffisant pour faire face au volume d'activité escompté, et apporter la preuve que le personnel dispose de l'outillage et des procédures nécessaires.");
rep("[ ] Son équipement doit correspondre au minimum à celui visé dans la règlementation régionale et son dirigeant doit disposer de l'accès à la profession de frigoriste");
faux("Une entreprise doit employer suffisamment de personnel certifie pour son volume d'activite et prouver qu'il dispose de l'outillage et des procedures necessaires");

quest("AgrFroid115 : Le test de pression est réalisé par://a");
rep("[ ] un monteur frigoriste");
rep("[ ] un technicien agréé BA5");
rep("[ ] un technicien en possession d'un diplôme de frigoriste délivré par le jury central");
rep("[x] un technicien frigoriste disposant du certificat adéquat");
faux("Le test de pression doit etre realise par un technicien frigoriste disposant du certificat adequat");

quest("AgrFroid116 : Le test d'étanchéité d'une installation contenant 7 kg de HFC ou HCFC est réalisé par :://a");
rep("[x] un technicien frigoriste certifié de catégorie I");
rep("[ ] un technicien frigoriste certifié de catégorie II");
rep("[ ] un technicien agréé BA4");
rep("[ ] un technicien en possession d'un accès à la profession de frigoriste");
faux("Le test d'etancheite d'une installation contenant 7 kg de HFC ou HCFC doit etre realise par un technicien de categorie I");

quest("AgrFroid117 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation, équipée d'un système de détection de fuite, contenant 40 tonnes équivalent CO2 de gaz à effet de serre fluoré ?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");
faux("Avec un systeme de detection, la tranche 5 a 50 tonnes reste controlee tous les 12 mois, meme frequence que sans detecteur a ce niveau");

quest("AgrFroid118 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HCF si aucun système de détection des fuites n'est installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");
faux("Une installation de 400 tonnes sans detecteur se situe dans la tranche 50 a 500 tonnes, controlee tous les 6 mois");

quest("AgrFroid119 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HFC si il y a un système de détection des fuites ?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");
faux("Avec un systeme de detection, la frequence de controle pour 400 tonnes passe de 6 a 12 mois");

quest("AgrFroid120 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 800 tonnes équivalent CO2 de HFC, tenant compte du fait qu'un système de détection de fuites a été installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");
faux("Au dela de 500 tonnes, meme avec un systeme de detection installe, le controle reste semestriel");

quest("AgrFroid121 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation, sans détecteur de fuite, contenant 5 tonnes équivalent CO2, ou plus, d'agent réfrigérant HFC ou HFO ?://a");
rep("[ ] 3mois");
rep("[ ] 6 mois");
rep("[ ] 1 mois");
rep("[x] 12 mois");
faux("Pour la tranche 5 a moins de 50 tonnes equivalent CO2 sans detecteur, le controle est annuel, qu'il s'agisse de HFC ou de HFO");

quest("AgrFroid122 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation, sans détécteur de fuite, contenant 50 tonnes équivalant CO2 et plus d'agent réfrigérant fluoré HFC et HFO ?://a");
rep("[x] 6 mois");
rep("[ ] 3 mois");
rep("[ ] 12 mois");
rep("[ ] 1 mois");
faux("Pour la tranche 50 a moins de 500 tonnes sans detecteur, le controle est semestriel, quel que soit le type de gaz fluore concerne");

quest("AgrFroid123 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 500 tonnes équivalant CO2 et plus d'agent réfrigérant fluoré et plus avec détecteur de fuite?://a");
rep("[x] 6 mois");
rep("[ ] 3 mois");
rep("[ ] 12 mois");
rep("[ ] 1 mois");
faux("Au dela de 500 tonnes equivalent CO2, le controle avec detecteur reste semestriel");

quest("AgrFroid124 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 50 tonnes équivalent CO2 d'agent réfrigérant fluoré et plus sans détecteur de fuite ?://a");
rep("[ ] 3 mois");
rep("[ ] 1 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");
faux("Pour la tranche 50 a moins de 500 tonnes sans detecteur, le controle est semestriel");

quest("AgrFroid125 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 500 tonnes équivalent CO2 d'agent réfrigérant fluoré et plus, sans détecteur de fuite ?://a");
rep("[ ] 12 mois");
rep("[ ] 6mois");
rep("[ ] 1 mois");
rep("[x] 3 mois");
faux("Sans systeme de detection, une installation de plus de 500 tonnes doit etre controlee tous les 3 mois, la frequence la plus stricte");

quest("AgrFroid126 : Le règlement n° 517/ 2014 abroge://a");
rep("[x] le règlement n° 842/2006");
rep("[ ] le règlement n°1005/2009");
rep("[ ] le règlement n° 2037/2000");
rep("[ ] le règlement n° 1516/2007");
faux("Le reglement 517/2014 a remplace et abroge le precedent reglement europeen 842/2006 sur les gaz fluores");

quest("AgrFroid127 : Les PFC sont-ils visés par le règlement n° 517/ 2014?://a");
rep("[x] Oui");
rep("[ ] Non");
rep("[ ] Oui, dès que leur pouvoir de réchauffement est supérieur ou égal à 1500");
rep("[ ] Non, sauf s'ils présentent un caractère inflammable");
faux("Les PFC font partie des gaz a effet de serre fluores vises par le reglement 517/2014, au meme titre que les HFC");

quest("AgrFroid128 : L'objectif européen de réduction de 80 à 95% des émissions de gaz à effet de serre est attendu à l'horizon:://a");
rep("[ ] 2020");
rep("[ ] 2025");
rep("[ ] 2030");
rep("[x] 2050");
faux("L'objectif europeen de reduction des emissions de gaz a effet de serre de 80 a 95 pourcent est fixe a l'horizon 2050");

quest("AgrFroid129 : Une entreprise travaillant sur des circuits frigorifiques de camions et remorques réfrigérés au HFC doit-elle être agréée/enregistrée?://a");
rep("[ ] Oui dans tous les cas");
rep("[ ] Oui, uniquement si les équipements contiennent plus de 5 téq. CO2");
rep("[x] Non, seul le personnel intervenant sur les circuits doit être certifié/qualifié");
rep("[ ] Non, les camions et remorques réfrigérés au HFC ne sont pas visés par le règlement n° 517/2014");
faux("Les entreprises intervenant sur les camions et remorques frigorifiques ne doivent pas forcement etre agreees, mais le personnel intervenant doit etre certifie");

quest("AgrFroid130 : PRP/GWP://a");
rep("[x] potentiel de réchauffement planétaire");
rep("[ ] pourcentage de réduction de pression");
rep("[ ] potentiel de refroidissement particulier");
rep("[ ] potentiel de refroidissement planétaire");
faux("Les sigles PRP et GWP designent tous deux le potentiel de rechauffement planetaire d'un gaz");

quest("AgrFroid131 : Quel est le PRP/GWP maximal des réfrigérants présents dans les réfrigérateurs et congélateurs domestiques actuellement mis sur le marché ?://a");
rep("[ ] 2500");
rep("[x] 150");
rep("[ ] 1500");
rep("[ ] 5000");
faux("Les reglements europeens limitent le GWP maximal des refrigerants dans les refrigerateurs et congelateurs domestiques neufs a 150");

quest("AgrFroid132 : Quelle est la date limite de mise sur le marché des réfrigérateurs et congélateurs à usage commercial hermétiquement scellés contenant des HFC ayant un PRP supérieur ou égal à 2500?://a");
rep("[ ] le 1 janvier 2022");
rep("[ ] le 1 janvier 2019");
rep("[x] le 1 janvier 2020");
rep("[ ] le 1 janvier 2030");
faux("La mise sur le marche de ces equipements avec un refrigerant de GWP superieur ou egal a 2500 est interdite depuis le premier janvier 2020");

quest("AgrFroid133 : Quelle est la date limite de mise sur le marché des réfrigérateurs et congélateurs à usage commercial hermétiquement scellés contenant des HFC ayant un PRP supérieur ou égal à 150?://a");
rep("[x] le 1 janvier 2022");
rep("[ ] le 1 janvier 2015");
rep("[ ] le 1 janvier 2020");
rep("[ ] le 1 janvier 2030");
faux("Pour un GWP superieur ou egal a 150, l'interdiction de mise sur le marche s'applique depuis le premier janvier 2022");

quest("AgrFroid134 : Quelle est la date limite de mise sur le marché des équipements de réfrigération fixes contenant des HFC ayant un PRP/GWP supérieur ou égal à 2500 (sauf applications conçues pour refroidir à -50°c ou plus bas) ?://a");
rep("[ ] le 1 janvier 2022");
rep("[ ] le 1 janvier 2015");
rep("[x] le 1 janvier 2020");
rep("[ ] le 1 janvier 2030");
faux("Les equipements de refrigeration fixes contenant un refrigerant de GWP superieur ou egal a 2500 sont interdits a la mise sur le marche depuis le premier janvier 2020");

quest("AgrFroid135 : A partir de quelle date les systèmes de réfrigération centralisés multipostes à usage commercial d'une capacité nominale de 40kW ou plus contenant des gaz à effet de serre fluorés dont le PRP est supérieur ou égal à 150 ne pourront plus être installés?://a");
rep("[ ] le 1 janvier 2022, dans tous les cas");
rep("[x] le 1 janvier 2022, excepté pour les circuits primaires de réfrigération des systèmes en cascade qui peuvent contenir un réfrigérant dont le PRP est inférieur ou égal à 1500");
rep("[ ] le 1 janvier 2020, dans tous les cas");
rep("[ ] le 1 janvier 2022, excepté pour les circuits primaires de réfrigération des systèmes en cascade qui peuvent contenir un réfrigérant dont le PRP est inférieur ou égal à 2500");
faux("Depuis le premier janvier 2022, ces systemes centralises ne peuvent plus etre installes avec un GWP superieur ou egal a 150, sauf exception pour les circuits primaires des systemes en cascade limites a un GWP de 1500");

quest("AgrFroid136 : A partir de quand la vente d'équipements de climatisation mobiles (hermétiquement scellés que l'utilisateur final peut transporter d'un local à l'autre) contenant des HFC ayant un PRP (GWP) de 150 ou plus sera-t-elle interdite ?://a");
rep("[ ] le 1 janvier 2022");
rep("[ ] le 1 janvier 2015");
rep("[x] le 1 janvier 2020");
rep("[ ] le 1 janvier 2030");
faux("La vente de climatiseurs mobiles hermetiques avec un refrigerant de GWP de 150 ou plus est interdite depuis le premier janvier 2020");

quest("AgrFroid137 : A partir de quand la vente d'équipements de climatisation bi-bloc (split system) contenant 3 kg ou moins de HFC dont le PRP/GWP est supérieur ou égal à 750 est-elle interdite ?://a");
rep("[ ] le 1 janvier 2022");
rep("[x] le 1 janvier 2025");
rep("[ ] le 1 janvier 2020");
rep("[ ] le 1 janvier 2030");
faux("Pour les systemes bi-bloc contenant 3 kg ou moins de HFC avec un GWP superieur ou egal a 750, l'interdiction de vente s'applique a partir du premier janvier 2025");

quest("AgrFroid138 : Quelle est l'information principale devant être vérifiée par les entreprises fournissant des gaz à effets de serre fluorés ?://a");
rep("[ ] Que le numéro BCE de la société qui achète le gaz soit valide");
rep("[ ] Que l'entreprise achetant le gaz dispose d'un numéro d'agrément/enregistrement valide auprès du SPF Environnement");
rep("[x] Que l'entreprise achetant le gaz dispose d'un numéro d'agrément/enregistrement régional valide");
rep("[ ] Que le numéro ONSS de la société qui achète le gaz soit valide");
faux("Les entreprises fournissant des gaz fluores doivent verifier que l'entreprise acheteuse dispose d'un numero d'agrement ou d'enregistrement regional valide");

quest("AgrFroid139 : Quels équipements sont visés par le règlement 517/2014 qui ne l'étaient pas par le règlement 842/2006 ?://a");
rep("[ ] Les unités de réfrigération de camions frigorifiques et les iso-containers (reefers)");
rep("[x] Les unités de réfrigération de camions frigorifiques et les remorques frigorifiques");
rep("[ ] Les iso-containers (reefers) et les remorques frigorifiques");
rep("[ ] La climatisation des bus et des poids lourds (de MMA > 3.5 t)");
faux("Le reglement 517/2014 a etendu son champ d'application aux unites de refrigeration des camions et des remorques frigorifiques, non couvertes par le reglement precedent");

quest("AgrFroid140 : Quelle est la principale différence de traitement instaurée par le R517/2014 entre les installations frigorifiques fixes et celles équipant les camions et remorques frigorifiques?://a");
rep("[x] Pour les camions et remorques frigorifiques il n'est pas prévu de certification des entreprises");
rep("[ ] Vu que les équipements des camions présentent des taux de fuites plus élevés, la fréquence de contrôle est double");
rep("[ ] Un technicien de catégorie II pourra intervenir sur un camion frigorifique contenant 3 kg de HFC ou plus");
rep("[ ] Le fait que les techniciens certifiés pour les équipements frigorifiques fixes pourront travailler sur les équipements des camions mais pas l'inverse");
faux("Contrairement aux installations fixes, le reglement ne prevoit pas de certification obligatoire pour les entreprises intervenant sur les camions et remorques frigorifiques");

quest("AgrFroid141 : Qui est habilité à réaliser des interventions sur les circuits frigorifiques contenant des HFCs de camions ou remorques?://a");
rep("[ ] Les techniciens certifiés /agréés, à condition qu'ils travaillent pour le compte d'une entreprise agréée /enregistrée");
rep("[x] Exclusivement les techniciens certifiés /agréés de catégorie I, ou II si la charge est < 3 kg");
rep("[ ] Exclusivement les techniciens certifiés /agréés de catégorie III");
rep("[ ] Tous les frigoristes qualifiés, les camions et remorques frigorifiques n'étant pas couverts par le règlement n°517/2014");
faux("Seuls les techniciens certifies de categorie I, ou de categorie II si la charge est inferieure a 3 kg, sont habilites a intervenir sur les circuits frigorifiques des camions et remorques");

quest("AgrFroid142 : Le test d'étanchéité à l'aide d'un détecteur de fuite d'une installation contenant 7 kg de HFC ou HCFC est réalisé par://a");
rep("[x] un technicien frigoriste certifié de catégorie I, II ou IV");
rep("[ ] Exclusivement par un technicien de catégorie I");
rep("[ ] Exclusivement par un technicien de catégorie I ou II");
rep("[ ] Exclusivement par un technicien de catégorie I ou IV");
faux("Le test d'etancheite au detecteur d'une installation de 7 kg de HFC ou HCFC peut etre realise par un technicien des categories I, II ou IV");

quest("AgrFroid143 : L'Accord de Paris://a");
rep("[ ] a été adopté en vue de réduire exclusivement les émissions de gaz à effet de serre fluorés");
rep("[ ] remplace le protocole de Montréal");
rep("[ ] a permis la modification de la norme EN 378");
rep("[x] vise principalement à contenir l’élévation de la température moyenne de la planète nettement en dessous de 2 °C par rapport aux niveaux préindustriels");
faux("L'Accord de Paris vise principalement a contenir l'elevation de la temperature moyenne de la planete nettement en dessous de 2 degres par rapport aux niveaux preindustriels");

quest("AgrFroid144 : L'Amendement de Kigali://a");
rep("[x] est un accord global visant la réduction des HFC");
rep("[ ] a été signé lors du Sommet de Paris pour le climat");
rep("[ ] vise l'interdiction mondiale des gaz appauvrissant la couche d'ozone");
rep("[ ] vise l'interdiction d'utilisation des HFC au Rwanda");
faux("L'Amendement de Kigali est un accord international visant specifiquement la reduction progressive des HFC au niveau mondial");

quest("AgrFroid145 : Lequel de ces réfrigérants a le PRP/GWP le plus bas?://a");
rep("[x] Ammoniac");
rep("[ ] CO2");
rep("[ ] HFC-1234yf");
rep("[ ] HFE-125");
faux("Parmi ces options, l'ammoniac possede le pouvoir de rechauffement global le plus bas, proche de zero");

quest("AgrFroid146 : Qui doit conserver les informations consignées dans le registre (logbook)?://a");
rep("[ ] Uniquement l'exploitant");
rep("[x] L'exploitant et l'entreprise agréée/enregistrée");
rep("[ ] L'administration régionale compétente");
rep("[ ] Le technicien agréé et son employeur");
faux("Tant l'exploitant que l'entreprise agreee ou enregistree doivent conserver les informations consignees dans le registre");

quest("AgrFroid147 : L'entreprise agréée/enregistrée doit-elle conserver une copie des informations notifiées dans le registre de ses clients?://a");
rep("[x] Oui toujours");
rep("[ ] Non, sauf si l'exploitant ne dispose pas de registre");
rep("[ ] Non, les interventions doivent être uniquement consignée dans le registre de l'exploitant");
rep("[ ] Uniquement si une fuite a été constatée sur l'équipement");
faux("L'entreprise agreee ou enregistree doit systematiquement conserver une copie des informations qu'elle notifie dans le registre de ses clients");

quest("AgrFroid148 : A partir de 2020, les HFC de GWP/PRP > à 2500 ne pourront plus être utilisés pour effectuer l'appoint dans les systèmes de réfrigération existants sauf si://a");
rep("[x] il s'agit de gaz régénérés, conformément étiquetés");
rep("[ ] les systèmes de réfrigération contiennent moins de 500 t éq. CO2");
rep("[ ] les équipements disposent de système de détection des fuites");
rep("[ ] l'équipement a été installé avant le 01/01/2015");
faux("A partir de 2020, l'appoint avec des HFC de GWP superieur a 2500 n'est plus autorise sauf s'il s'agit de gaz regeneres correctement etiquetes");

quest("AgrFroid149 : Quel gaz pourra encore être utilisé en 2022 pour effectuer l'appoint d'un équipement contenant 30 t éq. CO2 de R404a ?://a");
rep("[ ] Uniquement du gaz régénéré");
rep("[x] Un gaz neuf (vierge), recyclé ou régénéré");
rep("[ ] Uniquement du gaz recyclé");
rep("[ ] Uniquement du gaz régénéré ou recyclé");
faux("En 2022, un equipement au R404a peut encore etre complete avec du gaz neuf, recycle ou regenere, les restrictions plus strictes ne s'appliquant qu'aux gaz de GWP tres eleve");

quest("AgrFroid150 : A partir de quand l'appoint d'un équipement contenant 50 t éq. CO2 de R404A sera interdite avec du gaz neuf ?://a");
rep("[x] 01/01/20");
rep("[ ] 01/01/25");
rep("[ ] 01/01/30");
rep("[ ] 01/01/22");
faux("A partir du premier janvier 2020, l'appoint avec du gaz neuf devient interdit pour les equipements de cette taille contenant du R404A, un fluide a tres fort GWP");

quest("AgrFroid150 : A partir de quand l'appoint d'un équipement contenant 50 t éq. CO2 de R404A sera interdite avec du gaz neuf ?://a");
rep("[x] 01/01/20");
rep("[ ] 01/01/25");
rep("[ ] 01/01/30");
rep("[ ] 01/01/22");
faux("A partir du premier janvier 2020, l'appoint avec du gaz neuf devient interdit pour les equipements de cette taille contenant du R404A, un fluide a tres fort GWP");

quest("AgrFroid151 : A partir de quand l'appoint d'un équipement contenant 50 t éq. CO2 de R404A sera totalement interdite ?://a");
rep("[ ] 01/01/20");
rep("[ ] 01/01/25");
rep("[x] 01/01/30");
rep("[ ] 01/01/22");
faux("A partir du premier janvier 2030, l'appoint du R404A sera totalement interdit, meme avec du gaz regenere ou recycle, pour les equipements de cette capacite");

quest("AgrFroid152 : Qui peut travailler avec des HFE/HFO ?://a");
rep("[ ] Un technicien disposant du certificat requis, ayant suivi un module complémentaire sur la sécurité");
rep("[x] Ce n'est pas prévu par la réglementation sur les gaz à effet de serre fluorés");
rep("[ ] Vu leur caractère inflammable, exclusivement un technicien de catégorie I");
rep("[ ] Personne, l'utilisation de ces gaz est interdite sur le territoire de l'Union européenne");
faux("Les HFE et HFO ne sont generalement pas consideres comme des gaz a effet de serre fluores au sens de cette reglementation, leur utilisation n'est donc pas encadree par ce texte specifique");

quest("AgrFroid153 : Quelle affirmation relative aux HFE/HFO est correcte :://a");
rep("[ ] Ces gaz doivent être récupérés par du personnel certifié");
rep("[ ] Les équipements contenant ces gaz doivent faire l'objet de contrôles d'étanchéité périodiques réglementaires");
rep("[ ] Ces gaz ne contribuent pas au réchauffement climatique");
rep("[x] L'installation de systèmes contenant ces gaz peut ne pas être réalisée par un technicien disposant du certificat requis");
faux("N'etant pas vises par la reglementation sur les gaz a effet de serre fluores, les systemes a base de HFE/HFO peuvent etre installes sans que le certificat frigoriste classique soit obligatoire");

quest("AgrFroid154 : En cas de présomption de fuite :://a");
rep("[x] Je dois appliquer la méthode directe de contrôle des fuites");
rep("[ ] Je dois appliquer la méthode indirecte de contrôle des fuites");
rep("[ ] Je peux appliquer la méthode directe ou indirecte de contrôle des fuites");
rep("[ ] Je dois appliquer la méthode directe et indirecte de contrôle des fuites");
faux("En cas de presomption de fuite, il faut appliquer la methode directe de controle pour confirmer et localiser precisement la fuite");

quest("AgrFroid155 : L'application d'une solution savonneuse :://a");
rep("[x] Est une méthode directe de contrôle d'étanchéité");
rep("[ ] Est une méthode indirecte de contrôle d'étanchéité");
rep("[ ] N'est ni une méthode directe, ni indirecte de contrôle d'étanchéité, mais uniquement une technique permettant de localiser une fuite, une fois que la méthode directe ou indirecte met en évidence une fuite");
rep("[ ] N'est pas autorisée par la réglementation européenne car peu précise");
faux("L'application d'une solution savonneuse est une methode directe de controle d'etancheite, car elle detecte physiquement la fuite");

quest("AgrFroid156 : Une réparation de fuite :://a");
rep("[ ] doit-être suivie par : 1. une recharge ; 2. un test d'étanchéité.");
rep("[ ] ne peut être réalisée que si l'équipement a été reconnu conforme aux exigences de la directive PED.");
rep("[x] doit être suivie par :1. un test de pression avec de l'azote sec ou un autre gaz sec approprié.2. une évacuation ;3. une recharge ;4. un test d'étanchéité.");
rep("[ ] ne doit pas obligatoirement être renseignée dans le registre (seul l'éventuel appoint de gaz doit l'être).");
faux("Une reparation de fuite doit etre suivie d'un protocole complet: test de pression a l'azote, evacuation, recharge, puis nouveau test d'etancheite");

quest("AgrFroid157 : Le contrôle complémentaire réalisé dans le mois qui suit une réparation de fuite :://a");
rep("[ ] peut toujours être considéré comme un contrôle périodique de fuite, à partir duquel il convient de comptabiliser les délais");
rep("[x] peut uniquement être considéré comme un contrôle périodique de fuite, à partir duquel il convient de comptabiliser les délais, s'il porte sur l'ensemble de l'équipement");
rep("[ ] ne peut pas être considéré comme un contrôle périodique de fuite");
rep("[ ] peut uniquement être considéré comme un contrôle périodique de fuite si la charge en réfrigérant est < 50 t éq.CO2 2 Questions d'examen portant sur la connaissance de la législation wallonne");
faux("Le controle realise dans le mois suivant une reparation ne peut etre considere comme le controle periodique de reference que s'il porte sur l'ensemble de l'equipement, pas uniquement sur la zone reparee");

quest("AgrFroid158 : Dans quel délai doit-on vidanger le réfrigérant d'une installation après sa mise hors service définitive ?://a");
rep("[ ] Dans un délai de 6 mois");
rep("[x] Dans le mois qui suit");
rep("[ ] Dès que l'autorisation de reprise a été délivrée par l'administration régionale compétente en matière de déchets");
rep("[ ] Le ferrailleur disposant d'un agrément pour la collecte et le transport de déchets dangereux dispose d'un mois après le transport de l'installation pour la faire vidanger par une personne disposant du certificat requis");
faux("Le refrigerant d'une installation definitivement mise hors service doit etre vidange dans le mois qui suit sa mise hors service");

quest("AgrFroid159 : Qui a l'autorisation de détruire du réfrigérant ?://a");
rep("[ ] Toute personne possédant l'équipement nécessaire");
rep("[ ] Tous les techniciens frigoristes certifiés");
rep("[x] Uniquement les sociétés autorisées à cette fin");
rep("[ ] Exclusivement les fabricants de réfrigérants");
faux("Seules des societes specifiquement autorisees a cette fin peuvent detruire du refrigerant, ce n'est pas a la portee de tout technicien");

quest("AgrFroid160 : Qu'entend-on par examen de mise à niveau ?://a");
rep("[x] C'est l'examen que l'on doit réussir pour obtenir une prolongation de 5 ans de la validité du certificat");
rep("[ ] C'est l'examen que les techniciens certifiés provenant d'un autre Etat membre de l'UE doivent passer");
rep("[ ] C'est l'examen que l'on doit passer quand on a échoué à la première épreuve");
rep("[ ] C'est l'examen qui doit être passé chaque fois que les techniques de réfrigération évoluent sensiblement");
faux("L'examen de mise a niveau est celui que doit reussir un technicien pour obtenir le renouvellement de 5 ans de son certificat");

quest("AgrFroid161 : Il doit y avoir un registre :://a");
rep("[ ] dans la camionnette du technicien frigoriste");
rep("[ ] dans les bureaux de l'entreprise en technique du froid");
rep("[x] tenu par l'exploitant et mis à disposition de l'autorité publique chargée du contrôle");
rep("[ ] auprès de chaque équipement contenant moins de 5 t éq. de CO2");
faux("Le registre doit etre tenu par l'exploitant de l'equipement et etre mis a disposition de l'autorite publique chargee du controle");

quest("AgrFroid162 : Une entreprise agréée/enregistrée en technique du froid est obligée de tenir une comptabilité des fluides récupérés :://a");
rep("[x] Oui");
rep("[ ] Non");
rep("[ ] Seulement si elle récupère plus de 30 kg de réfrigérant par an");
rep("[ ] Seulement si elle récupère plus de 300 kg de réfrigérant par an");
faux("Toute entreprise agreee ou enregistree est obligee de tenir une comptabilite des fluides qu'elle recupere, sans seuil minimum");

quest("AgrFroid163 : Quand le réfrigérant d'une installation définitivement mise hors service doit-il être récupéré ?://a");
rep("[ ] Immédiatement après la mise hors service");
rep("[x] Dans le mois suivant la mise hors service");
rep("[ ] Dans les 3 mois suivant la mise hors service");
rep("[ ] Dans les 6 mois suivant la mise hors service");
faux("Le refrigerant d'une installation definitivement mise hors service doit etre recupere dans le mois suivant cette mise hors service");

quest("AgrFroid164 : Une installation de réfrigération a une capacité de 25 t éq.CO2 de HFC. Qui doit, selon la réglementation relative au permis d'environnement, pouvoir fournir à l'autorité compétente la preuve de conformité de l'installation au test de pression ?://a");
rep("[ ] Cette preuve n'est pas nécessaire car elle n'est imposée qu'à partir d'une capacité de 200 téq. CO2");
rep("[ ] L'installateur de l'installation de réfrigération");
rep("[x] L'exploitant de l'installation de réfrigération");
rep("[ ] L'organisme de contrôle accréditée qui a réceptionné l'installation");
faux("C'est a l'exploitant de l'installation de pouvoir fournir a l'autorite competente la preuve de conformite au test de pression");

quest("AgrFroid165 : Un certificat délivré par un centre d'examen agrée par la RW ou la RBC destiné aux techniciens frigoristes est valable:://a");
rep("[x] pour une durée de 5 ans");
rep("[ ] pour 10 ans");
rep("[ ] pour une durée d'un an");
rep("[ ] ce certificat doit être renouvelé chaque année");
faux("Un certificat delivre par un centre d'examen agree par la Region wallonne ou bruxelloise est valable pour une duree de 5 ans");

quest("AgrFroid166 : L'entreprise en technique frigorifique spécialisée/enregistrée qui effectue le stockage d'agents réfrigérants://a");
rep("[ ] peut transporter ses bouteilles remplies à maximum 80% de sa contenance dans un parc à container");
rep("[ ] peut remettre sur le marché des bouteilles de fluides récupéré");
rep("[ ] doit s'enregistrer sur le site http://ec.europa.eu/clima/policies/f-gas/ de la Commission européenne");
rep("[x] doit tenir à jour un registre des déchets stockés");
faux("Une entreprise effectuant le stockage d'agents refrigerants doit tenir a jour un registre des dechets qu'elle stocke");

quest("AgrFroid167 : Vis-à-vis de la protection de l'environnement, quelle doit être la ligne de conduite d'un technicien frigoriste certifié vis-à-vis de l'agent réfrigérant fluoré://a");
rep("[ ] il doit veiller à ce que le fluide soit constamment exempt d'huile, d'acides et autres impuretés");
rep("[ ] il doit le remplacer régulièrement et chaque fois qu'il présente des signes d'usures");
rep("[x] il doit effectuer les opérations pouvant être à l'origine d'émissions d'agent réfrigérant en se conformant aux recommandations de la norme NBN EN 378");
rep("[ ] il doit signaler toute fuite et se procurer le fluide nécessaire pour remplir l'installation sans délai");
faux("Vis-a-vis de l'environnement, le technicien doit effectuer les operations pouvant generer des emissions en se conformant aux recommandations de la norme NBN EN 378");

quest("AgrFroid168 : Les interventions sur les parties d'un équipement frigorifique contenant ou pouvant contenir de l'agent réfrigérant fluoré ne peuvent être effectuées que par://a");
rep("[ ] un technicien agréé BA4 qui dispose du certificat de catégorie adéquate");
rep("[ ] un technicien agréé BA5 qui dispose du certificat de catégorie adéquate");
rep("[x] un technicien frigoriste qui dispose du certificat de catégorie adéquate et travaille pour le compte d’une entreprise en technique frigorifique agréée/enregistrée qu'il s’agisse d’installation, d’entretien, de réparation ou de récupération.");
rep("[ ] un technicien en possession d'e l'accès à la profession de frigoriste.");
faux("Toute intervention, qu'il s'agisse d'installation, d'entretien, de reparation ou de recuperation, doit etre effectuee par un technicien certifie travaillant pour une entreprise agreee ou enregistree");

quest("AgrFroid169 : Le technicien certifié peut-il laisser s'échapper des agents réfrigérants fluorés vers l'atmosphère ?://a");
rep("[ ] Oui, sauf lorsqu'un phénomène d'inversion de température est observé");
rep("[ ] Oui, sauf si il s'agit d'un gaz toxique");
rep("[ ] Oui, moyennant accord fourni par l'AWAC/IBGE");
rep("[x] Non, jamais");
faux("Un technicien certifie ne peut en aucun cas, quelles que soient les circonstances, laisser s'echapper des agents refrigerants fluores vers l'atmosphere");

quest("AgrFroid170 : Est-ce qu'un technicien frigoriste certifié doit disposer d'un équipement technique minimum, réglementairement défini, pour pouvoir intervenir.://a");
rep("[ ] Oui, chaque technicien frigoriste certifié doit être propriétaire du matériel repris en annexe de l'arrêté relatif à la reconnaissance des techniciens et des sociétés en technique frigorifique");
rep("[x] Oui, et c'est la responsabilité de l'entreprise en technique frigorifique agréée/enregistrée pour laquelle il travaille de le lui fournir");
rep("[ ] Non, c'est la responsabilité de chaque entreprise en technique frigorifique agréé de définir le matériel minimum que chaque technicien frigoriste certifié doit posséder");
rep("[ ] Uniquement s'il intervient sur des équipements contenant plus de 50 tonnes équivalent CO2 de réfrigérant fluoré");
faux("C'est la responsabilite de l'entreprise en technique frigorifique agreee ou enregistree de fournir a ses techniciens l'equipement technique minimum requis");

quest("AgrFroid171 : Qui le technicien frigoriste certifié doit il impérativement informer en cas de pertes relatives en agent réfrigérant fluoré trop élevées.://a");
rep("[ ] L'administration wallonne/bruxelloise");
rep("[ ] La Direction de l'entreprise dans laquelle travaille le technicien frigoriste");
rep("[x] L'exploitant de l'équipement concern");
rep("[ ] La police compétente sur le territoire où est implanté l'équipement concerné");
faux("En cas de pertes relatives en refrigerant fluore trop elevees, le technicien doit en informer l'exploitant de l'equipement concerne");

quest("AgrFroid172 : Une entreprise en technique frigorifique agréée/enregistrée://a");
rep("[x] doit pouvoir fournir à ses techniciens frigoristes certifiés au minimum la matériel défini dans les arrêtés régionaux");
rep("[ ] doit posséder un groupe de récupération sauf si elle ne travaille que sur des équipements de climatisation de type monosplit");
rep("[ ] doit posséder un groupe de récupération sauf si elle ne travaille que sur des pompes à chaleur");
rep("[ ] doit disposer d'un groupe de récupération uniquement si elle travaille sur des équipements contenant des HCFC");
faux("Une entreprise agreee doit pouvoir fournir a ses techniciens au minimum le materiel defini dans les arretes regionaux");

quest("AgrFroid173 : Une entreprise en technique frigorifique spécialisée / enregistrée doit posséder://a");
rep("[x] une pompe à vide à deux étages");
rep("[ ] une pompe à vide à 1 étage");
rep("[ ] une pompe à vide à galets");
rep("[ ] une pompe permettant de vider les vannes de l'air et de l'humidité");
faux("Une entreprise en technique frigorifique specialisee ou enregistree doit posseder une pompe a vide a deux etages, plus performante qu'un modele a un seul etage");

quest("AgrFroid174 : Au vu de la réglementation de la RW/RBC, à quelle exigence une pompe à vide doit-elle satisfaire ?://a");
rep("[ ] Elle doit aspirer au moins 250 m3/h");
rep("[x] Il doit s'agir d'un modèle à deux étages");
rep("[ ] Il doit s'agir d'un modèle à trois étages");
rep("[ ] Il est nécessaire qu'elle puisse aspirer jusqu'à 270 torr");
faux("La reglementation impose qu'une pompe a vide soit d'un modele a deux etages pour atteindre un niveau de vide suffisant");

quest("AgrFroid175 : Au vu de la réglementation de la RW/RBC, quelle exigence la balance d'un technicien frigoriste doit-elle notamment satisfaire ?://a");
rep("[ ] il doit s'agir d'une balance électronique");
rep("[ ] une balance à deux aiguilles une pour les kilos et une pour les grammes");
rep("[x] elle doit posséder une précision minimale de 10 g pour des poids inférieurs à 30kg");
rep("[ ] elle doit posséder une précision de 1g pour des poids inférieurs à 30kg");
faux("La balance d'un technicien frigoriste doit avoir une precision minimale de 10 grammes pour des poids inferieurs a 30 kg");

quest("AgrFroid176 : L'huile vidangée d'un compresseur frigorifique://a");
rep("[x] est considérée comme déchet dangereux");
rep("[ ] est considérée comme déchet non dangereux");
rep("[ ] après filtration, peut être brûlée dans un foyer au mazout");
rep("[ ] peut être utilisée pour graisser l'extérieur de certains raccords flare");
faux("L'huile vidangee d'un compresseur frigorifique est consideree comme un dechet dangereux et doit etre eliminee comme tel");

quest("AgrFroid177 : Une entreprise en technique frigorifique agréée/enregistrée://a");
rep("[x] peut transporter les déchets résultant exclusivement des interventions menées par ses propres techniciens frigoristes certifiés");
rep("[ ] peut transporter tous les déchets d'un chantier y compris, ceux des autres corps de métier");
rep("[ ] ne peut en aucune manière transporter des déchets quels qu'ils soient");
rep("[ ] ne peut transporter que les déchets non dangereux d'un client");
faux("Une entreprise agreee ne peut transporter que les dechets resultant des interventions de ses propres techniciens certifies, pas ceux d'autres corps de metier");

quest("AgrFroid178 : Lors de la mise hors service définitive d'une installation frigorifique, le technicien certifié/qualifié://a");
rep("[ ] doit démonter l'installation dans les 24 heures suivant la décision prise par l'administration régionale compétente en matière de déchets");
rep("[ ] peut la démonter sans problème et mettre au rebut toutes les pièces");
rep("[x] doit récupérer le fluide frigorigène et l'huile avant démontage");
rep("[ ] doit d'abord marquer les éléments avant de les démonter");
faux("Lors de la mise hors service definitive d'une installation, le technicien certifie doit recuperer le fluide frigorigene et l'huile avant tout demontage");

quest("AgrFroid179 : L'entreprise en technique frigorifique spécialisée/enregistrée peut confier les fluides récupérés qu'elle a stockés://a");
rep("[x] à une entreprise agréé pour la collecte et le transport de déchets dangereux");
rep("[ ] à tous les transporteurs de déchets");
rep("[ ] à n'importe quel transporteur à condition qu'il soit localisé à moins de 50 km et ce en vue de limiter les impacts environnementaux liés au transport");
rep("[ ] à un transporteur qui possède une citerne pour évider une fuite vers l'extérieur");
faux("Les fluides recuperes et stockes ne peuvent etre confies qu'a une entreprise agreee pour la collecte et le transport de dechets dangereux");

quest("AgrFroid180 : La validité du certificat délivré aux techniciens en RBC ou en RW://a");
rep("[ ] Est valable 5 ans mais le certificat perd sa validité si le technicien change d'employeur");
rep("[x] Est de 5 ans et peut être renouvelé si le technicien réussit un examen de mise à niveau");
rep("[ ] Est de 10 ans et peut être renouvelé si le technicien réussit un examen de mise à niveau");
rep("[ ] Est indéterminée mais tous les 5 ans le technicien doit suivre une formation continuée d'une durée minimale de 8 heures");
faux("La validite du certificat est de 5 ans et peut etre renouvelee a condition de reussir un examen de mise a niveau");

quest("AgrFroid181 : Où peut-on passer l'examen en vue de l'obtention du certificat d'aptitude en technique du froid?://a");
rep("[ ] Dans tous les centres de formation ouverts aux classes moyennes");
rep("[ ] Dans toutes les universités de Belgique");
rep("[x] Uniquement dans un centre d'examen reconnu par les autorités régionales");
rep("[ ] Dans chaque école ou centre de formation où l'on donne des cours sur la technique du froid");
faux("L'examen pour obtenir le certificat d'aptitude en technique du froid ne peut etre passe que dans un centre d'examen reconnu par les autorites regionales");

quest("AgrFroid182 : Qui peut intervenir sur le circuit frigorifique d'un équipement contenant 10 kg de NH3 ?://a");
rep("[ ] Un technicien frigoriste certifié ou une personne travaillant sous sa responsabilité");
rep("[ ] Exclusivement un technicien frigoriste certifié");
rep("[x] Le NH3 n'est pas visé par la réglementation européenne ou régionale sur les gaz fluorés. Ces réglementations ne définissent dès lors rien à ce sujet");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique agrée");
faux("L'ammoniac n'est pas un gaz fluore, il n'est donc pas vise par la reglementation europeenne ou regionale sur les gaz a effet de serre fluores");

quest("AgrFroid183 : Un technicien frigoriste qualifié doit disposer d'une balance précise à 10 g près :://a");
rep("[ ] s'il est muni d'un cylindre à réfrigérant d'une capacité de plus de 30 kg");
rep("[ ] s'il est muni d'un cylindre à réfrigérant d'une capacité de 300 kg");
rep("[x] s'il est muni d'un cylindre d'une capacité inférieure à 30 kg");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("La precision de 10 grammes est requise quand le technicien est muni d'un cylindre a refrigerant d'une capacite inferieure a 30 kg");

quest("AgrFroid184 : A quelle fréquence le technicien de catégorie I doit-il mettre à jour ses compétences ?://a");
rep("[ ] Deux ans à compter de la date de délivrance");
rep("[ ] Trois ans à compter de la date de délivrance");
rep("[x] Cinq ans à compter de la date de délivrance");
rep("[ ] Six ans à compter de la date de délivrance");
faux("Le technicien de categorie I doit mettre a jour ses competences tous les cinq ans a compter de la date de delivrance du certificat");

quest("AgrFroid185 : Le certificat d'un technicien frigoriste lui est délivré :://a");
rep("[ ] par un organisme de contrôle accrédité");
rep("[x] par l'Agence wallonne de l'Air et du Climat");
rep("[ ] par une entreprise en technique du froid");
rep("[ ] Par un centre d'examen reconnu");
faux("En Region wallonne, le certificat du technicien frigoriste est delivre par l'Agence wallonne de l'Air et du Climat");

quest("AgrFroid186 : Une entreprise agréée en technique du froid employant des frigoristes certifiés est une entreprise disposant d'un agrément :://a");
rep("[ ] de durée indéterminée, mais qui doit faire réaliser un contrôle par un organisme accrédité tous les 5 ans");
rep("[ ] qui ne remonte pas à plus de 2 ans à compter de la date de délivrance de l'agrément");
rep("[ ] qui ne remonte pas à plus de 5 ans à compter de la date de délivrance de l'agrément");
rep("[x] de durée indéterminée, sous condition de respecter les critères d'agrément");
faux("L'agrement d'une entreprise en technique du froid est de duree indeterminee, tant qu'elle respecte les criteres d'agrement");

quest("AgrFroid187 : Une entreprise en technique du froid agréée peut être contrôlée par :://a");
rep("[ ] une tierce entreprise en technique du froid agréée qui exécute des travaux sur les installations de réfrigération");
rep("[ ] un centre d'examen agréé");
rep("[ ] un technicien frigoriste disposant du certificat requis et travaillant pour le compte d'une tierce entreprise");
rep("[x] Le fonctionnaire chargé de la surveillance");
faux("Une entreprise en technique du froid agreee peut etre controlee par le fonctionnaire charge de la surveillance de cette reglementation");

quest("AgrFroid188 : Comment doit être estimée la masse nominale en agent réfrigérant fluoré d'un équipement frigorifique neuf ?://a");
rep("[x] En effectuant une pesée des bonbonnes contenant le gaz de remplissage avant et après cette opération");
rep("[ ] Le technicien certifié peut utiliser toute méthode permettant de déterminer avec une précision de 5% la masse nominale en agent réfrigérant fluoré");
rep("[ ] Par estimation, sur base de données fournies par le(s) fournisseur(s) des organes constituant l'équipement frigorifique");
rep("[ ] En effectuant une pesée de l'équipement frigorifique avant et après remplissage en agent réfrigérant fluoré");
faux("La masse nominale en agent refrigerant d'un equipement neuf s'estime en pesant les bonbonnes de remplissage avant et apres l'operation");

quest("AgrFroid189 : Quand est-ce que l'exploitant d'un équipement frigorifique est tenu de faire effectuer une détermination de la masse nominale en agent réfrigérant par vidange suivie d'un remplissage ?://a");
rep("[ ] Lors de chaque contrôle périodique de l'équipement frigorifique");
rep("[x] Si la masse nominale en agent réfrigérant n'est pas mentionnée dans les documents relatifs à l'équipement frigorifique ou si celle-ci n'est plus connue suite à des modifications");
rep("[ ] Une fois tous les 5 ans, mais exclusivement si l'équipement contient plus de 300 kg d'agent réfrigérant fluoré");
rep("[ ] Lorsqu'un équipement frigorifique change d'exploitant");
faux("L'exploitant doit faire determiner la masse nominale par vidange suivie d'un remplissage uniquement si elle n'est pas connue ou documentee, ou en cas de modification de l'installation");

quest("AgrFroid190 : La récupération de l'agent réfrigérant fluoré est effectuée...://a");
rep("[x] ...dans une bouteille prévue à cette effet, à condition de ne pas être remplie à plus de 80%");
rep("[ ] …dans une bouteille ayant contenu le même gaz neuf");
rep("[ ] ...dans une bouteille prévue à cette effet, à condition de ne pas être remplie à plus de 90%");
rep("[ ] … dans une bouteille prévue à cet effet, à condition de posséder une vanne rouge et une vanne bleue");
faux("La recuperation du refrigerant doit se faire dans une bouteille prevue a cet effet, remplie a maximum 80 pourcent de sa capacite");

quest("AgrFroid191 : Une entreprise en technique frigorifique agrée doit posséder://a");
rep("[ ] un thermomètre de fonction");
rep("[ ] un thermomètre au mercure pour mesurer avec précision");
rep("[x] un thermomètre digital avec sonde de contact");
rep("[ ] un thermomètre électronique mesurant la température en Kelvin");
faux("Une entreprise agreee doit posseder un thermometre digital avec sonde de contact pour ses mesures de temperature");

quest("AgrFroid192 : Que peut notamment faire une entreprise en technique frigorifique agrée dans son siège d'exploitation situé en Région wallonne ?://a");
rep("[ ] stocker sans aucune formalité toute sorte de déchets et de fluides frigorigènes");
rep("[x] stocker de manière transitoire les déchets résultant des interventions de ses techniciens, notamment les agents réfrigérants récupérés, en tenant un inventaire bien précis");
rep("[ ] stocker de manière transitoire tous les fluides frigorigènes sans tenir d'inventaire");
rep("[ ] elle ne peut rien stocker puisque les fluides frigorigènes sont considérés comme déchets dangereux");
faux("Une entreprise peut stocker de maniere transitoire les dechets de ses interventions, dont les refrigerants recuperes, a condition de tenir un inventaire precis");

quest("AgrFroid193 : Lors d'une intervention sur un équipement, à la fin de son travail, le technicien certifié...://a");
rep("[ ] … doit faire signer une attestation de conformité par l'exploitant");
rep("[ ] …doit avertir le fonctionnaire chargé de la surveillance si un taux de fuite d'agent réfrigérant supérieur à 5% a été constaté");
rep("[x] … doit, lorsqu'il y a production de déchets, remettre à l'exploitant de l'équipement frigorifique une attestation concernant ces déchets");
rep("[ ] … doit remettre à l'exploitant une attestation, dans laquelle, il stipule que son installation est conforme à la directive PED");
faux("Lorsqu'il y a production de dechets lors d'une intervention, le technicien certifie doit remettre a l'exploitant une attestation concernant ces dechets");

quest("AgrFroid194 : Le document général de suivi des déchets est un document qui :://a");
rep("[ ] doit obligatoirement se trouver dans le bureau de l'exploitant");
rep("[x] doit accompagner les déchets résultant de chaque intervention effectuée par un technicien frigoriste certifié");
rep("[ ] doit être gardée chez l'exploitant et être disponible en cas de contrôle par l'administration wallonne");
rep("[ ] peut uniquement être utilisé en cas de litige porté devant un tribunal");
faux("Le document general de suivi des dechets doit accompagner les dechets resultant de chaque intervention effectuee par le technicien certifie");

quest("AgrFroid195 : Lors de la mise hors service d'une installation frigorifique, après récupération du fluide frigorigène et des autres fluides, le technicien certifié://a");
rep("[x] établit en trois exemplaires l'attestation de dépollution");
rep("[ ] doit porter directement les déchets vers des installations autorisées d'élimination ou de valorisation de déchets");
rep("[ ] doit prévenir le marchand de mitrailles");
rep("[ ] peut faire enlever l'armoire électrique par un transporteur agréé");
faux("Apres recuperation du fluide et des autres fluides, le technicien certifie etablit l'attestation de depollution en trois exemplaires");

quest("AgrFroid196 : Un exemplaire de l'attestation de dépollution :://a");
rep("[x] doit être apposé de façon visible sur l'équipement frigorifique");
rep("[ ] doit être envoyé à l'usine de destruction");
rep("[ ] doit figurer sur la camionnette du technicien");
rep("[ ] doit être envoyé au directeur de la société");
faux("Un exemplaire de l'attestation de depollution doit etre appose de facon visible sur l'equipement frigorifique concerne");

quest("AgrFroid197 : Un exemplaire de l'attestation de dépollution :://a");
rep("[ ] doit être envoyé à l'usine d'origine de l'équipement");
rep("[x] doit être transmis à l'administration wallonne compétente pour l'environnement (DGO3)");
rep("[ ] doit être envoyé à l'usine de destruction");
rep("[ ] doit être envoyé à l'organisme notifié de contrôle accrédité");
faux("Un exemplaire de l'attestation de depollution doit etre transmis a l'administration wallonne competente pour l'environnement, la DGO3");

quest("AgrFroid198 : Lorsque les déchets sont laissés sur le site suite à une intervention du technicien certifié,://a");
rep("[ ] ceux-ci peuvent être évacués dans un parc à conteneurs.");
rep("[ ] un organisme notifié par les trois régions doit les contrôler du point de vue de leur toxicité");
rep("[ ] ceux sont broyés par le propriétaire des déchets");
rep("[x] le technicien certifié établit un inventaire destiné au collecteur ou au transporteur");
faux("Lorsque des dechets restent sur le site, le technicien certifie etablit un inventaire destine au collecteur ou au transporteur qui viendra les chercher");

quest("AgrFroid199 : Le technicien certifié doit établir des consignes…://a");
rep("[ ] ...permettant à l'exploitant de réduire les consommations énergétiques de ses équipements frigorifiques");
rep("[ ] … sur l'évacuation de secours de la salle des machines");
rep("[x] … permettant de prévenir tout risque d'émission des déchets vers l'environnement lors de leur stockage, transport et traitement");
rep("[ ] … permettant à l'exploitant de récupérer le réfrigérant fluoré selon les règles de l'art");
faux("Le technicien certifie doit etablir des consignes permettant de prevenir tout risque d'emission des dechets vers l'environnement lors de leur stockage, transport et traitement");

quest("AgrFroid200 : Chaque bouteille de récupération de fluide frigorigène :://a");
rep("[ ] doit obligatoirement être stockée dans un frigo");
rep("[ ] peut être remplie jusqu'à 90% de sa capacité");
rep("[x] doit être accompagnée de son document de suivi des déchets");
rep("[ ] peut être stockée et transportée sur le territoire belge sans aucune formalité spécifique");
faux("Chaque bouteille de recuperation de fluide frigorigene doit obligatoirement etre accompagnee de son document de suivi des dechets");

theme("St Laurent : L'agrégation du froid - Part3");
debut("Préparation à l'examen sur l'agrégation frigorifique");

quest("AgrFroid200 : Chaque bouteille de récupération de fluide frigorigène :://a");
rep("[ ] doit obligatoirement être stockée dans un frigo");
rep("[ ] peut être remplie jusqu'à 90% de sa capacité");
rep("[x] doit être accompagnée de son document de suivi des déchets");
rep("[ ] peut être stockée et transportée sur le territoire belge sans aucune formalité spécifique");
faux("Chaque bouteille de recuperation de fluide frigorigene doit obligatoirement etre accompagnee de son document de suivi des dechets");

quest("AgrFroid201 : Lorsque des déchets sont laissés sur le site, le technicien certifié établit un inventaire…://a");
rep("[ ] … qu'il transmet sans délai à l'administration de l'environnement (DGO3)");
rep("[ ] … qu'il transmet à l'entreprise ayant fourni les fluides qui reste responsable de la fin de vie des produites qu'elle a vendu");
rep("[ ] … qu'il notifie dans les 15 jours sur le site internet du Département du Sol et de Déchets de la DGO3");
rep("[x] … qui est daté et signé par lui-même et par l'exploitant de l'équipement frigorifique ou son préposé 3 Questions d'examen portant sur la connaissance de la législation Bruxelles-Capitale");
faux("L'inventaire des dechets laisses sur site doit etre date et signe a la fois par le technicien certifie et par l'exploitant de l'equipement ou son prepose");

quest("AgrFroid202 : Un exemplaire de l'attestation de dépollution :://a");
rep("[x] doit être jointe au livret de bord");
rep("[ ] doit être gardée par le technicien");
rep("[ ] doit être envoyée à l'usine de destruction du fluide");
rep("[ ] doit être validée par un organisme agréé");
faux("Un exemplaire de l'attestation de depollution doit etre joint au livret de bord de l'equipement");

quest("AgrFroid203 : Lorsque des déchets sont laissés sur le site, l'identité et le délai d'intervention des collecteurs et transporteurs doivent être connus :://a");
rep("[ ] pour la fin du mois qui suit l'intervention du technicien certifié");
rep("[x] à la fin de l'intervention du technicien certifié et être mentionnés dans l'inventaire des déchets");
rep("[ ] au premier janvier de chaque année, ces informations devant être transmises à la Région Wallonne (DGO3) au plus tard le 31/01");
rep("[ ] pour la fin de l'année ainsi que le nom du transporteur agréé");
faux("L'identite et le delai d'intervention des collecteurs et transporteurs doivent etre connus et mentionnes dans l'inventaire des dechets a la fin de l'intervention du technicien");

quest("AgrFroid204 : Dans quel délai doit-on vidanger le réfrigérant d'une installation après sa mise hors service définitive ?://a");
rep("[ ] Dans un délai de 6 mois");
rep("[x] Dans le mois qui suit");
rep("[ ] Dès que l'autorisation de reprise a été délivrée par l'administration régionale compétente en matière de déchets");
rep("[ ] Le ferrailleur disposant d'un agrément pour la collecte et le transport de déchets dangereux dispose d'un mois après le transport de l'installation pour la faire vidanger par une personne disposant du certificat requis");
faux("Le refrigerant d'une installation definitivement mise hors service doit etre vidange dans le mois qui suit sa mise hors service");

quest("AgrFroid205 : Qui a l'autorisation de détruire du réfrigérant ?://a");
rep("[ ] Toute personne possédant l'équipement nécessaire");
rep("[ ] Tous les techniciens frigoristes certifiés");
rep("[x] Uniquement les sociétés autorisées à cette fin");
rep("[ ] Exclusivement les fabricants de réfrigérants");
faux("Seules des societes specifiquement autorisees a cette fin peuvent detruire du refrigerant");

quest("AgrFroid206 : Qu'entend-on par examen de mise à niveau ?://a");
rep("[x] C'est l'examen que l'on doit réussir pour obtenir une prolongation de 5 ans de la validité du certificat");
rep("[ ] C'est l'examen que les techniciens certifiés provenant d'un autre Etat membre de l'UE doivent passer");
rep("[ ] C'est l'examen que l'on doit passer quand on a échoué à la première épreuve");
rep("[ ] C'est l'examen qui doit être passé chaque fois que les techniques de réfrigération évoluent sensiblement");
faux("L'examen de mise a niveau est celui que doit reussir un technicien pour obtenir le renouvellement de 5 ans de son certificat");

quest("AgrFroid207 : Il doit y avoir un registre :://a");
rep("[ ] dans la camionnette du technicien frigoriste");
rep("[ ] dans les bureaux de l'entreprise en technique du froid");
rep("[x] tenu par l'exploitant et mis à disposition de l'autorité publique chargée du contrôle");
rep("[ ] auprès de chaque équipement contenant moins de 5 t éq. de CO2");
faux("Le registre doit etre tenu par l'exploitant de l'equipement et etre mis a disposition de l'autorite publique chargee du controle");

quest("AgrFroid208 : Une entreprise agréée/enregistrée en technique du froid est obligée de tenir une comptabilité des fluides récupérés :://a");
rep("[x] Oui");
rep("[ ] Non");
rep("[ ] Seulement si elle récupère plus de 30 kg de réfrigérant par an");
rep("[ ] Seulement si elle récupère plus de 300 kg de réfrigérant par an");
faux("Toute entreprise agreee ou enregistree est obligee de tenir une comptabilite des fluides qu'elle recupere, sans seuil minimum");

quest("AgrFroid209 : Quand le réfrigérant d'une installation définitivement mise hors service doit-il être récupéré ?://a");
rep("[ ] Immédiatement après la mise hors service");
rep("[x] Dans le mois suivant la mise hors service");
rep("[ ] Dans les 3 mois suivant la mise hors service");
rep("[ ] Dans les 6 mois suivant la mise hors service");
faux("Le refrigerant d'une installation definitivement mise hors service doit etre recupere dans le mois suivant cette mise hors service");

quest("AgrFroid210 : Une installation de réfrigération a une capacité de 25 t éq.CO2 de HFC. Qui doit, selon la réglementation relative au permis d'environnement, pouvoir fournir à l'autorité compétente la preuve de conformité de l'installation au test de pression ?://a");
rep("[ ] Cette preuve n'est pas nécessaire car elle n'est imposée qu'à partir d'une capacité de 200 téq. CO2");
rep("[ ] L'installateur de l'installation de réfrigération");
rep("[x] L'exploitant de l'installation de réfrigération");
rep("[ ] L'organisme de contrôle accréditée qui a réceptionné l'installation");
faux("C'est a l'exploitant de l'installation de pouvoir fournir a l'autorite competente la preuve de conformite au test de pression");

quest("AgrFroid211 : Un certificat délivré par un centre d'examen agrée par la RW ou la RBC destiné aux techniciens frigoristes est valable:://a");
rep("[x] pour une durée de 5 ans");
rep("[ ] pour 10 ans");
rep("[ ] pour une durée d'un an");
rep("[ ] ce certificat doit être renouvelé chaque année");
faux("Un certificat delivre par un centre d'examen agree par la Region wallonne ou bruxelloise est valable pour une duree de 5 ans");

quest("AgrFroid212 : L'entreprise en technique frigorifique spécialisée/enregistrée qui effectue le stockage d'agents réfrigérants://a");
rep("[ ] peut transporter ses bouteilles remplies à maximum 80% de sa contenance dans un parc à container");
rep("[ ] peut remettre sur le marché des bouteilles de fluides récupéré");
rep("[ ] doit s'enregistrer sur le site http://ec.europa.eu/clima/policies/f-gas/ de la Commission européenne");
rep("[x] doit tenir à jour un registre des déchets stockés");
faux("Une entreprise effectuant le stockage d'agents refrigerants doit tenir a jour un registre des dechets qu'elle stocke");

quest("AgrFroid213 : Vis-à-vis de la protection de l'environnement, quelle doit être la ligne de conduite d'un technicien frigoriste certifié vis-à-vis de l'agent réfrigérant fluoré://a");
rep("[ ] il doit veiller à ce que le fluide soit constamment exempt d'huile, d'acides et autres impuretés");
rep("[ ] il doit le remplacer régulièrement et chaque fois qu'il présente des signes d'usures");
rep("[x] il doit effectuer les opérations pouvant être à l'origine d'émissions d'agent réfrigérant en se conformant aux recommandations de la norme NBN EN 378");
rep("[ ] il doit signaler toute fuite et se procurer le fluide nécessaire pour remplir l'installation sans délai");
faux("Vis-a-vis de l'environnement, le technicien doit effectuer les operations pouvant generer des emissions en se conformant aux recommandations de la norme NBN EN 378");

quest("AgrFroid214 : Les interventions sur les parties d'un équipement frigorifique contenant ou pouvant contenir de l'agent réfrigérant fluoré ne peuvent être effectuées que par://a");
rep("[ ] un technicien agréé BA4 qui dispose du certificat de catégorie adéquate");
rep("[ ] un technicien agréé BA5 qui dispose du certificat de catégorie adéquate");
rep("[x] un technicien frigoriste qui dispose du certificat de catégorie adéquate et travaille pour le compte d’une entreprise en technique frigorifique agréée/enregistrée qu'il s’agisse d’installation, d’entretien, de réparation ou de récupération");
rep("[ ] un technicien en possession de l'accès à la profession de frigoriste");
faux("Toute intervention, qu'il s'agisse d'installation, d'entretien, de reparation ou de recuperation, doit etre effectuee par un technicien certifie travaillant pour une entreprise agreee ou enregistree");

quest("AgrFroid215 : Le technicien certifié peut-il laisser s'échapper des agents réfrigérants fluorés vers l'atmosphère ?://a");
rep("[ ] Oui, sauf lorsqu'un phénomène d'inversion de température est observé");
rep("[ ] Oui, sauf si il s'agit d'un gaz toxique");
rep("[ ] Oui, moyennant accord fourni par l'AWAC/IBGE");
rep("[x] Non, jamais");
faux("Un technicien certifie ne peut en aucun cas laisser s'echapper des agents refrigerants fluores vers l'atmosphere");

quest("AgrFroid216 : Est-ce qu'un technicien frigoriste certifié doit disposer d'un équipement technique minimum, réglementairement défini, pour pouvoir intervenir.://a");
rep("[ ] Oui, chaque technicien frigoriste certifié doit être propriétaire du matériel repris en annexe de l'arrêté relatif à la reconnaissance des techniciens et des sociétés en technique frigorifique");
rep("[x] Oui, et c'est la responsabilité de l'entreprise en technique frigorifique agréée/enregistrée pour laquelle il travaille de le lui fournir");
rep("[ ] Non, c'est la responsabilité de chaque entreprise en technique frigorifique agréé de définir le matériel minimum que chaque technicien frigoriste certifié doit posséder");
rep("[ ] Uniquement s'il intervient sur des équipements contenant plus de 50 tonnes équivalent CO2 de réfrigérant fluoré");
faux("C'est la responsabilite de l'entreprise agreee ou enregistree de fournir a ses techniciens l'equipement technique minimum requis");

quest("AgrFroid217 : Qui le technicien frigoriste certifié doit il impérativement informer en cas de pertes relatives en agent réfrigérant fluoré trop élevées.://a");
rep("[ ] L'administration wallonne/bruxelloise");
rep("[ ] La Direction de l'entreprise dans laquelle travaille le technicien frigoriste");
rep("[x] L'exploitant de l'équipement concerné");
rep("[ ] La police compétente sur le territoire où est implanté l'équipement concerné");
faux("En cas de pertes relatives en refrigerant fluore trop elevees, le technicien doit en informer l'exploitant de l'equipement concerne");

quest("AgrFroid218 : Une entreprise en technique frigorifique agréée/enregistrée://a");
rep("[x] doit pouvoir fournir à ses techniciens frigoristes certifiés au minimum la matériel défini dans les arrêtés régionaux");
rep("[ ] doit posséder un groupe de récupération sauf si elle ne travaille que sur des équipements de climatisation de type monosplit");
rep("[ ] doit posséder un groupe de récupération sauf si elle ne travaille que sur des pompes à chaleur");
rep("[ ] doit disposer d'un groupe de récupération uniquement si elle travaille sur des équipements contenant des HCFC");
faux("Une entreprise agreee doit pouvoir fournir a ses techniciens au minimum le materiel defini dans les arretes regionaux");

quest("AgrFroid219 : Une entreprise en technique frigorifique spécialisée / enregistrée doit posséder://a");
rep("[x] une pompe à vide à deux étages");
rep("[ ] une pompe à vide à 1 étage");
rep("[ ] une pompe à vide à galets");
rep("[ ] une pompe permettant de vider les vannes de l'air et de l'humidité");
faux("Une entreprise en technique frigorifique specialisee ou enregistree doit posseder une pompe a vide a deux etages");

quest("AgrFroid220 : Au vu de la réglementation de la RW/RBC, à quelle exigence une pompe à vide doit-elle satisfaire ?://a");
rep("[ ] Elle doit aspirer au moins 250 m3/h");
rep("[x] Il doit s'agir d'un modèle à deux étages");
rep("[ ] Il doit s'agir d'un modèle à trois étages");
rep("[ ] Il est nécessaire qu'elle puisse aspirer jusqu'à 270 torr");
faux("La reglementation impose qu'une pompe a vide soit d'un modele a deux etages");

quest("AgrFroid221 : Au vu de la réglementation de la RW/RBC, quelle exigence la balance d'un technicien frigoriste doit-elle notamment satisfaire ?://a");
rep("[ ] il doit s'agir d'une balance électronique");
rep("[ ] une balance à deux aiguilles une pour les kilos et une pour les grammes");
rep("[x] elle doit posséder une précision minimale de 10 g pour des poids inférieurs à 30kg");
rep("[ ] elle doit posséder une précision de 1g pour des poids inférieurs à 30kg");
faux("La balance d'un technicien frigoriste doit avoir une precision minimale de 10 grammes pour des poids inferieurs a 30 kg");

quest("AgrFroid222 : L'huile vidangée d'un compresseur frigorifique://a");
rep("[x] est considérée comme déchet dangereux");
rep("[ ] est considérée comme déchet non dangereux");
rep("[ ] après filtration, peut être brûlée dans un foyer au mazout");
rep("[ ] peut être utilisée pour graisser l'extérieur de certains raccords flare");
faux("L'huile vidangee d'un compresseur frigorifique est consideree comme un dechet dangereux");

quest("AgrFroid223 : Une entreprise en technique frigorifique agréée/enregistrée://a");
rep("[x] peut transporter les déchets résultant exclusivement des interventions menées par ses propres techniciens frigoristes certifiés");
rep("[ ] peut transporter tous les déchets d'un chantier y compris, ceux des autres corps de métier");
rep("[ ] ne peut en aucune manière transporter des déchets quels qu'ils soient");
rep("[ ] ne peut transporter que les déchets non dangereux d'un client");
faux("Une entreprise agreee ne peut transporter que les dechets resultant des interventions de ses propres techniciens certifies");

quest("AgrFroid224 : Lors de la mise hors service définitive d'une installation frigorifique, le technicien certifié/qualifié://a");
rep("[ ] doit démonter l'installation dans les 24 heures suivant la décision prise par l'administration régionale compétente en matière de déchets");
rep("[ ] peut la démonter sans problème et mettre au rebut toutes les pièces");
rep("[x] doit récupérer le fluide frigorigène et l'huile avant démontage");
rep("[ ] doit d'abord marquer les éléments avant de les démonter");
faux("Lors de la mise hors service definitive, le technicien certifie doit recuperer le fluide frigorigene et l'huile avant tout demontage");

quest("AgrFroid225 : L'entreprise en technique frigorifique spécialisée/enregistrée peut confier les fluides récupérés qu'elle a stockés://a");
rep("[x] à une entreprise agréé pour la collecte et le transport de déchets dangereux");
rep("[ ] à tous les transporteurs de déchets");
rep("[ ] à n'importe quel transporteur à condition qu'il soit localisé à moins de 50 km et ce en vue de limiter les impacts environnementaux liés au transport");
rep("[ ] à un transporteur qui possède une citerne pour évider une fuite vers l'extérieur");
faux("Les fluides recuperes et stockes ne peuvent etre confies qu'a une entreprise agreee pour la collecte et le transport de dechets dangereux");

quest("AgrFroid226 : La validité du certificat délivré aux techniciens en RBC ou en RW://a");
rep("[ ] Est valable 5 ans mais le certificat perd sa validité si le technicien change d'employeur.");
rep("[x] Est de 5 ans et peut être renouvelé si le technicien réussit un examen de mise à niveau.");
rep("[ ] Est de 10 ans et peut être renouvelé si le technicien réussit un examen de mise à niveau.");
rep("[ ] Est indéterminée mais tous les 5 ans le technicien doit suivre une formation continuée d'une durée minimale de 8 heures.");
faux("La validite du certificat est de 5 ans et peut etre renouvelee a condition de reussir un examen de mise a niveau");

quest("AgrFroid227 : Où peut-on passer l'examen en vue de l'obtention du certificat d'aptitude en technique du froid?://a");
rep("[ ] Dans tous les centres de formation ouverts aux classes moyennes");
rep("[ ] Dans toutes les universités de Belgique");
rep("[x] Uniquement dans un centre d'examen reconnu par les autorités régionales");
rep("[ ] Dans chaque école ou centre de formation où l'on donne des cours sur la technique du froid");
faux("L'examen pour obtenir le certificat d'aptitude en technique du froid ne peut etre passe que dans un centre d'examen reconnu par les autorites regionales");

quest("AgrFroid228 : Qui peut intervenir sur le circuit frigorifique d'un équipement contenant 10 kg de NH3 ?://a");
rep("[ ] Un technicien frigoriste certifié ou une personne travaillant sous sa responsabilité");
rep("[ ] Exclusivement un technicien frigoriste certifié");
rep("[x] Le NH3 n'est pas visé par la réglementation européenne ou régionale sur les gaz fluorés. Ces réglementations ne définissent dès lors rien à ce sujet");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique agrée");
faux("L'ammoniac n'est pas un gaz fluore, il n'est donc pas vise par la reglementation sur les gaz a effet de serre fluores");

quest("AgrFroid229 : Un technicien frigoriste qualifié doit disposer d'une balance précise à 10 g près :://a");
rep("[ ] s'il est muni d'un cylindre à réfrigérant d'une capacité de plus de 30 kg");
rep("[ ] s'il est muni d'un cylindre à réfrigérant d'une capacité de 300 kg");
rep("[x] s'il est muni d'un cylindre d'une capacité inférieure à 30 kg");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("La precision de 10 grammes est requise quand le technicien est muni d'un cylindre a refrigerant d'une capacite inferieure a 30 kg");

quest("AgrFroid230 : A quelle fréquence le technicien de catégorie I doit-il mettre à jour ses compétences ?://a");
rep("[ ] Deux ans à compter de la date de délivrance");
rep("[ ] Trois ans à compter de la date de délivrance");
rep("[x] Cinq ans à compter de la date de délivrance");
rep("[ ] Six ans à compter de la date de délivrance");
faux("Le technicien de categorie I doit mettre a jour ses competences tous les cinq ans a compter de la date de delivrance du certificat");

quest("AgrFroid231 : Le registre est-il toujours obligatoire ?://a");
rep("[ ] Oui, dans tous les cas, le registre est obligatoire pour les installations de réfrigération");
rep("[x] Non. Il ne l'est que pour les installations d'une capacité nominale de >= 3 kg de réfrigérant ou dont la puissance électrique est supérieure à 10 kW ou dont la capacité nominale du fluide est supérieur ou égale à 5 T éq. CO2");
rep("[ ] Non. Il ne l'est que pour les installations d'une capacité nominale >= 5 kg de réfrigérant ou dont la capacité nominale du fluide est supérieur ou égale à 6 T éq. CO2 ou dont la puissance électrique est > 10 kW");
rep("[ ] Non. Il ne l'est que pour les installations d'une capacité nominale de plus de 300 kg de réfrigérant");
faux("Le registre n'est obligatoire que pour les installations depassant certains seuils de capacite, de puissance electrique ou de contenance en refrigerant, pas pour toutes les installations systematiquement");

quest("AgrFroid232 : Le chargement ou l'ajout de réfrigérant dans une installation contenant du HFC doit être réalisé par :://a");
rep("[x] un technicien frigoriste qualifié travaillant dans une entreprise en technique du froid enregistrée");
rep("[ ] un technicien qualifié travaillant dans une entreprise en technique du froid non enregistrée");
rep("[ ] un technicien sous la surveillance d'un frigoriste expérimenté");
rep("[ ] Aucune des 3 réponses précédentes ne sont correctes");
faux("Le chargement ou l'ajout de refrigerant HFC doit etre realise par un technicien qualifie travaillant pour une entreprise en technique du froid enregistree");

quest("AgrFroid233 : Le chargement ou l'ajout de réfrigérant dans une installation contenant du HCFC :://a");
rep("[ ] est réalisé par un technicien frigoriste qualifié travaillant dans une entreprise en technique du froid enregistrée");
rep("[ ] un technicien qualifié travaillant dans une entreprise en technique du froid non enregistrée");
rep("[x] est interdit");
rep("[ ] Aucune des 3 réponses précédentes ne sont correctes");
faux("Le chargement ou l'ajout de HCFC dans une installation est totalement interdit depuis 2015");

quest("AgrFroid234 : La perte maximale relative par fuite des installations d'une capacité nominale en réfrigérant de 3 kg ou plus et utilisant des gaz à effet de serre fluorés ne peut pas dépasser :://a");
rep("[ ] 3 % par an");
rep("[x] 5 % par an");
rep("[ ] 10 % par an");
rep("[ ] 15 % par an");
faux("La reglementation limite la perte maximale relative par fuite a 5 pourcent par an pour les installations utilisant des gaz fluores");

quest("AgrFroid235 : Le certificat d'un technicien frigoriste lui est délivré :://a");
rep("[ ] par un organisme de contrôle");
rep("[x] par un centre d'examen agréé");
rep("[ ] par une entreprise en technique du froid");
rep("[ ] Bruxelles Environnement");
faux("Le certificat d'un technicien frigoriste est delivre par un centre d'examen agree, et non par l'administration elle-meme");

quest("AgrFroid236 : Une entreprise enregistrée en technique du froid employant des frigoristes de catégorie I est une entreprise disposant d'un enregistrement://a");
rep("[ ] qui ne remonte pas à plus de 12 mois à compter de la date du contrôle");
rep("[ ] qui ne remonte pas à plus de 24 mois à compter de la date du contrôle");
rep("[ ] qui ne remonte pas à plus de 3 ans à compter de la date du contrôle");
rep("[x] de durée indéterminée, sous condition de respecter les critères d'enregistrement");
faux("L'enregistrement d'une entreprise est de duree indeterminee, tant qu'elle respecte les criteres d'enregistrement");

quest("AgrFroid237 : Une entreprise en technique du froid enregistrée doit être contrôlée par :://a");
rep("[ ] une entreprise en technique du froid enregistrée qui exécute des travaux sur les installations de réfrigération");
rep("[ ] un centre d'examen agréé");
rep("[ ] un technicien frigoriste certifié");
rep("[x] par BE (Bruxelles Environnement) ou par toutes autres modalités fixées par l'institut");
faux("En region bruxelloise, le controle des entreprises enregistrees est effectue par Bruxelles Environnement ou selon d'autres modalites fixees par l'institut");

quest("AgrFroid238 : L'entreprise en technique du froid enregistrée doit notamment conserver de manière centralisée les données suivantes :://a");
rep("[x] la quantité d'agent réfrigérant qui a été ajoutée ou vidangée dans chaque installation (+le motif de l'opération)");
rep("[ ] cette obligation ne relève pas de sa responsabilité, mais de celle de l'exploitant de l'installation");
rep("[ ] le lieu du stockage du réfrigérant chez le client");
rep("[ ] un registre des prestations (heures normales et supplémentaires) de ses techniciens frigoristes");
faux("L'entreprise enregistree doit conserver de maniere centralisee la quantite de refrigerant ajoutee ou vidangee dans chaque installation, avec le motif de l'operation");

quest("AgrFroid239 : Un frigoriste est-il autorisé à réutiliser du réfrigérant de type HFC recyclé et, si oui, où ?://a");
rep("[ ] Oui, après l'avoir déshydraté et après s'être fait délivrer un document attestant de sa qualité");
rep("[ ] Oui, s'il a été déclaré apte à une réutilisation, et ce où que ce soit");
rep("[x] Oui, s'il a été jugé en bon état, il peut être réutilisé sur le même site que celui où se trouve l'installation de réfrigération");
rep("[ ] On ne peut jamais réutiliser du réfrigérant vidangé");
faux("Un refrigerant HFC recycle juge en bon etat peut etre reutilise, mais uniquement sur le meme site que celui ou se trouve l'installation d'origine");

quest("AgrFroid240 : Le réfrigérant d'une installation contenant 10 kg de HCFC doit être vidangé par :://a");
rep("[ ] un technicien frigoriste certifié travaillant dans une entreprise en technique du froid qui n'a pas été enregistrée");
rep("[ ] un technicien frigoriste sous la surveillance d'un frigoriste expérimenté");
rep("[x] un technicien frigoriste certifié travaillant dans une entreprise en technique du froid enregistrée.");
rep("[ ] Les 3 réponses précédentes sont possibles");
faux("Le refrigerant HCFC d'une installation doit etre vidange par un technicien certifie travaillant dans une entreprise en technique du froid enregistree");

quest("AgrFroid241 : Quelles sont les installations classées soumises à un contrôle obligatoire régulier de leur étanchéité ?://a");
rep("[x] Uniquement celles fonctionnant au HFC et d'une capacité nominale en réfrigérant de plus de 5 tonnes équivalent CO2 (de plus de 10 tonnes équivalent CO2 si hermétique)");
rep("[ ] Uniquement celles fonctionnant au HFC, au HCFC, au NH3 ou au CO2 et d'une capacité nominale en réfrigérant de plus de 3 kg");
rep("[ ] Toutes les installations classées, quel que soit le type d'agent réfrigérant et la capacité nominale en réfrigérant");
rep("[ ] Toutes les installations classées fonctionnant au HFC et au HCFC, quelle que soit leur capacité");
faux("Seules les installations classees fonctionnant au HFC et depassant 5 tonnes equivalent CO2 (ou 10 tonnes si hermetiques) sont soumises a un controle obligatoire d'etancheite");

quest("AgrFroid242 : S'il s'avère après réparation que la perte par fuite d'une installation classée au R134a ne peut pas être ramenée en dessous de 5 %, dans quel délai doit-elle être normalement mise hors service ?://a");
rep("[ ] Dans un délai de 6 mois");
rep("[x] Dans un délai de 12 mois");
rep("[ ] Dans un délai de 18 mois");
rep("[ ] Après 3 essais infructueux pour en restaurer l'étanchéité 4 Questions en relation avec les réfrigérants et le risque d’émission");
faux("Si la perte par fuite ne peut etre ramenee sous 5 pourcent apres reparation, l'installation doit normalement etre mise hors service dans un delai de 12 mois");

quest("AgrFroid243 : Pour quelle raison pourrait-on utiliser de l'eau dans le circuit secondaire en vue d'appliquer un refroidissement indirect ?://a");
rep("[ ] Pour réduire le coût de l'installation");
rep("[ ] Le recours à un réfrigérant secondaire permet de consommer beaucoup moins d'énergie");
rep("[x] Cela permet de réduire la quantité de réfrigérant dans le circuit primaire");
rep("[ ] Cela permet d'opérer à une température d'évaporation plus basse et donc, de consommer moins d'énergie");
faux("L'utilisation d'un circuit secondaire a l'eau permet de reduire significativement la quantite de refrigerant necessaire dans le circuit primaire");

quest("AgrFroid244 : Pourquoi est-il si important de charger la bonne quantité de réfrigérant dans une installation ?://a");
rep("[ ] Parce qu'il est important d'économiser le réfrigérant");
rep("[ ] On doit toujours de charger avec une réserve de 20 %");
rep("[ ] Parce que c'est la loi");
rep("[x] Parce c'est seulement ainsi que l'installation fonctionnera dans des conditions optimales");
faux("Charger la quantite exacte de refrigerant est essentiel car c'est seulement dans ces conditions que l'installation fonctionnera de maniere optimale");

quest("AgrFroid245 : Comment mettre hors pression et vider de son réfrigérant une petite installation dépourvue de vannes d'isolement avec prises de pression?://a");
rep("[ ] On fait prudemment un trou dans la conduite de liquide et on laisse le réfrigérant s'échapper");
rep("[x] On place une vanne à percer sur une conduite appropriée sur laquelle on place les manifolds, ainsi que le groupe de récupération");
rep("[ ] On perce prudemment un trou dans la conduite de liquide et on y branche un raccord rapide spécial relié à un dispositif d'aspiration");
rep("[ ] On a l'habitude de mettre ces installations à la casse telles quelles");
faux("Pour mettre hors pression une installation sans vannes d'isolement, on place une vanne a percer sur une conduite appropriee pour y brancher les manifolds et le groupe de recuperation");

quest("AgrFroid246 : Quelle est la quantité maximale de réfrigérant (en pourcentage) avec laquelle on peut remplir une bouteille de récupération?://a");
rep("[ ] 55,00 %");
rep("[ ] 98,00 %");
rep("[x] 80,00 %");
rep("[ ] 60,00 %");
faux("Une bouteille de recuperation ne peut jamais etre remplie a plus de 80 pourcent de sa capacite, pour des raisons de securite");

quest("AgrFroid247 : Le tirage au vide d'une installation a pour but :://a");
rep("[ ] De permettre un nettoyage de la surface intérieure du tuyau");
rep("[ ] D'en aspirer les gaz incondensables");
rep("[ ] D'en aspirer l'humidité");
rep("[x] D'enlever les gaz incondensables et l'humidité");
faux("Le tirage au vide a pour but simultane d'eliminer les gaz incondensables et l'humidite presents dans l'installation");

quest("AgrFroid248 : On peut éviter la présence d'humidité dans une installation neuve en :://a");
rep("[ ] Utilisant des tuyaux inoxydables");
rep("[x] Après avoir effectué le test de pression, en appliquant un vide poussé dans l'installation après son montage");
rep("[ ] En employant exclusivement de l'huile sans humidité");
rep("[ ] En n'utilisant jamais d'eau pour refroidir des pièces après les avoir soudées");
faux("Apres le test de pression, il faut appliquer un vide pousse dans l'installation pour eliminer toute trace d'humidite avant la mise en service");

quest("AgrFroid249 : Que se passe-t-il lorsque des réfrigérants fluorés entrent en contact avec le feu ?://a");
rep("[ ] Ils prennent immédiatement feu");
rep("[ ] Rien, ces réfrigérants sont ininflammables");
rep("[x] Il se produit un dégagement de substances toxiques provenant de la décomposition du fluide");
rep("[ ] Il se forme des produits de décomposition, mais ceux-ci ne sont pas toxiques");
faux("Au contact du feu, les refrigerants fluores se decomposent en degageant des substances toxiques, un danger majeur en cas d'incendie");

quest("AgrFroid250 : Combien de fois faut-il changer l'huile d'un compresseur qui a grillé (burn-out) ?://a");
rep("[ ] Deux fois maximum : une fois après le burn-out et une fois avant la pose du filtre définitif");
rep("[x] Autant de fois que nécessaire pour éliminer toutes traces d'acides contenues dans l'huile");
rep("[ ] Une fois après le burn-out et une fois lors du démontage du filtre de burn-out");
rep("[ ] Il ne faut jamais changer l'huile des compresseurs");
faux("Apres un burn out, il faut changer l'huile autant de fois que necessaire pour eliminer toutes traces d'acides qu'elle contient");

quest("AgrFroid251 : Une fuite de réfrigérant fluoré, de R134a par exemple, dans un espace clos :://a");
rep("[ ] Est dangereuse parce que les réfrigérants fluorés sont toxiques");
rep("[x] Peut être mortelle à fortes concentrations, car elle abaisse la concentration d'oxygène dans l'air et provoquent l'asphyxie");
rep("[ ] Est dangereuse parce que les vapeurs de réfrigérant fluoré forment un mélange inflammable avec l'air ambiant");
rep("[ ] Est sans danger parce que la densité des vapeurs de réfrigérant fluoré est beaucoup plus basse que celle de l'air");
faux("Une fuite importante de R134a dans un espace clos abaisse la concentration d'oxygene dans l'air, ce qui peut provoquer une asphyxie mortelle");

quest("AgrFroid252 : Quels problèmes se produisent à haute température lorsque des HFC sont utilisés comme réfrigérants ?://a");
rep("[x] Des composés acides se forment");
rep("[ ] Aucun problème car ils sont conçus pour résister à des températures élevées");
rep("[ ] Un risque d'explosion apparaît");
rep("[ ] Des composés basiques se forment");
faux("A haute temperature, les HFC se decomposent en formant des composes acides dangereux pour les composants de l'installation");

quest("AgrFroid253 : Le sol de la salle des machines :://a");
rep("[x] Doit toujours être propre pour pouvoir détecter les traces d'huile liée à une fuite de fluide frigorigène");
rep("[ ] Doit être réalisé exclusivement en béton lisse");
rep("[ ] Doit pouvoir supporter une charge d'au moins 2 t/m²");
rep("[ ] Doit être lisse et lavable");
faux("Un sol propre dans la salle des machines permet de detecter facilement les traces d'huile revelatrices d'une fuite de fluide frigorigene");

quest("AgrFroid254 : Quand doit-on craindre des problèmes de corrosion lorsqu'on utilise de l'huile polyol ester dans une installation ?://a");
rep("[x] Quand l'huile ester a absorbé de l'humidité");
rep("[ ] L'huile polyester est un lubrifiant moderne avec lequel ce problème ne se pose pas");
rep("[ ] Il ne faut pas en craindre, car ils n'apparaissent qu'avec des huiles minérales");
rep("[ ] Quand on n'a pas ajouté d'additif à l'huile");
faux("Les problemes de corrosion avec l'huile polyol ester apparaissent quand celle-ci a absorbe de l'humidite, car elle est tres hygroscopique");

quest("AgrFroid255 : Selon le Règlement européen 517/2014 comment peut-on déterminer la quantité totale de fluide frigorigène à récupérer d'une installation et donc prévoir le nombre de bouteilles de récupération://a");
rep("[x] en consultant le registre (livret de bord) de l'installation");
rep("[ ] en pesant l'installation et en déterminant son poids à vide à partir des catalogues");
rep("[ ] exclusivement en pesant la quantité de fluide récupéré au terme d'une vidange complète de l'installation");
rep("[ ] en prenant le même volume que la bouteille à liquide");
faux("Le registre ou livret de bord de l'installation permet de connaitre la quantite totale de fluide a recuperer et donc de prevoir le nombre de bouteilles necessaires");

quest("AgrFroid256 : Peut-on réaliser un essai de pression avec un réfrigérant fluoré ?://a");
rep("[ ] Oui, parce que cela facilite le repérage des fuites avec un détecteur électronique");
rep("[x] Non, il faut utiliser un gaz inerte sec");
rep("[ ] Oui, un mélange de réfrigérant et de gaz inerte facilite la détection des fuites");
rep("[ ] Les trois réponses précédentes sont bonnes");
faux("Il ne faut jamais realiser un essai de pression avec un refrigerant fluore, il faut utiliser un gaz inerte sec comme l'azote");

quest("AgrFroid257 : De quelle façon des vibrations peuvent-elles donner lieu à des fuites sur une installation ?://a");
rep("[ ] Les vibrations et les chocs provoquent l'ouverture des soupapes de sûreté");
rep("[x] En engendrant une fatigue du métal susceptible d'entraîner une rupture des conduites et des raccords");
rep("[ ] Les vibrations induisent un ceintrage des tuyauteries, qui peuvent induire des fuites");
rep("[ ] Le bouchon de remplissage de réfrigérant se desserrera sous l'effet des vibrations, ce qui provoquera des fuites");
faux("Les vibrations repetees provoquent une fatigue du metal qui peut entrainer a terme une rupture des conduites et des raccords, source de fuites");

quest("AgrFroid258 : Pourquoi un détendeur thermostatique à raccords flare est-il source de fuites?://a");
rep("[x] car le raccord côté évaporateur se desserre sous l'effet de la différence de température");
rep("[ ] car le capillaire peut se casser suite aux vibrations et laisser partir le fluide frigorigène de l'installation");
rep("[ ] car les vibrations du détendeur provoquent le desserrage des raccords internes");
rep("[ ] car la HP et la BP sont dans le détendeur. Cette différence de pression peut provoquer des fuites vers l'atmosphère");
faux("Le raccord cote evaporateur d'un detendeur flare se desserre sous l'effet des variations de temperature repetees, ce qui favorise les fuites");

quest("AgrFroid259 : Quelles est la meilleure méthode pour prévenir les fuites au niveau du détendeur thermostatique?://a");
rep("[ ] en l'isolant convenablement");
rep("[ ] en fixant son capillaire solidement");
rep("[x] en utilisant un détendeur à braser");
rep("[ ] en limitant au maximum la différence de pression");
faux("Utiliser un detendeur a braser plutot qu'a raccords flare est la meilleure methode pour prevenir les fuites a ce niveau du circuit");

quest("AgrFroid260 : Pourquoi un raccord brasé ne doit-il pas être refroidi trop rapidement ?://a");
rep("[x] Pour éviter l'apparition de fissures par retrait");
rep("[ ] Pour éviter que le tube externe ne se fissure");
rep("[ ] Pour ne pas que le cuivre perde de sa dureté");
rep("[ ] Pour éviter une oxydation excessive du tuyau");
faux("Un refroidissement trop rapide d'un raccord brase peut provoquer des fissures de retrait dans la soudure");

quest("AgrFroid261 : Selon les codes de bonne pratique, à quoi doit-on être attentif quand on utilise un manifold sur différentes installations ?://a");
rep("[ ] A rien de spécial, car les manifolds sont à usage universel");
rep("[x] Il est déconseillé d'employer le même manifold sur des installations contenant des huiles de nature différente");
rep("[ ] On doit impérativement employer un manifold différent pour chaque réfrigérant");
rep("[ ] Il faut nettoyer soigneusement le manifold à l'eau et au savon avant de l'utiliser avec une autre huile");
faux("Il est deconseille d'utiliser le meme manifold sur des installations contenant des huiles de nature differente, par risque de contamination croisee");

quest("AgrFroid262 : Quel fluide doit-on utiliser pour soumettre une nouvelle installation à un essai de pression avant de la mettre en service ?://a");
rep("[ ] De l'air comprimé");
rep("[ ] De l'oxygène");
rep("[x] De l'azote sec");
rep("[ ] De l'eau");
faux("Pour soumettre une nouvelle installation a un essai de pression avant sa mise en service, on utilise de l'azote sec");

quest("AgrFroid263 : Le remplissage d'une installation de réfrigération avec du réfrigérant doit au minimum se faire avec :://a");
rep("[ ] un manifold à raccords souples, un cylindre à réfrigérant et un cylindre de remplissage");
rep("[ ] un manifold à raccords souples, un cylindre de réfrigérant et une balance. Si l'installation est dotée d'un voyant liquide la balance n'est pas nécessaire");
rep("[x] un manifold à raccords souples, un cylindre de réfrigérant et une balance à réfrigérant");
rep("[ ] Les 3 réponses précédentes sont bonnes");
faux("Le remplissage necessite au minimum un manifold a raccords souples, un cylindre de refrigerant et une balance a refrigerant pour controler la quantite ajoutee");

quest("AgrFroid264 : Comment peut-on détecter une fuite pendant un essai de pression à l'azote sec ?://a");
rep("[ ] En utilisant un détecteur électronique de fuites");
rep("[ ] En utilisant une lampe de détection de fuites marchant au gaz");
rep("[x] En appliquant une solution savonneuse");
rep("[ ] Avec la flamme d'un brûleur à gaz");
faux("Pendant un essai de pression a l'azote sec, on detecte les fuites en appliquant une solution savonneuse sur les raccords");

quest("AgrFroid265 : Dans une installation conçue pour fonctionner avec des HFC, un manque de réfrigérant occasionné par une fuite provoque:://a");
rep("[x] l'apparition de bulles dans le voyant liquide");
rep("[ ] une augmentation de la haute pression");
rep("[ ] une augmentation de l'ampérage du moteur du compresseur");
rep("[ ] l'apparition de givre sur la ligne liquide et une augmentation de la BP");
faux("Un manque de refrigerant par fuite se traduit par l'apparition de bulles de gaz dans le voyant liquide, signe que le liquide n'est plus pur");

quest("AgrFroid266 : L'apparition de bulles dans le voyant liquide://a");
rep("[ ] Est toujours due à un manque de réfrigérant");
rep("[x] Peut par exemple être due à une électrovanne défectueuse ou à un filtre partiellement bouché");
rep("[ ] A une condensation adéquate");
rep("[ ] A un détendeur trop fermé");
faux("Des bulles dans le voyant liquide ne signifient pas forcement un manque de refrigerant, elles peuvent aussi venir d'une electrovanne defectueuse ou d'un filtre partiellement bouche");

quest("AgrFroid267 : Après avoir monté le circuit, peut-on le soumettre à un essai de pression avec du réfrigérant ?://a");
rep("[ ] Il est recommandé de le tester avec du réfrigérant parce que cela facilite la détection des fuites");
rep("[x] Non, on ne peut mettre du fluide frigorigène dans une installation qu'après avoir constaté son étanchéité grâce au test de pression et au tirage au vide");
rep("[ ] En général, le circuit des installations à compresseur ouvert sera soumis à un essai de pression avec du réfrigérant");
rep("[ ] Avant de procéder à des essais de pression avec du réfrigérant, il faut attendre qu'il soit à une pression suffisamment élevée");
faux("On ne peut mettre du fluide frigorigene dans une installation qu'apres avoir confirme son etancheite par le test de pression et le tirage au vide");

quest("AgrFroid268 : Vis-à-vis de la protection de l'environnement, lors du choix du compresseur quel est celui qu'il vaut mieux éviter://a");
rep("[x] compresseur ouvert");
rep("[ ] compresseur hermétique");
rep("[ ] compresseur semi-hermétique");
rep("[ ] aucun, tous les compresseurs sont bons");
faux("Le compresseur ouvert presente plus de risques de fuites au niveau de son joint d'etancheite d'arbre, il vaut donc mieux l'eviter pour proteger l'environnement");

quest("AgrFroid269 : Quand on pose une conduite de réfrigérant, de quoi faut-il tenir compte en fonction des variations de température et des longueurs mises en œuvre ?://a");
rep("[ ] Il faut que les tuyaux soient suffisamment épais");
rep("[ ] Il faut une isolation d'au moins 35 mm");
rep("[ ] Il faut des amortisseurs de vibrations tous les 10 mètres");
rep("[x] Il faut tenir compte des phénomènes de dilatation et de contraction");
faux("Lors de la pose des conduites, il faut tenir compte des phenomenes de dilatation et de contraction dus aux variations de temperature");

quest("AgrFroid270 : Quels sont les raccords qu'il vaut mieux réaliser par brasage fort ?://a");
rep("[ ] Les raccords indémontables");
rep("[x] le maximum de raccord");
rep("[ ] Les raccords aux filtres et aux électrovannes");
rep("[ ] Les raccords exposés à des pressions supérieures à 25 bar");
faux("Pour limiter les risques de fuites, il est preferable de realiser le maximum de raccords par brasage fort plutot que par raccords demontables");

quest("AgrFroid271 : Quelle installation faut-il préférer pour réduire le plus possible le risque de fuites ?://a");
rep("[ ] Une installation comportant peu de raccords évasés");
rep("[ ] Une installation comprenant un compresseur semi-hermétique et le plus possible de raccords évasés");
rep("[ ] Une installation à compresseur ouvert tournant à bas régime");
rep("[x] Une installation comprenant un compresseur hermétique et le maximum de raccord à souder");
faux("Une installation avec un compresseur hermetique et le maximum de raccords brases presente le moins de points potentiels de fuite");

quest("AgrFroid272 : Quelle sera l'installation qui engendrera le moins de fuites?://a");
rep("[ ] une installation avec des raccords flare");
rep("[ ] une installation avec un compresseur hermétique et des raccords flare");
rep("[ ] une installation dans laquelle la moitié des raccords sont brasés et l'autre moitié sont des flares");
rep("[x] une installation avec un compresseur semi-hermétique et un maximum de raccords brasés");
faux("Un compresseur semi hermetique combine avec un maximum de raccords brases plutot que flare minimise le risque de fuites");

quest("AgrFroid273 : Un manque de fluide dans une installation en fonctionnement provoque les symptômes suivants:://a");
rep("[ ] une BP et une HP élevées");
rep("[ ] de faibles températures d'aspiration et de refoulement");
rep("[ ] une surchauffe faible et une température d'évaporation élevée");
rep("[x] une surchauffe élevée et une température d'évaporation basse");
faux("Un manque de fluide se traduit par une surchauffe elevee et une baisse de la temperature d'evaporation, faute de liquide suffisant pour alimenter l'evaporateur");

quest("AgrFroid274 : Quand une installation fonctionne bien, que voit-on dans le voyant liquide monté en aval du filtre déshydrateur?://a");
rep("[ ] Le niveau de l'huile");
rep("[ ] On voit qu'il est rempli à moitié de réfrigérant");
rep("[ ] Des bulles de gaz");
rep("[x] qu'il est rempli à 100 % de réfrigérant et qu'il ne contient pas de bulles de gaz");
faux("Quand une installation fonctionne normalement, le voyant liquide doit etre entierement rempli de liquide, sans aucune bulle de gaz");

quest("AgrFroid275 : Une fuite de R134a dans un espace clos://a");
rep("[ ] est dangereuse parce que ce réfrigérant est toxique");
rep("[x] peut être mortelle à fortes concentrations, car elle provoque une baisse de la concentration d'oxygène dans l'air");
rep("[ ] est dangereuse parce que le mélange R134a/air est inflammable");
rep("[ ] est sans danger parce que la masse spécifique de la vapeur de ce réfrigérant est nettement plus basse que celle de l'air");
faux("Une fuite importante de R134a dans un espace clos peut etre mortelle car elle provoque une baisse de la concentration d'oxygene dans l'air");

quest("AgrFroid276 : Une fuite sur la ligne liquide de R134a dans une cave://a");
rep("[x] peut être dangereuse car les hautes concentrations de fluide provoquent l'asphyxie");
rep("[ ] peut être dangereuse car le fluide fluoré est caractérisé par une toxicité élevée");
rep("[ ] n'est pas dangereuse car le fluide fluoré est plus léger que l'air et part à l'extérieur");
rep("[ ] n'est pas dangereuse puisque le fluide restera à l'état liquide et partira à l'égout");
faux("Une fuite sur la ligne liquide dans un espace confine comme une cave peut etre dangereuse a forte concentration car elle provoque l'asphyxie");

quest("AgrFroid277 : Qu'est-ce qui détermine principalement le choix du réfrigérant d'une installation ?://a");
rep("[ ] Le prix");
rep("[ ] Le type de compresseur");
rep("[x] Ses propriétés thermodynamiques, ainsi que son GWP et TEWI");
rep("[ ] Le type du réfrigérant n'a pas tellement d'importance. Ce qui compte, c'est que ce soit un réfrigérant");
faux("Le choix du refrigerant d'une installation depend principalement de ses proprietes thermodynamiques ainsi que de son GWP et de son TEWI");

quest("AgrFroid278 : Quel est le principal avantage d'un compresseur hermétique ?://a");
rep("[ ] Sa plus grande capacité");
rep("[x] Sa bonne étanchéité");
rep("[ ] Sa plus grande plage de régimes");
rep("[ ] Un choix plus vaste d'entraînements");
faux("Le principal avantage d'un compresseur hermetique est sa bonne etancheite, l'ensemble moteur compresseur etant enferme dans une enveloppe scellee");

quest("AgrFroid279 : Quel réfrigérant à faible PRP/GWP est maintenant employé dans les climatiseurs split ?://a");
rep("[ ] Le R134a");
rep("[x] Le R32");
rep("[ ] Le R1234yf");
rep("[ ] Le R410A");
faux("Le R32, avec un GWP plus faible que les refrigerants precedemment utilises, est maintenant couramment employe dans les climatiseurs split");

quest("AgrFroid280 : Où installe-t-on le plus fréquemment un système électronique de détection des fuites permanent ?://a");
rep("[x] Dans la salle des machines");
rep("[ ] A proximité d'une fuite supposée");
rep("[ ] A proximité d'une pièce contenant du réfrigérant");
rep("[ ] L'emplacement de montage ne joue aucun rôle, l'appareil se réarmera automatiquement partout");
faux("Un systeme electronique de detection des fuites permanent est le plus souvent installe dans la salle des machines, lieu de concentration des composants");

quest("AgrFroid281 : Quand et pourquoi applique-t-on la méthode directe de détection des fuites ?://a");
rep("[x] Soit parce que cette méthode a été choisie pour effectuer un contrôle d'étanchéité. Ou alors en vue de déterminer avec précision l'emplacement de la fuite, suite a une présomption de fuite constatée par la méthode indirecte");
rep("[ ] Lorsque la méthode de Mollier ou la méthode avec égalisation de pression externe est insuffisante");
rep("[ ] La méthode de mesure directe ne s'emploie que dans les locaux où la ventilation ou la circulation d'air est intense");
rep("[ ] La méthode de mesure directe ne peut s'employer que si l'installation a été entièrement tirée au vide");
faux("La methode directe s'applique quand elle a ete choisie pour le controle d'etancheite, ou pour localiser precisement une fuite suspectee par methode indirecte");

quest("AgrFroid282 : Quand applique-t-on la méthode indirecte de détection des fuites ?://a");
rep("[ ] Cette méthode doit être utilisée lorsque la méthode de Mollier ou la méthode avec égalisation de pression externe est insuffisante");
rep("[ ] La méthode de mesure indirecte ne peut s'employer que si l'installation a été entièrement tirée au vide. Elle doit être systématiquement mise en œuvre avant la mise en fonctionnement d'une installation neuve");
rep("[x] Elle est appliquée en vue d'un contrôle périodique d'étanchéité");
rep("[ ] Elle est utilisée pour déterminer avec précision l'emplacement de la fuite au moyen de détecteurs");
faux("La methode indirecte est generalement appliquee dans le cadre d'un controle periodique d'etancheite reglementaire");

quest("AgrFroid283 : En quoi consiste la méthode indirecte de détection des fuites.://a");
rep("[ ] Par opposition à la détection à l'aide d'un détecteur manuel, elle consiste à détecter la présence d'une fuite à l'aide d'un détecteur de gaz fixe placé dans le local technique");
rep("[ ] Elle consiste à réaliser une analyse des risques de fuites par utilisation d'un logiciel adapté, qui tient compte des différents éléments constitutifs de l'équipement frigorifique");
rep("[ ] Elle consiste à détecter les fuites à l'aide d'un gaz traceur introduit dans l'équipement frigorifique");
rep("[x] Elle consiste à d'abord effectuer un contrôle visuel et manuel de l'équipement, puis à analyser un ou plusieurs paramètres de fonctionnement influencés par une perte de réfrigérant");
faux("La methode indirecte consiste a effectuer d'abord un controle visuel et manuel, puis a analyser les parametres de fonctionnement influences par une perte de refrigerant");

quest("AgrFroid284 : Quels paramètres peut-on analyser selon la méthode indirecte pour vérifier que l'installation a ou n'a pas de fuite?://a");
rep("[x] La pression, la température, le courant du compresseur, les niveaux de liquides et le volume de la quantité rechargée");
rep("[ ] Uniquement la pression, la température, les niveaux de liquides et le volume de la quantité rechargée ; le courant du compresseur est sans intérêt");
rep("[ ] Uniquement la pression, les niveaux de liquides et le volume de la quantité rechargée ; le courant du compresseur est sans intérêt");
rep("[ ] La pression, la température, le courant du compresseur et les niveaux de liquides ; le volume de la quantité rechargée est sans intérêt");
faux("La methode indirecte analyse la pression, la temperature, le courant du compresseur, les niveaux de liquide et le volume de la quantite rechargee");

quest("AgrFroid285 : Comment peut-on éviter les gaz incondensables dans une installation qui n'a pas encore fonctionné ?://a");
rep("[ ] Il n'y a pas besoin de les éliminer");
rep("[ ] En faisant soigneusement le vide jusqu'à une pression de 470 pascals ou moins");
rep("[x] Après son montage, on réalise le test de pression pour vérifier l'absence de fuite, puis on effectue soigneusement le vide, jusqu'à une pression de 270 Pa ou moins");
rep("[ ] En plaçant un déshydrateur");
faux("Apres le montage, on realise d'abord le test de pression, puis on tire soigneusement le vide jusqu'a une pression de 270 pascals ou moins pour eliminer les gaz incondensables");

quest("AgrFroid286 : Comment peut-on éliminer les gaz incondensables d'une installation déjà en service ?://a");
rep("[ ] En plaçant des dessiccateurs conçus spécialement à cette fin (dessiccateurs dits Pascal)");
rep("[ ] En vidangeant le réfrigérant et en rechargeant l'installation avec du réfrigérant neuf");
rep("[x] 1. Vérifier le réglage et le fonctionnement du pressostat BP. 2. Si le pressostat BP coupe en dessous de 0 bar. 2. vérifier l'absence de fuites côté BP. 3. Vidanger et tirer au vide. 4. Recharger avec du fluide neuf ou régénéré");
rep("[ ] Toutes les réponses précédentes sont correctes");
faux("Pour eliminer des incondensables sur une installation en service, il faut suivre une procedure precise: verifier le pressostat BP, controler l'absence de fuites, vidanger, tirer au vide et recharger");

quest("AgrFroid287 : Un technicien certifié doit-il aussi avoir avec lui une solution savonneuse ou un produit similaire lorsqu'il est déjà équipé d'un détecteur électronique de fuites ?://a");
rep("[ ] Non, la solution savonneuse est superflue");
rep("[ ] Pas spécifiquement. Il doit être muni soit d'un détecteur de fuites, soit d'une solution savonneuse");
rep("[x] Oui, car en cas de fuite importante, le détecteur ne permettra pas de localiser la fuite");
rep("[ ] Oui, parce car si la sonde du détecteur est détériorée suite à une concentration trop élevée de réfrigérant, il peut continuer à travailler avec une solution savonneuse 5 Questions relatives aux connaissances générales en technique frigorifique");
faux("Meme avec un detecteur electronique, le technicien doit avoir une solution savonneuse car en cas de fuite importante, le detecteur ne permet pas toujours de la localiser precisement");

quest("AgrFroid288 : Quel est le paramètre qui permet le réglage de la pression de condensation sur les condenseurs refroidis par eau?://a");
rep("[ ] Le débit de réfrigérant");
rep("[ ] Le débit d'eau et de réfrigérant");
rep("[x] Le débit d'eau");
rep("[ ] Le débit dans la conduite de refoulement");
faux("Sur les condenseurs refroidis par eau, c'est le debit d'eau qui permet de regler la pression de condensation");

quest("AgrFroid289 : Pourquoi doit-on se servir d'un coupe-tubes plutôt que d'une scie ?://a");
rep("[ ] Parce que l'assemblage soudé de tubes sciés est de moins bonne qualité");
rep("[ ] Parce qu'avec un tube scié, il n'est pas possible de faire un raccord évasé");
rep("[x] Parce que lorsque le tuyau est scié des limailles peuvent tomber à l'intérieur");
rep("[ ] Parce qu'avec un coupe-tubes, on peut couper des tubes beaucoup plus épais qu'avec une scie");
faux("Un coupe tubes evite que des limailles ne tombent a l'interieur du tuyau, contrairement a une scie qui genere des copeaux metalliques");

quest("AgrFroid290 : La brasure sous atmosphère d'azote sec permet:://a");
rep("[ ] de refroidir les pièces pour empêcher qu'elles ne fondent");
rep("[ ] de garder une réserve de température");
rep("[x] de garder propre l'intérieur des pièces et éviter l'oxydation");
rep("[ ] de garder en réserve de la soudure et donc l'installation sera moins chère");
faux("La brasure sous atmosphere d'azote sec permet de garder l'interieur des tuyauteries propre et d'eviter l'oxydation pendant le chauffage");

quest("AgrFroid291 : Remplir une installation avec un réfrigérant en phase liquide comporte un risque. Lequel ?://a");
rep("[ ] On n'a aucun contrôle sur la quantité de réfrigérant à ajouter");
rep("[ ] Le risque de mettre une quantité de fluide trop importante est plus élevé");
rep("[ ] Il se peut que la pression d'aspiration de l'installation soit trop basse de ce fait");
rep("[x] Il existe un risque de coup de liquide");
faux("Remplir une installation avec du refrigerant en phase liquide comporte un risque de coup de liquide dans le compresseur si la procedure n'est pas maitrisee");

quest("AgrFroid292 : Un remplissage en phase vapeur est :://a");
rep("[ ] Préférable au remplissage en phase liquide parce que le processus est plus facile à contrôler dans ce cas-là");
rep("[x] plus lent que le remplissage en phase liquide (Il est néanmoins techniquement requis avec certains réfrigérants)");
rep("[ ] Tout aussi indiqué que le remplissage en phase liquide");
rep("[ ] Uniquement réalisable sur de grandes installations");
faux("Un remplissage en phase vapeur est plus lent que le remplissage en phase liquide, bien que techniquement requis pour certains refrigerants");

quest("AgrFroid293 : Peut-on se servir d'eau comme fluide pour tester l'étanchéité d'un circuit de réfrigération ?://a");
rep("[x] Non, jamais dans une installation frigorifique");
rep("[ ] Uniquement si c'est de l'eau distillée");
rep("[ ] Oui, de préférence");
rep("[ ] Uniquement à des pressions supérieures à 20 bar");
faux("On ne doit jamais utiliser d'eau comme fluide de test d'etancheite dans une installation frigorifique, a cause des risques de corrosion et de gel");

quest("AgrFroid294 : Quelles prescriptions doivent respecter les tuyauteries frigorifiques en cuivre?://a");
rep("[ ] Etre faites en un alliage de cuivre spécial, facile à souder en technique du froid et possédant un point de fusion égal à 987 °C");
rep("[ ] Etre en cuivre doux, pur, spécialement recuit et livré exclusivement en bobine");
rep("[ ] Avoir des parois d'une épaisseur minimale de 1 mm et résister à une pression d'au moins 25 bar");
rep("[x] Etre en cuivre pur, déshydratées et polies à l'intérieur, et également prévues pour travailler sous pression");
faux("Les tuyauteries frigorifiques en cuivre doivent etre en cuivre pur, deshydratees et polies a l'interieur, et prevues pour travailler sous pression");

quest("AgrFroid295 : Quelle précaution doit-on généralement prendre lors de travaux de brasure réalisés sur les détendeurs thermostatiques?://a");
rep("[ ] on utilise la brasure tendre et avec une petite flamme");
rep("[ ] on ne doit pas prendre aucune précaution particulière si ce n'est travailler le plus rapidement possible et avec une petite flamme");
rep("[x] on doit éviter de surchauffer l'intérieur du détendeur en protégeant la tête thermostatique, par exemple en l'enveloppant avec un linge mouillé");
rep("[ ] on ne doit jamais braser un détendeur, il faut pour cela exclusivement utiliser des raccords flare");
faux("Lors du brasage pres d'un detendeur thermostatique, il faut proteger la tete sensible a la chaleur en l'enveloppant par exemple d'un linge mouille");

quest("AgrFroid296 : Quels sont les symptômes possibles traduisant un manque de fluide frigorigène dans une installation en fonctionnement?://a");
rep("[x] grande surchauffe à la sortie de l'évaporateur et une température de refoulement élevée");
rep("[ ] petite surchauffe à la sortie de l'évaporateur et une faible température de refoulement");
rep("[ ] des températures d'évaporation et de condensation élevées");
rep("[ ] les pressions d'évaporation et de condensation sont élevées");
faux("Un manque de fluide frigorigene se traduit par une grande surchauffe a la sortie de l'evaporateur et une temperature de refoulement elevee");

quest("AgrFroid297 : Le tirage au vide d'une installation a principalement pour but :://a");
rep("[x] de réaliser sa déshydratation");
rep("[ ] de contrôler son étanchéité");
rep("[ ] d'injecter de l'huile dans les conduites pour lubrifier les pièces mobiles");
rep("[ ] de vérifier que le fluide circule bien dans le détendeur");
faux("Le tirage au vide a pour but principal de realiser la deshydratation de l'installation en eliminant l'humidite residuelle");

quest("AgrFroid298 : La brasure sous atmosphère d'azote sec permet:://a");
rep("[ ] de refroidir les pièces pour empêcher qu'elles ne fondent");
rep("[ ] de garder une réserve de température");
rep("[x] de garder propre l'intérieur des pièces et éviter l'oxydation");
rep("[ ] de garder en réserve de la soudure et donc l'installation sera moins chère");
faux("La brasure sous atmosphere d'azote sec permet de garder l'interieur des pieces propre et d'eviter l'oxydation");

quest("AgrFroid299 : Le remplissage en phase gazeuse (vapeur) est toujours possible dans le cas :://a");
rep("[x] du R134a");
rep("[ ] du R404A");
rep("[ ] du R407C");
rep("[ ] de tous les fluides réfrigérants");
faux("Le remplissage en phase vapeur est toujours possible pour le R134a, qui est un fluide pur et non un melange");

quest("AgrFroid300 : Le remplissage en phase liquide est requis dans le cas :://a");
rep("[ ] du R134a");
rep("[ ] du R507");
rep("[x] du R407C");
rep("[ ] de tous les agents réfrigérants");
faux("Le R407C etant un melange non azeotrope, son remplissage doit se faire en phase liquide pour conserver la bonne proportion des composants");

theme("St Laurent : L'agrégation du froid - Part4");
debut("Préparation à l'examen sur l'agrégation frigorifique");

quest("AgrFroid300 : Le remplissage en phase liquide est requis dans le cas :://a");
rep("[ ] du R134a");
rep("[ ] du R507");
rep("[x] du R407C");
rep("[ ] de tous les agents réfrigérants");
faux("Le R407C etant un melange non azeotrope, son remplissage doit se faire en phase liquide pour conserver la bonne proportion des composants");

quest("AgrFroid301 : Le remplissage en phase liquide est :://a");
rep("[ ] préférable au remplissage en phase vapeur parce qu'il facilite le contrôle du processus");
rep("[x] requis pour les mélanges non-azéotropes (R4--)");
rep("[ ] aussi bon que le remplissage en phase vapeur à condition de bien appliquer la méthode à suivre");
rep("[ ] réservé seulement aux grandes installations");
faux("Les melanges refrigerants non azeotropes comme les series R4xx sont composes de plusieurs molecules ayant des points d'ebullition differents. Transvases en phase vapeur, les composants les plus volatils s'echappent en premier, ce qui deplace progressivement la composition du melange restant dans la bouteille (fractionnement). Pour conserver la composition d'origine et garantir le bon fonctionnement du systeme, ces melanges doivent donc etre charges en phase liquide, ou toute la composition est transferee simultanement");

quest("AgrFroid302 : Selon la norme NBN EN 378, le test de pression doit être réalisé://a");
rep("[ ] à 10 bars de pression efficace");
rep("[ ] à 20 bars de pression absolus");
rep("[ ] à 2 fois la pression maximale admissible (PS)");
rep("[x] à une fois la pression maximale admissible (PS)");
faux("Selon la norme NBN EN 378, le test de resistance a la pression doit etre realise a une valeur egale a la pression maximale admissible PS de l'installation, et non a un multiple de celle ci comme c'est parfois le cas pour d'autres equipements sous pression. Ce test verifie que l'installation resiste sans deformation a sa pression de service nominale maximale");

quest("AgrFroid303 : Que se passe-t-il dans une installation de réfrigération si la température d'évaporation baisse ?://a");
rep("[ ] La puissance frigorifique augmente et la puissance absorbée diminue");
rep("[ ] La puissance frigorifique baisse et la puissance absorbée augmente");
rep("[x] La puissance frigorifique et la puissance absorbée diminuent");
rep("[ ] La puissance frigorifique et la puissance absorbée augmentent");
faux("Quand la temperature d'evaporation diminue, la BP chute egalement. Un gaz a plus basse pression est moins dense, donc pour un meme volume balaye par le compresseur, la masse de refrigerant aspiree et comprimee diminue. Moins de masse circule, donc la puissance frigorifique diminue. Et comme il y a moins de masse a comprimer, la puissance absorbee par le moteur diminue aussi");

quest("AgrFroid304 : Que se passe-t-il dans une installation de réfrigération si la température de condensation augmente ?://a");
rep("[ ] La puissance frigorifique augmente et la puissance absorbée diminue");
rep("[x] La puissance frigorifique diminue et la puissance absorbée augmente");
rep("[ ] La puissance frigorifique et la puissance absorbée diminuent toutes les deux");
rep("[ ] La puissance frigorifique et la puissance absorbée augmentent toutes les deux");
faux("Si la temperature de condensation augmente, la HP augmente, ce qui accroit le taux de compression. Un taux de compression plus eleve degrade le rendement volumetrique du compresseur, qui aspire moins de gaz a chaque cycle, donc le debit massique et la puissance frigorifique diminuent. Comprimer a une pression plus elevee demande aussi davantage de travail mecanique, donc la puissance absorbee augmente");

quest("AgrFroid305 : Lorsque la HP diminue://a");
rep("[ ] la puissance absorbée augmente");
rep("[ ] la puissance frigorifique diminue");
rep("[ ] la puissance absorbée augmente, la puissance frigorifique diminue et la puissance du moteur augmente");
rep("[x] la puissance frigorifique augmente");
faux("Une HP plus basse reduit le taux de compression, ce qui ameliore le rendement volumetrique du compresseur: il aspire davantage de gaz par cycle, le debit massique augmente, et donc la puissance frigorifique augmente aussi");

quest("AgrFroid306 : Sachant que les compresseurs de deux installations frigorifiques différentes, une positive ( + 2°C) et l'autre négative (- 25°C), fournissent la même puissance frigorifique (5 kW par exemple), quelle sera l'affirmation correcte parmi les affirmations suivantes ?://a");
rep("[ ] Les deux compresseurs possèdent le même volume balayé et sont entrainés par le même moteur");
rep("[ ] Le compresseur de l'installation positive possède un volume balayé plus élevé et un moteur électrique plus puissant");
rep("[ ] Les deux compresseurs possèdent le même volume balayé, mais le compresseur de l'installation positive a besoin d'un moteur moins puissant");
rep("[x] Le compresseur de l'installation négative possède un volume balayé plus important ainsi qu'un moteur électrique plus puissant");
faux("Pour fournir la meme puissance frigorifique, une installation a -25°C travaille avec un gaz aspire beaucoup moins dense qu'une installation a +2°C. Pour compenser cette faible densite et deplacer la meme masse de refrigerant, le compresseur de l'installation negative doit avoir un volume balaye nettement plus grand. De plus, le taux de compression est plus eleve en froid negatif, ce qui necessite un moteur plus puissant");

quest("AgrFroid307 : Quelle affirmation est correcte dans le cas d'une installation frigorifique avec condenseur à air se trouvant à l'extérieur et une chambre froide négative ?://a");
rep("[ ] les températures de condensation et d'évaporation sont pratiquement constantes toute l'année");
rep("[x] la température de condensation varie plus que la température d'évaporation durant une année");
rep("[ ] la température de condensation reste constante pendant toute l'année, alors que la température d'évaporation varie");
rep("[ ] durant toute l'année, la température de condensation comme la température d'évaporation varient très fortement");
faux("La chambre froide negative est regulee a une consigne fixe toute l'annee, la temperature d'evaporation reste donc relativement stable. En revanche, le condenseur a air exterieur subit les variations saisonnieres de temperature ambiante, ce qui fait fortement varier la temperature de condensation au fil de l'annee");

quest("AgrFroid308 : Il y a une flèche sur l'électrovanne. Laquelle des affirmations suivantes est correcte ?://a");
rep("[ ] Si l'on monte l'électrovanne à l'envers, elle fonctionnera correctement malgré tout");
rep("[x] Si l'on monte l'électrovanne à l'envers, il se peut qu'elle ne fonctionne pas, qu'elle fonctionne mal ou qu'elle s'ouvre intempestivement");
rep("[ ] Si l'on monte l'électrovanne à l'envers, elle pourra fonctionner, mais elle opposera une grande résistance à l'écoulement du fluide");
rep("[ ] Cette flèche indique que l'électrovanne doit être montée à l'horizontale");
faux("Les electrovannes a clapet pilote utilisent souvent la difference de pression amont aval dans un sens precis indique par la fleche pour assister leur ouverture. Montee a l'envers, cette difference de pression ne joue plus dans le bon sens, ce qui peut empecher le fonctionnement normal, le degrader, ou provoquer une ouverture incontrolee");

quest("AgrFroid309 : Quelle influence une hausse de la teneur en argent de la du métal d'apport a-t-elle sur la température ?://a");
rep("[x] Plus la teneur en argent est élevée, plus la température de fusion est basse");
rep("[ ] Plus la teneur en argent est élevée, plus la température de fusion est élevée");
rep("[ ] La teneur en argent n'a pas d'influence sur la température de fusion de la soudure");
rep("[ ] Cela risque de réduire la durabilité de la soudure");
faux("Dans les alliages de brasure argent cuivre phosphore utilises en frigorifique, plus la proportion d'argent augmente, plus la temperature de fusion de l'alliage diminue, ce qui permet de braser a une temperature plus basse, utile pres des composants sensibles a la chaleur");

quest("AgrFroid310 : Pour réaliser une bonne brasure dans un circuit frigorifique dont les tuyauteries sont en cuivre il faut utiliser:://a");
rep("[ ] comme métal d'apport de l'étain");
rep("[x] comme métal d'apport de l'argent et utiliser un décapant");
rep("[ ] comme métal d'apport de l'étain et utiliser un décapant");
rep("[ ] comme métal d'apport de l'argent pur");
faux("Pour une bonne brasure cuivre sur cuivre, on utilise un metal d'apport contenant de l'argent associe a un decapant qui elimine les oxydes et facilite la penetration de la brasure dans le joint capillaire entre les deux tubes");

quest("AgrFroid311 : La teneur minimale en argent pour réaliser une brasure cuivre-cuivre est de://a");
rep("[ ] 40,00 %");
rep("[ ] 20,00 %");
rep("[ ] 10,00 %");
rep("[x] 5,00 %");
faux("La brasure cuivre contre cuivre est la configuration la plus simple a souder, les deux metaux ayant la meme temperature de fusion. Une teneur minimale de 5 pourcent en argent suffit generalement pour obtenir un joint resistant et etanche dans ce cas");

quest("AgrFroid312 : La teneur minimale en argent pour réaliser une brasure cuivre-acier est de://a");
rep("[x] 30,00 %");
rep("[ ] 20,00 %");
rep("[ ] 10,00 %");
rep("[ ] 5,00 %");
faux("Souder du cuivre sur de l'acier est plus delicat car les deux metaux ont des temperatures de fusion et des coefficients de dilatation differents. Il faut donc une teneur en argent plus elevee, de l'ordre de 30 pourcent minimum, pour garantir la resistance mecanique et l'etancheite du joint");

quest("AgrFroid313 : Quand doit-on remplir une installation frigorifique avec son fluide frigorigène://a");
rep("[ ] le plus rapidement possible après son montage");
rep("[ ] après avoir obtenu la permission du propriétaire de l'installation");
rep("[x] le plus rapidement après avoir réalisé le test de pression et le tirage au vide de l'installation");
rep("[ ] après qu'un organisme agréé ait contrôlé l'installation");
faux("Une fois le test de pression a l'azote et le tirage au vide realises avec succes, confirmant l'absence de fuite et de pollution interne, il faut proceder au remplissage le plus rapidement possible, pour eviter que l'installation ne reste trop longtemps sous vide ou ouverte inutilement, avec un risque de reentree d'humidite");

quest("AgrFroid314 : Peut-on relier deux conduites en les soudant à un morceau de tuyau de diamètre plus grand ?://a");
rep("[ ] On peut accepter un raccord réalisé de cette façon s'il subit avec succès un essai de pression");
rep("[ ] Oui, bien entendu, ces raccords sont étanches et de bonne qualité. De plus, c'est ainsi que l'on fait depuis des années");
rep("[ ] Les raccords de ce genre ne sont acceptables que dans la mesure où ils sont réalisés sous flux d'azote");
rep("[x] Non, car cette technique ne permet pas de réaliser un raccord capillaire séparé par fusion ; c'est pourquoi elle est déconseillée et il est préférable d'employer des manchons spéciaux");
faux("Souder deux conduites en les introduisant dans un tiers tuyau de plus grand diametre ne cree pas un veritable joint capillaire par fusion entre les metaux, contrairement a un manchon special concu pour cet usage. Ce type de raccord improvise est donc fragile et deconseille, meme s'il semble passer un test de pression ponctuel");

quest("AgrFroid315 : Est-il indiqué de réutiliser le réfrigérant provenant d'un moteur de compresseur hermétique grillé ?://a");
rep("[ ] Oui, car cela n'a pas d'influence sur le fonctionnement");
rep("[ ] Oui, moyennant le remplacement des filtres-déshydrateurs de l'installation");
rep("[ ] Oui, si l'on ajoute suffisamment de réfrigérant neuf");
rep("[x] Non, il doit être récupéré et envoyé à l'usine pour y être soit traité, soit détruit");
faux("Apres un burn out, le refrigerant est contamine par des produits de decomposition acides et des residus issus de la combustion des isolants electriques. Il ne peut pas etre simplement filtre ou recycle localement, il doit obligatoirement etre recupere et envoye en usine specialisee pour y etre traite ou detruit");

quest("AgrFroid316 : Une HP élevée et un grand sous-refroidissement peuvent signifier:://a");
rep("[x] qu'il y a trop de fluide dans l'installation ou parfois des incondensables");
rep("[ ] qu'il y a trop peu de fluide dans l'installation");
rep("[ ] que la température ambiante est élevée");
rep("[ ] que la température de condensation est faible");
faux("Un exces de fluide remplit excessivement le condenseur, ce qui augmente a la fois la HP et la quantite de liquide sous refroidi disponible en sortie. Les gaz incondensables accumules dans le condenseur ont un effet similaire sur la HP. Ces deux causes produisent donc le meme type de symptome combine");

quest("AgrFroid317 : Une pression de refoulement trop élevée et un sous-refroidissement important peuvent être le signe :://a");
rep("[ ] d'un manque de réfrigérant");
rep("[ ] d'une température ambiante trop élevée");
rep("[x] d'un excès de réfrigérant ou parfois la présence d'incondensables");
rep("[ ] d'une température de condensation trop basse");
faux("Comme pour la question precedente, un exces de refrigerant ou la presence d'incondensables dans le condenseur fait monter simultanement la pression de refoulement et le sous refroidissement mesure en sortie de condenseur");

quest("AgrFroid318 : Tant un condenseur encrassé qu'un excès de réfrigérant feront monter la haute pression. Comment distinguer ces deux causes ?://a");
rep("[x] Quand il y a un excès de réfrigérant, le sous-refroidissement est important");
rep("[ ] Quand le condenseur est encrassé, le sous-refroidissement est important");
rep("[ ] En cas d'excès de réfrigérant, le sous-refroidissement est peu important");
rep("[ ] En cas d'excès de réfrigérant, la surchauffe est faible");
faux("Un condenseur encrasse perd en efficacite d'echange sans remplir excessivement le condenseur de liquide, le sous refroidissement reste donc modere. Un exces de fluide, au contraire, noie une partie du condenseur avec du liquide supplementaire, ce qui augmente nettement le sous refroidissement. C'est ce critere qui permet de distinguer les deux causes, meme si la HP est elevee dans les deux cas");

quest("AgrFroid319 : Une faible pression d'aspiration, une grande surchauffe et un petit sous-refroidissement peuvent signifier:://a");
rep("[ ] qu'il y trop de fluide dans l'installation");
rep("[x] qu'il n'y a pas assez de fluide dans l'installation");
rep("[ ] que le condenseur de l'installation est sale");
rep("[ ] que l'évaporateur de l'installation est sale");
faux("Un manque de fluide prive simultanement l'evaporateur de liquide, ce qui fait chuter la BP et provoque une surchauffe importante, et le condenseur de reserve de liquide, ce qui reduit le sous refroidissement par manque de liquide a accumuler en sortie");

quest("AgrFroid320 : Une faible pression d'aspiration et une petite surchauffe peuvent signifier:://a");
rep("[x] un évaporateur qui ne peut pas évaporer correctement le fluide");
rep("[ ] qu'il y a trop peu de fluide dans l'installation");
rep("[ ] qu'il y a trop de fluide dans l'installation");
rep("[ ] que le réfrigérant est contaminé");
faux("Si la pression d'aspiration est basse mais que la surchauffe reste faible, du liquide arrive donc quand meme jusqu'a la fin de l'evaporateur sans s'evaporer completement. Cela indique un probleme d'echange thermique a l'evaporateur lui meme (encrassement, givrage, manque de debit d'air) plutot qu'un probleme de quantite de fluide");

quest("AgrFroid321 : Quels sont les symptômes possibles d'un manque de réfrigérant dans une installation de réfrigération en service ?://a");
rep("[x] Une faible pression d'aspiration, une surchauffe importante et une température de refoulement élevée");
rep("[ ] Une faible surchauffe du réfrigérant à l'extrémité de l'évaporateur et une basse température du gaz refoulé par le compresseur");
rep("[ ] Des températures élevées d'évaporation et de condensation du réfrigérant");
rep("[ ] Une pression d'aspiration élevée, une faible surchauffe du réfrigérant à l'extrémité de l'évaporateur et un sous-refroidissement important");
faux("Un manque de refrigerant reduit la pression d'aspiration, augmente fortement la surchauffe car le liquide s'epuise avant la fin de l'evaporateur, et comme le gaz aspire est tres surchauffe, la temperature apres compression est elevee");

quest("AgrFroid322 : En dehors de l'azote, quels sont les gaz inertes dont l'usage est autorisé ?://a");
rep("[ ] L'hydrogène et l'hélium");
rep("[ ] Le néon et le radon");
rep("[ ] L'oxygène et l'air");
rep("[x] L'argon et l'hélium");
faux("Outre l'azote, qui est le gaz inerte standard, l'argon et l'helium peuvent egalement etre utilises comme gaz de test car ils sont chimiquement inertes vis a vis du circuit et ne reagissent pas avec l'huile ou le refrigerant");

quest("AgrFroid323 : A quelles exigences les soupapes de sécurité doivent-elles satisfaire ?://a");
rep("[ ] Elles doivent être dotées d'un obturateur spécial destiné à faciliter leur remplacement");
rep("[x] Elles doivent déclencher à 1,1 fois la pression maximale admissible");
rep("[ ] Elles doivent s'ouvrir si la pression dépasse de 2 bar celle indiquée sur la soupape");
rep("[ ] Elles doivent déclencher à 2 fois la pression maximale admissible");
faux("Comme pour la soupape de surpression, la norme impose que les soupapes de securite s'ouvrent lorsque la pression atteint 1,1 fois la pression maximale admissible de l'installation, pour proteger les composants tout en laissant une marge de fonctionnement normale");

quest("AgrFroid324 : Quels sont les quatre principaux composants d'une installation de réfrigération à compression ?://a");
rep("[ ] L'évaporateur, le condenseur, le filtre-dessiccateur et le regard");
rep("[ ] La conduite d'aspiration, celle de refoulement, celle du liquide et celle de condensation");
rep("[ ] L'évaporateur, le condenseur, le séparateur de liquide et le compresseur");
rep("[x] L'évaporateur, le compresseur, le condenseur et le détendeur");
faux("Un cycle frigorifique a compression de vapeur de base repose sur quatre organes essentiels qui se succedent: l'evaporateur pour absorber la chaleur, le compresseur pour comprimer le gaz, le condenseur pour rejeter la chaleur, et le detendeur pour detendre et reguler le debit de liquide");

quest("AgrFroid325 : Qu'est-ce que la conduite d'aspiration ?://a");
rep("[ ] La conduite qui relie le détendeur à l'évaporateur");
rep("[ ] Un synonyme de conduite de refoulement");
rep("[ ] La conduite qui relie le compresseur au filtre-dessiccateur");
rep("[x] La conduite qui relie l'évaporateur au compresseur");
faux("La conduite d'aspiration est, par definition, le tronçon qui transporte le gaz basse pression depuis la sortie de l'evaporateur jusqu'a l'entree du compresseur");

quest("AgrFroid326 : A quelles exigences de qualité l'huile d'une installation de réfrigération doit-elle répondre ?://a");
rep("[ ] Elle ne peut en aucun cas être miscible avec le réfrigérant");
rep("[x] Elle ne doit pas être acide, elle doit être déshydratée et exempte d'impuretés");
rep("[ ] Afin de permettre une meilleure lubrification du compresseur, sa teneur en humidité doit être supérieure à 2 ppm");
rep("[ ] Elle doit être légèrement acide pour prévenir la corrosion");
faux("Pour assurer une bonne lubrification et eviter la corrosion interne des composants metalliques, l'huile doit etre neutre, parfaitement deshydratee car l'humidite reagit avec certains refrigerants pour former des acides, et exempte d'impuretes solides qui useraient les pieces mobiles");

quest("AgrFroid327 : Pour quelle raison est-il préférable d'avoir une huile miscible avec le réfrigérant://a");
rep("[ ] Afin de la récupérer complètement lors du démantèlement de l'installation");
rep("[ ] Une installation ne peut fonctionner que si ils sont miscibles");
rep("[x] Afin de permettre le retour d'huile au compresseur");
rep("[ ] Pour permettre une meilleure lubrification du compresseur");
faux("Une huile miscible avec le refrigerant se melange a lui et circule avec le fluide dans tout le circuit. Cela permet a l'huile entrainee hors du compresseur de revenir naturellement vers le carter avec le flux de gaz et de liquide, assurant ainsi une lubrification continue");

quest("AgrFroid328 : Peut-on avoir des problèmes avec l'huile ester (POE), et quand?://a");
rep("[ ] Il s'agit d'un produit de haute qualité qui ne pose aucun problème");
rep("[x] Oui, quand elle a absorbé l'humidité");
rep("[ ] non, puisque c'est un produit pur, les problèmes sont nuls");
rep("[ ] oui, lorsqu'on la mélange avec de l'azote et du fluide frigorigène");
faux("L'huile polyol ester, tres hygroscopique, absorbe facilement l'humidite ambiante. Une fois hydratee, elle peut s'hydrolyser et former des acides organiques corrosifs qui degradent les composants internes du circuit, d'ou l'importance de la proteger de l'air");

quest("AgrFroid329 : Parmi les définitions suivantes, quelle est celle d'un condenseur ?://a");
rep("[ ] Echangeur de chaleur dans lequel un liquide est refroidi et s'évapore pour former un gaz");
rep("[ ] Pompe à liquide qui produit une hausse de pression en réduisant la chambre de compression");
rep("[x] Echangeur de chaleur dans lequel un gaz comprimé est refroidi et se condense pour former un liquide");
rep("[ ] Echangeur de chaleur qui assure l'évacuation de la vapeur d'eau condensée");
faux("Par definition, un condenseur est un echangeur de chaleur ou le gaz comprime et chaud provenant du compresseur cede sa chaleur au milieu exterieur, se refroidit, puis change d'etat pour devenir liquide");

quest("AgrFroid330 : Pourquoi place-t-on un piège à huile ?://a");
rep("[ ] Pour évacuer toute l'huile vers le compresseur lorsque l'installation est à l'arrêt");
rep("[ ] On dote les manomètres haute et basse pression d'un piège à huile pour éviter qu'ils ne soient endommagés");
rep("[ ] L'huile étant plus lourde, elle se déposerait au fond du réservoir de liquide en l'absence de piège");
rep("[x] Pour obtenir un retour d'huile optimal dans la conduite montante");
faux("Dans une conduite d'aspiration verticale montante, la vitesse du gaz seule n'est parfois pas suffisante pour entrainer l'huile sur toute la hauteur a faible charge. Un piege a huile accumule une petite quantite d'huile qui est periodiquement remontee par bouchon avec le flux de gaz, assurant un retour optimal");

quest("AgrFroid331 : La teneur minimale en argent pour réaliser une brasure cuivre-laiton est de://a");
rep("[x] 30% ou plus");
rep("[ ] 20,00 %");
rep("[ ] 10,00 %");
rep("[ ] 5,00 %");
faux("Comme pour la brasure cuivre acier, souder du cuivre sur du laiton, un alliage different du cuivre pur, necessite une teneur elevee en argent, de l'ordre de 30 pourcent ou plus, pour obtenir un joint fiable");

quest("AgrFroid332 : A quoi sert un filtre-déshydrateur?://a");
rep("[ ] A séparer l'huile du réfrigérant");
rep("[ ] A éliminer les saletés présentes dans le réfrigérant");
rep("[ ] A débarrasser l'huile de ses particules les plus grosses");
rep("[x] A retenir les impuretés et l'humidité du réfrigérant");
faux("Le filtre deshydrateur combine deux fonctions: une partie filtrante qui retient les particules solides et une partie dessicante qui absorbe l'humidite residuelle presente dans le circuit, protegeant ainsi le detendeur et le compresseur");

quest("AgrFroid333 : Le compresseur d'une installation de réfrigération :://a");
rep("[x] aspire la vapeur produite dans l'évaporateur et la refoule vers le condenseur");
rep("[ ] aspire la vapeur et refoule le réfrigérant liquide vers l'évaporateur");
rep("[ ] maintient la pression dans l'évaporateur au même niveau que la pression de vapeur saturante");
rep("[ ] maintient au même niveau les pressions dans l'évaporateur et le condenseur");
faux("Le role fondamental du compresseur est d'aspirer la vapeur basse pression produite dans l'evaporateur, de la comprimer, puis de la refouler a haute pression et haute temperature vers le condenseur");

quest("AgrFroid334 : Dans le condenseur :://a");
rep("[ ] le réfrigérant liquide s'évapore à pression constante");
rep("[ ] la température de la vapeur provenant du compresseur augmente jusqu'à la température de condensation");
rep("[x] la température de la vapeur provenant du compresseur doit au minimum descendre jusqu'à la température de condensation");
rep("[ ] la pression tombe en dessous de la valeur de la pression de vapeur saturante");
faux("A l'entree du condenseur, la vapeur arrive fortement surchauffee par la compression. Avant de pouvoir se condenser, elle doit d'abord etre refroidie jusqu'a atteindre sa temperature de condensation, c'est seulement a partir de ce point que le changement d'etat vers le liquide peut commencer");

quest("AgrFroid335 : En technique du froid, que désigne-t-on par cuivrage ?://a");
rep("[ ] L'emploi de pignons coniques en cuivre doux pour réaliser des raccords évasés");
rep("[ ] L'emploi de pignons en cuivre pour fixer des boulons");
rep("[x] Le dépôt d'une couche de cuivre sur les parties en acier de l'installation");
rep("[ ] L'attaque du cuivre dans les installations à l'ammoniac");
faux("Le cuivrage est un phenomene indesirable ou des ions cuivre, dissous dans le refrigerant humide, se deposent electrolytiquement sur les surfaces en acier du systeme, notamment le rotor et le stator du moteur hermetique, pouvant provoquer des courts circuits ou des grippages");

quest("AgrFroid336 : Comment éviter le cuivrage ?://a");
rep("[ ] En n'utilisant pas d'huile minérale");
rep("[x] En évitant qu'il y ait de l'humidité dans l'installation");
rep("[ ] En n'employant aucun réfrigérant non condensable");
rep("[ ] En employant exclusivement de l'huile-ester");
faux("Le cuivrage est provoque par une reaction chimique impliquant l'humidite presente dans le circuit en combinaison avec l'huile et le refrigerant. En maintenant l'installation parfaitement seche, on empeche cette reaction de se produire");

quest("AgrFroid337 : Quelle est l'organe de l'installation dont le fonctionnement rique d'être le plus perturbé par la présence d'humidité dans le réfrigérant ?://a");
rep("[ ] La pompe à huile");
rep("[x] Le détendeur");
rep("[ ] Le réservoir de liquide");
rep("[ ] Le séparateur de liquide");
faux("L'humidite presente dans le refrigerant peut geler au niveau de l'orifice calibre du detendeur lorsque la temperature y chute fortement lors de la detente, formant un bouchon de glace qui obstrue partiellement ou totalement le passage");

quest("AgrFroid338 : Le sous-refroidissement du réfrigérant : [complétez la phrase]://a");
rep("[ ] a toujours lieu dans le condenseur");
rep("[ ] a toujours lieu hors du condenseur");
rep("[x] peut avoir lieu tant en dehors qu'à l'intérieur du condenseur");
rep("[ ] peut avoir lieu tant dans le condenseur que dans l'évaporateur");
faux("Le sous refroidissement peut se produire directement dans la derniere partie du condenseur, mais aussi plus loin, dans la conduite de liquide elle meme, si celle ci est suffisamment refroidie par le milieu ambiant ou par un echangeur dedie");

quest("AgrFroid339 : Quel changement d'état le réfrigérant subit-il dans le condenseur ?://a");
rep("[ ] Il passe de l'état solide à l'état liquide");
rep("[ ] Il passe de l'état liquide à l'état gazeux");
rep("[ ] Il passe de l'état gazeux à l'état solide");
rep("[x] Il passe de l'état gazeux à l'état liquide");
faux("Par definition du role du condenseur, le refrigerant y passe de l'etat gazeux en entree a l'etat liquide en sortie, en cedant sa chaleur latente de condensation au milieu de refroidissement");

quest("AgrFroid340 : Y a-t-il toujours un rapport connu entre la pression et la température dans une installation au R134a ?://a");
rep("[ ] Oui. La réglette réfrigérant permet toujours de savoir à quelle température correspond telle pression");
rep("[ ] Non, la pression et la température sont toujours indépendantes l'une de l'autre");
rep("[x] Non, il n'y en a un que dans la zone où se produit un changement d'état");
rep("[ ] Non, il n'y en a un que dans la phase gazeuse et dans la zone liquide");
faux("Un rapport fixe et connu entre pression et temperature, la courbe de saturation, n'existe que dans la zone ou le fluide change d'etat. En dehors de cette zone, dans la phase purement liquide ou purement vapeur, la pression et la temperature peuvent varier independamment l'une de l'autre");

quest("AgrFroid341 : Qu'est-ce que le sous-refroidissement ?://a");
rep("[ ] Une condensation à trop basse température");
rep("[ ] Le givrage du compresseur");
rep("[x] Un refroidissement supplémentaire du réfrigérant après sa condensation complète");
rep("[ ] Un refroidissement supplémentaire du réfrigérant après son évaporation complète");
faux("Le sous refroidissement correspond a l'abaissement de la temperature du liquide en dessous de sa temperature de condensation, une fois que tout le gaz s'est deja entierement condense en liquide");

quest("AgrFroid342 : Qu'est-ce que la surchauffe ?://a");
rep("[ ] Une évaporation à température trop élevée");
rep("[ ] Une compression excessive");
rep("[x] Un réchauffement supplémentaire du réfrigérant après son évaporation complète");
rep("[ ] Un réchauffement supplémentaire du réfrigérant après sa condensation complète");
faux("De maniere symetrique au sous refroidissement, la surchauffe correspond a l'elevation de la temperature de la vapeur au dessus de sa temperature d'evaporation, une fois que tout le liquide s'est deja entierement evapore");

quest("AgrFroid343 : Une surchauffe (excessive) :://a");
rep("[ ] accroît le rendement du transfert de chaleur dans l''évaporateur");
rep("[ ] dégrade le rendement du condenseur");
rep("[ ] provoque des coups de liquide dans le compresseur");
rep("[x] réduit le rendement de l'installation de réfrigération");
faux("Une surchauffe excessive signifie qu'une partie de la surface de l'evaporateur n'est plus utilisee pour evaporer du liquide mais seulement pour rechauffer un gaz deja sec, ce qui diminue la puissance frigorifique utile et degrade le rendement global de l'installation");

quest("AgrFroid344 : Une surchauffe trop importante://a");
rep("[x] augmente la température de refoulement");
rep("[ ] abaisse les températures finales de compression");
rep("[ ] accroît la pression d'aspiration");
rep("[ ] abaisse la pression d'aspiration");
faux("Plus le gaz entre chaud dans le compresseur, plus sa temperature apres compression sera elevee, puisque la compression ajoute un echauffement supplementaire a une temperature de depart deja plus haute");

quest("AgrFroid345 : Le sous-refroidissement :://a");
rep("[ ] dégrade le rendement de l'installation de réfrigération");
rep("[x] améliore le rendement de l'installation de réfrigération");
rep("[ ] provoque des coups de liquide dans le compresseur");
rep("[ ] provoque un givrage du compresseur");
faux("Un liquide plus froid en sortie de condenseur contient moins d'energie thermique avant la detente, ce qui signifie qu'une plus grande proportion du liquide pourra s'evaporer utilement dans l'evaporateur, augmentant ainsi la puissance frigorifique disponible, donc le rendement global");

quest("AgrFroid346 : Comment peut-on détecter des gaz incondensables, généralement de l'air, dans une installation de réfrigération à l'arrêt, disposant d'un condenseur à air ?://a");
rep("[ ] En vérifiant que la pression d'aspiration n'est pas trop basse");
rep("[x] En comparant la température ambiante à celle du manomètre HP. (après rappel du fluide dans la bouteille et son refroidissement jusqu'à t° ambiante)");
rep("[ ] En comparant le rapport entre la pression d'évaporation et la température sur la réglette réfrigérant");
rep("[ ] En vérifiant que la pression d'aspiration n'est pas trop élevée");
faux("Apres un arret suffisamment long pour que les pressions s'equilibrent a la temperature ambiante, on compare la pression lue au manometre HP a la pression theorique de saturation correspondant a cette temperature. Si la pression lue est superieure a la valeur theorique attendue, cet ecart revele la presence de gaz incondensables");

quest("AgrFroid347 : Un condenseur à air encrassé a pour effet :://a");
rep("[ ] exclusif de faire monter la pression de condensation");
rep("[ ] d'empêcher exclusivement la condensation complète du réfrigérant");
rep("[ ] de provoquer exclusivement un trop faible sous-refroidissement");
rep("[x] possible de pouvoir induire les trois conséquences mentionnées");
faux("Un condenseur encrasse evacue moins bien la chaleur, ce qui peut simultanement faire monter la pression de condensation, empecher une condensation complete du refrigerant, et reduire le sous refroidissement disponible, car le condenseur n'arrive plus a refroidir suffisamment le liquide");

quest("AgrFroid348 : Qu'est-ce qui permet de dimensionner le volume du réservoir de liquide ?://a");
rep("[ ] La taille des évaporateurs");
rep("[ ] La taille du condenseur");
rep("[ ] La taille du compresseur");
rep("[x] La quantité de fluide de l'installation");
faux("Le reservoir de liquide doit pouvoir contenir une partie significative de la charge totale de refrigerant de l'installation, notamment lors des phases de pump down ou de variation de charge, c'est donc la quantite totale de fluide qui determine son dimensionnement");

quest("AgrFroid349 : Une conduite de liquide de diamètre trop faible provoque:://a");
rep("[ ] un sous-refroidissement trop important");
rep("[ ] une trop faible chute de pression dans le détendeur");
rep("[x] une prédétente ou flash-gaz suite à une perte de charge trop importante dans la conduite");
rep("[ ] une trop importante chute de pression dans le détendeur");
faux("Une conduite de liquide de diametre trop faible impose une resistance excessive a l'ecoulement du liquide, entrainant une chute de pression importante le long de la conduite. Si cette chute de pression fait passer le liquide en dessous de sa pression de saturation avant meme d'atteindre le detendeur, une partie se vaporise prematurement");

quest("AgrFroid350 : Qu'est-ce que le flash-gaz ?://a");
rep("[ ] Du gaz fortement surchauffé");
rep("[ ] Du gaz qui se forme quand de l'huile s'évapore dans le carter");
rep("[x] La formation de gaz dans la conduite de liquide");
rep("[ ] La présence d'air dans le condenseur");
faux("Le flash gaz designe precisement la vapeur qui se forme de maniere intempestive dans la conduite de liquide, avant le detendeur, lorsque la pression y chute en dessous du point de saturation correspondant a la temperature du liquide");

quest("AgrFroid351 : Dans un compresseur mono-étagé refroidi par les gaz aspirés, la pression dans le carter est égale :://a");
rep("[x] à la basse pression");
rep("[ ] à la haute pression");
rep("[ ] à la pression atmosphérique");
rep("[ ] à la pression absolue");
faux("Dans un compresseur refroidi par les gaz aspires, le gaz basse pression provenant de l'evaporateur traverse d'abord le carter du moteur avant d'etre comprime. La pression regnant dans le carter est donc egale a la basse pression, avant que le gaz ne soit comprime");

quest("AgrFroid352 : Que signifient les lettres MOP?://a");
rep("[ ] Marginal Operating Pressure");
rep("[ ] Mean Operating Pressure");
rep("[x] Maximum Operating pressure");
rep("[ ] Minimum Operating pressure");
faux("Les lettres MOP signifient maximum operating pressure, c'est a dire la pression maximale de fonctionnement que le detendeur laisse atteindre dans l'evaporateur, pour limiter la pression d'aspiration et donc le courant absorbe par le compresseur au demarrage");

quest("AgrFroid353 : Quelle est la conséquence d'une conduite d'aspiration de trop faible diamètre ?://a");
rep("[ ] Un sous-refroidissement excessif");
rep("[x] Une surchauffe excessive à l'aspiration du compresseur");
rep("[ ] La formation de flash-gaz");
rep("[ ] Une surchauffe insuffisante à l'aspiration du compresseur");
faux("Une conduite d'aspiration trop etroite cree une importante perte de charge, ce qui reduit la pression effective disponible a l'entree du compresseur. Cette chute de pression supplementaire se traduit par une surchauffe mesuree plus importante a l'entree du compresseur");

quest("AgrFroid354 : Quelle est la conséquence d'une conduite d'aspiration de trop faible diamètre ?://a");
rep("[ ] Un sous-refroidissement excessif");
rep("[x] une température de refoulement plus élevée");
rep("[ ] La formation de flash-gaz");
rep("[ ] Une surchauffe insuffisante à l'aspiration du compresseur");
faux("La surchauffe excessive provoquee par la perte de charge dans une conduite d'aspiration trop etroite se repercute directement sur la temperature finale apres compression: un gaz aspire plus chaud ressort egalement plus chaud du compresseur");

quest("AgrFroid355 : A pression de condensation constante, plus un compresseur travaille à une pression d'aspiration basse, alors :://a");
rep("[ ] meilleur est le rendement");
rep("[x] moins bon est le rendement");
rep("[ ] plus la température de condensation sera élevée");
rep("[ ] plus la température de condensation sera faible");
faux("A pression de condensation constante, une pression d'aspiration plus basse augmente le taux de compression, ce qui degrade le rendement volumetrique et energetique du compresseur: il faut fournir davantage de travail pour produire la meme quantite de froid");

quest("AgrFroid356 : A pression de condensation inchangée, plus un compresseur travaille à une pression d'aspiration élevée,://a");
rep("[x] meilleur est le rendement");
rep("[ ] moins bon est le rendement");
rep("[ ] plus la pression de condensation augmente");
rep("[ ] plus la pression de condensation baisse");
faux("A pression de condensation inchangee, une pression d'aspiration plus elevee reduit le taux de compression, ce qui ameliore le rendement volumetrique du compresseur et donc son efficacite energetique globale");

quest("AgrFroid357 : Plus la pression de condensation est basse,://a");
rep("[x] meilleur est le rendement");
rep("[ ] plus le rendement se dégrade");
rep("[ ] plus la pression d'évaporation est élevée");
rep("[ ] plus la pression d'évaporation est basse");
faux("Une pression de condensation plus basse reduit egalement le taux de compression a BP constante, ce qui diminue le travail de compression necessaire et ameliore donc le rendement de l'installation");

quest("AgrFroid358 : Lorsque la HP diminue et que la BP reste constante://a");
rep("[ ] la puissance absorbée augmente");
rep("[ ] la puissance frigorifique diminue");
rep("[ ] la puissance absorbée augmente, la puissance frigorifique diminue et la puissance du moteur augmente");
rep("[x] la puissance frigorifique augmente");
faux("Comme pour une HP plus basse en general, a BP constante le taux de compression se reduit, ce qui ameliore le rendement volumetrique, augmente le debit massique et donc la puissance frigorifique");

quest("AgrFroid359 : lorsque la HP augmente, et que la BP reste constante alors:://a");
rep("[ ] le COP augmente");
rep("[x] le COP diminue");
rep("[ ] la puissance frigorifique augmente");
rep("[ ] la puissance absorbée diminue");
faux("Le COP est le rapport entre la puissance frigorifique et la puissance absorbee. Une HP plus elevee a BP constante augmente le taux de compression, ce qui degrade a la fois la puissance frigorifique et augmente la puissance absorbee, le COP diminue donc");

quest("AgrFroid360 : lorsque la BP augmente, et que la HP reste constante alors:://a");
rep("[x] le COP augmente");
rep("[ ] le COP diminue");
rep("[ ] la puissance frigorifique diminue");
rep("[ ] la puissance absorbée diminue");
faux("A l'inverse, une BP plus elevee a HP constante reduit le taux de compression, ameliore le rendement volumetrique et reduit le travail de compression necessaire par unite de froid produite, le COP augmente donc");

quest("AgrFroid361 : Du point de vue de la puissance électrique du moteur, peut-on utiliser une installation de froid négatif (-25°C) pour produire du froid positif (+2°C) ?://a");
rep("[ ] Oui, il n'y a aucune différence entre les compresseurs pour application de congélation et ceux destinés à un usage frigorifique positif");
rep("[ ] Oui, car dans ce cas, le moteur électrique du compresseur est d'une puissance plus que suffisante");
rep("[x] Non, car il est fort probable que la puissance du moteur électrique du compresseur soit insuffisante");
rep("[ ] Non, il faut remplacer les dispositifs d'étanchéité");
faux("Un compresseur congu pour du froid negatif, utilise en froid positif, voit son debit massique aspire fortement augmenter car la BP est beaucoup plus haute et le gaz plus dense. La puissance frigorifique delivree depasse alors la puissance thermique que le moteur, dimensionne pour le regime negatif, peut absorber sans surcharge");

quest("AgrFroid362 : Du point de vue de la puissance électrique du moteur, peut-on utiliser une installation de froid positif (+ 2°C) pour produire du froid négatif (-25°C) ?://a");
rep("[ ] Oui, il n'y a aucune différence entre les compresseurs pour application de congélation et ceux destinés à un usage frigorifique positif");
rep("[x] Oui, car dans ce cas, le moteur électrique du compresseur sera d'une puissance plus que suffisante");
rep("[ ] Non, car il est fort probable que le moteur électrique du compresseur ne sera pas assez puissant");
rep("[ ] Non, il faut remplacer les dispositifs d'étanchéité");
faux("A l'inverse, un compresseur congu pour du froid positif, utilise en froid negatif, voit son debit massique aspire fortement diminuer car la BP est tres basse et le gaz peu dense. La puissance thermique demandee au moteur diminue, et le moteur, deja dimensionne pour un regime plus exigeant, dispose d'une puissance largement suffisante");

quest("AgrFroid363 : Quel fonctionnement de l'installation fournira un meilleur rendement ?://a");
rep("[ ] évaporation -10°C et condensation +40°C");
rep("[ ] évaporation -5°C et condensation +40°C");
rep("[ ] évaporation 0°C et condensation +40°C");
rep("[x] évaporation +5°C et condensation +40°C");
faux("Plus l'ecart entre la temperature d'evaporation et la temperature de condensation est faible, meilleur est le rendement du cycle. A condensation constante de 40°C, c'est la temperature d'evaporation la plus haute, +5°C, qui donne l'ecart le plus faible et donc le meilleur rendement");

quest("AgrFroid364 : Quel fonctionnement de l'installation fournira un meilleur rendement ?://a");
rep("[x] évaporation -10°C et condensation +40°C");
rep("[ ] évaporation -10°C et condensation +45°C");
rep("[ ] évaporation -10°C et condensation +50°C");
rep("[ ] évaporation -10°C et condensation +55°C");
faux("A evaporation constante de -10°C, c'est la temperature de condensation la plus basse parmi les options, 40°C, qui minimise l'ecart entre evaporation et condensation et offre donc le meilleur rendement comparativement aux autres options a condensation plus elevee");

quest("AgrFroid365 : Quel fonctionnement de l'installation fournira un meilleur rendement ?://a");
rep("[ ] évaporation -10°C et condensation +40°C");
rep("[x] évaporation -5°C et condensation +40°C");
rep("[ ] évaporation -10°C et condensation +50°C");
rep("[ ] évaporation -5°C et condensation +50°C");
faux("Entre les quatre combinaisons proposees, celle qui minimise a la fois l'ecart entre evaporation et condensation est evaporation -5°C et condensation +40°C, ce qui lui donne le meilleur rendement global");

quest("AgrFroid366 : la puissance absorbée par un compresseur est d'autant plus élevée que :://a");
rep("[x] la température d'évaporation du réfrigérant est basse et que sa température de condensation est élevée");
rep("[ ] les températures d'évaporation et de condensation du réfrigérant sont élevées");
rep("[ ] les températures d'évaporation et de condensation du réfrigérant sont basses");
rep("[ ] la température d'évaporation du réfrigérant est élevée et que sa température de condensation est basse");
faux("Une temperature d'evaporation basse associee a une temperature de condensation elevee maximise l'ecart entre les deux, donc le taux de compression, ce qui augmente directement le travail mecanique necessaire et donc la puissance electrique absorbee");

quest("AgrFroid367 : Quelles caractéristiques présenteront deux installations de même puissance frigorifique et utilisant respectivement du R134a et du R404A ?://a");
rep("[x] le compresseur au R134a aura un volume balayé plus important que le compresseur au R404A");
rep("[ ] le compresseur au R134a aura un volume balayé plus petit que le compresseur au R404A");
rep("[ ] le compresseur au R134a aura le même volume balayé que le compresseur au R404A");
rep("[ ] le compresseur au R134a sera plus faible que le compresseur au R404A");
faux("Le R134a a une capacite frigorifique volumique plus faible que le R404A. Pour produire la meme puissance frigorifique, le compresseur fonctionnant au R134a doit donc aspirer un volume de gaz plus important a chaque cycle, ce qui necessite un volume balaye plus grand");

quest("AgrFroid368 : Dans une installation existante, la puissance frigorifique absorbée par l'évaporateur sera plus petite si :://a");
rep("[ ] l'on en choisit un dont la surface est plus grande");
rep("[ ] l'écart de température entre la température de la chambre froide et la température d'évaporation est élevée");
rep("[x] l'écart de température entre la température de la chambre froide et la température d'évaporation est faible");
rep("[ ] la température de la chambre froide est élevée");
faux("La puissance echangee par un evaporateur depend directement de l'ecart de temperature entre le milieu a refroidir et la temperature d'evaporation du refrigerant. Plus cet ecart est faible, moins la chaleur est transferee efficacement, donc moins la puissance absorbee est elevee");

quest("AgrFroid369 : Dans une installation commerciale avec détendeur thermostatique, dont le compresseur a été choisi avec un volume balayé un peu trop grand et l'évaporateur avec une puissance un peu trop faible, nous aurons:://a");
rep("[x] une température d'évaporation plus basse que la valeur prédéfinie");
rep("[ ] une température d'évaporation supérieure à la valeur prédéfinie");
rep("[ ] une température d'évaporation qui sera encore déterminée par le réglage du thermostat");
rep("[ ] besoin de régler le thermostat sur une valeur un peu plus basse");
faux("Si le compresseur aspire plus de gaz que l'evaporateur, trop petit, ne peut en fournir a la pression nominale, le compresseur va faire chuter la pression et donc la temperature d'evaporation en dessous de la valeur prevue, pour compenser son incapacite a etre alimente au debit attendu");

quest("AgrFroid370 : Lorsque la température du bulbe d'un détendeur thermostatique augmente alors:://a");
rep("[x] le détendeur s'ouvrira plus fort et laissera passer plus de réfrigérant");
rep("[ ] le détendeur s'ouvrira davantage et retiendra plus de réfrigérant");
rep("[ ] le détendeur s'ouvrira moins et laissera passer plus de réfrigérant");
rep("[ ] le détendeur s'ouvrira moins et laissera passer moins de réfrigérant");
faux("Le bulbe du detendeur thermostatique exerce une pression croissante sur la membrane lorsque sa temperature augmente. Cette pression accrue pousse l'aiguille du detendeur vers l'ouverture, laissant passer davantage de refrigerant liquide");

quest("AgrFroid371 : Le choix d'un détendeur à égalisation externe de pression dépend de la puissance :://a");
rep("[ ] du compresseur");
rep("[x] de l'évaporateur");
rep("[ ] du condenseur");
rep("[ ] du condenseur et du compresseur");
faux("Le besoin d'une egalisation de pression externe depend des pertes de charge dans l'evaporateur, elles memes liees a sa puissance et a sa configuration, c'est donc la puissance et les caracteristiques de l'evaporateur qui determinent ce choix de detendeur");

quest("AgrFroid372 : Le choix d'utiliser ou non un détendeur MOP dépend des caractéristiques:://a");
rep("[ ] du compresseur");
rep("[ ] de l'évaporateur");
rep("[ ] du condenseur");
rep("[x] du moteur d'entraînement du compresseur");
faux("Le detendeur a point MOP limite la pression d'aspiration pour eviter une surintensite du moteur electrique au demarrage. C'est donc la puissance et les caracteristiques du moteur qui entraine le compresseur qui determinent ce choix");

quest("AgrFroid373 : Un détendeur MOP remplit en quelque sorte la même fonction :://a");
rep("[ ] qu'un régulateur de pression d'évaporation");
rep("[x] qu'un régulateur de pression de démarrage");
rep("[ ] qu'un régulateur de pression de condensation");
rep("[ ] qu'un by-pass des gaz chauds");
faux("Un detendeur a point MOP et un regulateur de pression de demarrage remplissent tous deux la meme fonction de protection: limiter la pression maximale d'aspiration admise par le compresseur, notamment au demarrage, pour eviter une surintensite du moteur");

quest("AgrFroid374 : La puissance fournie par un condenseur refroidi par air augmente si :://a");
rep("[ ] la température de condensation et la température ambiante montent de façon proportionnelle");
rep("[ ] la température de condensation et la température ambiante diminuent de façon proportionnelle");
rep("[x] la température de condensation monte et que la température ambiante baisse");
rep("[ ] la température de condensation baisse et la température ambiante monte");
faux("La puissance echangee par un condenseur a air depend de l'ecart de temperature entre le refrigerant qui condense et l'air ambiant. Plus cet ecart est grand, plus l'echange thermique et donc la puissance evacuee sont importants");

quest("AgrFroid375 : Un groupe frigorifique à condensation à air, délivre sa puissance frigorifique maximale lorsque:://a");
rep("[ ] la température d'évaporation est basse et que le groupe se trouve à une température ambiante élevée");
rep("[ ] la température d'évaporation est élevée et que le groupe se trouve à une température ambiante élevée");
rep("[ ] la température d'évaporation est basse et que le groupe se trouve à une température ambiante faible");
rep("[x] la température d'évaporation est élevée et que le groupe se trouve à une température ambiante stable");
faux("La puissance frigorifique d'un groupe est maximale quand le taux de compression est le plus faible possible, c'est a dire avec une temperature d'evaporation la plus haute possible, dans des conditions de temperature ambiante stables et favorables");

quest("AgrFroid376 : Une installation doit déclencher à 0,5 bar et se réenclencher à 2 bars, comment réglez- vous le pressostat BP ?://a");
rep("[ ] consigne : 0,5 bar et diff. : 2 bars");
rep("[ ] consigne : 2 bars et diff. : 0,5 bar");
rep("[x] consigne : 2 bars et diff. : 1,5 bars");
rep("[ ] consigne : 2,5 bars et diff. : 0,5 bar");
faux("Un pressostat BP se regle par une consigne, le point de declenchement, et un differentiel, l'ecart jusqu'au reenclenchement. Pour declencher a 2 bars et reenclencher a 0,5 bar, il faut regler la consigne a 2 bars et le differentiel a 1,5 bar, de sorte que le reenclenchement se fasse a 2 moins 1,5, soit 0,5 bar");

quest("AgrFroid377 : Que mesure-t-on avec un anémomètre ?://a");
rep("[ ] La viscosité");
rep("[x] La vitesse de l'air");
rep("[ ] Le degré d'acidité de l'huile");
rep("[ ] L'humidité de l'air");
faux("Un anemometre est l'instrument specifiquement concu pour mesurer la vitesse de deplacement de l'air, utile par exemple pour verifier le bon fonctionnement d'un ventilateur");

quest("AgrFroid378 : Pourquoi utilise-t-on un flow-switch sur un condenseur ou un évaporateur à eau ?://a");
rep("[x] Pour arrêter le compresseur si le débit d'eau est trop faible");
rep("[ ] Pour arrêter la pompe à eau si le débit d'eau devient trop important");
rep("[ ] Pour activer les condenseurs si la pression de condensation monte trop");
rep("[ ] Pour ouvrir un by-pass dans le circuit d'eau afin d'empêcher l'apparition d'une surpression excessive");
faux("Un flow switch protege l'installation en arretant le compresseur si le debit d'eau devient insuffisant, ce qui eviterait sinon un echange thermique trop faible pouvant endommager l'echangeur, par exemple le gel cote eau sur un evaporateur");

quest("AgrFroid379 : Dans une chambre froide, pourquoi est-il préférable de monter plusieurs évaporateurs sur un compresseur central non régulé en capacité ?://a");
rep("[ ] Pour pouvoir placer un compresseur plus petit");
rep("[x] Pour être sûr que la même température règnera partout dans la chambre froide");
rep("[ ] Pour pouvoir en couper un à charge partielle");
rep("[ ] Pour pouvoir procéder à un dégivrage électrique simultané de tous les évaporateurs");
faux("Repartir plusieurs evaporateurs dans une meme chambre froide, plutot que d'en utiliser un seul plus puissant, permet une diffusion plus homogene du froid dans tout le volume, garantissant une temperature plus uniforme en tout point de la chambre");

quest("AgrFroid380 : Quels paramètres un technicien doit-il mesurer pour connaître la capacité d'un groupe de production d'eau glacée (chiller) ?://a");
rep("[ ] Les pressions de refoulement et d'aspiration");
rep("[ ] La température extérieure et la température de condensation");
rep("[x] Le débit d'eau et la différence de température d'entrée et sortie d'eau de l'évaporateur (chiller)");
rep("[ ] Le débit d'eau et celui du réfrigérant");
faux("La puissance frigorifique d'un groupe de production d'eau glacee se calcule a partir du debit d'eau traversant l'evaporateur et de la difference de temperature entre l'entree et la sortie d'eau");

quest("AgrFroid381 : Dans un système HVAC à centrale de traitement d'air, le ventilateur est presque toujours :://a");
rep("[ ] un ventilateur axial");
rep("[x] un ventilateur centrifuge");
rep("[ ] un ventilateur hélicoïdal");
rep("[ ] un ventilateur tangentiel");
faux("Dans les centrales de traitement d'air, le ventilateur utilise est presque toujours de type centrifuge, car il offre un meilleur compromis entre pression statique disponible, necessaire pour vaincre les pertes de charge des batteries et filtres, et debit d'air");

quest("AgrFroid382 : En cas de manque d'antigel, quel serait la conséquence du givrage des tuyaux frigorifique d'un refroidisseur d'eau ?://a");
rep("[x] Une diminution de la puissance frigorifique");
rep("[ ] Une hausse de la puissance frigorifique");
rep("[ ] Une diminution de la chute de pression");
rep("[ ] Une hausse de la pression de refoulement");
faux("Le givrage des tuyaux frigorifiques dans un refroidisseur d'eau cree une couche isolante qui degrade l'echange thermique entre le refrigerant et l'eau, ce qui reduit la puissance frigorifique effectivement transferee");

quest("AgrFroid383 : Une centrale frigorifique comprenant 4 compresseurs identiques pouvant fonctionner de la manière suivante: 0 - 50% - 100% de leur capacité. Quelle sera la puissance minimale en pourcentage que peut fournir cette centrale?://a");
rep("[ ] 25,00 %");
rep("[x] 12,50 %");
rep("[ ] 10,00 %");
rep("[ ] 5,00 %");
faux("Avec 4 compresseurs identiques pouvant chacun fonctionner a 0, 50 ou 100 pourcent, la puissance minimale non nulle correspond a un seul compresseur a 50 pourcent de sa propre capacite, ce qui represente 50 divise par 4, soit 12,5 pourcent de la capacite totale");

quest("AgrFroid384 : Une centrale frigorifique comprenant 4 compresseurs identiques pouvant fonctionner de la manière suivante: 0 - 50% - 100% de leur capacité. Quelle est le nombre d'étages de régulation de cette centrale?://a");
rep("[ ] 4");
rep("[ ] 6");
rep("[x] 8");
rep("[ ] 10");
faux("Chaque compresseur offre deux paliers utiles, 50 et 100 pourcent, ce qui donne pour 4 compresseurs un total de 4 fois 2, soit 8 etages de regulation distincts");

quest("AgrFroid385 : Une centrale frigorifique d'une puissance frigorifique nominale de 100 kW à 50 Hz comprend 4 compresseurs identiques dont l'un est commandé en fréquence. À combien s'élève la puissance maximale de cette centrale si nous réglons la fréquence du variateur à 60 Hz ?://a");
rep("[x] A 105 kW");
rep("[ ] A 100 kW");
rep("[ ] A 120 kW");
rep("[ ] A 90 kW");
faux("Augmenter la frequence de 50 a 60 Hz augmente le debit d'environ 20 pourcent. Pour le seul compresseur a frequence variable, qui represente un quart de la puissance totale soit 25 kW, cette augmentation ajoute environ 5 kW supplementaires, portant la puissance maximale totale a environ 105 kW");

quest("AgrFroid386 : Une centrale frigorifique d'une puissance frigorifique nominale de 100 kW à 50 Hz comprend 4 compresseurs identiques dont l'un est commandé en fréquence. À combien s'élève la puissance minimale de cette centrale si nous réglons la fréquence du variateur à 30 Hz ?://a");
rep("[ ] A 33 kW");
rep("[ ] A 25 kW");
rep("[x] A 15 kW");
rep("[ ] A 12,5 kW");
faux("A 30 Hz, soit 60 pourcent de la frequence nominale de 50 Hz, le compresseur a frequence variable, qui represente 25 kW a frequence nominale, voit sa puissance reduite proportionnellement a environ 15 kW, ce qui constitue la puissance minimale si les trois autres compresseurs restent a l'arret");

quest("AgrFroid387 : Dans un compresseur spiro-orbital (scroll) :://a");
rep("[ ] le gaz entre par le centre de la double spirale (scroll) et en sort par le côté extérieur");
rep("[ ] le gaz est comprimé par la force centrifuge du scroll");
rep("[ ] il y a une spirale fixe et une spirale en révolution");
rep("[x] il y a une spirale fixe et une spirale animée d'un mouvement spiro-orbital");
faux("Un compresseur scroll comporte deux spirales imbriquees: l'une fixe, l'autre animee d'un mouvement orbital, translation circulaire sans rotation propre, qui comprime progressivement le gaz dans des poches de volume decroissant en se deplacant vers le centre");

quest("AgrFroid388 : Une centrale frigorifique permet :://a");
rep("[x] de réguler la puissance et, ainsi, de réduire la consommation d'énergie");
rep("[ ] de réduire la puissance d'entraînement par compresseur");
rep("[ ] de disposer en permanence d'une réserve d'huile");
rep("[ ] de dégivrer le gaz comprimé");
faux("Une centrale frigorifique permet d'adapter precisement la puissance produite a la demande reelle en activant ou desactivant certains compresseurs, evitant de faire fonctionner inutilement des compresseurs surdimensionnes, ce qui reduit la consommation energetique globale");

quest("AgrFroid389 : A quoi sert le tiroir de régulation de puissance d'un compresseur à vis ?://a");
rep("[ ] A diminuer la puissance");
rep("[ ] A augmenter la puissance");
rep("[x] A diminuer la puissance ou à l'augmenter");
rep("[ ] A obtenir un retour d'huile proportionnel dans le carter");
faux("Le tiroir de regulation d'un compresseur a vis peut se deplacer dans les deux sens pour modifier le volume utile de compression, permettant a la fois de reduire la puissance ou de l'augmenter en fonction de sa position");

quest("AgrFroid390 : A quoi sert la conduite d'égalisation d'huile d'une centrale frigorifique ?://a");
rep("[ ] A abaisser la pression d'huile dans le système");
rep("[ ] A augmenter la pression d'huile dans le système");
rep("[x] A maintenir un niveau d'huile identique dans tous les compresseurs");
rep("[ ] A fournir une pression d'huile identique à tous les détecteurs de niveau d'huile à flotteur");
faux("Dans une centrale a plusieurs compresseurs en parallele, la conduite d'egalisation d'huile relie les carters entre eux pour equilibrer et maintenir un niveau d'huile comparable dans chaque compresseur");

quest("AgrFroid391 : A quoi servent surtout les régulateurs de fréquence des compresseurs ?://a");
rep("[x] A en adapter la puissance à la demande");
rep("[ ] A obtenir une correction automatique du facteur de puissance");
rep("[ ] A faire démarrer le compresseur à vide");
rep("[ ] A faire tourner le moteur à une tension réduite");
faux("Un variateur de frequence sur un compresseur permet d'ajuster finement sa vitesse de rotation, et donc sa puissance frigorifique, pour la faire correspondre precisement a la demande instantanee de froid");

quest("AgrFroid392 : Lorsque plusieurs évaporateurs sont raccordés à une conduite centrale d'aspiration, quelle est la pression de référence à l'entrée du compresseur ?://a");
rep("[x] Elle est égale à la pression de l'évaporateur qui se trouve à la température d'évaporation la plus basse");
rep("[ ] Elle est égale à la pression de l'évaporateur qui se trouve à la température d'évaporation la plus haute");
rep("[ ] Elle est égale à la moyenne des pressions de l'évaporateur à la température la plus haute et de celui à la température la plus basse");
rep("[ ] Elle est égale à la pression commandée par le régulateur de pression de l'évaporateur dont la température d'évaporation est la plus haute");
faux("Quand plusieurs evaporateurs a des temperatures differentes sont relies a une meme conduite d'aspiration, c'est l'evaporateur a la temperature d'evaporation la plus basse, donc a la pression la plus basse, qui impose la pression de reference a l'entree du compresseur");

quest("AgrFroid393 : Dans une installation de réfrigération, un régulateur de pression d'évaporation doit :://a");
rep("[x] S'ouvrir quand la pression d'admission monte");
rep("[ ] Se fermer quand la pression d'admission monte");
rep("[ ] S'ouvrir quand la pression de sortie monte");
rep("[ ] Se fermer quand la pression de sortie monte");
faux("Un regulateur de pression d'evaporation reagit a la pression amont, dans l'evaporateur: quand celle ci monte au dessus de la consigne, le regulateur s'ouvre davantage pour laisser s'evacuer le surplus de gaz vers le compresseur");

quest("AgrFroid394 : Dans une installation de réfrigération, un régulateur de pression d'évaporation doit :://a");
rep("[ ] S'ouvrir quand la pression d'admission baisse");
rep("[x] Se fermer quand la pression d'admission baisse");
rep("[ ] S'ouvrir quand la pression de sortie baisse");
rep("[ ] Se fermer quand la pression de sortie baisse");
faux("A l'inverse, quand la pression d'admission dans l'evaporateur baisse en dessous de la consigne, le regulateur se ferme pour limiter le debit sortant et empecher que la pression ne chute davantage");

quest("AgrFroid395 : Quelle est la fonction d'un régulateur de pression d'aspiration du compresseur (régulateur de démarrage) dans une installation de réfrigération ?://a");
rep("[ ] S'ouvrir quand la pression d'admission monte");
rep("[ ] Se fermer quand la pression d'admission monte");
rep("[ ] S'ouvrir quand la pression de sortie monte");
rep("[x] Se fermer quand la pression de sortie du régulateur monte");
faux("Le regulateur de pression de demarrage reagit a sa pression de sortie, cote compresseur: si celle ci monte au dessus de la consigne, le regulateur se ferme pour limiter le debit admis au compresseur et eviter une surintensite");

quest("AgrFroid396 : Quelle est la fonction d'un régulateur de pression d'aspiration du compresseur (régulateur de démarrage) dans une installation de réfrigération ?://a");
rep("[ ] S'ouvrir quand la pression d'admission baisse");
rep("[ ] Se fermer quand la pression d'admission baisse");
rep("[x] S'ouvrir quand la pression de sortie du régulateur baisse");
rep("[ ] Se fermer quand la pression de sortie baisse");
faux("A l'inverse, si la pression de sortie du regulateur de demarrage baisse en dessous de la consigne, celui ci s'ouvre davantage pour laisser passer plus de gaz, sans risque de depasser la limite d'intensite du compresseur");

quest("AgrFroid397 : Les détendeurs à égalisation externe de pression s'emploient avec :://a");
rep("[ ] les évaporateurs présentant un pas d'ailettes supérieur à 7 mm");
rep("[ ] les évaporateurs présentant un pas d'ailettes inférieur à 7 mm");
rep("[x] les évaporateurs présentant une grande chute de pression (perte de charge)");
rep("[ ] les évaporateurs présentant une petite chute de pression");
faux("L'egalisation de pression externe permet au detendeur de percevoir la pression reelle a la sortie de l'evaporateur, compensant ainsi les pertes de charge importantes qui s'y produisent, pour reguler correctement la surchauffe");

quest("AgrFroid398 : Les détendeurs à égalisation externe de pression s'emploient avec :://a");
rep("[ ] les évaporateurs présentant un pas d'ailettes supérieur à 7 mm");
rep("[x] les évaporateurs qui possèdent un distributeur de liquide");
rep("[ ] les évaporateurs présentant une petite chute de pression");
rep("[ ] les évaporateurs possédant une grande puissance frigorifique");
faux("Les evaporateurs equipes d'un distributeur de liquide, qui repartit le fluide entre plusieurs circuits paralleles, presentent generalement une perte de charge significative, ce qui necessite une egalisation de pression externe pour une regulation precise");

quest("AgrFroid399 : Quand un régulateur de pression d'évaporation commence-t-il à se fermer ?://a");
rep("[ ] Lorsque la pression d'aspiration dans le compresseur tombe sous une certaine valeur");
rep("[ ] Lorsque la pression d'aspiration dans le compresseur dépasse une certaine valeur");
rep("[x] Lorsque la pression d'évaporation tombe en dessous de la valeur de réglage de la vanne de régulation d'évaporation");
rep("[ ] Lorsque la pression d'évaporation dépasse une certaine valeur");
faux("Le regulateur de pression d'evaporation commence a se fermer des que la pression dans l'evaporateur descend en dessous de la valeur de consigne reglee sur la vanne, afin de limiter l'ecoulement et empecher la pression de continuer a chuter");

quest("AgrFroid400 : Qu'y a-t-il dans le capteur d'un détendeur à PMA (MOP) ?://a");
rep("[ ] Plus de réfrigérant que dans un détendeur normal");
rep("[x] Moins de réfrigérant que dans un détendeur normal");
rep("[ ] Pas de réfrigérant");
rep("[ ] Un type spécial d'antigel");
faux("Le bulbe d'un detendeur a point MOP contient volontairement une charge reduite de refrigerant, de telle sorte que sa pression de saturation maximale atteignable soit limitee a une valeur predefinie, ce qui limite naturellement l'ouverture maximale du detendeur");

theme("St Laurent : L'agrégation du froid - Part5");
debut("Préparation à l'examen sur l'agrégation frigorifique");


quest("AgrFroid400 : Qu'y a-t-il dans le capteur d'un détendeur à PMA (MOP) ?://a");
rep("[ ] Plus de réfrigérant que dans un détendeur normal");
rep("[x] Moins de réfrigérant que dans un détendeur normal");
rep("[ ] Pas de réfrigérant");
rep("[ ] Un type spécial d'antigel");
faux("Le bulbe d'un detendeur a point MOP contient volontairement une charge reduite de refrigerant, de telle sorte que sa pression de saturation maximale atteignable soit limitee a une valeur predefinie, ce qui limite naturellement l'ouverture maximale du detendeur");

quest("AgrFroid401 : l'utilisation d'un détendeur capillaire : [complétez] :://a");
rep("[x] permet de monter des compresseurs à bas couple de démarrage");
rep("[ ] permet au système de s'adapter rapidement à une modification de la charge");
rep("[ ] facilite l'égalisation de la pression côté haute pression en cas d'arrêt du ventilateur du condenseur");
rep("[ ] permet de réguler la surchauffe avec précision");
faux("Un detendeur capillaire n'a pas de clapet qui se ferme a l'arret: a l'arret, les pressions HP et BP s'egalisent progressivement a travers le capillaire pendant la phase de repos. Au redemarrage, le compresseur n'a donc pas besoin de vaincre un fort ecart de pression entre l'aspiration et le refoulement, ce qui reduit considerablement le couple necessaire au demarrage. C'est pourquoi les installations a capillaire peuvent utiliser des compresseurs moins couteux, a faible couple de demarrage, sans dispositif de demarrage renforce");

quest("AgrFroid402 : Comment fait-on pour que le réfrigérant se mélange le moins possible à l'huile dans le carter d'un compresseur ?://a");
rep("[ ] On place dans la conduite de liquide une électrovanne qui bascule la machine en mode tirage au vide (pump down) et qui évite ainsi que du réfrigérant migre dans le carter");
rep("[x] On place dans le carter une résistance qui porte l'huile à une température telle que la solubilité du gaz frigorifique soit minimale");
rep("[ ] On place un régulateur de la pression d'aspiration qui règle une pression suffisamment élevée dans le carter");
rep("[ ] On place l'évaporateur dans le compresseur pour empêcher le réfrigérant de refluer en amont vers le compresseur");
faux("Au repos, le refrigerant liquide a tendance a migrer vers le point le plus froid de l'installation, souvent le carter du compresseur, et a s'y dissoudre dans l'huile. Une resistance de carter maintient l'huile a une temperature superieure a celle du reste du circuit, ce qui reduit la solubilite du gaz frigorigene dans l'huile et empeche une dilution excessive au demarrage, laquelle provoquerait moussage et perte de lubrification");

quest("AgrFroid403 : Sur quoi repose le processus de dégivrage aux gaz chauds ?://a");
rep("[x] Sur la chaleur latente de condensation du gaz comprimé");
rep("[ ] Sur l'agrandissement des conduites de gaz chauds");
rep("[ ] Sur l'exclusion de toutes les résistances électriques");
rep("[ ] Sur l'utilisation d'une vanne à quatre voies");
faux("Le degivrage aux gaz chauds consiste a envoyer directement le gaz chaud et comprime sortant du compresseur dans l'evaporateur, inversant temporairement son role en condenseur. La chaleur cedee par ce gaz lors de sa condensation a l'interieur de l'evaporateur fournit l'energie necessaire pour faire fondre le givre accumule sur les ailettes");

quest("AgrFroid404 : Pourquoi avant tout se sert-on d'un refroidisseur intermédiaire dans un compresseur bi- étagé ?://a");
rep("[ ] Pour augmenter la température des gaz aspirés au niveau de l'étage intermédiaire");
rep("[ ] Pour accroître la température finale du gaz comprimé");
rep("[ ] Pour sous-refroidir davantage le réfrigérant avant qu'il ne soit amené vers l'évaporateur");
rep("[x] Pour abaisser la température finale de compression");
faux("Dans un compresseur bi etage, le gaz subit deux compressions successives, chacune elevant sa temperature. Le refroidisseur intermediaire place entre les deux etages refroidit le gaz sortant du premier etage avant qu'il n'entre dans le second, ce qui limite la temperature finale apres la seconde compression et protege ainsi le compresseur contre une surchauffe excessive");

quest("AgrFroid405 : Comment contrôle-t-on la puissance dans une centrale frigorifique ?://a");
rep("[ ] En activant et en désactivant les ventilateurs du condenseur");
rep("[ ] En montant des limiteurs de pression de carter");
rep("[x] En coupant un ou plusieurs compresseurs ou en faisant varier la vitesse des compresseurs");
rep("[ ] En montant des régulateurs de la pression d'évaporation");
faux("Dans une centrale frigorifique, la puissance totale delivree se controle principalement en activant ou desactivant certains compresseurs individuels, ou en faisant varier la vitesse de rotation d'un ou plusieurs compresseurs equipes de variateurs de frequence, afin d'ajuster finement le debit massique global de refrigerant a la demande");

quest("AgrFroid406 : Comment éviter un coup de liquide pendant le dégivrage par gaz chauds ?://a");
rep("[x] En plaçant un séparateur de liquide dans la conduite d'aspiration");
rep("[ ] En dégivrant tous les évaporateurs en même temps");
rep("[ ] En montant des batteries de réévaporation pour que le réfrigérant s'évapore à nouveau");
rep("[ ] En faisant passer les liquides dans un échangeur de chaleur par gaz aspirés");
faux("Pendant le degivrage aux gaz chauds, une quantite importante de liquide se forme dans l'evaporateur, qui joue alors le role de condenseur. Pour empecher que ce liquide ne retourne vers le compresseur, un separateur de liquide place sur la conduite d'aspiration retient ce liquide, qui s'evaporera progressivement, tandis que seule la vapeur continue vers le compresseur");

quest("AgrFroid407 : Comment peut-on empêcher une montée excessive de la pression dans l'évaporateur pendant le dégivrage électrique ?://a");
rep("[x] En faisant une régulation pump down");
rep("[ ] En contournant le détendeur");
rep("[ ] En montant un limiteur de pression de carter");
rep("[ ] En plaçant un régulateur de pression d'évaporation");
faux("Pendant le degivrage electrique, le compresseur est generalement arrete pendant que les resistances rechauffent l'evaporateur, ce qui fait rapidement monter la pression en raison de la chaleur apportee. Une regulation en pump down, qui vidange le liquide de l'evaporateur avant l'arret du compresseur, permet de limiter la quantite de liquide residuel et donc l'ampleur de cette montee de pression");

quest("AgrFroid408 : Dans une centrale frigorifique, le débit de réfrigérant :://a");
rep("[ ] est toujours supérieur au volume débité par le réservoir de liquide");
rep("[ ] est toujours inférieur au volume débité par le réservoir de liquide");
rep("[x] dépend de la charge des évaporateurs");
rep("[ ] est indépendant de la charge des évaporateurs");
faux("Le debit total de refrigerant circulant dans une centrale frigorifique est directement determine par la demande en froid des differents evaporateurs connectes: plus la charge thermique a absorber est importante, plus le debit de refrigerant necessaire est eleve");

quest("AgrFroid409 : Dans une installation équipée d'un condenseur à air comment peut-on permettre une production frigorifique correcte si la température de condensation diminue ?://a");
rep("[ ] En coupant les ventilateurs sur le condenseur afin qu'une pression suffisamment élevée soit encore garantie");
rep("[ ] En augmentant la pression dans le réservoir de liquide au moyen d'un régulateur de pression de condensation associé à un clapet antiretour à pression différentielle (NRD)");
rep("[ ] En montant une tête de distribution sur le détendeur pour augmenter la vitesse et le refroidissement résultant produit par les turbulences");
rep("[x] En montant un détendeur électronique dont le fonctionnement est indépendant de la pression de condensation");
faux("Lorsque la temperature de condensation chute fortement, par exemple en hiver, la difference de pression disponible aux bornes d'un detendeur thermostatique classique peut devenir insuffisante pour alimenter correctement l'evaporateur. Un detendeur electronique pilote par algorithme ne depend pas directement de cette difference de pression de la meme maniere et peut continuer a reguler precisement le debit meme a basse HP, garantissant une production frigorifique correcte");

quest("AgrFroid410 : Un évaporateur monté dans une chambre froide est relié à un groupe frigorifique monté à l'extérieur. La température de condensation baisse. Que se passe-t-il ?://a");
rep("[x] La température d'évaporation va baisser");
rep("[ ] La température d'évaporation va monter");
rep("[ ] Cela n'a pas d'influence sur la température d'évaporation, car l'évaporateur se trouve dans la chambre froide");
rep("[ ] La puissance frigorifique totale de l'installation diminuera sous l'effet de la baisse de la température extérieure");
faux("Avec un detendeur thermostatique classique, une baisse de la temperature de condensation reduit la difference de pression disponible pour alimenter l'evaporateur en liquide. Moins alimente, l'evaporateur voit sa pression, et donc sa temperature d'evaporation, chuter en consequence");

quest("AgrFroid411 : On ferme le robinet de service BP d'un compresseur à piston alors qu'il tourne encore et jusqu'à ce qu'il s'arrête par manque de pression (sécurité). On remarque que la basse pression remonte très vite.://a");
rep("[ ] C'est normal");
rep("[ ] C'est le signe qu'il y a une fuite au niveau des soupapes d'aspiration");
rep("[x] C'est le signe qu'il y a une fuite au niveau des soupapes de refoulement");
rep("[ ] C'est peut-être le signe d'une fuite tant au niveau des soupapes de refoulement que des soupapes d'aspiration");
faux("Quand on ferme le robinet d'aspiration pendant que le compresseur tourne, celui ci continue a comprimer le gaz restant cote aspiration jusqu'a ce que le pressostat BP l'arrete par manque de pression. Si, apres cet arret, la BP remonte rapidement, cela signifie que du gaz haute pression refoule reflue a travers des soupapes de refoulement qui ne tiennent plus etanches, vers le cote aspiration du cylindre");

quest("AgrFroid412 : Que se passe-t-il quand les filtres à air d'un petit climatiseur à détendeur capillaire s'encrassent côté aspiration ?://a");
rep("[ ] La température de refoulement de l'installation augmentera");
rep("[x] Il existe un risque de coup de liquide");
rep("[ ] Il existe un risque que la surchauffe soit excessive et que le moteur chauffe");
rep("[ ] Le moteur de l'évaporateur n'est plus suffisamment refroidi et peut donc chauffer");
faux("Si les filtres a air cote aspiration s'encrassent, le debit d'air traversant l'evaporateur diminue fortement. Moins d'air signifie moins de chaleur absorbee, le refrigerant n'arrive plus a s'evaporer completement avant la sortie, creant un risque de coup de liquide au compresseur, car un detendeur capillaire n'a pas de regulation active de la surchauffe comme un detendeur thermostatique");

quest("AgrFroid413 : Qu'est-ce qui réduit le rendement volumétrique d'un compresseur ?://a");
rep("[ ] La hausse de la pression d'aspiration");
rep("[x] La baisse de la pression d'aspiration");
rep("[ ] La diminution de la pression de refoulement");
rep("[ ] La diminution de l'espace nuisible");
faux("Une baisse de la pression d'aspiration reduit la densite du gaz aspire. Pour un meme volume balaye geometrique, moins de masse de gaz est effectivement aspiree a chaque cycle, ce qui diminue le rendement volumetrique reel du compresseur par rapport a son volume theorique");

quest("AgrFroid414 : Qu'est-ce qui augmente le rendement volumétrique du compresseur ?://a");
rep("[ ] La hausse de la pression de refoulement");
rep("[x] La hausse de la pression d'aspiration");
rep("[ ] La hausse du taux de compression");
rep("[ ] La baisse de la pression d'aspiration");
faux("A l'inverse, une pression d'aspiration plus elevee augmente la densite du gaz, ce qui permet d'aspirer une masse plus importante de refrigerant pour un meme volume balaye, ameliorant ainsi le rendement volumetrique du compresseur");

quest("AgrFroid415 : Sur un compresseur, on mesure une pression relative d'aspiration de 3 bar et une pression relative de refoulement de 11 bar. Quel est le taux de compression ?://a");
rep("[ ] 3,67");
rep("[ ] 0,27");
rep("[ ] On ne peut pas le déterminer parce qu'on ne sait pas de quel réfrigérant il s'agit");
rep("[x] 3");
faux("Le taux de compression se calcule toujours avec des pressions absolues, non relatives. En ajoutant la pression atmospherique, environ 1 bar, aux pressions relatives donnees, on obtient une pression absolue d'aspiration de 4 bar (3+1) et de refoulement de 12 bar (11+1). Le taux de compression est donc 12 divise par 4, soit 3");

quest("AgrFroid416 : Le volume balayé d'un compresseur :://a");
rep("[x] est le volume théorique de gaz aspiré");
rep("[ ] est le volume effectif de gaz déplacé qui entre par la soupape d'aspiration");
rep("[ ] varie avec la pression d'aspiration");
rep("[ ] varie avec la pression de refoulement");
faux("Le volume balaye d'un compresseur est une grandeur purement geometrique, calculee a partir de la cylindree et de la vitesse de rotation. Il represente le volume theorique maximal que le compresseur pourrait deplacer, independamment des conditions reelles de pression qui influencent le rendement volumetrique effectif");

quest("AgrFroid417 : Sur quel type de compresseur emploie-t-on généralement un tiroir pour adapter sa puissance frigorifique ?://a");
rep("[ ] Sur un compresseur à piston");
rep("[ ] Sur un compresseur de type scroll");
rep("[x] Sur un compresseur à vis");
rep("[ ] Sur un compresseur centrifuge");
faux("Le compresseur a vis est le type de compresseur qui utilise typiquement un tiroir coulissant pour faire varier son volume utile de compression et ainsi adapter sa puissance frigorifique a la demande");

quest("AgrFroid418 : Quel type de compresseur emploie des clapets de refoulement ?://a");
rep("[ ] Un compresseur centrifuge");
rep("[ ] Un compresseur à vis");
rep("[x] Un compresseur à piston");
rep("[ ] Un compresseur de type scroll");
faux("Le compresseur a piston est le type de compresseur dote de clapets mecaniques automatiques, a l'aspiration et au refoulement, qui s'ouvrent et se ferment sous l'effet de la difference de pression de part et d'autre, contrairement aux compresseurs rotatifs qui n'utilisent pas ce principe");

quest("AgrFroid419 : Lequel des systèmes suivants ne peut pas servir à égaliser le niveau d'huile dans une centrale frigorifique ?://a");
rep("[ ] Une conduite d'égalisation de pression de carter associée à une conduite d'égalisation du niveau d'huile");
rep("[ ] Des détecteurs de niveau d'huile à flotteur sur chaque compresseur, l'alimentation en huile étant assurée par un réservoir central");
rep("[ ] Un gros tuyau qui relie et égalise tous les niveaux d'huile et toutes les pressions de gaz de tous les compresseurs");
rep("[x] Aucun des systèmes mentionnés précédemment n'est interdit");
faux("Parmi les differents systemes evoques, conduite d'egalisation de pression de carter associee a une conduite de niveau, detecteurs de niveau a flotteur avec reservoir central, ou gros tuyau commun, aucun n'est interdit par la reglementation ou les bonnes pratiques: chacun est une solution technique valable selon la configuration de l'installation");

quest("AgrFroid420 : Le débit massique qu'un compresseur déplace par heure à régime constant, [complétez] lorsque la température d'évaporation monte.://a");
rep("[x] augmente");
rep("[ ] diminue");
rep("[ ] reste le même");
rep("[ ] n'a aucune influence");
faux("Quand la temperature d'evaporation augmente, la pression d'aspiration augmente aussi, ce qui densifie le gaz aspire. A regime constant, le compresseur aspire donc une masse de gaz plus importante par unite de temps, le debit massique augmente");

quest("AgrFroid421 : Le débit massique qu'un compresseur déplace par heure à régime constant, [complétez] lorsque la température de condensation baisse.://a");
rep("[x] augmente");
rep("[ ] diminue");
rep("[ ] reste le même");
rep("[ ] n'a aucune influence");
faux("Une temperature de condensation plus basse reduit le taux de compression a BP constante, ce qui ameliore le rendement volumetrique du compresseur. Celui ci aspire donc davantage de gaz par cycle, augmentant le debit massique deplace");

quest("AgrFroid422 : Lorsque la surchauffe est trop élevée, la température finale de compression [complétez] :://a");
rep("[x] augmente");
rep("[ ] baisse");
rep("[ ] reste la même");
rep("[ ] dépend de la température d'évaporation");
faux("Un gaz plus surchauffe entre dans le compresseur avec une temperature de depart deja plus elevee. Apres compression, qui ajoute un echauffement supplementaire, la temperature finale sera donc necessairement plus elevee que si le gaz aspire etait moins chaud");

quest("AgrFroid423 : Plus le sous-refroidissement est important, plus le COP d'une installation de réfrigération [complétez]://a");
rep("[x] augmente");
rep("[ ] diminue");
rep("[ ] reste le même");
rep("[ ] Le COP n'a rien à voir avec le sous-refroidissement.");
faux("Un sous refroidissement plus important signifie que le liquide arrive plus froid au detendeur, ce qui reduit la proportion de flash gaz lors de la detente et augmente la quantite de liquide reellement disponible pour l'evaporation utile. La puissance frigorifique augmente pour une meme puissance absorbee, le COP augmente donc");

quest("AgrFroid424 : La surchauffe [complétez] le risque de voir arriver du réfrigérant liquide dans le compresseur.://a");
rep("[ ] augmente");
rep("[x] réduit");
rep("[ ] n'a pas d'influence sur");
rep("[ ] Cela dépend de la température d'évaporation");
faux("La surchauffe garantit que le gaz aspire par le compresseur est bien entierement a l'etat vapeur, sans trace de liquide residuel. Plus la marge de surchauffe est importante, plus le risque qu'une fluctuation de charge amene accidentellement du liquide jusqu'au compresseur est reduit");

quest("AgrFroid425 : Si la charge d'un système frigorifique sans régulation de puissance diminue, le temps de fonctionnement du compresseur :://a");
rep("[ ] augmentera");
rep("[x] diminuera");
rep("[ ] restera le même");
rep("[ ] dépendra du type de réfrigérant");
faux("Sans regulation de puissance, un compresseur fonctionne en tout ou rien, pilote par un thermostat. Si la charge thermique diminue, la temperature de consigne est atteinte plus rapidement, le compresseur fonctionne donc moins longtemps avant de s'arreter, le temps de fonctionnement diminue");

quest("AgrFroid426 : Si la vanne d'aspiration du compresseur est couverte de givre :://a");
rep("[ ] l'installation tournera certainement avec une surchauffe trop faible");
rep("[ ] la température ambiante dans la salle des machines sera sûrement inférieure à 0 °C");
rep("[ ] le compresseur tournera certainement avec du liquide");
rep("[x] il se peut que ce soit la situation normale");
faux("Dans certaines configurations, notamment en froid negatif avec une surchauffe tres faible, il est normal et attendu que la vanne d'aspiration se couvre de givre, du fait de la tres basse temperature du gaz aspire combinee a l'humidite ambiante qui se condense puis gele sur la surface froide. Ce n'est pas systematiquement le signe d'une anomalie");

quest("AgrFroid427 : Lorsque la température de l'eau servant à refroidir un condenseur baisse, la puissance absorbée par ce compresseur :://a");
rep("[ ] augmentera");
rep("[x] diminuera");
rep("[ ] restera la même");
rep("[ ] On manque de données pour déterminer ce qui se passera");
faux("Une eau de refroidissement plus froide ameliore l'efficacite du condenseur, ce qui abaisse la temperature et la pression de condensation. Une HP plus basse reduit le taux de compression, donc le travail necessaire et la puissance absorbee par le compresseur diminuent");

quest("AgrFroid428 : La chaleur massique de l'air est [complétez] que celle de l'eau.://a");
rep("[ ] plus grande");
rep("[x] plus petite");
rep("[ ] la même");
rep("[ ] Tout dépend de l'application");
faux("La chaleur massique de l'air est nettement plus faible que celle de l'eau, environ 1 kJ par kg et par kelvin contre environ 4,185 kJ par kg et par kelvin pour l'eau, ce qui signifie qu'il faut beaucoup moins d'energie pour elever la temperature d'un kilogramme d'air que d'un kilogramme d'eau de la meme valeur");

quest("AgrFroid429 : Quelles sont les trois zones que l'on distingue dans un condenseur ?://a");
rep("[ ] Condensation - sous-refroidissement - surchauffe");
rep("[x] désurchauffe - condensation - sous-refroidissement");
rep("[ ] Surchauffe - évacuation de la chaleur de surchauffe - condensation");
rep("[ ] Sous-refroidissement - évaporation - condensation");
faux("Un condenseur comprend systematiquement trois zones successives dans le sens de circulation du refrigerant: d'abord la desurchauffe, le refroidissement de la vapeur surchauffee jusqu'a la temperature de saturation, puis la condensation proprement dite, et enfin le sous refroidissement eventuel du liquide forme");

quest("AgrFroid430 : Dans un condenseur horizontal refroidi par air, l'air est presque toujours [complétez] au travers de la batterie :://a");
rep("[x] aspiré");
rep("[ ] soufflé");
rep("[ ] aspiré ou soufflé");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("Dans la grande majorite des condenseurs horizontaux refroidis par air, l'air est aspire a travers la batterie plutot que souffle, ce qui permet generalement une meilleure repartition et un meilleur rendement d'echange");

quest("AgrFroid431 : La température extérieure est de 30 °C et le fabricant a indiqué la puissance de son condenseur pour un T de 10 K. Laquelle des affirmations suivantes est correcte ?://a");
rep("[x] Le réfrigérant se condensera à 40 °C");
rep("[ ] Le réfrigérant se condensera à 30 °C et il y aura un sous-refroidissement de 10 K");
rep("[ ] Le réfrigérant se condensera à 40 °C et il y aura un sous-refroidissement de 10 K");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("Le constructeur indique la puissance de son condenseur pour un ecart de temperature de 10 kelvins entre la temperature de condensation et la temperature ambiante. Avec une ambiance a 30°C, la temperature de condensation correspondante est donc de 30 plus 10, soit 40°C");

quest("AgrFroid432 : De quoi a-t-on besoin pour réduire le plus possible les effets d'une grande chute de pression d'un évaporateur sur le fonctionnement du détendeur thermostatique?://a");
rep("[ ] D'une membrane");
rep("[ ] D'une égalisation interne");
rep("[x] D'une égalisation externe");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("Pour qu'un detendeur thermostatique controle correctement la surchauffe meme lorsque l'evaporateur presente une importante chute de pression interne, il faut que le systeme de mesure prenne en compte la pression reelle a la sortie de l'evaporateur plutot qu'a son entree, c'est exactement le role de l'egalisation externe de pression");

quest("AgrFroid433 : Parmi les éléments suivants, lequel n'est pas pris en compte pour déterminer la différence de pression lors de la sélection d'un détendeur ?://a");
rep("[ ] La tête de distribution");
rep("[ ] La pression du liquide");
rep("[x] Le montage de l'installation à un niveau supérieur à celui de la mer");
rep("[ ] La pression d'évaporation");
faux("Les elements pris en compte pour selectionner un detendeur sont la pression du liquide, la pression d'evaporation visee, et la presence eventuelle d'une tete de distribution. L'altitude du site, elle, n'intervient pas dans ce calcul, car les pressions manipulees sont des pressions de fluide interne au circuit, independantes de la pression atmospherique locale");

quest("AgrFroid434 : Où place-t-on le bulbe du détendeur lorsqu'un coude est monté en aval de l'évaporateur ?://a");
rep("[x] Avant le coude");
rep("[ ] Après le coude");
rep("[ ] Au milieu du coude");
rep("[ ] Cela n'a pas d'importance");
faux("Le bulbe du detendeur thermostatique doit toujours etre place sur une portion rectiligne de tuyauterie, avant un coude, car la turbulence et la stratification du flux au niveau d'un coude peuvent fausser la mesure de temperature prise par le bulbe");

quest("AgrFroid435 : Quand on choisit un détendeur doté d'un orifice beaucoup trop petit :://a");
rep("[x] la surchauffe augmentera");
rep("[ ] la surchauffe diminuera");
rep("[ ] la pression d'évaporation augmentera");
rep("[ ] la puissance frigorifique de l'évaporateur augmentera");
faux("Un orifice de detendeur trop petit limite le debit de liquide pouvant atteindre l'evaporateur. Moins alimente, l'evaporateur voit le liquide s'epuiser plus tot dans son parcours, laissant une plus grande portion de sa surface consacree uniquement a rechauffer la vapeur deja formee, ce qui augmente la surchauffe mesuree en sortie");

quest("AgrFroid436 : Quand on choisit un détendeur doté d'un orifice beaucoup trop grand :://a");
rep("[x] la surchauffe diminuera");
rep("[ ] la surchauffe augmentera");
rep("[ ] la pression d'évaporation diminuera");
rep("[ ] le risque de coup de liquide diminuera");
faux("A l'inverse, un orifice trop grand laisse passer trop de liquide vers l'evaporateur. Celui ci reste alimente en liquide sur une plus grande portion de sa longueur, ce qui reduit la portion dediee uniquement a la surchauffe et donc diminue la surchauffe mesuree, avec un risque accru de coup de liquide");

quest("AgrFroid437 : Si l'on place un capillaire plus long que nécessaire :://a");
rep("[x] l'évaporateur ne recevra pas assez de réfrigérant");
rep("[ ] l'alimentation en réfrigérant augmentera");
rep("[ ] la chute de pression dans le capillaire sera moindre");
rep("[ ] la surchauffe diminuera");
faux("Un capillaire plus long que necessaire offre une plus grande resistance a l'ecoulement du liquide, ce qui reduit le debit de refrigerant pouvant atteindre l'evaporateur. Prive d'un debit suffisant, l'evaporateur ne recoit pas assez de liquide pour fonctionner a pleine capacite");

quest("AgrFroid438 : Parmi les éléments suivants, lequel ne prend on pas en considération pour sélectionner un capillaire ?://a");
rep("[ ] La pression de condensation");
rep("[ ] La pression d'évaporation");
rep("[x] La chaleur du compresseur");
rep("[ ] La température ambiante dans les conditions de conception");
faux("Pour selectionner un capillaire, on prend en compte la pression de condensation, la pression d'evaporation visee et les conditions ambiantes de reference, car ces parametres determinent le debit necessaire et la perte de charge a travers le capillaire. La chaleur degagee par le compresseur lui meme n'entre pas en ligne de compte");

quest("AgrFroid439 : Que fait un régulateur de la pression d'évaporation ?://a");
rep("[x] Il empêche la température d'évaporation de baisser trop dans un évaporateur");
rep("[ ] Il empêche la température d'évaporation de monter trop dans un évaporateur");
rep("[ ] Il adapte continuellement la température d'évaporation d'un évaporateur à la charge");
rep("[ ] Toutes les réponses précédentes sont bonnes");
faux("Un regulateur de pression d'evaporation, place en sortie de l'evaporateur, maintient une pression minimale dans celui ci en limitant son ouverture, ce qui empeche la temperature d'evaporation de descendre en dessous d'un seuil defini, evitant par exemple un givrage excessif ou un gel du produit stocke");

quest("AgrFroid440 : Contre quoi un régulateur de pression de démarrage protège-t-il le compresseur ?://a");
rep("[ ] Contre une pression d'aspiration trop basse");
rep("[x] Contre une pression d'aspiration trop élevée induisant une surintensité du moteur du compresseur");
rep("[ ] Contre une pression de condensation trop élevée");
rep("[ ] Contre une pression d'huile trop élevée induisant une diminution de l'intensité du moteur du compresseur");
faux("Apres un arret prolonge, la pression dans l'evaporateur peut monter fortement par equilibrage avec la temperature ambiante. Sans protection, le redemarrage du compresseur avec une pression d'aspiration anormalement elevee entrainerait une surintensite au moteur. Le regulateur de demarrage limite cette pression d'aspiration au redemarrage pour eviter ce probleme");

quest("AgrFroid441 : Dans une régulation pump-down :://a");
rep("[x] l'électrovanne se ferme, puis le compresseur vide le réfrigérant de l'évaporateur et s'arrête par action du pressostat BP");
rep("[ ] l'électrovanne se ferme et l'installation s'arrête simultanément");
rep("[ ] le ventilateur de l'évaporateur est coupé et le compresseur peut ensuite s'arrêter en fonction du thermostat de l'évaporateur");
rep("[ ] le compresseur fera le vide dans l'installation, puis l'électrovanne se fermera pour empêcher un reflux du réfrigérant");
faux("Dans une regulation pump down, le thermostat coupe l'alimentation de l'electrovanne de la ligne liquide, qui se ferme immediatement. Le compresseur continue cependant de tourner quelques instants pour aspirer et evacuer le liquide restant dans l'evaporateur, jusqu'a ce que la pression chute suffisamment pour que le pressostat BP arrete le compresseur, assurant un evaporateur quasiment vide de liquide a l'arret");

quest("AgrFroid442 : Laquelle des pièces suivantes ne protège pas le compresseur d'une surcharge ?://a");
rep("[ ] Le régulateur de démarrage");
rep("[x] La vanne de régulation de puissance");
rep("[ ] Le détendeur à PMA (MOP)");
rep("[ ] Le régulateur de démarrage et/ou détendeur à PMA (MOP)");
faux("Contrairement au regulateur de demarrage et au detendeur MOP qui limitent directement la pression ou la charge thermique admise au compresseur, la vanne de regulation de puissance sert uniquement a ajuster la capacite frigorifique en fonction de la demande, sans fonction specifique de protection contre une surcharge du moteur");

quest("AgrFroid443 : Qu'emploie-t-on pour éliminer les résidus acides d'un système ?://a");
rep("[x] Un filtre burn-out");
rep("[ ] Un filtre à gaz aspirés");
rep("[ ] Un filtre à liquide");
rep("[ ] Un filtre à huile");
faux("Apres un burn out du moteur d'un compresseur hermetique, un filtre burn out special, contenant des materiaux absorbants specifiquement concus pour capter les acides et les residus de decomposition, est installe temporairement sur la conduite d'aspiration pour nettoyer le circuit avant remise en service normale");

quest("AgrFroid444 : Lequel de ces régulateurs ne réagit pas en fonction de sa pression d'entrée ?://a");
rep("[ ] Le régulateur de pression d'évaporation");
rep("[x] Le régulateur de pression d'aspiration / régulateur de démarrage");
rep("[ ] Le régulateur de pression de condensation");
rep("[ ] Toutes les réponses précédentes sont bonnes");
faux("Contrairement au regulateur de pression d'evaporation et au regulateur de pression de condensation, qui reagissent tous deux a leur pression d'entree, le regulateur de demarrage reagit specifiquement a sa pression de sortie, cote compresseur, et non a sa pression d'entree");

quest("AgrFroid445 : Un by-pass à gaz chauds réagit aux variations de la [complétez] du système.://a");
rep("[ ] pression de liquide");
rep("[x] pression d'aspiration");
rep("[ ] pression de refoulement");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("Un by pass de gaz chauds renvoie une partie du gaz chaud refoule vers l'aspiration pour maintenir une charge minimale au compresseur a faible demande. Il est regule en fonction de la pression d'aspiration: si celle ci chute en dessous d'un seuil, signe d'une charge trop faible, le by pass s'ouvre pour maintenir artificiellement un debit de gaz suffisant");

quest("AgrFroid446 : Si la sonde d'un thermostat d'ambiance mécanique classique monté dans une chambre froide se casse, le thermostat :://a");
rep("[x] sera inopérant");
rep("[ ] sera activé");
rep("[ ] ne subira aucune modification");
rep("[ ] basculera sur une position de sécurité");
faux("Un thermostat mecanique classique fonctionne par la dilatation d'un fluide contenu dans le bulbe de la sonde, transmise au mecanisme via un capillaire. Si la sonde se casse, le fluide s'echappe et la pression necessaire au fonctionnement du mecanisme disparait, rendant le thermostat totalement inoperant, sans basculer sur une position de securite predefinie");

quest("AgrFroid447 : A quoi sert un séparateur de liquide (bouteille anti coup de liquide) ?://a");
rep("[ ] A empêcher l'huile de refluer dans le carter");
rep("[x] A éviter un coup de liquide et permettre un retour d'huile en douceur");
rep("[ ] A éviter que du réfrigérant liquide ne reflue dans le compresseur et à ramener l'huile dans le compresseur en la faisant passer dans un séparateur d'huile");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("Un separateur de liquide, place sur la conduite d'aspiration, retient le refrigerant liquide qui pourrait sinon atteindre directement le compresseur et provoquer un coup de liquide dangereux. Il permet egalement un retour progressif et controle de l'huile emportee avec ce liquide, en douceur, vers le compresseur, via un orifice calibre au fond du separateur");

quest("AgrFroid448 : A quoi est-il préférable de raccorder le pressostat HP en technique du froid ?://a");
rep("[ ] Au robinet de service du compresseur");
rep("[x] Directement au compresseur");
rep("[ ] Au réservoir de liquide");
rep("[ ] N'importe où du moment que l'on prend un raccord HP");
faux("Pour une mesure fiable et reactive, le pressostat HP doit etre raccorde directement au compresseur lui meme, au plus pres de l'organe qu'il doit proteger, plutot qu'a un point eloigne du circuit ou la pression mesuree pourrait etre faussee par des pertes de charge ou des retards");

quest("AgrFroid449 : A quoi est-il préférable de raccorder le pressostat BP en technique du froid ?://a");
rep("[ ] Au robinet de service du compresseur");
rep("[x] Directement au compresseur");
rep("[ ] a la conduite d'aspiration");
rep("[ ] N'importe où du moment que l'on prenne un raccord BP");
faux("De la meme maniere, pour proteger efficacement le compresseur contre une pression d'aspiration trop basse, le pressostat BP doit etre raccorde directement sur le compresseur, afin de mesurer la pression reelle a son entree sans etre fausse par des pertes de charge en amont");

quest("AgrFroid450 : Quand un liquide s'évapore à pression constante, son enthalpie :://a");
rep("[x] augmente");
rep("[ ] diminue");
rep("[ ] reste la même");
rep("[ ] L'enthalpie n'a rien à voir avec cela");
faux("Lors du changement d'etat de liquide a vapeur, le fluide absorbe de la chaleur latente de vaporisation sans changement de temperature a pression constante. Cette absorption de chaleur se traduit par une augmentation de l'enthalpie specifique du fluide");

quest("AgrFroid451 : Qu'est-ce que le R407C ?://a");
rep("[x] Un fluide zéotrope (non-azéotrope)");
rep("[ ] Un fluide azéotrope");
rep("[ ] Un absorbant");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("Le R407C est un melange de trois composants HFC, R32, R125 et R134a, dont les points d'ebullition individuels sont suffisamment differents pour que le melange se comporte comme un fluide zeotrope, c'est a dire qu'il presente un glissement de temperature lors du changement d'etat");

quest("AgrFroid452 : Quand un mélange zéotrope (non-azéotrope) s'évapore à pression constante, on note :://a");
rep("[x] un glissement de température");
rep("[ ] l'absence de glissement de température");
rep("[ ] une température stable");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("Dans un melange zeotrope, les differents composants n'ont pas le meme point d'ebullition. Lors de l'evaporation a pression constante, la composition de la phase qui change d'etat varie progressivement, ce qui se traduit par une variation continue de la temperature tout au long du changement d'etat, c'est le glissement de temperature");

quest("AgrFroid453 : Dans un mélange azéotrope :://a");
rep("[x] il existe une relation fixe entre pression et température");
rep("[ ] il n'existe pas de relation fixe entre pression et température");
rep("[ ] il se produit un glissement nettement perceptible");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("Un melange azeotrope se comporte, du point de vue thermodynamique, comme un corps pur: il possede une relation fixe et unique entre pression et temperature de saturation, sans glissement de temperature lors du changement d'etat, contrairement a un melange zeotrope");

quest("AgrFroid454 : Nous disposons à l'atelier de deux bouteilles de réfrigérant contenant du R134a. La première est remplie sur une hauteur de 5 cm et il y règne une pression de 4 bar. La seconde est remplie sur une hauteur de 10 cm. Quelle sera la valeur de la pression rég://a");
rep("[x] 4 bar");
rep("[ ] 2 bar");
rep("[ ] 8 bar");
rep("[ ] Pour pouvoir répondre à cette question, il faut connaître la hauteur de la bouteille");
faux("Dans une bouteille contenant un fluide pur en equilibre liquide vapeur a une temperature donnee, la pression ne depend que de la temperature, pas de la quantite de liquide ni de la hauteur de remplissage. Les deux bouteilles etant a la meme temperature ambiante, elles afficheront donc la meme pression de 4 bar, quelle que soit la quantite de liquide presente");

quest("AgrFroid455 : Qu'indiquent les bulles de gaz dans le voyant liquide d'une installation de réfrigération en service normal ?://a");
rep("[ ] Un manque de réfrigérant à coup sûr");
rep("[ ] Un sous-refroidissement");
rep("[x] La présence d'un flash-gaz (pré-détente)");
rep("[ ] Une pression de condensation trop basse");
faux("En fonctionnement normal, sans manque de fluide avere ni condensation defectueuse, la presence de bulles dans le voyant liquide indique generalement la formation d'un flash gaz, c'est a dire une vaporisation partielle prematuree du liquide due a une chute de pression excessive avant d'atteindre le detendeur");

quest("AgrFroid456 : Il est conseillé de placer le réservoir de liquide [complétez] que le condenseur.://a");
rep("[x] plus bas");
rep("[ ] plus haut");
rep("[ ] exactement à la même hauteur");
rep("[ ] Ce détail n'a aucune influence positive ou négative");
faux("Placer le reservoir de liquide plus bas que le condenseur permet au liquide de s'ecouler par gravite depuis le condenseur vers le reservoir, facilitant un drainage efficace et continu sans risque d'accumulation excessive de liquide dans le condenseur, ce qui reduirait sa surface utile d'echange");

quest("AgrFroid457 : Comment peut-on éviter la formation de flash-gaz dans la majorité des cas ?://a");
rep("[ ] En plaçant de fins tuyaux");
rep("[ ] En réglant une grande vitesse d'écoulement dans la conduite de liquide");
rep("[x] En plaçant le réservoir de liquide plus haut que le détendeur");
rep("[ ] En réalisant la condensation à basse température");
faux("Placer le reservoir de liquide a une hauteur superieure a celle du detendeur cree une colonne de liquide dont le poids genere une pression hydrostatique additionnelle, de l'ordre de 0,1 bar par metre de hauteur, ce qui compense partiellement la perte de charge dans la conduite de liquide et aide a eviter que la pression ne chute en dessous du point de saturation avant le detendeur");

quest("AgrFroid458 : La présence de flash-gaz dans une conduite :://a");
rep("[ ] n'a pas d'influence sur le bon fonctionnement d'un détendeur");
rep("[x] a une influence sur le bon fonctionnement d'un détendeur");
rep("[ ] augmente la puissance frigorifique de l'évaporateur en favorisant une injection turbulente");
rep("[ ] améliore l'arrivée de réfrigérant dans le détendeur");
faux("La presence de flash gaz dans la conduite de liquide signifie qu'une partie du refrigerant arrive deja a l'etat vapeur au detendeur, qui est dimensionne pour detendre du liquide pur. Ce melange perturbe sa capacite a reguler correctement le debit et la surchauffe, degradant son bon fonctionnement");

quest("AgrFroid459 : Que mesure un pressostat de sécurité d'huile ?://a");
rep("[ ] La pression d'huile et la pression d'évaporation");
rep("[x] La pression d'huile et la pression de carter");
rep("[ ] La pression d'huile et la pression de liquide");
rep("[ ] La pression et la température de l'huile");
faux("Un pressostat de securite d'huile mesure la difference entre la pression de refoulement de la pompe a huile et la pression regnant dans le carter du compresseur, cette difference, dite pression differentielle d'huile, devant toujours etre suffisante pour garantir une bonne lubrification");

quest("AgrFroid460 : Un pressostat de sécurité d'huile intègre-t-il une temporisation ?://a");
rep("[ ] parfois");
rep("[x] toujours");
rep("[ ] uniquement dans les applications à basse température");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("Au demarrage, la pression d'huile met quelques secondes a s'etablir normalement avant que la pompe n'atteigne son regime stable. Le pressostat de securite d'huile integre donc systematiquement une temporisation pour ne pas declencher intempestivement pendant cette phase transitoire normale");

quest("AgrFroid461 : La plupart des pressostats mécaniques de sécurité d'huile :://a");
rep("[x] comportent un dispositif de réarmement manuel");
rep("[ ] comportent un dispositif de réarmement automatique");
rep("[ ] ne comportent pas du tout de dispositif de réarmement");
rep("[ ] comportent rarement un dispositif de réarmement");
faux("La plupart des pressostats mecaniques de securite d'huile sont concus avec un reenclenchement manuel obligatoire apres declenchement, afin d'obliger un technicien a diagnostiquer la cause du defaut avant de remettre l'installation en marche, plutot que de redemarrer automatiquement et risquer d'aggraver un probleme de lubrification non resolu");

quest("AgrFroid462 : La pression d'huile à la sortie de la pompe à huile doit :://a");
rep("[ ] toujours être inférieure à la pression d'évaporation");
rep("[x] toujours être supérieure à la pression de carter");
rep("[ ] toujours être supérieure à la différence entre la pression de carter et la pression d'évaporation");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("Pour que l'huile puisse effectivement circuler et lubrifier les pieces mobiles du compresseur, la pression a la sortie de la pompe a huile doit toujours etre superieure a la pression regnant dans le carter, cette difference de pression nette etant ce qui pousse physiquement l'huile a travers les circuits de lubrification");

quest("AgrFroid463 : Si l'on monte un séparateur d'huile :://a");
rep("[ ] on ne doit plus placer de coudes");
rep("[ ] on empêche toute entrée d'huile dans le système");
rep("[ ] la pression d'huile reste toujours constante");
rep("[x] la majorité de l'huile est ramenée dans le carter");
faux("Un separateur d'huile, place sur la conduite de refoulement juste apres le compresseur, capte la majeure partie de l'huile entrainee avec le gaz chaud comprime et la renvoie directement vers le carter du compresseur, limitant la quantite d'huile qui circule inutilement dans le reste du circuit");

quest("AgrFroid464 : A quoi sert-il d'effectuer le tirage au vide (pump-down) d'un évaporateur avant de procéder à son dégivrage électrique ?://a");
rep("[x] A empêcher la migration d'une quantité importante de fluide vers le compresseur");
rep("[ ] A éviter que l'huile ne se mette à bouillir dans l'évaporateur");
rep("[ ] A éviter de devoir effectuer un tirage au vide de l'installation");
rep("[ ] A éviter une décomposition du réfrigérant");
faux("Realiser un pump down de l'evaporateur avant d'activer le degivrage electrique permet d'evacuer prealablement le liquide present dans l'evaporateur, empechant qu'une quantite importante de refrigerant migre brutalement vers le compresseur lorsque les resistances de degivrage rechauffent et vaporisent ce liquide residuel");

quest("AgrFroid465 : Le distributeur de liquide d'un évaporateur :://a");
rep("[ ] doit toujours être monté à l'horizontale");
rep("[ ] ne peut être monté qu'à la verticale et orienté vers le haut");
rep("[ ] peut être monté dans n'importe quelle position");
rep("[x] doit être monté à la verticale et orienté vers le bas");
faux("Un distributeur de liquide, qui repartit le refrigerant entre plusieurs circuits d'un evaporateur, doit toujours etre monte verticalement avec son orifice d'entree oriente vers le bas, pour garantir une repartition homogene du melange liquide vapeur entre les differents tubes capillaires sous l'effet de la gravite");

quest("AgrFroid466 : Pour quelle(s) raison(s) le ventilateur d'un évaporateur peut-il se trouver bloqué par de la glace ?://a");
rep("[ ] Exclusivement parce que le dégivrage ne s'est pas fait pas correctement");
rep("[ ] Exclusivement suite à un mauvais sens de rotation du ventilateur de l'évaporateur");
rep("[ ] Exclusivement suite à l'encrassement de l'évaporateur");
rep("[x] Toutes les causes évoquées dans les réponses précédentes sont possibles");
faux("Le blocage d'un ventilateur d'evaporateur par de la glace peut resulter de plusieurs causes combinees ou independantes: un degivrage mal realise, un sens de rotation inverse du ventilateur qui ne brasse pas correctement l'air pour degivrer efficacement les ailettes, ou un encrassement de l'evaporateur qui perturbe la circulation d'air et favorise l'accumulation de givre");

quest("AgrFroid467 : Dans quelles unités est exprimée l'enthalpie spécifique ?://a");
rep("[ ] kCal/watt");
rep("[ ] kJ/kg.K");
rep("[x] kJ/kg");
rep("[ ] kJ/W.s");
faux("L'enthalpie specifique, qui represente l'energie contenue dans une unite de masse de fluide, s'exprime dans le systeme international en kilojoules par kilogramme, unite d'energie rapportee a une unite de masse");

quest("AgrFroid468 : Quelle est la fonction d'un condenseur évaporatif ?://a");
rep("[ ] Absorber la chaleur sensible afin que le gaz se liquéfie");
rep("[ ] Céder la chaleur sensible afin que le gaz se liquéfie");
rep("[ ] Absorber la chaleur latente afin que le gaz se liquéfie");
rep("[x] Comparativement à un condenseur à air, il continuera à remplir sa fonction lorsque la t° extérieure est élevée");
faux("Un condenseur evaporatif utilise l'evaporation d'eau pulverisee sur la batterie pour refroidir le refrigerant, exploitant la temperature humide de l'air, plus basse que la temperature seche, plutot que la seule temperature seche utilisee par un condenseur a air classique. Cela lui permet de continuer a fonctionner efficacement meme par temperature ambiante elevee");

quest("AgrFroid469 : Quand y a-t-il sous-refroidissement ?://a");
rep("[x] Quand un réfrigérant liquide est amené à une température plus basse que son point de condensation");
rep("[ ] Quand on augmente le régime des ventilateurs du condenseur");
rep("[ ] Quand on injecte du réfrigérant");
rep("[ ] Quand on abaisse sensiblement la température de condensation");
faux("Il y a sous refroidissement quand un liquide refrigerant est amene a une temperature inferieure a sa temperature de condensation a la pression consideree, ce qui signifie qu'il a cede davantage de chaleur apres sa condensation complete");

quest("AgrFroid470 : A quelles températures assure t on le meilleur rendement d'une chambre froide sachant que la température y est maintenue à 2 °C et que le condenseur est exposé à une température ambiante de 32 °C ?://a");
rep("[x] Evaporation à -8 °C et condensation à 48 °C");
rep("[ ] Evaporation à -8 °C et condensation à 50 °C");
rep("[ ] Evaporation à -8 °C et condensation à 52 °C");
rep("[ ] Evaporation à -8 °C et condensation à 54 °C");
faux("Pour une chambre maintenue a 2°C, un ecart typique de 10 kelvins donne une evaporation a -8°C. Pour une ambiance exterieure a 32°C, avec un ecart typique de condensation de l'ordre de 16 kelvins, on obtient une condensation a 48°C. Cette combinaison represente les conditions de fonctionnement les moins contraignantes parmi les options, donc le meilleur rendement");

quest("AgrFroid471 : A quelles températures de fonctionnement le rendement d'une machine frigorifique sera le plus élevé ?://a");
rep("[ ] Evaporation à -8 °C et condensation à 40 °C");
rep("[ ] Evaporation à -10 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 40 °C");
rep("[x] Evaporation à -5 °C et condensation à 35 °C");
faux("Parmi les combinaisons proposees, celle avec l'ecart le plus faible entre evaporation et condensation, 40 kelvins, est evaporation -5°C et condensation 35°C, ce qui lui garantit le meilleur rendement comparativement aux autres options qui presentent un ecart plus important");

quest("AgrFroid472 : A quelles températures de fonctionnement le rendement d'une machine frigorifique sera le moins bon ?://a");
rep("[ ] Evaporation à -8 °C et condensation à 40 °C");
rep("[x] Evaporation à -10 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 35 °C");
faux("La combinaison evaporation -10°C et condensation 40°C presente l'ecart de temperature le plus grand, 50 kelvins, parmi les options proposees, ce qui correspond au taux de compression le plus eleve et donc au moins bon rendement");

quest("AgrFroid473 : A quelles températures de fonctionnement la température de refoulement sera la plus élevée ?://a");
rep("[ ] Evaporation à -8 °C et condensation à 40 °C");
rep("[x] Evaporation à -10 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 35 °C");
faux("Un plus grand ecart entre evaporation et condensation correspond a un taux de compression plus eleve, ce qui se traduit par une temperature de refoulement plus elevee. La combinaison -10°C/40°C, ayant l'ecart le plus grand parmi les options, donnera donc la temperature de refoulement la plus haute");

quest("AgrFroid474 : A quelles températures de fonctionnement la température de refoulement sera la plus basse ?://a");
rep("[ ] Evaporation à -8 °C et condensation à 40 °C");
rep("[ ] Evaporation à -10 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 40 °C");
rep("[x] Evaporation à 0°C et condensation à 40°C");
faux("A l'inverse, la combinaison evaporation 0°C et condensation 40°C presente l'ecart le plus faible, 40 kelvins, parmi les options, correspondant au taux de compression le plus bas et donc a la temperature de refoulement la plus basse");

quest("AgrFroid475 : Dans quel cas la température de refoulement sera la plus élevée ?://a");
rep("[ ] évaporation -10°C et condensation +40°C et surchauffe de 5K");
rep("[ ] évaporation -10°C et condensation +40°C et surchauffe de 0K");
rep("[x] évaporation -10°C et condensation +40°C et surchauffe de 10K");
rep("[ ] évaporation -10°C et condensation +40°C et surchauffe de 7K");
faux("A memes conditions d'evaporation et de condensation, plus la surchauffe du gaz aspire est importante, plus le gaz entre chaud dans le compresseur, et donc plus sa temperature apres compression sera elevee. Parmi les options, c'est la surchauffe de 10 K qui donnera la temperature de refoulement la plus elevee");

quest("AgrFroid476 : Dans quel cas la température de refoulement sera la plus élevée ?://a");
rep("[ ] évaporation -5°C et condensation +40°C et surchauffe de 5K");
rep("[ ] évaporation -10°C, condensation +40°C et surchauffe de 5K");
rep("[ ] évaporation -15°C, condensation +40°C et surchauffe de 5K");
rep("[x] évaporation -20°C, condensation +40°C et surchauffe de 5K");
faux("A surchauffe identique de 5K et condensation constante de 40°C, c'est la temperature d'evaporation la plus basse, -20°C, qui cree l'ecart le plus grand avec la condensation et donc le taux de compression le plus eleve, entrainant la temperature de refoulement la plus haute parmi les options");

quest("AgrFroid477 : Quel réfrigérant risque le plus de changer de composition en cas de fuite ?://a");
rep("[ ] Le R717");
rep("[ ] Le R134a");
rep("[ ] Le R507");
rep("[x] Le R407C");
faux("Etant un melange zeotrope de trois composants aux volatilites differentes, le R407C risque de voir sa composition se modifier en cas de fuite: les composants les plus volatils s'echappent preferentiellement en phase vapeur, appauvrissant progressivement le melange restant, contrairement a un fluide pur comme le R717 ou un azeotrope comme le R507");

quest("AgrFroid478 : Quelle est la fonction du voyant liquide ?://a");
rep("[ ] Un liquide saturé et une vapeur saturée");
rep("[ ] Un mélange diphasique saturé");
rep("[x] visualiser la présence de liquide dans le circuit");
rep("[ ] Un liquide surchauffé");
faux("Le voyant liquide, place sur la ligne liquide generalement apres le filtre deshydrateur, permet de verifier visuellement la presence effective de liquide refrigerant dans le circuit, et de detecter d'eventuelles bulles de gaz signalant un probleme de charge ou de flash gaz");

quest("AgrFroid479 : Comment calcule-t-on le coefficient de performance (COP) d'une pompe à chaleur en mode chauffage ?://a");
rep("[ ] En multipliant la puissance thermique par la puissance absorbée par le moteur du compresseur");
rep("[ ] En multipliant la puissance thermique par la puissance totale absorbée par le système");
rep("[x] En divisant la puissance évacuée par le condenseur, par la puissance absorbée par le compresseur");
rep("[ ] En divisant la puissance thermique par la puissance totale absorbée par le système");
faux("En mode chauffage, l'energie utile produite est la chaleur rejetee au condenseur, qui chauffe le local ou l'eau. Le COP en mode chauffage se calcule donc en divisant cette puissance thermique evacuee au condenseur par la puissance electrique absorbee par le compresseur pour la produire");

quest("AgrFroid480 : Quand la différence entre la température de condensation et celle d'évaporation diminue, la puissance absorbée:://a");
rep("[x] diminue et la température de refoulement baisse");
rep("[ ] diminue et la température de refoulement augmente");
rep("[ ] augmente et la température de refoulement baisse");
rep("[ ] augmente et la température de refoulement monte");
faux("Un ecart plus faible entre les temperatures de condensation et d'evaporation correspond a un taux de compression plus bas. Cela reduit a la fois le travail de compression necessaire, donc la puissance absorbee, et comme le gaz subit une compression moins intense, sa temperature finale est egalement plus basse");

quest("AgrFroid481 : Comment appelle-t-on la différence entre la température d'évaporation et la température mesurée à la sortie de l'évaporateur ?://a");
rep("[x] La surchauffe");
rep("[ ] Le sous-refroidissement");
rep("[ ] La surchauffe totale");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("La surchauffe se definit precisement comme la difference entre la temperature mesuree a la sortie de l'evaporateur et la temperature de saturation correspondant a la pression d'evaporation, indiquant de combien de degres le gaz a ete rechauffe au dela de son point de saturation");

quest("AgrFroid482 : Comment appelle-t-on la différence entre la température de condensation et la température mesurée à la sortie du condenseur ?://a");
rep("[ ] La surchauffe");
rep("[x] Le sous-refroidissement");
rep("[ ] La surchauffe totale");
rep("[ ] Toutes les réponses précédentes sont mauvaises");
faux("De maniere symetrique a la surchauffe, le sous refroidissement se definit comme la difference entre la temperature de saturation correspondant a la pression de condensation et la temperature mesuree a la sortie du condenseur");

quest("AgrFroid483 : Quelles sont les fonctions d'un compresseur ?://a");
rep("[x] Aspirer le réfrigérant à l'état de vapeur et le comprimer");
rep("[ ] Réguler l'écoulement du réfrigérant et abaisser la pression");
rep("[ ] Céder la chaleur latente et provoquer un changement d'état");
rep("[ ] Absorber la chaleur latente et provoquer un changement d'état");
faux("Les deux fonctions fondamentales et exclusives du compresseur dans le cycle frigorifique sont d'aspirer le refrigerant a l'etat de vapeur depuis l'evaporateur, puis de le comprimer pour elever sa pression et sa temperature avant de le refouler vers le condenseur");

quest("AgrFroid484 : Lequel des condenseurs suivants produira la plus basse température de condensation lorsque la température ambiante est élevée ?://a");
rep("[ ] Un condenseur du type 'refroidi par air à convection naturelle'");
rep("[ ] Un condenseur du type 'refroidi par air à ventilation forcée'");
rep("[ ] Un aéroréfrigérant sec");
rep("[x] Un condenseur évaporatif");
faux("Grace a l'evaporation d'eau qui exploite la temperature humide de l'air, generalement bien inferieure a la temperature seche surtout par temps chaud et sec, un condenseur evaporatif peut maintenir une temperature de condensation nettement plus basse qu'un condenseur a air classique ou un aeroréfrigérant sec, lorsque la temperature ambiante est elevee");

quest("AgrFroid485 : Un condenseur propre sur une installation de réfrigération favorisera :://a");
rep("[ ] une hausse de la température de condensation et du rendement");
rep("[ ] une baisse de la température de condensation et du rendement");
rep("[ ] une hausse de la température de condensation et une baisse du rendement");
rep("[x] une baisse de la température de condensation et un bon rendement");
faux("Un condenseur propre, sans encrassement, echange efficacement la chaleur avec le milieu de refroidissement, ce qui permet de maintenir une temperature de condensation plus basse pour une meme charge thermique a evacuer, et donc un meilleur rendement global de l'installation");

quest("AgrFroid486 : Dans une installation de réfrigération, l'évaporateur est l'appareil :://a");
rep("[ ] qui cède du froid");
rep("[x] qui absorbe l'énergie calorifique");
rep("[ ] dans lequel l'eau chaude s'évapore");
rep("[ ] dans lequel la vapeur chaude se condense");
faux("Le role fondamental de l'evaporateur dans le cycle frigorifique est d'absorber l'energie calorifique, la chaleur, du milieu dans lequel il est place, en la cedant au refrigerant qui s'evapore a l'interieur de ses tubes");

quest("AgrFroid487 : Le compresseur d'une installation de réfrigération :://a");
rep("[x] aspire le réfrigérant de l'évaporateur et le refoule dans le condenseur");
rep("[ ] aspire du réfrigérant et le refoule à l'état liquide dans l'évaporateur");
rep("[ ] fait en sorte que la pression dans l'évaporateur reste égale à la pression de vapeur saturante");
rep("[ ] fait en sorte que les pressions d'évaporation et de condensation restent identiques");
faux("Comme deja etabli, le compresseur aspire le refrigerant a l'etat vapeur depuis l'evaporateur et le refoule, apres compression, vers le condenseur, ou il se condensera en cedant sa chaleur");

quest("AgrFroid488 : Que se passe-t-il dans le condenseur ?://a");
rep("[ ] Du réfrigérant liquide s'évapore à une pression constante");
rep("[ ] La température de la vapeur provenant du compresseur augmente jusqu'à la température de condensation");
rep("[x] Le fluide frigorigène se refroidit et se condense");
rep("[ ] La pression tombe en dessous de la pression de vapeur saturante");
faux("Dans le condenseur, le refrigerant a l'etat de vapeur surchauffee est d'abord refroidi, desurchauffe, puis se condense en cedant sa chaleur latente au milieu de refroidissement, pour ressortir a l'etat liquide");

quest("AgrFroid489 : Que va permettre un détendeur thermostatique?://a");
rep("[ ] d'alimenter en liquide l'évaporateur de façon que le fluide sorte en liquide pour un meilleur refroidissement du compresseur");
rep("[ ] d'alimenter en gaz l'évaporateur de manière que le fluide se liquéfie pour un meilleur refroidissement des marchandises");
rep("[ ] d'alimenter à une température de zéro degré absolu, l'évaporateur pour bien refroidir la marchandise qui est dans le frigo");
rep("[x] d'alimenter avec suffisamment de liquide l'évaporateur en fonction des besoins calorifiques du frigo");
faux("Le role du detendeur thermostatique est de reguler precisement le debit de liquide injecte dans l'evaporateur en fonction de la charge calorifique reelle, de maniere a toujours fournir suffisamment de liquide pour couvrir les besoins frigorifiques sans pour autant en fournir un exces qui provoquerait un coup de liquide");

quest("AgrFroid490 : Si l'on augmente la pression exercée sur un liquide :://a");
rep("[x] on élèvera son point d'ébullition");
rep("[ ] on abaissera son point d'ébullition");
rep("[ ] on ne modifiera pas son point d'ébullition");
rep("[ ] on ne pourra plus déterminer son point d'ébullition");
faux("C'est une propriete thermodynamique fondamentale: plus la pression exercee sur un liquide est elevee, plus sa temperature d'ebullition augmente. C'est exactement ce principe qui est exploite dans le cycle frigorifique, ou le compresseur augmente la pression pour permettre la condensation a une temperature superieure a la temperature ambiante");

quest("AgrFroid491 : Qu'est-ce que la température de rosée de l'air humide ?://a");
rep("[ ] La température mesurée au thermomètre à bulbe humide");
rep("[x] La température à laquelle l'humidité de l'air commence à se condenser");
rep("[ ] La température à la surface du refroidisseur dans une enceinte froide");
rep("[ ] La température d'évaporation du réfrigérant");
faux("La temperature de rosee est la temperature a laquelle, en refroidissant de l'air humide a pression constante, la vapeur d'eau qu'il contient commence a se condenser sous forme de buee ou de rosee, le point ou l'air atteint sa saturation en humidite");

quest("AgrFroid492 : L'humidité relative de l'air est :://a");
rep("[ ] Le pourcentage de la teneur totale en vapeur d'eau avec lequel il faut humidifier l'air pour le saturer");
rep("[ ] Le rapport en pourcentage entre l'air non humidifié et l'air humidifié");
rep("[x] Le rapport entre la pression de la vapeur d'eau contenue dans l'air et la pression de la vapeur à saturation");
rep("[ ] Le pourcentage d'air qu'il y a dans le mélange air-vapeur d'eau");
faux("L'humidite relative se definit comme le rapport, exprime en pourcentage, entre la pression partielle de vapeur d'eau effectivement presente dans l'air et la pression de vapeur saturante maximale que l'air pourrait contenir a cette meme temperature");

quest("AgrFroid493 : Quand on réchauffe l'air à l'aide d'une batterie chaude,://a");
rep("[x] l'humidité relative baisse");
rep("[ ] l'humidité relative reste la même");
rep("[ ] l'humidité relative augmente");
rep("[ ] l'humidité relative peut tant augmenter que baisser");
faux("Rechauffer de l'air sans lui ajouter d'humidite augmente sa capacite maximale de retention de vapeur d'eau, puisque la pression de vapeur saturante est plus elevee a temperature plus haute, alors que la quantite reelle d'humidite reste constante. Le rapport entre les deux, l'humidite relative, diminue donc");

quest("AgrFroid494 : Quelle est la fonction d'un condenseur ?://a");
rep("[ ] Il sert à faire repasser le réfrigérant à l'état gazeux");
rep("[x] Refroidir le fluide frigorigène afin de le condenser");
rep("[ ] Il porte le réfrigérant à une température plus élevée");
rep("[ ] Il absorbe la chaleur d'une pièce à rafraîchir");
faux("La fonction d'un condenseur est de refroidir le fluide frigorigene a l'etat gazeux afin de provoquer son changement d'etat vers le liquide, en evacuant la chaleur vers le milieu exterieur");

quest("AgrFroid495 : Où a lieu le sous-refroidissement du réfrigérant liquide ?://a");
rep("[ ] Toujours dans le condenseur");
rep("[ ] Toujours hors du condenseur");
rep("[x] Dans le condenseur et/ou dans la ligne liquide");
rep("[ ] Toujours dans la dernière partie de l'évaporateur");
faux("Le sous refroidissement du liquide peut se produire a la fois a l'interieur du condenseur, dans sa derniere portion, et en dehors, dans la conduite de liquide elle meme si celle ci est refroidie par le milieu ambiant lors de son trajet vers le detendeur");

quest("AgrFroid496 : En quoi sont généralement faits les tubes du condenseur d'une installation au HFC si l'atmosphère est non corrosive ?://a");
rep("[ ] En plastique");
rep("[ ] En acier");
rep("[x] En cuivre");
rep("[ ] En aluminium");
faux("Dans une atmosphere non corrosive et pour un refrigerant de type HFC, le cuivre est le materiau standard et le plus couramment utilise pour les tubes de condenseur, en raison de sa bonne conductivite thermique et de sa facilite de mise en oeuvre par brasage");

quest("AgrFroid497 : En quoi sont faits les tubes du condenseur d'une installation au NH3 ?://a");
rep("[ ] En plastique");
rep("[x] En acier");
rep("[ ] En cuivre");
rep("[ ] En aluminium");
faux("L'ammoniac attaque chimiquement le cuivre et les alliages cuivreux, c'est pourquoi les installations fonctionnant a l'ammoniac utilisent exclusivement des tuyauteries et echangeurs en acier, materiau compatible avec ce refrigerant");

quest("AgrFroid498 : Quel est le risque associé si le gaz aspiré est à une température légèrement supérieure à la pression de vapeur saturante ?://a");
rep("[x] un coup de liquide");
rep("[ ] une importante surchauffe de l'installation");
rep("[ ] une température trop élevée du compresseur");
rep("[ ] un grillage du moteur entraînant le compresseur");
faux("Si la temperature du gaz aspire n'est que tres legerement superieure a la temperature de saturation, soit une surchauffe quasi nulle, il reste tres peu de marge avant que le melange ne contienne du liquide. La moindre fluctuation de charge peut faire basculer le melange vers une presence de liquide, exposant le compresseur a un risque de coup de liquide");

quest("AgrFroid499 : Pour qu'une installation dotée d'un détendeur capillaire fonctionne convenablement, il est important que ce capillaire :://a");
rep("[ ] soit de la bonne longueur");
rep("[ ] soit du bon diamètre");
rep("[ ] soit d'un diamètre un peu plus grand que le strict nécessaire");
rep("[x] soit de la bonne longueur et du bon diamètre");
faux("Un detendeur capillaire fonctionne uniquement par sa resistance hydraulique intrinseque, determinee a la fois par sa longueur et son diametre interne. Ces deux parametres doivent etre correctement dimensionnes ensemble, modifier l'un sans l'autre deregle le fonctionnement de l'ensemble");

quest("AgrFroid500 : Pourquoi utilise-t-on un détendeur automatique de pression ?://a");
rep("[ ] Pour adapter la pression d'évaporation à la charge");
rep("[ ] Pour adapter la température d'évaporation à la charge");
rep("[x] Pour que la pression reste constante dans l'évaporateur");
rep("[ ] Pour réguler la surchauffe en fonction de la charge");
faux("Un detendeur automatique a pression constante regule son ouverture de maniere a maintenir une pression d'evaporation fixe dans l'evaporateur, quelle que soit la charge thermique, contrairement au detendeur thermostatique qui regule plutot en fonction de la surchauffe");

quest("AgrFroid500 : Pourquoi utilise-t-on un détendeur automatique de pression ?://a");
rep("[ ] Pour adapter la pression d'évaporation à la charge");
rep("[ ] Pour adapter la température d'évaporation à la charge");
rep("[x] Pour que la pression reste constante dans l'évaporateur");
rep("[ ] Pour réguler la surchauffe en fonction de la charge");
faux("Un detendeur automatique a pression constante regule son ouverture de maniere a maintenir une pression d'evaporation fixe dans l'evaporateur, quelle que soit la charge thermique, contrairement au detendeur thermostatique qui regule plutot en fonction de la surchauffe");

quest("AgrFroid501 : On emploie un détendeur thermostatique à égalisation interne de pression :://a");
rep("[x] sur les évaporateurs à faible perte de charge");
rep("[ ] sur les évaporateurs à grande résistance interne");
rep("[ ] si l'évaporateur est segmenté en plusieurs parties");
rep("[ ] si l'évaporateur est doté d'un distributeur assurant une répartition uniforme du réfrigérant entre ses différentes parties");
faux("Un detendeur a egalisation de pression interne mesure la pression directement a son propre orifice de sortie plutot qu'a la fin de l'evaporateur. Cela ne pose pas de probleme tant que les pertes de charge dans l'evaporateur restent faibles, l'ecart entre l'entree et la sortie de l'evaporateur etant alors negligeable pour la regulation");

quest("AgrFroid502 : On emploie un détendeur thermostatique à égalisation externe de pression :://a");
rep("[ ] sur les évaporateurs à faible résistance interne");
rep("[ ] sur tous les types d'évaporateurs, quelle qu'en soit la taille");
rep("[ ] sur des évaporateurs très petits spécialement conçus pour cela");
rep("[x] lorsque l'évaporateur est doté d'un distributeur assurant une répartition uniforme du réfrigérant entre ses différentes parties, lequel tient compte des pertes de charge");
faux("Quand l'evaporateur est equipe d'un distributeur de liquide qui genere une perte de charge significative pour repartir le fluide entre plusieurs circuits, il devient necessaire d'utiliser l'egalisation de pression externe, qui mesure la pression reelle a la sortie de l'evaporateur, apres cette perte de charge, pour reguler correctement la surchauffe");

quest("AgrFroid503 : Quel est l'effet de la baisse de la pression d'aspiration du compresseur ?://a");
rep("[x] une diminution de la puissance frigorifique");
rep("[ ] Une réduction du volume massique du gaz aspiré");
rep("[ ] Une augmentation du volume balayé du compresseur");
rep("[ ] Une augmentation de la puissance frigorifique");
faux("Une baisse de la pression d'aspiration reduit la densite du gaz aspire, ce qui diminue le debit massique de refrigerant circulant dans le systeme pour un meme volume balaye, entrainant directement une diminution de la puissance frigorifique disponible");

quest("AgrFroid504 : Le taux de compression d'un compresseur frigorifique est le rapport entre :://a");
rep("[ ] le contenu total du cylindre et l'espace nuisible");
rep("[ ] le volume de gaz aspiré et le volume refoulé");
rep("[ ] la pression d'aspiration et la pression de refoulement en valeurs relatives");
rep("[x] la haute pression et la basse pression en valeurs absolues");
faux("Le taux de compression d'un compresseur frigorifique se definit comme le rapport entre la haute pression et la basse pression, toutes deux exprimees imperativement en valeurs absolues, incluant la pression atmospherique, et non en valeurs relatives comme affichees sur les manometres de service");

quest("AgrFroid505 : Quelle est le principal mode de refroidissement des compresseurs semi-hermétiques ?://a");
rep("[ ] en montant le compresseur à l'extérieur ou dans une salle des machines réfrigérée");
rep("[ ] à l'aide du gaz refoulé par le compresseur");
rep("[ ] en faisant circuler de l'eau dans un circuit secondaire");
rep("[x] à l'aide du gaz aspiré par le compresseur");
faux("Le mode de refroidissement principal des compresseurs semi hermetiques est generalement assure par le gaz frigorigene aspire, qui traverse le moteur electrique avant d'entrer dans la chambre de compression, evacuant ainsi la chaleur produite par les pertes electriques du moteur");

quest("AgrFroid506 : Pour obtenir une bonne étanchéité entre les côtés aspiration et refoulement d'un compresseur à double vis :://a");
rep("[x] on injecte de l'huile entre les rotors");
rep("[ ] on injecte du réfrigérant liquide entre les rotors");
rep("[ ] on réalise un entraînement séparé des vis au moyen d'engrenages");
rep("[ ] on place des dispositifs d'étanchéité d'arbre des deux côtés des rotors");
faux("Dans un compresseur a double vis, l'huile injectee entre les deux rotors joue un role essentiel: elle assure a la fois l'etancheite entre les cotes aspiration et refoulement en comblant les jeux mecaniques, et elle lubrifie et refroidit simultanement les rotors en contact");

quest("AgrFroid507 : Que désigne le différentiel d'un thermostat ?://a");
rep("[ ] Son point d'enclenchement");
rep("[ ] Son point de déclenchement");
rep("[x] La différence de température entre son point d'enclenchement et son point de déclenchement");
rep("[ ] La différence entre le tarage du ressort de réglage et la pression exercée sur le capteur (bulbe)");
faux("Le differentiel d'un thermostat designe l'ecart de temperature, ou de pression pour un pressostat, entre le point ou l'appareil enclenche son action et le point ou il la declenche, determinant ainsi l'amplitude du cycle de regulation marche arret");

quest("AgrFroid508 : Un échangeur de chaleur sert :://a");
rep("[ ] à empêcher que de la vapeur (flash-gaz) se forme dans une conduite de liquide");
rep("[ ] à empêcher que le compresseur aspire du liquide");
rep("[ ] à améliorer le rendement d'une installation");
rep("[x] Toutes les réponses précédentes sont bonnes");
faux("Un echangeur de chaleur place entre la conduite de liquide et la conduite d'aspiration remplit simultanement plusieurs fonctions: il sous refroidit davantage le liquide en cedant une partie de sa chaleur au gaz aspire, reduisant le flash gaz, il surchauffe ce gaz aspire, reduisant le risque de coup de liquide, et ces deux effets combines ameliorent le rendement de l'installation");

quest("AgrFroid509 : Où place-t-on généralement un déshydrateur ?://a");
rep("[x] Dans la conduite de liquide en amont du détendeur thermostatique ou capillaire");
rep("[ ] Dans la conduite d'aspiration, tout de suite après l'évaporateur");
rep("[ ] Dans la conduite de refoulement, en amont du condenseur");
rep("[ ] Juste avant l'évaporateur");
faux("Le filtre deshydrateur se place systematiquement sur la conduite de liquide, en amont du detendeur, car c'est a cet endroit qu'il peut le plus efficacement proteger le detendeur, organe le plus sensible a l'humidite et aux impuretes, situe juste apres lui dans le circuit");

quest("AgrFroid510 : Lorsqu'on place deux évaporateurs en parallèle sur le même compresseur et travaillant à des températures différentes, que doit-on placer à la sortie de l'évaporateur travaillant à la température la plus élevée?://a");
rep("[ ] Un pressostat à pression différentielle");
rep("[ ] Un pressostat BP");
rep("[ ] Un clapet antiretour");
rep("[x] Un régulateur de pression d'évaporation");
faux("Quand deux evaporateurs a des temperatures differentes partagent le meme compresseur via une conduite d'aspiration commune, celui qui fonctionne a la temperature la plus elevee doit etre equipe d'un regulateur de pression d'evaporation en sortie, afin d'empecher sa pression de descendre jusqu'au niveau impose par l'evaporateur le plus froid");

quest("AgrFroid511 : Pourquoi place-ton un piège à huile au bas de la tuyauterie de refoulement?://a");
rep("[ ] afin d'y collecter l'huile");
rep("[ ] afin que l'huile soit ramenée directement dans le carter du compresseur");
rep("[x] afin d'assurer le retour d'huile vers le compresseur");
rep("[ ] afin que l'huile s'y évapore");
faux("Un piege a huile place au bas d'une colonne montante de la conduite de refoulement permet d'accumuler temporairement l'huile entrainee par le gaz chaud, avant qu'elle ne soit remontee par bouchon avec le flux de gaz, assurant ainsi un retour regulier d'huile vers le compresseur meme a faible debit de gaz");

quest("AgrFroid512 : Quelle peut être la conséquence d'une mauvaise conception de la conduite d'aspiration ?://a");
rep("[ ] Une vitesse des gaz trop basse");
rep("[ ] Un retour d'huile défectueux");
rep("[ ] Une vitesse des gaz trop élevée");
rep("[x] Toutes les réponses précédentes sont bonnes");
faux("Une conduite d'aspiration mal concue peut provoquer plusieurs problemes distincts: une vitesse de gaz trop basse qui compromet le retour d'huile, ou au contraire une vitesse trop elevee qui genere des pertes de charge excessives et du bruit, ces deux extremes etant tout aussi problematiques l'un que l'autre");

quest("AgrFroid513 : Pourquoi est-il nécessaire d'isoler la conduite d'aspiration ?://a");
rep("[ ] Pour ramener l'huile au compresseur");
rep("[x] Pour éviter la condensation sur le tube, et limiter la surchauffe des vapeurs dans la ligne d'aspiration");
rep("[ ] Pour sous-refroidir le liquide");
rep("[ ] Pour créer une petite surchauffe afin de préserver le compresseur d'un éventuel coup de liquide");
faux("La conduite d'aspiration transporte un gaz froid; sans isolation, de la condensation voire du givre se formerait sur sa surface au contact de l'air ambiant plus chaud. De plus, l'isolation limite le rechauffement indesirable du gaz pendant son trajet vers le compresseur, qui ameliorerait sinon artificiellement la surchauffe mesuree sans reel benefice");

quest("AgrFroid514 : On égalise le niveau d'huile :://a");
rep("[ ] entre deux condenseurs");
rep("[ ] quand on régule la capacité");
rep("[ ] quand deux évaporateurs sont montés en parallèle");
rep("[x] quand deux compresseurs sont montés en parallèle");
faux("L'egalisation de niveau d'huile est specifiquement necessaire lorsque deux ou plusieurs compresseurs fonctionnent en parallele sur le meme circuit, car l'huile a tendance a se repartir inegalement entre eux au fil du temps en fonction de leur sollicitation respective");

quest("AgrFroid515 : Quand place-t-on une double colonne montante?://a");
rep("[ ] Lorsque la conduite de liquide doit monter sur une hauteur telle qu'il y a un risque de formation de flash-gaz");
rep("[x] Lorsque l'installation possède une régulation de puissance, afin d'assurer le retour d'huile à faible puissance sur les conduites où le fluide est à l'état gazeux");
rep("[ ] Lorsqu'on utilise un condenseur refroidi par eau");
rep("[ ] Lorsque le liquide doit atteindre une hauteur supérieure à +/- 5 m");
faux("Une double colonne montante, une petite et une grande montees en parallele avec un siphon, est utilisee lorsque l'installation dispose d'une regulation de puissance qui fait varier fortement le debit de gaz. A faible charge, la petite colonne, dimensionnee pour un debit reduit, assure une vitesse suffisante pour entrainer l'huile, tandis que la grande prend le relais a pleine charge");

quest("AgrFroid516 : Qu'est-ce que le COP théorique ?://a");
rep("[x] le rapport entre la puissance calorifique dégagée au condenseur et la puissance absorbée par le compresseur");
rep("[ ] Le rapport entre la pression d'évaporation et la pression de condensation");
rep("[ ] Le rapport entre la pression d'aspiration saturée et la pression d'évaporation");
rep("[ ] C'est un acronyme désignant une soupape réglant une pression de service constante (Constant Operating Pressure)");
faux("Le coefficient de performance theorique se definit comme le rapport entre la puissance calorifique evacuee au condenseur et la puissance electrique absorbee par le compresseur pour produire cet effet");

quest("AgrFroid517 : Que se passe-t-il quand on choisit une conduite d'aspiration trop petite ?://a");
rep("[ ] Le compresseur devra pomper davantage");
rep("[x] La température finale de compression augmentera");
rep("[ ] La température finale de compression diminuera");
rep("[ ] Le taux de compression diminuera");
faux("Une conduite d'aspiration trop etroite genere une perte de charge excessive, ce qui augmente la surchauffe mesuree a l'entree du compresseur. Ce gaz plus chaud a l'aspiration ressort necessairement plus chaud apres compression, augmentant ainsi la temperature finale");

quest("AgrFroid518 : Que se passe-t-il quand on n'isole pas une conduite d'aspiration ou qu'on l'isole mal ?://a");
rep("[x] La surchauffe augmente");
rep("[ ] Le sous-refroidissement diminue");
rep("[ ] La température finale de compression baissera");
rep("[ ] La pression de refoulement augmentera sensiblement");
faux("Une conduite d'aspiration non isolee ou mal isolee se rechauffe au contact de l'air ambiant plus chaud. Ce rechauffement parasite du gaz pendant son trajet augmente artificiellement la surchauffe mesuree a l'entree du compresseur, sans que cela corresponde a un veritable besoin de regulation");

quest("AgrFroid519 : On emploie un détendeur à égalisation interne de pression :://a");
rep("[x] avec un évaporateur caractérisé par une faible chute de pression");
rep("[ ] avec un évaporateur à cycle de dégivrage électrique");
rep("[ ] avec l'évaporateur d'un refroidisseur rapide industriel");
rep("[ ] avec un évaporateur présentant une grande perte de charge");
faux("Un detendeur a egalisation interne convient aux evaporateurs presentant une faible chute de pression interne, car la difference entre la pression mesuree a la sortie du detendeur et celle regnant reellement a la fin de l'evaporateur reste alors negligeable pour une regulation correcte");

quest("AgrFroid520 : L'abréviation PMA/MOP se rapporte :://a");
rep("[x] à un détendeur");
rep("[ ] à un terme indiquant le rapport entre puissance absorbée et puissance frigorifique");
rep("[ ] à une soupape réglant une pression maximale d'aération donnée dans le carter");
rep("[ ] à un pressostat d'huile (pression maximale amont)");
faux("Les abreviations PMA et MOP se rapportent toutes deux a une caracteristique specifique d'un detendeur thermostatique, celui dont le bulbe est charge de maniere a limiter la pression maximale qu'il peut laisser atteindre dans l'evaporateur");

quest("AgrFroid521 : Le pompage ou hunting est un terme qui s'applique :://a");
rep("[x] à un détendeur");
rep("[ ] à un évaporateur");
rep("[ ] à un condenseur");
rep("[ ] à un ventilateur de condenseur (marche-arrêt)");
faux("Le phenomene de pompage, ou hunting en anglais, designe l'instabilite caracteristique d'un detendeur thermostatique mal regle ou mal dimensionne, qui oscille de maniere repetee entre ouverture et fermeture excessive, provoquant des variations cycliques de la surchauffe et du debit");

quest("AgrFroid522 : Que se passe-t-il quand le filtre-déshydrateur se bouche ?://a");
rep("[ ] La pression du liquide monte");
rep("[ ] La différence de pression baisse dans le dessiccateur");
rep("[x] Le risque de flash-gaz devient très réel");
rep("[ ] Le regard passera du vert au jaune");
faux("Un filtre deshydrateur partiellement ou totalement bouche cree une perte de charge importante sur la ligne liquide a cet endroit. Cette chute de pression localisee peut faire passer le liquide en dessous de sa pression de saturation, provoquant une vaporisation prematuree, c'est a dire un flash gaz");

quest("AgrFroid523 : Quel est l'avantage du sous-refroidissement ?://a");
rep("[ ] de réduire le risque de givrage des robinets du compresseur");
rep("[ ] d'augmenter le puissance frigorifique au compresseur");
rep("[x] d'augmenter l'effet frigorifique");
rep("[ ] de baisser la pression baisse dans le condenseur");
faux("Un liquide plus froid avant la detente reduit la part de flash gaz formee lors de la detente, ce qui laisse davantage de liquide reellement disponible pour l'evaporation utile dans l'evaporateur, augmentant ainsi l'effet frigorifique specifique du cycle");

quest("AgrFroid524 : Quelle est la conséquence d'une faible surchauffe ?://a");
rep("[x] Un risque de coup de liquide");
rep("[ ] Un refroidissement moins bon du moteur du compresseur");
rep("[ ] Une hausse de la température des gaz comprimés");
rep("[ ] Toutes les réponses sont correctes");
faux("Une surchauffe trop faible signifie que le gaz aspire est a peine plus chaud que sa temperature de saturation, laissant tres peu de marge de securite. Toute variation meme minime des conditions de fonctionnement peut faire basculer vers la presence de liquide dans le gaz aspire, exposant le compresseur a un risque de coup de liquide");

quest("AgrFroid525 : Quel est le meilleur endroit pour raccorder les pressostats HP et BP d'une installation de réfrigération à compresseur semi-hermétique ?://a");
rep("[ ] au niveau des robinets de service");
rep("[ ] au choix, au niveau des robinets de service ou du compresseur lui-même");
rep("[x] au niveau du compresseur, dans les deux cas");
rep("[ ] sur le robinet de service coté BP et sur le réservoir de liquide coté HP");
faux("Pour un compresseur semi hermetique, les deux pressostats, HP comme BP, doivent de preference etre raccordes directement sur le compresseur lui meme, au plus pres de l'organe qu'ils protegent, pour garantir une mesure fiable et reactive sans etre faussee par des pertes de charge dans des conduites intermediaires");

quest("AgrFroid526 : Quels seront les symptômes d'un givrage total de l'évaporateur (détendeur thermostatique) ?://a");
rep("[ ] La surchauffe augmentera");
rep("[x] La surchauffe diminuera");
rep("[ ] La température finale de compression augmentera");
rep("[ ] Le refroidissement du moteur sera moins performant dans le cas d'une machine refroidie par les gaz aspirés");
faux("Un givrage total de l'evaporateur reduit drastiquement l'echange thermique entre l'air et le refrigerant, empechant ce dernier de s'evaporer completement. Avec moins d'evaporation effective, le liquide persiste plus loin dans le circuit, ce qui fait diminuer la surchauffe mesuree en sortie");

quest("AgrFroid527 : Quel est le réfrigérant le plus employé en congélation ?://a");
rep("[x] Le R404A");
rep("[ ] Le R134a");
rep("[ ] Le R22");
rep("[ ] Le R410A");
faux("Le R404A, bien qu'etant progressivement remplace du fait de son GWP tres eleve, reste historiquement et encore largement le refrigerant le plus employe dans les applications de congelation et de froid negatif, en raison de ses bonnes caracteristiques thermodynamiques a basse temperature");

quest("AgrFroid528 : Quel est le réfrigérant le plus employé dans les climatiseurs split ?://a");
rep("[ ] Le R134a");
rep("[ ] Le R404A");
rep("[ ] Le R22");
rep("[x] Le R410A");
faux("Le R410A, melange proche azeotrope aux bonnes performances en climatisation, est le refrigerant qui a ete le plus largement utilise dans les climatiseurs split au cours des dernieres annees, bien qu'il soit progressivement remplace par des fluides a plus faible GWP comme le R32");

quest("AgrFroid529 : Comment fonctionne une régulation pump down?://a");
rep("[x] le thermostat coupe l'alimentation de l'électrovanne et le compresseur continue de tourner jusqu'à ce que le pressostat BP déclenche");
rep("[ ] le thermostat arrête le ventilateur de l'évaporateur et un thermostat d'évaporateur arrête le compresseur");
rep("[ ] le thermostat arrête le compresseur et le ventilateur s'arrête aussi tout de suite");
rep("[ ] on vidange toute l'huile et tout le réfrigérant du compresseur");
faux("Dans une regulation pump down, c'est le thermostat d'ambiance qui coupe l'alimentation de l'electrovanne lorsque la consigne est atteinte. Le compresseur continue de tourner, aspirant le liquide restant dans l'evaporateur, jusqu'a ce que la pression chute suffisamment pour que le pressostat BP arrete finalement le compresseur");

quest("AgrFroid530 : Pourquoi est-il encore utile de chauffer le carter d'un compresseur à piston lorsque la température ambiante est élevée ?://a");
rep("[ ] Pour éviter la précipitation des incondensables");
rep("[ ] Pour que le compresseur soit plus chaud que le condenseur");
rep("[x] Pour empêcher le plus possible la miscibilité du fluide frigorigène avec l'huile");
rep("[ ] Pour abaisser la viscosité de l'huile");
faux("Meme par temperature ambiante elevee, chauffer le carter reste utile car cela maintient l'huile a une temperature superieure a celle du reste du circuit, reduisant ainsi la solubilite et la miscibilite du refrigerant liquide dans l'huile pendant les periodes d'arret, evitant un moussage excessif et une dilution de l'huile au redemarrage");

quest("AgrFroid531 : Pourquoi place-t-on un clapet anti-retour avant un condenseur?://a");
rep("[ ] Ce clapet n'y est pas nécessaire");
rep("[ ] Pour empêcher le gaz comprimé de refluer dans le compresseur");
rep("[x] Pour empêcher un reflux du liquide vers le compresseur");
rep("[ ] Pour être sûr que la pression de refoulement soit supérieure à celle de condensation et que les gaz comprimés soient pompés dans le compresseur");
faux("Un clapet anti retour place avant le condenseur, generalement utilise dans des installations a plusieurs compresseurs ou condenseurs, empeche que du refrigerant liquide deja condense ne reflue accidentellement vers le compresseur, notamment lorsque celui ci est a l'arret pendant qu'un autre fonctionne");

quest("AgrFroid532 : Pourquoi faut-il éviter d'exposer inutilement de l'huile frigorifique à l'atmosphère ?://a");
rep("[ ] Parce qu'elle a une viscosité élevée");
rep("[x] Parce qu'elle est hygroscopique");
rep("[ ] Parce qu'elle est acide");
rep("[ ] Une huile synthétique ne doit pas être manipulée avec plus de précaution qu'une huile moteur ordinaire");
faux("Les huiles frigorifiques, en particulier les huiles synthetiques comme les polyol esters, sont fortement hygroscopiques, elles absorbent naturellement et rapidement l'humidite de l'air ambiant. Une exposition meme breve peut contaminer l'huile en humidite, ce qui favorise ensuite la formation d'acides corrosifs dans le circuit");

quest("AgrFroid533 : Dans une installation dotée d'un détendeur thermostatique et fonctionnant bien, la surchauffe se situe entre :://a");
rep("[ ] 0 K et 2 K");
rep("[x] 4 K et 8 K");
rep("[ ] 15 K et 18 K");
rep("[ ] Moins 4 K et moins 8 K");
faux("Dans une installation correctement dimensionnee et reglee avec un detendeur thermostatique, la surchauffe de fonctionnement normale se situe generalement dans une fourchette de 4 a 8 kelvins, offrant un bon compromis entre securite contre les coups de liquide et exploitation efficace de l'evaporateur");

quest("AgrFroid534 : Lorsque la HP augmente et la BP reste constante, alors:://a");
rep("[ ] la puissance frigorifique et la puissance absorbée diminuent");
rep("[ ] le débit massique augmentent");
rep("[x] la puissance frigorifique diminue");
rep("[ ] La puissance absorbée par le compresseur diminue");
faux("Une HP plus elevee a BP constante augmente le taux de compression, ce qui degrade le rendement volumetrique du compresseur et reduit donc le debit massique et la puissance frigorifique disponible");

quest("AgrFroid535 : Dans une chambre froide à 1 °C, on veut un taux d'humidité de 90 % à 95 %. On doit donc opter pour une installation où l'évaporation se fait à :://a");
rep("[ ] -13 °C");
rep("[ ] 1°C");
rep("[x] -6°C");
rep("[ ] -10°C");
faux("Pour maintenir un taux d'humidite relative eleve, 90 a 95 pourcent, dans une chambre froide a 1°C, il faut limiter l'ecart entre la temperature de l'air et la temperature de surface de l'evaporateur, generalement de l'ordre de 5 a 7 kelvins pour un taux d'humidite eleve, ce qui correspond a une temperature d'evaporation d'environ -6°C. Un ecart plus important deshydraterait davantage l'air");

quest("AgrFroid536 : Un pressostat BP est réglé sur 4 bar et son différentiel, sur 3 bar. Laquelle des phrases suivantes est correcte ?://a");
rep("[ ] Le pressostat enclenchera le compresseur à 3 bar et le déclenchera à 1 bar");
rep("[ ] Le pressostat enclenchera le compresseur à 4 bar et le déclenchera à 3 bar");
rep("[x] Le pressostat enclenchera le compresseur à 4 bar et le déclenchera à 1 bar");
rep("[ ] Le pressostat déclenchera le compresseur à 4 bar et l'enclenchera à 7 bar");
faux("Pour un pressostat BP, la consigne de 4 bar correspond au point d'enclenchement, quand le compresseur redemarre apres avoir ete arrete et que la pression remonte, et le differentiel de 3 bar s'applique vers le bas pour determiner le point de declenchement, soit 4 moins 3, ce qui donne 1 bar");

quest("AgrFroid537 : Un pressostat HP est réglé sur 17 bar et son différentiel sur 3 bar. Laquelle des phrases suivantes est correcte ?://a");
rep("[x] Le pressostat déclenchera le compresseur à 17 bar et l'enclenchera à 14 bar");
rep("[ ] Le pressostat déclenchera le compresseur à 14 bar et l'enclenchera à 17 bar");
rep("[ ] Le pressostat enclenchera le compresseur à 17 bar et le déclenchera à 20 bar");
rep("[ ] Le pressostat déclenchera le compresseur à 17 bar et l'enclenchera à 20 bar");
faux("Pour un pressostat HP, la consigne de 17 bar correspond au point de declenchement, la coupure de securite quand la pression monte trop, et le differentiel de 3 bar s'applique vers le bas pour determiner le point de reenclenchement, soit 17 moins 3, ce qui donne 14 bar");

quest("AgrFroid538 : Un dispositif de protection interne (un relais Kriwan par exemple) du moteur d'un compresseur à piston le protège contre :://a");
rep("[ ] les surintensités");
rep("[x] un échauffement excessif");
rep("[ ] les court-circuits");
rep("[ ] un ordre des phases");
faux("Un dispositif de protection interne comme un relais Kriwan surveille directement la temperature des enroulements du moteur grace a des thermistances integrees dans les bobinages, et coupe l'alimentation en cas d'echauffement excessif, avant que les isolants electriques ne soient endommages");

quest("AgrFroid539 : Un dispositif de protection interne ou intégrale du moteur d'un compresseur à piston (un relais Kriwan par exemple) :://a");
rep("[ ] mesure une valeur ohmique des enroulements du moteur");
rep("[ ] déclenche un contact dans les enroulements du moteur");
rep("[x] mesure la température des bobinages du moteur via une thermistance");
rep("[ ] mesure un courant dans le compresseur");
faux("Un dispositif de protection interne du type relais Kriwan utilise des thermistances, sondes de temperature a resistance variable, integrees directement dans les bobinages du moteur, qui transmettent en continu une information de temperature au module electronique de controle, declenchant une coupure si cette temperature depasse un seuil critique");

quest("AgrFroid540 : Que mesure-t-on avec un vacuo-manomètre ?://a");
rep("[x] La pression absolue");
rep("[ ] La pression relative");
rep("[ ] Les pressions absolue et relative");
rep("[ ] La différence entre la pression absolue et la pression du réfrigérant");
faux("Un vacuo manometre, instrument combinant la mesure de pression positive et de depression, est specifiquement concu pour mesurer des pressions absolues, notamment dans la zone de vide ou de tres basse pression, contrairement a un manometre classique qui mesure generalement une pression relative par rapport a la pression atmospherique");
