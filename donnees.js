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

// ====================================================================================
// SECTION : La loi d'Ohm
// ====================================================================================
theme("4eme : La Loi d'Ohm");

debut("Questions sur la relation entre Tension, Courant et Résistance.");

quest("Quelle est la formule correcte de la Loi d'Ohm ?//a");
rep("[ ] P = U x I");
rep("[x] U = R x I");
rep("[ ] R = U x I");
rep("[ ] U = R / I");

quest("Si la résistance R augmente (dans un circuit simple), que fait l'intensité I ?//a");
rep("[ ] L'intensité augmente");
rep("[x] L'intensité diminue");
rep("[ ] L'intensité reste la même");

quest("Un appareil de 10 Ohms est branché sur 20 Volts. Quelle est l'intensité ? (I = U / R)//a");
rep("[ ] 0.5 Ampère");
rep("[x] 2 Ampères");
rep("[ ] 200 Ampères");

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

quest("Multi02 : Que risque-t-on si on mesure une tension avec le multimètre réglé sur ampèremètre ?//a");
rep("[x] Un court-circuit et la détérioration du multimètre");
rep("[ ] Une mesure plus précise");
rep("[ ] Aucun risque");
aj("images/Multi01.png");

quest("Multi03 : Un voltmètre fait-il partie des fonctions d’un multimètre ?//a");
rep("[x] Oui, un multimètre peut fonctionner comme voltmètre");
rep("[ ] Non, ce sont deux appareils totalement différents");
rep("[ ] Seulement sur les multimètres analogiques");
aj("images/Multi01.png");

quest("Multi04 : Pourquoi ne faut-il jamais mesurer une résistance sur un circuit sous tension ?//a");
rep("[x] Cela peut endommager le multimètre et fausser la mesure");
rep("[ ] Cela améliore la précision");
rep("[ ] Cela permet de mesurer plus vite");
aj("images/Multi01.png");

quest("Multi05 : Pour mesurer un courant, comment doit-on brancher le multimètre ?//a");
rep("[x] En série dans le circuit");
rep("[ ] En parallèle aux bornes du composant");
rep("[ ] Directement sur la prise de terre");
aj("images/Multi01.png");

quest("Multi06 : Quelle borne utilise-t-on généralement avec la borne COM pour mesurer une tension ?//a");
rep("[x] La borne V");
rep("[ ] La borne A");
rep("[ ] La borne Terre");
aj("images/Multi01.png");

quest("Multi07 : Avant de mesurer une tension inconnue, que faut-il faire ?//a");
rep("[x] Choisir le plus grand calibre disponible");
rep("[ ] Régler directement sur le plus petit calibre");
rep("[ ] Débrancher la borne COM");
aj("images/Multi01.png");

quest("Multi08 : Peut-on utiliser le multimètre pour vérifier la continuité d’un fil ?//a");
rep("[x] Oui, avec le mode continuité ou ohmmètre");
rep("[ ] Non, jamais");
rep("[ ] Seulement avec le mode ampèremètre");
aj("images/Multi01.png");

quest("Multi09 : Que signifie OL ou 1 affiché sur certains multimètres en mode ohmmètre ?//a");
rep("[x] La résistance est infinie ou le circuit est ouvert");
rep("[ ] Le circuit est en court-circuit");
rep("[ ] La pile du multimètre est pleine");
aj("images/Multi01.png");

quest("Multi10 : Pourquoi faut-il remettre le cordon rouge sur la borne V après une mesure de courant ?//a");
rep("[x] Pour éviter un court-circuit lors d’une prochaine mesure de tension");
rep("[ ] Pour recharger le multimètre");
rep("[ ] Pour mesurer plus rapidement");
aj("images/Multi01.png");

quest("Multi11 : Que se passe-t-il si le fusible interne du multimètre est grillé ?//a");
rep("[x] La mesure de courant ne fonctionne plus");
rep("[ ] La mesure devient plus précise");
rep("[ ] Le multimètre mesure uniquement la tension");
aj("images/Multi01.png");

quest("Multi12 : Peut-on mesurer directement la tension d’une prise secteur avec n’importe quel réglage ?//a");
rep("[ ] Oui, sans précaution");
rep("[x] Non, il faut choisir le bon mode et un calibre adapté");
rep("[ ] Oui, seulement en mode ohmmètre");
aj("images/Multi01.png");

quest("Multi13 : Pour mesurer une tension (en Volts), comment branche-t-on le multimètre ?//a");
rep("[ ] En série (on coupe le circuit)");
rep("[x] En dérivation / parallèle (aux bornes du composant)");
rep("[ ] On ne le branche pas, on utilise une pince");
aj("images/Multi01.png");

quest("Multi14 : Sur quel mode doit-on régler le multimètre pour mesurer un courant ?//a");
rep("[ ] Voltmètre");
rep("[x] Ampèremètre");
rep("[ ] Ohmmètre");
aj("images/Multi01.png");

quest("Multi15 : Quelle borne est commune à toutes les mesures sur un multimètre ?//a");
rep("[ ] La borne V");
rep("[ ] La borne A");
rep("[x] La borne COM");
aj("images/Multi01.png");

// ====================================================================================
// SECTION : 4eme : Le courant continu
// ====================================================================================

theme("4eme : Courant Continu (DC)");

debut("Le courant fourni par les piles et batteries.");

quest("Quel est le symbole du courant continu ?");
rep("[x] DC (ou un trait droit)");
rep("[ ] AC (ou une vague)");
rep("[ ] Hz");

quest("Dans un circuit en courant continu, les électrons circulent :");
rep("[x] Du pôle négatif vers le pôle positif");
rep("[ ] Du pôle positif vers le pôle négatif");
rep("[ ] Dans les deux sens alternativement");

quest("Laquelle de ces sources fournit du courant continu ?");
rep("[ ] Une prise de courant murale");
rep("[x] Une batterie de voiture");
rep("[ ] Un alternateur de centrale");


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

quest("ARD02 : Quel type de variable utilise-t-on pour stocker un nombre entier (ex : 13) ?//a");
rep("[ ] float");
rep("[x] int");
rep("[ ] char");
rep("[ ] String");

quest("ARD03 : Quel type de variable ne peut prendre que deux états (vrai ou faux) ?//a");
rep("[ ] int");
rep("[x] boolean");
rep("[ ] float");
rep("[ ] byte");

quest("ARD04 : Dans l'instruction \"int led = 13;\", que représente le 13 ?//a");
rep("[ ] Le type de la variable");
rep("[ ] Le nom de la variable");
rep("[x] La valeur assignée à la variable");
rep("[ ] Un commentaire");

quest("ARD05 : Une variable déclarée en dehors de toute fonction (setup ou loop) est dite ://a");
rep("[x] globale, elle est accessible partout dans le programme");
rep("[ ] locale, elle n'existe que dans setup()");
rep("[ ] temporaire, elle est supprimée après 1 seconde");
rep("[ ] constante, elle ne peut jamais changer");

quest("ARD06 : À quoi sert une boucle \"for\" ?//a");
rep("[ ] À tester une condition une seule fois");
rep("[x] À répéter un bloc d'instructions un nombre défini de fois");
rep("[ ] À déclarer une variable");
rep("[ ] À arrêter le programme");

quest("ARD07 : Dans \"for (int i = 0; i < 10; i++)\", combien de fois le bloc sera-t-il exécuté ?//a");
rep("[ ] 9 fois");
rep("[x] 10 fois");
rep("[ ] 11 fois");
rep("[ ] Une seule fois");

quest("ARD08 : Dans une boucle for, que fait généralement l'instruction \"i++\" ?//a");
rep("[ ] Elle remet i à zéro");
rep("[x] Elle incrémente i de 1 à chaque tour de boucle");
rep("[ ] Elle divise i par 2");
rep("[ ] Elle arrête la boucle immédiatement");

quest("ARD09 : À quoi sert une structure \"if\" ?//a");
rep("[ ] À répéter une action plusieurs fois");
rep("[x] À exécuter un bloc d'instructions seulement si une condition est vraie");
rep("[ ] À déclarer une variable globale");
rep("[ ] À définir la vitesse du programme");

quest("ARD10 : En programmation Arduino, quel symbole permet de tester une égalité dans un \"if\" ?//a");
rep("[ ] =");
rep("[x] ==");
rep("[ ] ===");
rep("[ ] !=");

quest("ARD11 : Que permet d'ajouter le mot-clé \"else\" après un \"if\" ?//a");
rep("[x] Un bloc d'instructions exécuté quand la condition du if est fausse");
rep("[ ] Une nouvelle variable");
rep("[ ] Une boucle infinie");
rep("[ ] Un commentaire");

quest("ARD12 : À quoi sert la fonction \"void setup()\" dans un programme Arduino ?//a");
rep("[ ] Elle contient les instructions qui se répètent en boucle");
rep("[x] Elle contient les instructions exécutées une seule fois au démarrage");
rep("[ ] Elle sert à éteindre la carte");
rep("[ ] Elle mesure une tension");

quest("ARD13 : Combien de fois le contenu de \"void setup()\" est-il exécuté après la mise sous tension de la carte ?//a");
rep("[x] Une seule fois");
rep("[ ] En continu, tant que la carte est alimentée");
rep("[ ] 10 fois");
rep("[ ] Jamais");

quest("ARD14 : À quoi sert la fonction \"void loop()\" ?//a");
rep("[ ] Elle configure les broches une seule fois");
rep("[x] Elle contient les instructions qui se répètent indéfiniment");
rep("[ ] Elle déclare les variables globales");
rep("[ ] Elle importe une bibliothèque");

quest("ARD15 : Que se passe-t-il si on oublie d'écrire \"void loop()\" dans un programme Arduino ?//a");
rep("[x] Le programme ne compile pas, une erreur est générée");
rep("[ ] Le programme fonctionne normalement");
rep("[ ] Seul setup() sera ignoré");
rep("[ ] La carte Arduino s'éteint automatiquement");

quest("ARD16 : Quelle fonction permet de définir une broche comme entrée ou comme sortie ?//a");
rep("[ ] digitalWrite()");
rep("[x] pinMode()");
rep("[ ] analogRead()");
rep("[ ] Serial.begin()");

quest("ARD17 : À quoi sert la fonction \"digitalWrite()\" ?//a");
rep("[ ] À lire une tension analogique");
rep("[x] À mettre une broche numérique à l'état HAUT (5V) ou BAS (0V)");
rep("[ ] À définir la vitesse de communication série");
rep("[ ] À déclarer une variable");

quest("ARD18 : À quoi sert la fonction \"digitalRead()\" ?//a");
rep("[x] À lire l'état (HAUT ou BAS) d'une broche numérique");
rep("[ ] À écrire une valeur analogique sur une broche");
rep("[ ] À allumer une LED directement");
rep("[ ] À créer une boucle for");

quest("ARD19 : Entre quelles valeurs se situe le résultat renvoyé par \"analogRead()\" sur un Arduino Uno ?//a");
rep("[ ] Entre 0 et 5");
rep("[ ] Entre 0 et 255");
rep("[x] Entre 0 et 1023");
rep("[ ] Entre -5 et +5");

quest("ARD20 : Entre quelles valeurs se situe le paramètre utilisé par \"analogWrite()\" (signal PWM) ?//a");
rep("[ ] Entre 0 et 1023");
rep("[x] Entre 0 et 255");
rep("[ ] Entre 0 et 5");
rep("[ ] Entre 0 et 100");

quest("ARD21 : À quoi sert la fonction \"delay(1000)\" ?//a");
rep("[ ] Elle répète une instruction 1000 fois");
rep("[x] Elle met le programme en pause pendant 1000 millisecondes (1 seconde)");
rep("[ ] Elle règle la vitesse de communication série à 1000 bauds");
rep("[ ] Elle mesure une tension de 1000 mV");

quest("ARD22 : À quoi sert l'instruction \"Serial.begin(9600);\" placée dans le setup ?//a");
rep("[x] Elle initialise la communication série avec l'ordinateur à 9600 bauds");
rep("[ ] Elle allume une LED connectée à la broche 9600");
rep("[ ] Elle démarre la boucle loop()");
rep("[ ] Elle règle la luminosité d'un écran");

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

quest("ARD24 : Sur une breadboard, à quoi servent les deux rangées latérales marquées + et - ?//a");
rep("[ ] À connecter uniquement les résistances");
rep("[x] Ce sont les rails d'alimentation (masse et tension positive)");
rep("[ ] Elles ne servent à rien, ce sont des repères visuels");
rep("[ ] À mesurer la tension du circuit");

quest("ARD25 : Sur la partie centrale d'une breadboard, comment sont reliés les trous d'une même colonne (5 trous) ?//a");
rep("[x] Ils sont reliés électriquement entre eux");
rep("[ ] Ils sont tous isolés les uns des autres");
rep("[ ] Ils sont reliés uniquement à la masse");
rep("[ ] Ils sont reliés à toute la ligne horizontale");

quest("ARD26 : Pourquoi faut-il toujours placer une résistance en série avec une LED ?//a");
rep("[ ] Pour augmenter la luminosité de la LED");
rep("[x] Pour limiter le courant et éviter de détruire la LED");
rep("[ ] Pour inverser la polarité de la LED");
rep("[ ] Ce n'est pas nécessaire avec un Arduino");

quest("ARD27 : Sur une LED, comment reconnaît-on généralement la patte positive (anode) ?//a");
rep("[x] C'est la patte la plus longue");
rep("[ ] C'est la patte la plus courte");
rep("[ ] Elle est toujours de couleur rouge");
rep("[ ] Les deux pattes sont identiques");

quest("ARD28 : Dans un montage avec un bouton poussoir, à quoi sert une résistance de pull-down ?//a");
rep("[ ] À protéger la LED du circuit");
rep("[x] À garantir un état BAS stable sur la broche quand le bouton n'est pas appuyé");
rep("[ ] À augmenter la vitesse du programme");
rep("[ ] À alimenter le bouton en 5V en permanence");

quest("ARD29 : Que risque-t-on si on relie directement le + et le - de l'alimentation sans composant entre les deux ?//a");
rep("[x] Un court-circuit, pouvant endommager l'Arduino ou l'alimentation");
rep("[ ] Rien de spécial");
rep("[ ] La LED s'allume plus fort");
rep("[ ] Le programme s'arrête automatiquement");

quest("ARD30 : Quelle tension logique est fournie par les broches numériques d'un Arduino Uno lorsqu'elles sont à l'état HAUT ?//a");
rep("[ ] 3.3 V");
rep("[x] 5 V");
rep("[ ] 9 V");
rep("[ ] 12 V");

quest("ARD31 : Reliez chaque grandeur à son unité ://2");
rep("Tension : [Volt]");
rep("Intensité : [Ampère]");
rep("Résistance : [Ohm]");
rep("Puissance : [Watt]");
 
quest("ARD32 : Quelle est l'unité de l'intensité du courant électrique ?//a");
rep("[x] L'ampère (A)");
rep("[ ] Le volt (V)");
rep("[ ] Le watt (W)");
rep("[ ] L'ohm (Ω)");
 
quest("ARD33 : Quelle est l'unité de la tension électrique ?//a");
rep("[ ] L'ampère (A)");
rep("[x] Le volt (V)");
rep("[ ] Le watt (W)");
rep("[ ] L'ohm (Ω)");
 
quest("ARD34 : Quelle est l'unité de la résistance électrique ?//a");
rep("[ ] Le volt (V)");
rep("[ ] L'ampère (A)");
rep("[x] L'ohm (Ω)");
rep("[ ] Le watt (W)");
 
quest("ARD35 : Que représente le courant électrique ?//a");
rep("[ ] Une différence de potentiel");
rep("[x] Un déplacement d'électrons");
rep("[ ] Une résistance au passage du courant");
rep("[ ] Une puissance");
 
quest("ARD36 : Que représente la tension électrique ?//a");
rep("[x] Une différence de potentiel entre deux points");
rep("[ ] Un flux d'électrons");
rep("[ ] Une puissance");
rep("[ ] Une fréquence");
 
quest("ARD37 : Quelle est la loi d'Ohm ?//a");
rep("[ ] U = R / I");
rep("[ ] I = U × R");
rep("[x] U = R × I");
rep("[ ] R = U × I");
 
quest("ARD38 : Dans un circuit, si la résistance augmente, que se passe-t-il pour le courant (à tension constante) ?//a");
rep("[x] Il diminue");
rep("[ ] Il augmente");
rep("[ ] Il reste constant");
rep("[ ] Il disparaît");
 
quest("ARD39 : Une pile fournit quel type de courant ?//a");
rep("[ ] Courant alternatif");
rep("[x] Courant continu");
rep("[ ] Courant variable");
rep("[ ] Courant triphasé");
 
quest("ARD40 : Le courant alternatif (AC) signifie ://a");
rep("[x] Le courant change de sens périodiquement");
rep("[ ] Le courant est constant");
rep("[ ] Le courant est nul");
rep("[ ] Le courant est stocké");
 
quest("ARD41 : Le courant continu (DC) signifie ://a");
rep("[ ] Le courant change de sens");
rep("[x] Le courant circule toujours dans le même sens");
rep("[ ] Le courant est variable");
rep("[ ] Le courant est alternatif");
 
quest("ARD42 : Quel est le rôle d'une résistance dans un circuit ?//a");
rep("[x] Limiter le courant");
rep("[ ] Augmenter la tension");
rep("[ ] Produire du courant");
rep("[ ] Stocker l'énergie");
 
quest("ARD43 : Que se passe-t-il si on met des résistances en série ?//a");
rep("[x] Les résistances s'additionnent");
rep("[ ] Elles diminuent");
rep("[ ] Elles s'annulent");
rep("[ ] Elles restent identiques");
 
quest("ARD44 : Que se passe-t-il si on met des résistances en parallèle ?//a");
rep("[ ] Elles s'additionnent");
rep("[x] La résistance équivalente diminue");
rep("[ ] Elles augmentent");
rep("[ ] Elles deviennent nulles");
 
quest("ARD45 : Une diode laisse passer le courant ://a");
rep("[ ] Dans les deux sens");
rep("[x] Dans un seul sens");
rep("[ ] Aucun sens");
rep("[ ] Seulement en alternatif");
 
quest("ARD46 : Quel est le rôle d'une LED ?//a");
rep("[ ] Stocker de l'énergie");
rep("[ ] Amplifier un signal");
rep("[x] Émettre de la lumière");
rep("[ ] Résister au courant");
 
quest("ARD47 : Pourquoi utilise-t-on une résistance avec une LED ?//a");
rep("[x] Pour limiter le courant et éviter de la griller");
rep("[ ] Pour augmenter la luminosité");
rep("[ ] Pour changer la couleur");
rep("[ ] Pour stocker l'énergie");
 
quest("ARD48 : Une LED RGB permet ://a");
rep("[ ] D'émettre une seule couleur");
rep("[x] De produire plusieurs couleurs");
rep("[ ] De mesurer la tension");
rep("[ ] De stocker des données");
 
quest("ARD49 : Dans une LED RGB, que signifie RGB ?//a");
rep("[ ] Rouge Gris Bleu");
rep("[x] Rouge Vert Bleu");
rep("[ ] Résistance Générale Basse");
rep("[ ] Rotation Génératrice Binaire");
 
quest("ARD50 : Dans un circuit série, le courant est ://a");
rep("[x] Identique partout");
rep("[ ] Différent à chaque endroit");
rep("[ ] Nul");
rep("[ ] Variable uniquement");
 
quest("ARD51 : Dans un circuit parallèle, la tension est ://a");
rep("[x] Identique sur chaque branche");
rep("[ ] Différente partout");
rep("[ ] Nulle");
rep("[ ] Variable uniquement");
 
quest("ARD52 : Que se passe-t-il si une LED est branchée à l'envers ?//a");
rep("[ ] Elle s'allume plus fort");
rep("[ ] Elle explose");
rep("[x] Elle ne s'allume pas");
rep("[ ] Elle change de couleur");
 
quest("ARD53 : Une pile transforme ://a");
rep("[ ] Énergie mécanique en électrique");
rep("[x] Énergie chimique en électrique");
rep("[ ] Énergie électrique en thermique");
rep("[ ] Énergie lumineuse en électrique");
 
quest("ARD54 : Quelle est l'unité de la tension électrique ?//a");
rep("[ ] l'ampère");
rep("[x] le volt");
rep("[ ] l'ohm");
 
quest("ARD55 : Quelle est l'unité de l'intensité du courant ?//a");
rep("[x] l'ampère");
rep("[ ] le watt");
rep("[ ] le volt");
 
quest("ARD56 : À quoi sert un fusible dans un circuit ?//a");
rep("[x] à protéger contre les surintensités");
rep("[ ] à augmenter la tension");
rep("[ ] à stocker l'énergie");
 
quest("ARD57 : Quelle est la formule de base de la loi d'Ohm ?//a");
rep("[ ] U = I + R");
rep("[x] U = R × I");
rep("[ ] P = U × I");
 
quest("ARD58 : Que se passe-t-il si on met deux piles en série ?//a");
rep("[x] la tension augmente");
rep("[ ] le courant diminue toujours");
rep("[ ] la tension reste la même");
 
quest("ARD59 : Quelle est l'unité de la puissance électrique ?//a");
rep("[ ] le volt");
rep("[ ] l'ampère");
rep("[x] le watt");
 
quest("ARD60 : Un court-circuit correspond à ://a");
rep("[x] une résistance très faible dans le circuit");
rep("[ ] une coupure du circuit");
rep("[ ] une tension nulle");
 
quest("ARD61 : À quoi sert la terre dans une installation électrique ?//a");
rep("[x] à protéger les personnes");
rep("[ ] à augmenter la puissance");
rep("[ ] à stocker l'énergie");
 
quest("ARD62 : Que mesure un voltmètre ?//a");
rep("[ ] le courant");
rep("[x] la tension");
rep("[ ] la résistance");
 
quest("ARD63 : En électronique, une diode permet ://a");
rep("[x] de laisser passer le courant dans un seul sens");
rep("[ ] d'augmenter la tension");
rep("[ ] de stocker l'énergie");

// ====================================================================================
// SECTION :  Protections des personnes
// ====================================================================================

theme("Les protections des personnes");

quest("Protection01 : À partir de quelle intensité un courant peut-il devenir dangereux pour l’homme ?://a");
rep("[x] Environ 30 mA");
rep("[ ] 1 A");
rep("[ ] 5 A");
rep("[ ] 230 mA");

quest("Protection02 : Que se passe-t-il lorsqu’une personne touche deux points de potentiels différents ?://a");
rep("[x] Un courant traverse son corps");
rep("[ ] Rien ne se passe");
rep("[ ] La tension disparaît");
rep("[ ] Le courant s’arrête");

quest("Protection03 : Une protection passive sert à ://a");
rep("[x] Limiter l’exposition au danger");
rep("[ ] Couper automatiquement le courant");
rep("[ ] Augmenter la tension");
rep("[ ] Mesurer le courant");

quest("Protection04 : Exemple de protection passive ://a");
rep("[x] Une armoire de confinement");
rep("[ ] Un disjoncteur différentiel");
rep("[ ] Un fusible");
rep("[ ] Un transformateur");

quest("Protection05 : Une protection active sert à ://a");
rep("[x] Détecter et interrompre un danger");
rep("[ ] Isoler mécaniquement");
rep("[ ] Augmenter la puissance");
rep("[ ] Réduire la tension");

quest("Protection06 : Exemple de protection active ://a");
rep("[x] Un disjoncteur différentiel");
rep("[ ] Une armoire électrique");
rep("[ ] Un câble isolé");
rep("[ ] Une prise de terre");

quest("Protection07 : En régime TT, le neutre est ://a");
rep("[x] Relié à la terre");
rep("[ ] Isolé");
rep("[ ] Relié à la phase");
rep("[ ] Supprimé");

quest("Protection08 : Le courant de fuite apparaît lorsque ://a");
rep("[x] Du courant s’échappe de l’installation");
rep("[ ] Le courant est nul");
rep("[ ] La tension disparaît");
rep("[ ] Le neutre est coupé");

quest("Protection09 : En fonctionnement normal, le courant dans la phase est ://a");
rep("[x] Égal au courant dans le neutre");
rep("[ ] Supérieur au neutre");
rep("[ ] Inférieur au neutre");
rep("[ ] Nul");

quest("Protection10 : Le dispositif différentiel mesure ://a");
rep("[x] La différence entre phase et neutre");
rep("[ ] La tension uniquement");
rep("[ ] La puissance");
rep("[ ] La résistance");

quest("Protection11 : Quel élément détecte le courant de fuite ?://a");
rep("[x] Le tore magnétique");
rep("[ ] Le fusible");
rep("[ ] La prise de terre");
rep("[ ] Le transformateur");

quest("Protection12 : Le disjoncteur différentiel coupe le courant en cas de ://a");
rep("[x] Défaut d’isolement");
rep("[ ] Surcharge uniquement");
rep("[ ] Court-circuit uniquement");
rep("[ ] Tension faible");

quest("Protection13 : La formule du courant traversant le corps est ://a");
rep("[x] Ic = Uc / R");
rep("[ ] Ic = Uc × R");
rep("[ ] Ic = R / Uc");
rep("[ ] Ic = Uc²");

quest("Protection14 : La résistance moyenne du corps humain est d’environ ://a");
rep("[x] 1500 ohms");
rep("[ ] 50 ohms");
rep("[ ] 10 000 ohms");
rep("[ ] 230 ohms");

quest("Protection15 : En milieu humide, la résistance du corps est environ ://a");
rep("[x] 500 ohms");
rep("[ ] 1500 ohms");
rep("[ ] 3000 ohms");
rep("[ ] 100 ohms");

quest("Protection16 : Le DDR déclenche généralement à ://a");
rep("[x] 30 mA");
rep("[ ] 1 A");
rep("[ ] 10 A");
rep("[ ] 100 mA");

quest("Protection17 : Le temps de coupure du DDR est environ ://a");
rep("[x] 10 ms");
rep("[ ] 1 s");
rep("[ ] 100 ms");
rep("[ ] 1 ms");

quest("Protection18 : La norme imposée pour les habitations est ://a");
rep("[x] NF C15-100");
rep("[ ] NF C10-100");
rep("[ ] ISO 9001");
rep("[ ] CEI 6000");

quest("Protection19 : Le DDR de 30 mA protège contre ://a");
rep("[x] Contact phase-terre");
rep("[ ] Contact phase-phase");
rep("[ ] Contact phase-neutre");
rep("[ ] Toutes les situations");

quest("Protection20 : Une zone 1 correspond à ://a");
rep("[x] Aucune réaction");
rep("[ ] Arrêt cardiaque");
rep("[ ] Brûlures graves");
rep("[ ] Tétanisation");

quest("Protection21 : Une zone 4 correspond à ://a");
rep("[x] Risque de fibrillation et brûlures");
rep("[ ] Aucun effet");
rep("[ ] Effets légers");
rep("[ ] Aucun danger");

quest("Protection22 : La protection contre les contacts indirects utilise ://a");
rep("[x] DDR + prise de terre");
rep("[ ] Fusible seul");
rep("[ ] Transformateur");
rep("[ ] Disjoncteur thermique");

quest("Protection23 : Les masses métalliques doivent être ://a");
rep("[x] Reliées à la terre");
rep("[ ] Isolées de tout");
rep("[ ] Reliées à la phase");
rep("[ ] Supprimées");

quest("Protection24 : La tension limite UL est de ://a");
rep("[x] 50 V");
rep("[ ] 230 V");
rep("[ ] 100 V");
rep("[ ] 12 V");

quest("Protection25 : Condition de sécurité ://a");
rep("[x] UD ≤ UL");
rep("[ ] UD ≥ UL");
rep("[ ] UD = 0");
rep("[ ] UD > 230 V");

quest("Protection26 : Relation de sécurité avec la terre ://a");
rep("[x] Ra × Id ≤ UL");
rep("[ ] Ra + Id ≥ UL");
rep("[ ] Ra = UL");
rep("[ ] Id = UL");

quest("Protection27 : Type AC correspond à ://a");
rep("[x] Usage classique");
rep("[ ] Usage industriel uniquement");
rep("[ ] Usage médical");
rep("[ ] Usage informatique");

quest("Protection28 : Type A est utilisé pour ://a");
rep("[x] Appareils avec composante continue");
rep("[ ] Lampes simples");
rep("[ ] Câbles");
rep("[ ] Résistances");

quest("Protection29 : Type HI sert à ://a");
rep("[x] Éviter les déclenchements intempestifs");
rep("[ ] Augmenter la tension");
rep("[ ] Réduire la puissance");
rep("[ ] Supprimer la terre");

quest("Protection30 : En cas de défaut, le DDR doit ://a");
rep("[x] Couper rapidement l’alimentation");
rep("[ ] Augmenter le courant");
rep("[ ] Stabiliser la tension");
rep("[ ] Ignorer le défaut");

quest("Protection31 : Cette image représente un : //a");
rep("[x] Contact direct");
rep("[ ] Contact Indirect");
aj("images/contactdirect1.png");

quest("Protection32 : Cette image représente un : //a");
rep("[x] Contact direct");
rep("[ ] Contact Indirect");
aj("images/contactdirect2.png");

quest("Protection33 : Cette image représente un : //a");
rep("[ ] Contact direct");
rep("[x] Contact Indirect");
aj("images/contactindirect1.png");

quest("Protection34 : Cette image représente un : //a");
rep("[ ] Contact direct");
rep("[x] Contact Indirect");
aj("images/contactindirect2.png");


quest("Protection35 : Cette image représente une : //a");
rep("[ ] protection active");
rep("[x] protection passive");
aj("images/protectionpassive.png");

quest("Protection36 : Cette image représente une : //a");
rep("[x] protection active");
rep("[ ] protection passive");
aj("images/protectionactive.png");

quest("Protection37 : Dans quel cas un DDR 30 mA NE protège-t-il PAS une personne ?://a");
rep("[x] Lors d’un contact entre la phase et le neutre");
rep("[ ] Lors d’un contact entre la phase et la terre");
rep("[ ] Lors d’un défaut d’isolement vers la terre");
rep("[ ] Lors d’un courant de fuite vers la terre");

// ====================================================================================
// SECTION : Le cournant Alternatif
// ====================================================================================

theme("Courant Alternatif (AC)");
debut("Le courant du secteur (maison).");

quest("Quel est le symbole du courant alternatif ?//a");
rep("[ ] DC");
rep("[x] AC (ou une sinusoïde ~)");
rep("[ ] + / -");

quest("En France, quelle est la fréquence du courant alternatif domestique ?//a");
rep("[ ] 20 Hz");
rep("[x] 50 Hz");
rep("[ ] 60 Hz");
rep("[ ] 230 Hz");

quest("Comment appelle-t-on la courbe représentative du courant alternatif ?//a");
rep("[ ] Une droite");
rep("[ ] Une parabole");
rep("[x] Une sinusoïde");

// ====================================================================================
// SECTION : Electricité et rôles des appareillages
// ====================================================================================

theme("Les différents appareils électriques");

quest("APP01 : Pour changer le sens de rotation d'un moteur triphasé ://a");
rep("[ ] l'équiper d'un condensateur");
rep("[x] inverser deux phases");
rep("[ ] utiliser le branchement étoile-triangle");
rep("[ ] alimenter en 240 V");
juste("Bien joué ! Un fusible ou un disjoncteur protège le circuit contre les surintensités en coupant le courant en cas de défaut.");
faux("Erreur. La protection contre les surintensités est assurée par un fusible ou un disjoncteur.");

quest("APP02 : La BTA (basse tension), en courant alternatif, correspond aux tensions ://a");
rep("[ ] 500 - 1 000 V");
rep("[ ] 0 - 50 V");
rep("[ ] 50 - 500 V");
rep("[x] 0 - 1 000 V");

quest("APP03 : La caractéristique principale d'un condensateur se mesure en ://a");
rep("[ ] ohm");
rep("[ ] watt");
rep("[x] farad");
rep("[ ] volt");

quest("APP04 : Un moteur électrique triphasé plaqué 380 V et alimenté en 240 V ://a");
rep("[ ] grillera");
rep("[ ] est un moteur à démarrage étoile-triangle");
rep("[ ] tournera en sens inverse");
rep("[x] tournera plus lentement");

quest("APP05 : L'unité de mesure de la puissance est le ://a");
rep("[x] watt (W)");
rep("[ ] ohm (Ω)");

quest("APP06 : Un relais thermique se règle...//a");
rep("[ ] à 0,9 fois l'intensité plaquée sur le moteur");
rep("[x] à 1 fois l'intensité plaquée sur le moteur");
rep("[ ] à 1,1 fois l'intensité plaquée sur le moteur");
rep("[ ] à 1,2 fois l'intensité plaquée sur le moteur");

quest("APP07 : La puissance absorbée d'un moteur triphasé est déterminée par la formule ://a");
rep("[x] P = 3.U.I.cos φ");
rep("[ ] P = 2.U.I.cos φ");
rep("[ ] P = U.I");

quest("APP08 : La puissance absorbée d'une résistance est ://a");
rep("[x] P = U.I");
rep("[ ] P = 3.U.I.cos φ");
rep("[ ] P = 2.U.I.cos φ");

quest("APP09 : La résistance équivalente de trois résistances en série est ://a");
rep("[ ] Réq =1/R1 + 1/R2 + 1/R3");
rep("[x] Réq = R1 + R2 + R3");
rep("[ ] 1/Réq =1/R1 +1/R2 +1/R3");

quest("APP10 : La résistance équivalente de trois résistances en parallèle est ://a");
rep("[ ] Réq =1/R1 + 1/R2 + 1/R3");
rep("[ ] Réq = R1 + R2 + R3");
rep("[x] 1/Réq =1/R1 +1/R2 +1/R3");

quest("APP11 : Une armoire électrique est alimentée par trois phases (3 x 400 V) et un neutre. Donc ://a");
rep("[x] la tension composée est 400 V");
rep("[x] la tension simple est 230 V");
rep("[ ] la tension composée est 230 V");
rep("[ ] la tension simple est 400 V");

quest("APP12 : La loi d'Ohm s'écrit ://a");
rep("[x] U = R . I");
rep("[ ] I = R . U");
rep("[ ] R = U . I");

quest("APP13 : Une surcharge électrique peut être due à ://a");
rep("[ ] deux phases qui se touchent");
rep("[x] un moteur bloqué");
rep("[x] un moteur ralenti par un frottement");
rep("[x] un moteur au démarrage");
rep("[ ] une phase et un neutre qui se touchent");

quest("APP14 : Un court-circuit électrique peut être due à ://a");
rep("[x] deux phases qui se touchent");
rep("[ ] un moteur bloqué");
rep("[x] une phase et un neutre qui se touchent");
rep("[ ] un moteur au démarrage");

quest("APP15 : L'isolement d'un moteur se mesure à l'aide de ://a");
rep("[ ] ampèremètre");
rep("[ ] voltmètre");
rep("[x] mégohmmètre");
rep("[ ] pince-ampèremétrique");

quest("APP16 : L'ohmmètre s'utilise toujours sur un circuit sous tension.//a");
rep("[ ] vrai");
rep("[x] faux");

quest("APP17 : Pour un moteur triphasé, le démarrage étoile-triangle a pour but de ://a");
rep("[x] diminuer le couple de démarrage");
rep("[x] ne pas brusquer le moteur");
rep("[x] diminuer l'intensité du courant de démarrage");
rep("[x] d'éviter l'échauffement au démarrage");

quest("APP18 : Le courant qui se dirige de la charge négative vers la charge positive est le courant ://a");
rep("[ ] magnétique");
rep("[ ] alternatif");
rep("[ ] conventionnel");
rep("[x] électronique");

quest("APP19 : Lorsqu'un courant traverse un fil conducteur, il crée autour de celui-ci ://a");
rep("[ ] une différence de potentiel");
rep("[ ] un électro-aimant");
rep("[x] un champ magnétique");
rep("[ ] un spectre magnétique");

quest("APP20 : Quand deux fils conducteurs sous tension, mais non isolés, sont en contact, il y a ://a");
rep("[ ] un circuit ouvert");
rep("[ ] un coupe-circuit");
rep("[ ] une chute de tension");
rep("[x] un court-circuit");

quest("APP21 : Sur un circuit électrique, la surcharge déclenche ://a");
rep("[ ] un disjoncteur magnétique");
rep("[ ] un disjoncteur différentiel");
rep("[ ] un sectionneur");
rep("[x] un disjoncteur thermique");

quest("APP22 : Sur un circuit électrique, le court-circuit déclenche ://a");
rep("[ ] un sectionneur");
rep("[ ] un disjoncteur thermique");
rep("[x] un disjoncteur magnétique");
rep("[ ] un disjoncteur différentiel");

quest("APP23 : Pour effectuer une mesure, l'ampèremètre se branche en série sur un circuit électrique.//a");
rep("[x] vrai");
rep("[ ] faux");

quest("APP24 : Pour effectuer une mesure, le voltmètre se branche en série sur un circuit électrique.//a");
rep("[ ] vrai");
rep("[x] faux");

quest("APP25 : Sur un contacteur, lorsqu'on alimente la bobine, le contact 13-14...//a");
rep("[ ] s'ouvre");
rep("[x] se ferme");
rep("[ ] reste dans sa position de repos");

quest("APP26 : Un relais thermique protège...//a");
rep("[ ] l'installation des court-circuits");
rep("[ ] un moteur des court-circuits");
rep("[x] un moteur des surcharges");

quest("APP27 : Sur un moteur monophasé, si la résistance entre le commun et l'auxiliaire tend vers l'infini, alors,//a");
rep("[x] le moteur ne démarrera pas");
rep("[ ] la résistance entre le commun et le principal est également nulle");
rep("[ ] le moteur peut démarrer");

quest("APP28 : Sur un moteur monophasé, si la résistance entre la terre et l'auxiliaire tend vers 0 (zéro), alors,//a");
rep("[ ] l'isolement est correct");
rep("[x] il y a un défaut d'isolement");

quest("APP29 : Parmi ces classes de fusibles, laquelle a un temps de fusion plus rapide ://a");
rep("[ ] Classe aM");
rep("[x] Classe uR");

quest("APP30 : Un sectionneur a un pouvoir de coupure ://a");
rep("[ ] Vrai");
rep("[x] Faux");

quest("APP31 : Que risque-t-on si on manœuvre un sectionneur en charge ://a");
rep("[x] Arc électrique et explosion");
rep("[ ] Rien");

quest("APP32 : Un contacteur a un pouvoir de coupure ://a");
rep("[x] Vrai");
rep("[ ] Faux");

quest("APP33 : Un relais thermique n’a pas de pouvoir de coupure ://a");
rep("[x] Vrai");
rep("[ ] Faux");

quest("APP34 : Un disjoncteur différentiel permet de protéger ://a");
rep("[ ] Contre les surcharges");
rep("[x] Contre les défauts d’isolement");

quest("APP35 : Parmi les dispositifs suivants, lequel possède des contacts de précoupure ://a");
rep("[ ] Disjoncteur");
rep("[x] Sectionneur");

quest("APP36 : Quel est l’avantage d’une machine triphasée par rapport à une machine monophasée ://a");
rep("[ ] Une machine triphasée a une puissance 50 % supérieure");
rep("[ ] Une machine triphasée a trois phases");
rep("[x] Une machine triphasée consomme moins de courant");

quest("APP37 : Quel est le composant représenté sur l’image ://a");
rep("[ ] Un contacteur");
rep("[ ] Un relais");
rep("[ ] Un contacteur auxiliaire");

quest("APP38 : À quoi sert le composant représenté sur l’image ://a");
rep("[ ] Il permet de mesurer la température d’un moteur");
rep("[x] Il permet de protéger contre les surcharges");
rep("[ ] Il permet d’augmenter la vitesse d’un moteur");

quest("APP39 : Lorsque je veux tester un appareil dont je ne suis pas sûr qu’il est bien isolé, que dois-je utiliser ://a");
rep("[x] Un transformateur d’isolement");
rep("[ ] Un ensemble fusible + porte-fusible");
rep("[ ] Un relais");

quest("APP40 : Quel est le rôle d’un contacteur tripolaire ://a");
rep("[ ] Protéger le moteur contre les surchauffes");
rep("[ ] Augmenter le rendement du moteur");
rep("[x] Mettre sous tension les enroulements du moteur");

quest("APP41 : Quel est le composant qui permet d’isoler un circuit afin d’effectuer des opérations de maintenance ://a");
rep("[ ] Contacteur auxiliaire");
rep("[x] Sectionneur");
rep("[ ] Disjoncteur");

quest("APP42 : Quel est le rôle d’un relais thermique ://a");
rep("[ ] Protéger le moteur contre les emballements");
rep("[ ] Protéger le moteur contre les courts-circuits");
rep("[x] Protéger le moteur contre les surcharges");

quest("APP43 : Qu’est-ce qu’un transformateur ://a");
rep("[ ] Une machine qui transforme le courant en tension");
rep("[ ] Une machine qui transforme un courant alternatif en courant continu");
rep("[x] Une machine qui transforme une tension alternative U1 en une autre tension alternative U2");

quest("APP44 : Pour tester la bobine d’un contacteur, on utilise ://a");
rep("[ ] Un ampèremètre");
rep("[x] Un ohmètre");

quest("APP45 : L’excitation de la bobine d’un contacteur possédant un contact NO entraîne ://a");
rep("[ ] L’ouverture de celui-ci");
rep("[x] La fermeture de celui-ci");

quest("APP46 : Comment nomme-t-on usuellement un contacteur ://a");
rep("[ ] KS");
rep("[x] KM");
rep("[ ] KA");

quest("APP47 : Comment nomme-t-on usuellement un contacteur auxiliaire ://a");
rep("[ ] KV");
rep("[ ] KM");
rep("[x] KA");

quest("APP48 : Quel composant permet de protéger un moteur contre les courts-circuits ://a");
rep("[ ] Le relais thermique");
rep("[ ] Le contacteur");
rep("[x] Le disjoncteur moteur");
rep("[ ] Le transformateur");

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

quest("APP51 : Dans un schéma électrique, la commande se trouve généralement ://a");
rep("[ ] En bas");
rep("[ ] À gauche");
rep("[x] En haut");
rep("[ ] À droite");

quest("APP52 : Un transformateur élévateur ://a");
rep("[ ] Diminue la tension");
rep("[x] Augmente la tension");
rep("[ ] Ne modifie pas la tension");
rep("[ ] Transforme AC en DC");

quest("APP53 : Sur un moteur triphasé, l’inversion de deux phases provoque ://a");
rep("[ ] L’arrêt instantané");
rep("[ ] L’augmentation du couple");
rep("[x] L’inversion du sens de rotation");
rep("[ ] Une surintensité systématique");

quest("APP54 : Lorsque le relais thermique déclenche ://a");
rep("[ ] Le moteur continue de tourner");
rep("[x] Le contacteur s’ouvre");
rep("[ ] Le disjoncteur saute");
rep("[ ] Rien ne se passe");

quest("APP55 : Le courant alternatif est caractérisé par ://a");
rep("[ ] Une tension constante dans le temps");
rep("[x] Une tension variable périodiquement");
rep("[ ] Une tension nulle en permanence");
rep("[ ] Une tension exclusivement positive");

quest("APP56 : Sur un schéma, la bobine d’un contacteur est représentée par ://a");
rep("[ ] Deux traits parallèles");
rep("[ ] Un rectangle");
rep("[x] Une spirale ou un symbole de bobine");
rep("[ ] Un triangle");

quest("APP57 : Quelle est la valeur de la fréquence du réseau électrique en Europe ://a");
rep("[ ] 230 Hz");
rep("[ ] 60 Hz");
rep("[x] 50 Hz");
rep("[ ] 12 Hz");

quest("APP58 : La fonction principale d’un disjoncteur est ://a");
rep("[ ] Mesurer la tension");
rep("[ ] Mesurer le courant");
rep("[x] Protéger contre les surcharges et les courts-circuits");
rep("[ ] Démarrer un moteur");

quest("APP59 : Dans un câblage industriel, la couleur standard du fil de neutre est ://a");
rep("[ ] Vert/jaune");
rep("[ ] Noir");
rep("[x] Bleu clair");
rep("[ ] Rouge");

quest("APP60 : La valeur de la tension monophasée en Europe est ://a");
rep("[x] 230 V");
rep("[ ] 110 V");
rep("[ ] 400 V");
rep("[ ] 24 V");

quest("APP61 : Comment nomme-t-on usuellement un bornier ://a");
rep("[ ] Y");
rep("[x] X");
rep("[ ] Z");

quest("APP62 : Comment nomme-t-on usuellement un relais thermique ://a");
rep("[ ] R");
rep("[ ] Q");
rep("[x] F");

quest("APP63 : Comment nomme-t-on usuellement un sectionneur ://a");
rep("[ ] F");
rep("[x] Q");
rep("[ ] S");

quest("APP64 : Comment nomme-t-on usuellement un voyant ://a");
rep("[ ] V");
rep("[x] H");
rep("[ ] Y");

quest("APP65 : Quel mode de démarrage est représenté sur l’image ://a");
rep("[ ] Démarrage direct 2 sens de marche");
rep("[ ] Démarrage étoile-triangle");
rep("[ ] Démarrage direct 1 sens de marche");

quest("APP66 : Un voyant est un élément de ://a");
rep("[ ] La partie puissance");
rep("[x] La partie commande");

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

quest("APP71 : Dans le démarrage étoile-triangle, le contacteur de ligne sert à ://a");
rep("[ ] Coupler le moteur en triangle");
rep("[ ] Coupler le moteur en étoile");
rep("[x] Commander le moteur");

quest("APP72 : À quel circuit appartiennent les composants suivants : sectionneur, disjoncteur, relais thermique ://a");
rep("[x] Circuit de puissance");
rep("[ ] Circuit de commande");

quest("APP73 : Parmi les dispositifs suivants, lequel possède des contacts de précoupure ?//a");
rep("[ ] Disjoncteur");
rep("[x] Sectionneur");

quest("APP74 : Quel est le rôle principal d’un sectionneur ://a");
rep("[x] Isoler le circuit électrique en aval");
rep("[ ] Protéger contre les surintensités");
rep("[ ] Protéger les composants électriques contre les surchauffes");

quest("APP75 : Un relais thermique permet de ://a");
rep("[x] Protéger un moteur contre les surchauffes");
rep("[ ] Mesurer la température d’un moteur");

quest("APP76 : Lequel protège un moteur électrique contre les surcharges ://a");
rep("[ ] Sectionneur");
rep("[ ] Contacteur");
rep("[x] Relais thermique");

quest("APP77 : Quel est le composant représenté sur l’image ://a");
rep("[x] Un contacteur");
rep("[ ] Un relais");
rep("[ ] Un disjoncteur magnéto-thermique");
aj("images/APP77.png");

quest("APP78 : À quoi sert le composant représenté sur l’image ://a");
rep("[ ] Il permet de mesurer la température d’un moteur");
rep("[x] Il permet de protéger contre les surcharges");
rep("[ ] Il permet d’augmenter la vitesse d’un moteur");
aj("images/APP78.png");

quest("APP79 : Quel mode de démarrage est représenté sur l’image ://a");
rep("[x] Démarrage direct 2 sens de marche");
rep("[ ] Démarrage étoile-triangle");
rep("[ ] Démarrage direct 1 sens de marche");
aj("images/APP79.png");

quest("APP80 : Quel est le composant électrique représenté sur l'image ?//a");
rep("[ ] Contacteur");
rep("[x] Bloc de contacts auxiliaires");
rep("[ ] Relais");
aj("images/APP80.png");

quest("APP81 : Quel est le composant représenté sur l'image ?//a");
rep("[ ] Capteur photo-électrique");
rep("[x] Fin de course");
rep("[ ] Capteur électromagnétique");
aj("images/APP81.png");

quest("APP82 : Quel est le composant représenté sur l'image ?//a");
rep("[ ] Bloc temporisé à l'enclenchement");
rep("[x] Bloc temporisé au déclenchement");
aj("images/APP82.png");


// ====================================================================================
// SECTION : Les moteurs triphasés
// ====================================================================================

theme("Les Moteurs Triphasés");
debut("Questions sur le fonctionnement et le câblage des moteurs triphasés.");

quest("Quelle est la fonction principale du stator dans un moteur asynchrone ?");
rep("[x] Transformer l'énergie électrique en énergie magnétique");
rep("[ ] Transformer l'énergie magnétique en énergie mécanique");
rep("[ ] Guider l'arbre moteur par rapport à l'ensemble fixe");

quest("Pourquoi le circuit magnétique est-il constitué d'un empilement de tôles feuilletées ?");
rep("[x] Pour limiter les pertes dues aux courants de Foucault");
rep("[ ] Pour augmenter la puissance mécanique");
rep("[ ] Pour faciliter le refroidissement par air");

quest("Sur un réseau 400 V triphasé, comment doit-on raccorder un moteur 230 V / 400 V ?");
rep("[ ] En couplage triangle (Δ)");
rep("[x] En couplage étoile (Y)");
rep("[ ] En raccordement direct monophasé");

quest("Quelle est la formule de la fréquence de rotation (n) du champ tournant ?");
rep("[ ] n = p / f");
rep("[ ] n = U / I");
rep("[x] n = f / p");

quest("Dans un moteur asynchrone, comment appelle-t-on la différence de vitesse entre le champ tournant et le rotor ?");
rep("[ ] Le déphasage");
rep("[x] Le glissement");
rep("[ ] La réluctance");

quest("Que se passe-t-il si l'on inverse deux phases à l'alimentation d'un moteur triphasé ?");
rep("[ ] Le moteur s'arrête immédiatement");
rep("[ ] La puissance utile est doublée");
rep("[x] Le sens de rotation s'inverse immédiatement");

quest("À combien peut s'élever l'intensité de démarrage par rapport au courant nominal ?");
rep("[ ] Elle reste identique");
rep("[ ] Environ 2 fois le courant nominal");
rep("[x] Environ 7 à 8 fois le courant nominal");

quest("Quel dispositif protège spécifiquement le moteur contre les surcharges modérées ?");
rep("[x] Le relais thermique");
rep("[ ] Le condensateur de démarrage");
rep("[ ] Le sectionneur");


quest("Quel est l'avantage principal du démarrage étoile-triangle ?");
rep("[ ] Augmenter le couple de démarrage");
rep("[x] Réduire le courant au moment du démarrage");
rep("[ ] Faire varier la vitesse de rotation");

quest("Que risque un moteur triphasé alimenté par seulement 2 phases au lieu de 3 ?");
rep("[x] Il va caler et risque de griller définitivement");
rep("[ ] Il passera automatiquement en mode monophasé");
rep("[ ] Il tournera plus vite");

// ====================================================================================
// SECTION : Synchrone vs Asynchrone
// ====================================================================================

theme("Synchrone vs Asynchrone");
debut("Différences fondamentales entre les technologies synchrones et asynchrones.");

quest("Quelle est la caractéristique principale du rotor d'un moteur synchrone ?");
rep("[ ] Il est constitué de conducteurs en court-circuit");
rep("[x] Il est constitué d'un aimant permanent ou alimenté en CC");
rep("[ ] Il est toujours en bois");

quest("Dans quel type de moteur la vitesse de rotation est-elle strictement égale à la vitesse du champ tournant ?");
rep("[x] Le moteur synchrone");
rep("[ ] Le moteur asynchrone");
rep("[ ] Le moteur universel");

quest("Un moteur asynchrone monophasé peut-il démarrer seul sans artifice ?");
rep("[x] Non, il ne crée pas de champ tournant initial");
rep("[ ] Oui, mais seulement dans le sens des aiguilles d'une montre");
rep("[ ] Oui, dès la mise sous tension");

quest("À quoi sert le condensateur sur un moteur asynchrone monophasé ?");
rep("[ ] À stocker de l'énergie pour les pannes");
rep("[x] À créer un déphasage pour générer un champ tournant de démarrage");
rep("[ ] À transformer le courant alternatif en continu");

quest("Où utilise-t-on principalement les moteurs à Spires de Frager ?");
rep("[x] Pour les petits appareils comme les ventilateurs ou sèche-cheveux");
rep("[ ] Pour la traction électrique lourde");
rep("[ ] Dans les centrales électriques");

quest("Quel est l'inconvénient majeur d'un moteur à Spires de Frager ?");
rep("[ ] Il est extrêmement bruyant");
rep("[x] Il possède une puissance très faible et un mauvais rendement");
rep("[ ] Il nécessite une maintenance quotidienne");

quest("Quelle est l'application typique d'un petit moteur synchrone monophasé ?");
rep("[x] Les horloges et programmateurs (vitesse constante)");
rep("[ ] Les perceuses à percussion");
rep("[ ] Les compresseurs industriels");

quest("Comment se comporte un moteur synchrone en cas de forte surcharge ?");
rep("[ ] Il glisse de 10%");
rep("[x] Il s'arrête et vibre");
rep("[ ] Il augmente sa vitesse");

quest("Lequel est le plus utilisé en industrie pour sa robustesse et son faible coût ?");
rep("[ ] Le moteur synchrone");
rep("[x] Le moteur asynchrone");
rep("[ ] Le moteur universel");

quest("Peut-on changer le sens de rotation d'un moteur à Spires de Frager ?");
rep("[ ] Oui, via un boîtier électronique");
rep("[ ] Oui, en inversant la fiche de courant");
rep("[x] Non, c'est impossible par construction");

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

quest("CC2 - Quel est le principal usage des moteurs à courant continu de faible puissance ?//a");
rep("[ ] Applications industrielles de haute puissance");
rep("[ ] Alimentation de réseaux électriques");
rep("[ ] Transmission de données");
rep("[ ] Conversion d'énergie solaire");
rep("[x] Applications portatives comme les jouets ou brosses à dents");

quest("CC3 - Quel est le principal inconvénient du moteur à courant continu par rapport aux machines asynchrones ?//a");
rep("[ ] Il ne fonctionne qu’en courant alternatif");
rep("[x] Il est moins robuste");
rep("[ ] Il ne peut pas être réversible");
rep("[ ] Il ne peut pas réguler la vitesse");

quest("CC4 - Quelle est la fonction principale du stator dans un moteur à courant continu à aimant permanent ?//a");
rep("[ ] Supporter le rotor mécaniquement");
rep("[x] Créer un flux magnétique fixe");
rep("[ ] Fournir un courant électrique au rotor");
rep("[ ] Inverser le sens du courant");
rep("[ ] Générer un courant alternatif");

quest("CC5 - Quelle est la conséquence d'une pression insuffisante des balais sur le collecteur ?//a");
rep("[ ] Une meilleure conduction électrique");
rep("[ ] Une réduction de la consommation électrique");
rep("[ ] Une usure plus lente des composants");
rep("[ ] Une augmentation de la vitesse de rotation");
rep("[x] La formation d'arcs électriques et des parasites");

quest("CC6 - Quelle est la principale caractéristique du moteur à courant continu à aimant permanent ?//a");
rep("[ ] Il nécessite une alimentation en courant alternatif");
rep("[x] Il utilise des aimants permanents pour le stator");
rep("[ ] Il fonctionne uniquement avec une excitation à électroaimant");
rep("[ ] Il ne comporte pas de collecteur ni de balais");
rep("[ ] Il ne peut pas être utilisé dans des applications portatives");

quest("CC7 - Quelle relation exprime la puissance mécanique en fonction du couple et de la vitesse de rotation ?//a");
rep("[ ] P = V × I");
rep("[ ] P = R × I²");
rep("[ ] P = U × I");
rep("[ ] P = N × Ø");
rep("[x] P = C × ω");

quest("CC8 - Dans un moteur à courant continu à excitation, que peut faire le moteur en mode générateur ?//a");
rep("[ ] Fonctionner sans alimentation extérieure");
rep("[x] Restituer de l’énergie au réseau");
rep("[ ] Ne pas fonctionner en mode générateur");
rep("[ ] Produire un courant alternatif");
rep("[ ] Consommer de l’énergie uniquement");

quest("CC9 - Quel est le rôle du rotor dans un moteur à courant continu ?//a");
rep("[ ] Il sert uniquement de support mécanique");
rep("[x] Il comporte des bobinages qui créent le champ magnétique");
rep("[ ] Il fixe le stator");
rep("[ ] Il ne participe pas au fonctionnement électrique");
rep("[ ] Il génère le flux magnétique fixe");

quest("CC10 - Quel est l'avantage principal du moteur à courant continu avec variateur électronique ?//a");
rep("[ ] Il ne produit pas de parasites électriques");
rep("[ ] Il est plus robuste que les moteurs asynchrones");
rep("[x] Il offre une large plage de variation de vitesse");
rep("[ ] Il fonctionne sans alimentation électrique");
rep("[ ] Il ne nécessite pas d'entretien");

quest("CC11 - Quelle est la relation correcte entre la tension appliquée au moteur à courant continu et sa vitesse de rotation ?//a");
rep("[ ] La tension n’a aucun effet sur la vitesse");
rep("[ ] Plus la tension est élevée, plus le couple diminue systématiquement");
rep("[x] Une augmentation de la tension entraîne une augmentation de la vitesse de rotation");
rep("[ ] Une baisse de la tension fait augmenter la vitesse");
rep("[ ] La tension ne sert qu’à alimenter les balais et n’influence pas le moteur");

quest("CC12 - Pourquoi un moteur à courant continu possède-t-il un couple de démarrage élevé ?//a");
rep("[ ] Parce que la tension est automatiquement multipliée au démarrage");
rep("[ ] Parce que le stator produit un flux magnétique variable");
rep("[x] Parce que le courant dans l’induit est élevé à basse vitesse");
rep("[ ] Parce que le collecteur supprime totalement les pertes électriques");
rep("[ ] Parce que la vitesse de rotation est maximale au démarrage");

quest("CC13 - Quel est le rôle principal du collecteur dans un moteur à courant continu ?//a");
rep("[ ] Diminuer la résistance de l’induit");
rep("[x] Assurer la commutation du courant entre les bobines du rotor");
rep("[ ] Réguler la vitesse automatiquement");
rep("[ ] Alimenter directement le stator");
rep("[ ] Transformer le courant continu en courant alternatif");

quest("CC14 - Quelle action permet de changer le sens de rotation d’un moteur à courant continu ?//a");
rep("[ ] Changer uniquement la position du stator");
rep("[ ] Inverser les polarités du collecteur");
rep("[ ] Réduire la tension d’alimentation");
rep("[ ] Modifier la fréquence d'alimentation");
rep("[x] Inverser la polarité de l’alimentation du rotor (ou de l’induit)");

quest("CC15 - Quelle est l’influence de la charge mécanique sur la vitesse d’un moteur à courant continu ?//a");
rep("[x] Une augmentation de la charge tend à diminuer la vitesse");
rep("[ ] Une augmentation de la charge augmente la vitesse");
rep("[ ] La charge n’a aucun effet sur la vitesse");
rep("[ ] La charge modifie seulement la tension, pas la vitesse");
rep("[ ] La charge fait varier uniquement la direction du flux magnétique");

quest("CC16 - Pourquoi doit-on entretenir régulièrement les balais d’un moteur à courant continu ?//a");
rep("[ ] Pour augmenter la tension fournie au moteur");
rep("[ ] Pour empêcher le moteur de fonctionner à vide");
rep("[x] Pour limiter l’usure, les arcs électriques et garantir une bonne conduction");
rep("[ ] Pour éliminer le flux magnétique du stator");
rep("[ ] Pour éviter que le moteur tourne trop vite");

quest("CC17 - Dans un moteur à courant continu, que se passe-t-il lorsque la vitesse augmente ?//a");
rep("[ ] Le courant dans l’induit augmente systématiquement");
rep("[ ] Le couple augmente proportionnellement");
rep("[ ] La tension d’alimentation diminue automatiquement");
rep("[ ] Le flux magnétique du stator devient variable");
rep("[x] La force contre-électromotrice (f.c.é.m) augmente");

quest("CC18 - Lorsqu’un moteur à courant continu est bloqué mécaniquement (rotor immobile), que se passe-t-il ?//a");
rep("[ ] La force contre-électromotrice augmente fortement");
rep("[ ] Le moteur continue à tourner à faible vitesse");
rep("[ ] Le couple devient nul et la température diminue");
rep("[x] Le courant dans l’induit devient très élevé et risque d’endommager le moteur");
rep("[ ] Le moteur génère spontanément du courant");

quest("CC19 - Pourquoi appelle-t-on un moteur 'universel' ?//a");
rep("[x] Car il peut fonctionner en courant continu et alternatif");
rep("[ ] Car il possède toutes les protections intégrées");
rep("[ ] Parce qu'il est vendu partout dans le monde");

quest("CC20 - Quel composant est responsable de l'inversion du courant dans les bobines d'un moteur CC classique ?//a");
rep("[ ] Le roulement à billes");
rep("[ ] Le stator");
rep("[x] Le collecteur et les balais");

quest("CC21 - Quelle est la formule de la force contre-électromotrice (E') d'un moteur CC ?//a");
rep("[ ] E' = U + RI");
rep("[ ] E' = P / I");
rep("[x] E' = U - RI");

quest("CC22 - Quel est le principal inconvénient des moteurs CC à balais ?//a");
rep("[ ] Ils sont trop silencieux");
rep("[x] L'usure des balais nécessite un entretien régulier");
rep("[ ] Ils ne peuvent pas varier de vitesse");

quest("CC23 - Quelle est la particularité d'un moteur 'Brushless' ?//a");
rep("[x] Il n'a pas de collecteur ni de balais (commutation électronique)");
rep("[ ] Il utilise des balais en or");
rep("[ ] Il fonctionne sans électricité");

quest("CC24 - Dans un moteur Brushless, quel élément est généralement le rotor ?//a");
rep("[x] Un ou plusieurs aimants permanents");
rep("[ ] Un noyau de fer doux uniquement");
rep("[ ] Une bobine de cuivre");

quest("CC25 - À quoi servent les capteurs à effet Hall dans un moteur Brushless ?//a");
rep("[ ] À mesurer la température");
rep("[x] À connaître la position du rotor pour piloter les bobines");
rep("[ ] À protéger contre les courts-circuits");

quest("CC26 - Quel type de moteur offre la plus grande précision pour le positionnement (ex: imprimante) ?//a");
rep("[ ] Le moteur asynchrone");
rep("[x] Le moteur pas à pas");
rep("[ ] Le moteur universel");

quest("CC27 - Que se passe-t-il si un moteur CC est bloqué mécaniquement alors qu'il est sous tension ?//a");
rep("[ ] La tension s'annule");
rep("[x] Le courant devient très élevé et risque d'endommager le moteur");
rep("[ ] Il passe en mode générateur");

quest("CC28 - Comment varie la vitesse d'un moteur universel ?//a");
rep("[ ] Elle ne dépend que du nombre de pôles");
rep("[ ] Elle est fixe à 3000 tr/min");
rep("[x] Elle est proportionnelle à la tension d'alimentation");

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

quest("TRI02 : Quelle est la tension entre phase et neutre dans un réseau triphasé 230/400 V ?//a");
rep("[x] 230 V");
rep("[ ] 400 V");
rep("[ ] 690 V");
rep("[ ] 110 V");
aj("images/TRI1.png");

quest("TRI03 : Quelle est la tension entre deux phases dans un réseau triphasé 230/400 V ?//a");
rep("[ ] 230 V");
rep("[x] 400 V");
rep("[ ] 500 V");
rep("[ ] 24 V");
aj("images/TRI1.png");

quest("TRI04 : Dans un moteur triphasé, pour changer le sens de rotation, il faut ://a");
rep("[x] Inverser deux phases");
rep("[ ] Ajouter un fusible");
rep("[ ] Supprimer le neutre");
rep("[ ] Ajouter une résistance");
aj("images/TRI1.png");

quest("TRI05 : Quel appareil permet de protéger un moteur triphasé contre les surcharges ?//a");
rep("[x] Le relais thermique");
rep("[ ] Le contacteur");
rep("[ ] L’interrupteur");
rep("[ ] Le transformateur");
aj("images/TRI1.png");

quest("TRI06 : Le couplage étoile est représenté par le symbole ://a");
rep("[x] Y");
rep("[ ] Δ");
rep("[ ] N");
rep("[ ] T");
aj("images/TRI1.png");

quest("TRI07 : Le couplage triangle est représenté par le symbole ://a");
rep("[ ] Y");
rep("[x] Δ");
rep("[ ] X");
rep("[ ] N");
aj("images/TRI1.png");

quest("TRI08 : Quel est l’avantage principal du courant triphasé pour les moteurs ?//a");
rep("[x] Il permet un démarrage plus facile et un meilleur rendement");
rep("[ ] Il supprime le besoin de protection");
rep("[ ] Il réduit la tension à 12 V");
rep("[ ] Il fonctionne sans alimentation");
aj("images/TRI1.png");

quest("TRI09 : Dans un réseau triphasé équilibré, les trois tensions sont décalées de ://a");
rep("[ ] 60°");
rep("[ ] 90°");
rep("[x] 120°");
rep("[ ] 180°");
aj("images/TRI1.png");

quest("TRI10 : Quel appareil permet de commander la mise en marche d’un moteur triphasé ?//a");
rep("[x] Le contacteur");
rep("[ ] Le fusible");
rep("[ ] Le transformateur");
rep("[ ] Le sectionneur");
aj("images/TRI1.png");

quest("TRI11 : Le neutre est généralement de couleur ://a");
rep("[x] Bleu");
rep("[ ] Vert");
rep("[ ] Rouge");
rep("[ ] Noir");
aj("images/TRI1.png");

quest("TRI12 : Le conducteur de protection (terre) est de couleur ://a");
rep("[x] Vert/jaune");
rep("[ ] Bleu");
rep("[ ] Rouge");
rep("[ ] Noir");
aj("images/TRI1.png");

quest("TRI13 : Quel couplage est utilisé pour un moteur 230/400 V alimenté en 400 V ?//a");
rep("[x] Étoile");
rep("[ ] Triangle");
rep("[ ] Série");
rep("[ ] Parallèle");
aj("images/TRI1.png");

quest("TRI14 : Quel couplage est utilisé pour un moteur 230/400 V alimenté en 230 V triphasé ?//a");
rep("[ ] Étoile");
rep("[x] Triangle");
rep("[ ] Mixte");
rep("[ ] Simple");
aj("images/TRI1.png");

quest("TRI15 : Un moteur triphasé possède généralement combien de bornes de raccordement ?//a");
rep("[x] 6 bornes");
rep("[ ] 2 bornes");
rep("[ ] 3 bornes");
rep("[ ] 9 bornes");
aj("images/TRI1.png");

quest("TRI16 : Quel appareil coupe automatiquement en cas de court-circuit ?//a");
rep("[x] Le disjoncteur");
rep("[ ] Le contacteur");
rep("[ ] Le relais thermique");
rep("[ ] Le voltmètre");
aj("images/TRI1.png");

quest("TRI17 : Le relais thermique protège principalement contre ://a");
rep("[x] Les surcharges");
rep("[ ] Les courts-circuits");
rep("[ ] Les fuites à la terre");
rep("[ ] Les baisses de tension");
aj("images/TRI1.png");

quest("TRI18 : Que mesure un ampèremètre ?//a");
rep("[x] L’intensité du courant");
rep("[ ] La tension");
rep("[ ] La puissance");
rep("[ ] La fréquence");
aj("images/TRI1.png");

quest("TRI19 : Que mesure un voltmètre ?//a");
rep("[x] La tension");
rep("[ ] L’intensité");
rep("[ ] La résistance");
rep("[ ] La puissance");
aj("images/TRI1.png");

quest("TRI20 : La fréquence standard du réseau triphasé en Europe est de ://a");
rep("[ ] 25 Hz");
rep("[x] 50 Hz");
rep("[ ] 60 Hz");
rep("[ ] 100 Hz");
aj("images/TRI1.png");

// ====================================================================================
// SECTION : La pneumatique
// ====================================================================================
theme("La pneumatique");

quest("PNEU1 : Ce vérin est ://a");
rep("[x] simple effet");
rep("[ ] double effet");
aj("images/PNEU1.png");

quest("PNEU2 : Ce symbole représente un réducteur de débit ://a");
rep("[ ] unidirectionnel");
rep("[x] bidirectionnel");
aj("images/PNEU2.png");

quest("PNEU3 : Ce symbole représente ://a");
rep("[x] un silencieux");
rep("[ ] une arrivée d'air comprimé");
rep("[ ] un filtre");
rep("[ ] un manomètre");
rep("[ ] un graisseur d'air");
rep("[ ] un manodétendeur réglable");
aj("images/PNEU3.png");

quest("PNEU4 : Ce symbole représente un distributeur ://a");
rep("[ ] 2 voies - 3 orifices");
rep("[ ] 2 voies - 4 orifices");
rep("[ ] 2 voies - 5 orifices");
rep("[x] 3 voies - 4 orifices");
aj("images/PNEU4.png");

quest("PNEU5 : Ce symbole représente un distributeur ://a");
rep("[ ] monostable (à simple pilotage)");
rep("[x] bistable (à double pilotage)");
aj("images/PNEU5.png");

quest("PNEU6 : Ce vérin est ://a");
rep("[ ] simple effet");
rep("[x] double effet");
aj("images/PNEU6.png");

quest("PNEU7 : Ce symbole représente ://a");
rep("[ ] un silencieux");
rep("[ ] une arrivée d'air comprimé");
rep("[ ] un filtre");
rep("[ ] un manomètre");
rep("[ ] un graisseur d'air");
rep("[x] un manodétendeur réglable");
aj("images/PNEU7.png");

quest("PNEU8 : Ce symbole représente un vérin ://a");
rep("[x] simple effet");
rep("[ ] double effet");
aj("images/PNEU8.png");

quest("PNEU9 : Ce symbole représente un distributeur ://a");
rep("[ ] 2 voies - 3 orifices");
rep("[x] 2 voies - 4 orifices");
rep("[ ] 2 voies - 5 orifices");
rep("[ ] 3 voies - 5 orifices");
aj("images/PNEU9.png");

quest("PNEU10 : Ce symbole représente ://a");
rep("[ ] un silencieux");
rep("[x] une arrivée d'air comprimé");
rep("[ ] un filtre");
rep("[ ] un manomètre");
rep("[ ] un graisseur d'air");
rep("[ ] un manodétendeur réglable");
aj("images/PNEU10.png");

quest("PNEU11 : Ce symbole représente un distributeur ://a");
rep("[ ] 2 voies - 3 orifices");
rep("[ ] 2 voies - 4 orifices");
rep("[x] 2 voies - 5 orifices");
rep("[ ] 3 voies - 5 orifices");
aj("images/PNEU11.png");

quest("PNEU12 : Ce symbole représente un réducteur de débit ://a");
rep("[x] unidirectionnel");
rep("[ ] bidirectionnel");
aj("images/PNEU12.png");

quest("PNEU13 : Ce symbole représente ://a");
rep("[ ] un silencieux");
rep("[ ] une arrivée d'air comprimé");
rep("[ ] un filtre");
rep("[x] un manomètre");
rep("[ ] un graisseur d'air");
rep("[ ] un manodétendeur réglable");
aj("images/PNEU13.png");

quest("PNEU14 : Ce symbole représente un distributeur ://a");
rep("[ ] à commande pneumatique");
rep("[x] à commande électro - pneumatique");
aj("images/PNEU14.png");

quest("PNEU15 : Ce symbole représente un vérin ://a");
rep("[ ] simple effet");
rep("[x] double effet");
aj("images/PNEU15.png");

quest("PNEU16 : Ce symbole représente un distributeur ://a");
rep("[x] à commande pneumatique");
rep("[ ] à commande électro - pneumatique");
aj("images/PNEU16.png");

quest("PNEU17 : Ce symbole représente ://a");
rep("[ ] un silencieux");
rep("[ ] une arrivée d'air comprimé");
rep("[x] un filtre");
rep("[ ] un manomètre");
rep("[ ] un graisseur d'air");
rep("[ ] un manodétendeur réglable");
aj("images/PNEU17.png");

quest("PNEU18 : Ce symbole représente ://a");
rep("[ ] un silencieux");
rep("[ ] une arrivée d'air comprimé");
rep("[ ] un filtre");
rep("[ ] un manomètre");
rep("[x] un graisseur d'air");
rep("[ ] un manodétendeur réglable");
aj("images/PNEU18.png");

quest("PNEU19 : Ce symbole représente un distributeur ://a");
rep("[x] monostable (à simple pilotage)");
rep("[ ] bistable (à double pilotage)");
aj("images/PNEU19.png");

quest("PNEU20 : Ce symbole représente un distributeur ://a");
rep("[x] 2 voies - 3 orifices");
rep("[ ] 2 voies - 4 orifices");
rep("[ ] 2 voies - 5 orifices");
rep("[ ] 3 voies - 5 orifices");
aj("images/PNEU20.png");

quest("PNEU21 : En Pneumatique, NO signifie que l'air comprimé.... Mais en électricité NO signifie ://a");
rep("[x] Que l'air et le courant passe ");
rep("[ ] Que l'air ne passe pas met que le courant ne passe pas");
rep("[ ] Que l'air passe mais le courant ne passe pas ");
rep("[ ] Que l'air ne passe pas mais le courant passe ");


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

quest("electronique2 - À quoi sert la fonction void setup() dans Arduino ?://a");
rep("[ ] À répéter le code en boucle");
rep("[x] À initialiser le programme (une seule fois)");
rep("[ ] À arrêter le programme");
rep("[ ] À lire les capteurs");

quest("electronique3 - À quoi sert la fonction void loop() dans Arduino ?://a");
rep("[ ] À s’exécuter une seule fois");
rep("[x] À répéter le programme en continu");
rep("[ ] À stocker des variables");
rep("[ ] À compiler le code");

quest("electronique4 - Que fait une boucle for ?://a");
rep("[ ] Exécute une condition une fois");
rep("[x] Répète une action un nombre défini de fois");
rep("[ ] Arrête le programme");
rep("[ ] Crée une variable");

quest("electronique5 - Que permet une structure if ?://a");
rep("[ ] Répéter une action");
rep("[x] Tester une condition");
rep("[ ] Créer une boucle infinie");
rep("[ ] Déclarer une variable");

quest("electronique6 - Que signifie une condition if (x > 5) ?://a");
rep("[ ] x est égal à 5");
rep("[x] x est supérieur à 5");
rep("[ ] x est inférieur à 5");
rep("[ ] x vaut toujours 5");

quest("electronique7 - Combien de broches possède généralement une LED RGB ?://a");
rep("[ ] 2");
rep("[ ] 3");
rep("[x] 4");
rep("[ ] 5");

quest("electronique8 - Que signifie une boucle infinie ?://a");
rep("[ ] Une boucle qui s’arrête automatiquement");
rep("[x] Une boucle qui ne s’arrête jamais");
rep("[ ] Une boucle exécutée une fois");
rep("[ ] Une boucle inutile");

quest("electronique9 - Quelle est l’unité de la tension électrique ?");
rep("[ ] l’ampère");
rep("[x] le volt");
rep("[ ] l’ohm");

quest("electronique10 - Quelle est l’unité de l’intensité du courant ?");
rep("[x] l’ampère");
rep("[ ] le watt");
rep("[ ] le volt");

quest("electronique11 - À quoi sert un fusible dans un circuit ?");
rep("[x] à protéger contre les surintensités");
rep("[ ] à augmenter la tension");
rep("[ ] à stocker l’énergie");

quest("electronique12 - Que se passe-t-il si un circuit est ouvert ?");
rep("[ ] le courant augmente");
rep("[x] le courant ne circule plus");
rep("[ ] la tension disparaît");

quest("electronique13 - Quel matériau est un bon conducteur électrique ?");
rep("[ ] le plastique");
rep("[x] le cuivre");
rep("[ ] le bois");

quest("electronique14 - Quelle est la formule de base de la loi d’Ohm ?");
rep("[ ] U = I + R");
rep("[x] U = R × I");
rep("[ ] P = U × I");

quest("electronique15 - Que fait un interrupteur dans un circuit ?");
rep("[ ] il augmente le courant");
rep("[x] il ouvre ou ferme le circuit");
rep("[ ] il transforme la tension");

quest("electronique16 - Que se passe-t-il si on met deux piles en série ?");
rep("[x] la tension augmente");
rep("[ ] le courant diminue toujours");
rep("[ ] la tension reste la même");

quest("electronique17 - Quelle est l’unité de la puissance électrique ?");
rep("[ ] le volt");
rep("[ ] l’ampère");
rep("[x] le watt");

quest("electronique18 - Un court-circuit correspond à :");
rep("[x] une résistance très faible dans le circuit");
rep("[ ] une coupure du circuit");
rep("[ ] une tension nulle");

quest("electronique19 - Que se passe-t-il si on touche un fil sous tension ?");
rep("[ ] rien ne se passe");
rep("[x] il y a un risque d’électrocution");
rep("[ ] le courant s’arrête");

quest("electronique20- Quel composant permet de stocker de l’énergie électrique ?");
rep("[ ] une résistance");
rep("[x] une batterie");
rep("[ ] un interrupteur");

quest("electronique21- En mécanique, à quoi sert un levier ?");
rep("[x] à multiplier une force");
rep("[ ] à réduire la vitesse");
rep("[ ] à stocker de l’électricité");

quest("electronique22 - En électronique, une diode permet :");
rep("[x] de laisser passer le courant dans un seul sens");
rep("[ ] d’augmenter la tension");
rep("[ ] de stocker l’énergie");

quest("electronique23 - Si la résistance augmente dans un circuit (tension constante), que fait le courant ?");
rep("[ ] il augmente");
rep("[x] il diminue");
rep("[ ] il ne change pas");

quest("electronique24 - À quoi sert la terre dans une installation électrique ?");
rep("[x] à protéger les personnes");
rep("[ ] à augmenter la puissance");
rep("[ ] à stocker l’énergie");

quest("electronique25 - Une lampe qui ne s’allume pas peut être due à :");
rep("[x] une ampoule grillée");
rep("[ ] une tension trop élevée uniquement");
rep("[ ] un excès de courant utile");

quest("electronique26 - En mécanique, la vitesse est :");
rep("[x] une distance parcourue par unité de temps");
rep("[ ] une force appliquée");
rep("[ ] une énergie stockée");

quest("electronique27 - Que mesure un voltmètre ?");
rep("[ ] le courant");
rep("[x] la tension");
rep("[ ] la résistance");

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

quest("P002 - Surchauffe faible et sous-refroidissement faible sont les symptômes de :");
rep("[ ] clapet de compresseur cassé");
rep("[ ] excès de fluide frigorigène");
rep("[ ] filtre à l'aspiration bouché");
rep("[x] détendeur trop ouvert");

quest("P003 - BP normale à légèrement haute et HP haute :");
rep("[ ] excès de fluide frigorigène");
rep("[ ] présence d'incondensable");
rep("[x] les deux réponses");

quest("P004 - Les symptômes pour un manque de fluide frigorigène sont :");
rep("[x] surchauffe élevée et sous-refroidissement faible");
rep("[ ] surchauffe faible et sous-refroidissement élevé");
rep("[ ] surchauffe faible et sous-refroidissement faible");
rep("[ ] surchauffe élevée et sous-refroidissement élevée");

quest("P005 - Les symptômes pour un ventilateur de l'évaporateur en panne sont :");
rep("[ ] BP haute");
rep("[x] BP faible");
rep("[ ] HP haute");
rep("[ ] HP faible");

quest("P006 - La présence d'incondensable dans un circuit frigorifique génère :");
rep("[x] une augmentation de la HP");
rep("[ ] une augmentation de la BP");
rep("[ ] une diminution de la BP");
rep("[ ] une augmentation de la surchauffe");

quest("P007 - Un sous-refroidissement qui augmente génère :");
rep("[ ] pas de changement de la production frigorifique");
rep("[x] une augmentation de la production frigorifique");
rep("[ ] une diminution de la production frigorifique");
rep("[ ] une augmentation de la surchauffe");

quest("P008 - La surchauffe est la différence entre :");
rep("[ ] température au bulbe et HP");
rep("[ ] BP et HP");
rep("[x] température au bulbe et BP");
rep("[ ] température d'aspiration et BP");

quest("P009 - Le sous-refroidissement est la différence entre :");
rep("[ ] température de refoulement et HP");
rep("[x] température sortie condenseur et HP");
rep("[ ] BP et HP");
rep("[ ] température au bulbe et BP");

quest("P010 - Le ventilateur en panne d'un condenseur à air provoque :");
rep("[x] une augmentation de la HP");
rep("[x] une augmentation du taux de compression");
rep("[ ] une augmentation du sous-refroidissement");

quest("P011 - La prise en glace d'un évaporateur à air peut être due à :");
rep("[x] BP faible");
rep("[x] système de dégivrage défectueux");
rep("[x] manque de débit d'air à l'évaporateur");
rep("[x] humidité dans la chambre froide");

quest("P012 - Un pompage du détendeur peut être dû à :");
rep("[x] détendeur trop puissant");
rep("[ ] manque de fluide dans l'installation");
rep("[ ] excès de fluide dans l'installation");
rep("[x] détendeur trop ouvert");

quest("P013 - À surchauffe trop élevée correspond, sans aucun doute, à :");
rep("[ ] détendeur trop ouvert");
rep("[ ] excès de fluide dans l'installation");
rep("[x] on ne peut pas diagnostiquer précisément");
rep("[ ] détendeur trop fermé");

quest("P014 - Sur un détendeur, si le bulbe est percé :");
rep("[x] le détendeur se ferme");
rep("[ ] tout le fluide de l'installation peut être perdu");
rep("[ ] le détendeur s'ouvre");
rep("[ ] excès de fluide dans l'installation");

quest("P015 - Des incondensables dans un circuit frigorifique provoque :");
rep("[ ] diminution de la consommation électrique du compresseur");
rep("[ ] augmentation de la surchauffe");
rep("[x] augmentation HP");
rep("[x] augmentation température de refoulement compresseur");

quest("P016 - Des incondensables dans un circuit frigorifique provoque :");
rep("[ ] augmentation de la puissance frigorifique");
rep("[x] augmentation de la consommation électrique du compresseur");
rep("[ ] diminution de la surchauffe");
rep("[x] augmentation de la température de condensation");

quest("P017 - Un excès de fluide dans un circuit frigorifique provoque :");
rep("[ ] augmentation de la surchauffe");
rep("[x] augmentation HP");
rep("[ ] diminution de la consommation électrique du compresseur");
rep("[x] augmentation température de refoulement compresseur");

quest("P018 - Un excès de fluide dans un circuit frigorifique provoque :");
rep("[x] augmentation de la consommation électrique du compresseur");
rep("[x] augmentation de la puissance frigorifique");
rep("[ ] diminution de la surchauffe");
rep("[ ] augmentation de la température de condensation");

quest("P019 - Un manque de fluide dans un circuit frigorifique provoque :");
rep("[x] diminution de la température d'évaporation");
rep("[x] surchauffe importante");
rep("[x] diminution de la température de condensation");
rep("[ ] sous-refroidissement élevé");

quest("P020 - Un manque de fluide dans un circuit frigorifique provoque :");
rep("[ ] surchauffe faible");
rep("[x] diminution de la BP");
rep("[x] sous-refroidissement faible");
rep("[x] puissance frigorifique faible");

quest("P021 - Un condenseur à air encrassé provoque :");
rep("[ ] surchauffe élevée");
rep("[x] HP élevée");
rep("[x] diminution du Δt sur l'air (temp. sortie d'air - temp. entrée d'air)");
rep("[x] diminution de la puissance frigorifique");

quest("P022 - Voici une installation au R22 et les mesures suivantes (points de mesure entre crochets). BP : -8 °C et HP : 35 °C. [5] : 31 °C et [12] : 0 °C. Qu'en déduisez-vous ?");
rep("[x] sous-refroidissement correcte");
rep("[ ] surchauffe trop élevée");
rep("[ ] sous-refroidissement trop faible");
rep("[x] surchauffe correcte");
aj("images/p022.png");

quest("P023 - Le sous-refroidissement donne une indication sur :");
rep("[ ] la nature du fluide frigorigène");
rep("[x] la charge en fluide frigorigène");
rep("[ ] le réglage du détendeur");

quest("P024 - Avec une installation au R134a en fonctionnement normal, la température d'entrée d'air au condenseur est de 20 °C, on aura alors environ :");
rep("[ ] HP de 12 bar");
rep("[x] HP de 8 bar");
rep("[ ] HP de 14 bar");

quest("P025 - Quelle zone n'appartient pas à l'évaporateur :");
rep("[ ] la surchauffe");
rep("[ ] l'évaporation");
rep("[x] la désurchauffe");

quest("P026 - En fonctionnement normal, la surchauffe doit être comprise entre :");
rep("[x] 5 et 8 °C");
rep("[ ] 0 et 4 °C");
rep("[ ] 10 et 15 °C");

quest("P027 - La valeur de la surchauffe dépend du fluide utilisé :");
rep("[ ] vrai");
rep("[x] faux");

quest("P028 - Si la surchauffe est trop grande, alors on aura :");
rep("[x] une mauvaise puissance frigorifique");
rep("[ ] une BP élevée");
rep("[ ] des risques de coup de liquide");

quest("P029 - Si la surchauffe est trop grande, on risque :");
rep("[x] d'avoir une température de refoulement trop élevée");
rep("[ ] d'avoir une prédétente");
rep("[ ] d'abimer le détendeur");

quest("P030 - L'ensemble de l'installation est bien réglé, sauf la surchauffe qui est trop faible. Alors je ne pourrais jamais avoir :");
rep("[x] une BP faible");
rep("[ ] une mauvaise puissance frigorifique");
rep("[ ] des coups de liquide");

quest("P031 - Si la BP diminue, alors :");
rep("[ ] on piège moins d'eau sur l'évaporateur");
rep("[x] l'humidité relative de la chambre froide diminue");
rep("[ ] la puissance frigorifique augmente");

quest("P032 - Si la BP augmente, alors :");
rep("[x] le débit masse augmente");
rep("[ ] la puissance frigorifique diminue");
rep("[ ] la HP diminue");

quest("P033 - Si la HP augmente, alors :");
rep("[x] la puissance frigorifique diminue");
rep("[ ] le débit masse augmente");
rep("[ ] la puissance du détendeur diminue");

quest("P034 - Si la HP diminue, alors :");
rep("[ ] la température d'entrée d'air au condenseur a augmenté");
rep("[x] l'intensité absorbée par le moteur du compresseur diminue");
rep("[ ] le débit masse diminue");

quest("P035 - Une installation a été prévue pour fonctionner au R134a :");
rep("[ ] impossible de démarrer l'installation sans détendeur au R134a");
rep("[x] un détendeur au R12 fera l'affaire");

quest("P036 - L'installation étant en fonctionnement, que se passe-t-il si on coupe le capillaire du détendeur thermostatique ?");
rep("[ ] une fuite va se déclarer et risquer de vider l'ensemble de l'installation");
rep("[ ] le détendeur va fonctionner sans contrôle de la surchauffe");
rep("[x] le pressostat BP va arrêter le compresseur");

quest("P037 - Si l'hélice d'un ventilateur d'évaporateur est bloquée :");
rep("[ ] rien ne se passe");
rep("[x] le thermique du moteur va couper");
rep("[ ] le fusible de protection va fondre");

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

quest("Q002. - La variation de pression est déterminée par la formule :");
rep("[ ] Φk = K.S.Δθ");
rep("[ ] F = m.g");
rep("[ ] ρ = m/V");
rep("[x] Δp = ρ.g.h");

quest("Q003. - La force est déterminée par la formule :");
rep("[x] F = m.g");
rep("[ ] ρ = m/V");
rep("[ ] Δp = ρ.g.h");
rep("[ ] Φk = K.S.Δθ");

quest("Q004. - La masse volumique est déterminée par la formule :");
rep("[x] ρ = m/V");
rep("[ ] Φk = K.S.Δθ");
rep("[ ] F = m.g");
rep("[ ] Δp = ρ.g.h");

quest("Q005. - La chaleur latente de vaporisation de l'eau est :");
rep("[ ] 334 kJ.kg-1 (autre notation 334 kJ/kg)");
rep("[ ] 4,185 kJ.kg-1.K-1 (autre notation 4,185 kJ/(kg.K) )");
rep("[x] 2 258 kJ.kg-1 (autre notation 2 258 kJ/kg)");

quest("Q006. - La chaleur massique de l'eau liquide est :");
rep("[ ] 2 258 kJ.kg-1 (autre notation 2 258 kJ/kg)");
rep("[ ] 334 kJ.kg-1 (autre notation 334 kJ/kg)");
rep("[x] 4,185 kJ.kg-1.K-1 (autre notation 4,185 kJ/(kg.K) )");

quest("Q007. - La chaleur latente de fusion de la glace est :");
rep("[ ] 4,185 kJ.kg-1.K-1 (autre notation 4,185 kJ/(kg.K) )");
rep("[ ] 2 258 kJ.kg-1 (autre notation 2 258 kJ/kg)");
rep("[x] 334 kJ.kg-1 (autre notation 334 kJ/kg)");

quest("Q008. - L'unité de mesure principale de la pression est :");
rep("[ ] le bar (bar)");
rep("[x] le pascal (Pa)");
rep("[ ] le joule (J)");
rep("[ ] le kelvin (K)");

quest("Q009. - L'unité de mesure usuelle de la pression est :");
rep("[ ] le joule (J)");
rep("[ ] le pascal (Pa)");
rep("[ ] le kelvin (K)");
rep("[x] le bar (bar)");

quest("Q010. - L'unité de mesure principale de la température est :");
rep("[ ] le pascal (Pa)");
rep("[ ] le degré Celcius (°C)");
rep("[ ] le bar (bar)");
rep("[x] le kelvin (K)");

quest("Q011. - L'unité de mesure principale de l'énergie (ou travail) est :");
rep("[x] le joule (J)");
rep("[ ] le bar (bar)");
rep("[ ] le kelvin (K)");
rep("[ ] le pascal (Pa)");

quest("Q012. - L'intensité d'un courant électrique se mesure par :");
rep("[ ] le volt (V)");
rep("[ ] le kelvin (K)");
rep("[ ] le joule (J)");
rep("[x] l'ampère (A)");

quest("Q013. - L'unité de mesure de la tension d'un circuit électrique est :");
rep("[ ] le joule (J)");
rep("[x] le volt (V)");
rep("[ ] l'ampère (A)");
rep("[ ] le kelvin (K)");

quest("Q014. - L'unité de mesure de la résistance électrique est :");
rep("[ ] volt (V)");
rep("[ ] ampère (A)");
rep("[ ] joule (J)");
rep("[x] ohm (Ω)");

quest("Q015. - L'unité de mesure de la fréquence est :");
rep("[ ] le joule (J)");
rep("[x] le hertz (Hz)");
rep("[ ] l'ohm (Ω)");
rep("[ ] le volt (V)");

quest("Q016. - Le zéro absolu correspond à :");
rep("[x] -273,15 °C");
rep("[ ] -40 °F");
rep("[ ] 0 °C");

quest("Q017. - La température de -40 °C est équivalente à :");
rep("[ ] 32 °F");
rep("[ ] 0 °F");
rep("[ ] -18 °F");
rep("[x] -40 °F");

quest("Q018. - λ (lambda) est le symbole pour représenter la conductivité thermique. Quelle est son unité de mesure ?");
rep("[x] W.m-1.K-1 (autre notation : W/(m.K) )");
rep("[ ] W.m-2.K-1 (autre notation : W/(m2.K) )");
rep("[ ] m2.K.W-1 (autre notation : m2.K/W )");
rep("[ ] m.K.W-1 (autre notation : m.K/W )");

quest("Q019. - Quel est le nom de naissance de Lord Kelvin ?");
rep("[ ] Mickael Faraday");
rep("[x] William Thomson");
rep("[ ] Sadi Carnot");
rep("[ ] Celcius");

quest("Q020. - Sélectionner les égalités correctes :");
rep("[x] 1 W = 1 J/s");
rep("[x] -40 °C = -40 °F");
rep("[x] 1 bar = 100 000 Pa");
rep("[x] 1 atm = 1013 hPa");

quest("Q021. - La loi de Charles est : p1/T1 = p2/T2 , avec :");
rep("[ ] p en bar relatif et T en kelvin (K)");
rep("[x] p en bar absolu et T en kelvin (K)");
rep("[ ] p en bar relatif et T en degré Celcius (°C)");

quest("Q022. - La température de 0 °C est équivalente à :");
rep("[x] 32 °F");
rep("[ ] 0 °F");
rep("[ ] -18 °F");
rep("[ ] -40 °F");

quest("Q023. - La température de 0 °F est proche de :");
rep("[ ] 37 °C");
rep("[ ] 0 °C");
rep("[ ] -18 °C");
rep("[x] -40 °C");

quest("Q024. - Identifier la ou les bonnes notations pour le kilowattheure :");
rep("[ ] Kwh");
rep("[ ] KWh");
rep("[ ] kwh");
rep("[x] kWh");

quest("Q025. - Identifier la ou les bonnes notations pour le kilogramme :");
rep("[x] kg");
rep("[ ] Kgs");
rep("[ ] Kg");
rep("[ ] kgs");

quest("Q026. - Identifier la ou les bonnes notations pour le kilomètre :");
rep("[ ] Kms");
rep("[ ] Km");
rep("[x] km");
rep("[ ] kms");

quest("Q027. - Identifier la bonne notation pour le symbole de l'unité de mesure de la pression en pascal :");
rep("[ ] pa");
rep("[x] Pa");

quest("Q028. - Identifier la bonne notation pour le symbole de l'unité de mesure de la pression en bar :");
rep("[ ] Bar");
rep("[x] bar");

quest("Q029. - Identifier la bonne notation pour le symbole de l'unité de mesure de la température en kelvin :");
rep("[x] K");
rep("[ ] °K");

quest("Q030. - R est le symbole pour représenter la résistance thermique. Quelle est son unité de mesure ?");
rep("[ ] m.K.W-1 (autre notation : m.K/W )");
rep("[ ] W.m-1.K-1 (autre notation : W/(m.K) )");
rep("[ ] W.m-2.K-1 (autre notation : W/(m2.K) )");
rep("[x] m2.K.W-1 (autre notation : m2.K/W )");

// ====================================================================================
// SECTION : Le circuit frigorifique
// ====================================================================================

theme("St laurent : Le circuit frigorifique");
debut("Le circuit frigorifique.");

quest("C001. - Le rôle du détendeur est :");
rep("[x] d'alimenter l'évaporateur");
rep("[ ] de limiter le débit à l'évaporateur");
rep("[ ] de protéger l'électrovanne");

quest("C002. - Le bulbe d'un détendeur thermostatique capte une pression.");
rep("[ ] vrai");
rep("[x] faux");

quest("C003. - Le bulbe du détendeur thermostatique doit contenir le même fluide que l'installation.");
rep("[x] vrai");
rep("[ ] faux");

quest("C004. - Un détendeur à égalisation de pression externe possède obligatoirement un point MOP.");
rep("[ ] vrai");
rep("[x] faux");

quest("C005. - Sur un évaporateur, le distributeur est situé à sa sortie.");
rep("[ ] vrai");
rep("[x] faux");

quest("C006. - MOP signifie.");
rep("[x] motor overload protection");
rep("[x] maxi operating pressure");
rep("[ ] mesure d'ouverture à la pression");

quest("C007. - Sur ce schéma d'un circuit frigorifique (norme européenne EN 1861), nommer l'élément numéro 1.");
rep("[ ] détendeur");
rep("[ ] vanne d'isolement et de service de la sortie bouteille liquide");
rep("[ ] vanne d'isolement et de service au refoulement du compresseur");
rep("[x] vanne d'isolement et de service à l'aspiration du compresseur");

quest("C008. - Sur ce schéma d'un circuit frigorifique (norme européenne EN 1861), identifier, par son numéro ou une lettre, l'élément suivant :");
rep("[x] le tube d'égalisation de pression externe (A)");
rep("[x] le détendeur (10)");
rep("[x] le bulbe (B)");

quest("C009. - Sur ce schéma d'un circuit frigorifique (norme européenne EN 1861), identifier, par leur numéro, les éléments suivants :");
rep("[x] le compresseur (2)");
rep("[x] l'évaporateur (11)");
rep("[x] le détendeur (10)");
rep("[x] le condenseur (4)");

quest("C010. - Sur ce schéma d'un circuit frigorifique (norme européenne EN 1861), identifier, par leur numéro, les éléments suivants :");
rep("[x] le voyant liquide avec indicateur d'humidité (8)");
rep("[x] l'électrovanne (9)");
rep("[x] la bouteille liquide (5)");
rep("[x] le filtre-déshydrateur (7)");

quest("C011. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément PSL ?");
rep("[x] pressostat BP de régulation");
rep("[ ] pressostat HP de régulation");
rep("[ ] pressostat HP de sécurité");
rep("[ ] pressostat BP de sécurité");

quest("C012. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément PZL ?");
rep("[ ] pressostat BP de régulation");
rep("[ ] pressostat HP de sécurité");
rep("[x] pressostat BP de sécurité");
rep("[ ] pressostat HP de régulation");

quest("C013. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément PZH ?");
rep("[ ] pressostat BP de régulation");
rep("[x] pressostat HP de sécurité");
rep("[ ] pressostat HP de régulation");
rep("[ ] pressostat BP de sécurité");

quest("C014. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément LI1 ?");
rep("[ ] limiteur d'intensité moteur");
rep("[x] indicateur de niveau");
rep("[ ] limiteur de couple moteur");
rep("[ ] indicateur de pression carter");

quest("C015. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément LI2 ?");
rep("[ ] indicateur de pression");
rep("[ ] limiteur de débit bouteille");
rep("[x] indicateur de niveau");
rep("[ ] vase d'expansion");

quest("C016. - Sur ce schéma (norme européenne EN 1861) d'un circuit frigorifique, quelle est la fonction de l'élément TS ?");
rep("[ ] anémomètre");
rep("[ ] hygromètre");
rep("[ ] tensiomètre");
rep("[x] thermostat");

quest("C017. - Sur un circuit frigorifique de froid négatif, il est impératif d'installer un détendeur à charge MOP et une vanne de démarrage.");
rep("[ ] vrai");
rep("[x] faux");

quest("C018. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[ ] isenthalpe");
rep("[ ] isotitre");
rep("[ ] isochore");
rep("[x] isotherme");

quest("C019. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[x] isotitre");
rep("[ ] isenthalpe");
rep("[ ] isotherme");
rep("[ ] isobare");

quest("C020. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[x] isochore");
rep("[ ] isobare");
rep("[ ] isenthalpe");
rep("[ ] isotherme");

quest("C021. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[ ] isotitre");
rep("[ ] isotherme");
rep("[x] isobare");
rep("[ ] isenthalpe");

quest("C022. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[ ] isotherme");
rep("[ ] isotitre");
rep("[ ] isenthalpe");
rep("[x] isentrope");

quest("C023. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[x] isenthalpe");
rep("[ ] isentrope");
rep("[ ] isobare");
rep("[ ] isotitre");

quest("C024. - D'après ce diagramme enthalpique, identifier les zones remarquables (par les lettres A, B et C) ?");
rep("[x] A : liquide sous-refroidi");
rep("[x] C : vapeur surchauffée");
rep("[x] B : mélange liquide + gaz");

quest("C025. - D'après ce diagramme enthalpique, quel élément d'un circuit frigorifique est situé entre les points 2 et 3 ?");
rep("[ ] évaporateur");
rep("[x] compresseur");
rep("[ ] détendeur");
rep("[ ] condenseur");

quest("C026. - D'après ce diagramme enthalpique, quel élément d'un circuit frigorifique est situé entre les points 4 et 5 ?");
rep("[ ] évaporateur");
rep("[ ] détendeur");
rep("[x] condenseur");
rep("[ ] compresseur");

quest("C027. - D'après ce diagramme enthalpique, quel élément d'un circuit frigorifique est situé entre les points 6 et 7 ?");
rep("[ ] compresseur");
rep("[ ] évaporateur");
rep("[ ] condenseur");
rep("[x] détendeur");

quest("C028. - D'après ce diagramme enthalpique, quel élément d'un circuit frigorifique est situé entre les points 7 et 1 ?");
rep("[ ] condenseur");
rep("[ ] compresseur");
rep("[x] évaporateur");
rep("[ ] détendeur");

quest("C029. - D'après ce diagramme enthalpique, quels éléments d'un circuit frigorifique peuvent être situés entre les points 5 et 6 ?");
rep("[x] vanne d'isolement");
rep("[x] filtre-déshydrateur");
rep("[ ] évaporateur");
rep("[x] bouteille liquide");
rep("[ ] bulbe du détendeur");
rep("[ ] compresseur");
rep("[x] électrovanne (G)");

quest("C030. - D'après ce diagramme enthalpique, quels éléments d'un circuit frigorifique peuvent être situés entre les points 1 et 2 ?");
rep("[x] vanne de démarrage");
rep("[x] bulbe du détendeur");
rep("[x] filtre");
rep("[ ] bouteille liquide");
rep("[ ] détendeur");
rep("[x] vanne à pression constante");

quest("C031. - D'après ce diagramme enthalpique, quelle valeur calcule-t-on entre la HP et le points 5 ?");
rep("[ ] la surchauffe au bulbe");
rep("[x] le sous-refroidissement au condenseur");
rep("[ ] la surchauffe totale");
rep("[ ] la désurchauffe");

quest("C032. - D'après ce diagramme enthalpique, quelle valeur calcule-t-on entre la HP et le points 4 ?");
rep("[x] la désurchauffe");
rep("[ ] la surchauffe au bulbe");
rep("[ ] le sous-refroidissement au condenseur");
rep("[ ] la surchauffe totale");

quest("C033. - D'après ce diagramme enthalpique, quelle valeur calcule-t-on entre la BP et le points 1 ?");
rep("[x] la surchauffe au bulbe");
rep("[ ] la désurchauffe");
rep("[ ] la surchauffe totale");
rep("[ ] le sous-refroidissement au condenseur");

quest("C034. - D'après ce diagramme enthalpique, quelle valeur calcule-t-on entre la BP et le points 2 ?");
rep("[ ] la désurchauffe");
rep("[x] la surchauffe totale");
rep("[ ] le sous-refroidissement au condenseur");
rep("[ ] la surchauffe au bulbe");

quest("C035. - D'après ce diagramme enthalpique, quelle valeur calcule-t-on entre la HP et le points 6 ?");
rep("[x] le sous-refroidissement total");
rep("[ ] la surchauffe au bulbe");
rep("[ ] la désurchauffe");
rep("[ ] la surchauffe totale");

quest("C036. - D'après ce diagramme enthalpique, quels éléments d'un circuit frigorifique peuvent être situés entre les points 5 et 6 ?");
rep("[x] bouteille liquide");
rep("[x] vanne d'isolement");
rep("[ ] compresseur");
rep("[ ] évaporateur");
rep("[x] filtre-déshydrateur");

quest("C037. - D'après ce diagramme enthalpique, que représente le point 8 ?");
rep("[x] point critique");
rep("[ ] point G");
rep("[ ] point d'exclamation");
rep("[ ] point culminant");

quest("C038. - D'après ce diagramme enthalpique, quel élément est placé au point 1 ?");
rep("[ ] Évaporateur");
rep("[ ] Condenseur");
rep("[ ] Bouteille");
rep("[x] Bulbe");
rep("[ ] Filtre");
rep("[ ] Électrovanne");

quest("C039. - D'après ce diagramme enthalpique, quel élément est placé au point 6 ?");
rep("[x] le détendeur");
rep("[ ] le bulbe du détendeur");
rep("[ ] l'électrovanne");
rep("[ ] le filtre-déshydrateur");

quest("C040. - Sur une installation frigorifique, quels sont les éléments que l'on trouve du côté basse pression ?");
rep("[x] le bulbe du détendeur");
rep("[x] la vanne à pression constante");
rep("[ ] le condenseur");
rep("[x] l'évaporateur");

quest("C041. - Sur une installation frigorifique, quels sont les éléments que l'on trouve du côté haute pression ?");
rep("[ ] la vanne à pression constante");
rep("[x] la bouteille liquide");
rep("[x] le condenseur");
rep("[x] le voyant liquide");

quest("C042. - Sur une installation frigorifique, quel est le rôle principal du condenseur ?");
rep("[ ] sous-refroidir le fluide frigorigène");
rep("[ ] ôter l'humidité du circuit frigorigène");
rep("[ ] désurchauffer les vapeurs en provenance du compresseur");
rep("[x] évacuer la chaleur du fluide frigorigène en circulation");

quest("C043. - Sur une installation frigorifique, quel est le rôle principal de l'évaporateur ?");
rep("[ ] capter l'humidité sous forme de givre");
rep("[x] absorber la chaleur du milieu où il est installé");
rep("[ ] surchauffer les vapeurs à sa sortie");
rep("[ ] filtrer les impuretés du milieu où il est installé");

quest("C044. - Sur une installation frigorifique simple, quel est le rôle principal de l'électrovanne sur la ligne liquide ?");
rep("[x] Empêcher la migration du fluide vers l'évaporateur lorsque le compresseur est à l'arrêt");
rep("[ ] Capter les variations de pression du côté HP");
rep("[ ] Limiter le débit de fluide frigorigène à l'entrée de l'évaporateur");
rep("[ ] Diminuer la puissance du compresseur");

quest("C045. - D'après ce diagramme enthalpique, entre quels points mesure-t-on la puissance frigorifique ?");
rep("[ ] 1-2");
rep("[ ] 2-3");
rep("[ ] 3-4");
rep("[ ] 4-5");
rep("[ ] 5-6");
rep("[ ] 6-7");
rep("[x] 7-1");

quest("C046. - D'après ce schéma (norme européenne EN 1861), identifier les éléments suivants par leur numéro.");
rep("[x] régulateur de capacité (21)");
rep("[x] régulateur de pression de condensation (7)");
rep("[x] vanne de démarrage (20)");
rep("[x] vanne à pression constante (18)");
rep("[x] régulateur de pression bouteille (6)");

quest("C047. - D'après ce schéma (norme européenne EN 1861), donner le numéro de deux des régulateurs de pression.");
rep("[x] 7 est un régulateur de pression amont");
rep("[x] 6 est un régulateur de pression aval");

quest("C048. - D'après ce schéma (norme européenne EN 1861), identifier les éléments suivants par leur code (et non par leur chiffre).");
rep("[x] PZL est le pressostat de sécurité BP");
rep("[x] PZH est le pressostat de sécurité HP");
rep("[x] TC est le détendeur thermostatique");
rep("[x] PSL est le pressostat de régulation BP");
rep("[x] PSH est le pressostat de régulation HP");

quest("C049. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[ ] courbe isotherme");
rep("[ ] courbe isenthalpe");
rep("[x] courbe de saturation liquide");
rep("[ ] courbe isobare");

quest("C050. - Sur ce diagramme enthalpique que représente la courbe I ?");
rep("[ ] courbe isobare");
rep("[ ] courbe isenthalpe");
rep("[x] courbe de saturation vapeur");
rep("[ ] courbe isotherme");

quest("C051. - Sur les diagrammes enthalpiques, la pression est indiquée en :");
rep("[ ] bar relatif (bar)");
rep("[x] bar absolu (bar)");
rep("[ ] kelvin (K)");
rep("[ ] pascal (Pa)");

quest("C052. - D'après ce diagramme enthalpique, entre quels points placez-vous les éléments suivants ?");
rep("[x] 7 et 1 : évaporateur");
rep("[x] 2 et 3 : compresseur");
rep("[x] 6 et 7 : détendeur");
rep("[x] 4 et 5 : condenseur");

quest("C053. - Avec un bulbe à -3 °C et BP à -8 °C. La surchauffe est de... K");
rep("[x] 5");

quest("C054. - Avec 37 °C en sortie condenseur et 42 °C en HP. le sous-refroidissement est de ... K");
rep("[x] 5");

quest("C055. - Avec un bulbe à -3 °C et BP à -8 °C.");
rep("[ ] la BP est 2,8 bar");
rep("[ ] la désurchauffe est de 5 K");
rep("[ ] le sous-refroidissement est de 5 K");
rep("[x] la surchauffe est de 5 K");

quest("C056. - Avec 37 °C en sortie condenseur et 42 °C en HP.");
rep("[ ] la surchauffe est de 5 K");
rep("[x] le sous-refroidissement est de 5 K");
rep("[ ] la désurchauffe est de 5 K");
rep("[ ] la HP est 15 bar");

quest("C057. - Avec 3 bar en BP et 15 bar en HP. la Δp au détendeur est de .... bar");
rep("[x] 12");

quest("C058. - Au sein d'un condenseur, quelles sont les différentes zones que l'on peut trouver ?");
rep("[x] la zone de sous-refroidissement");
rep("[x] la zone de condensation");
rep("[x] la zone de désurchauffe");
rep("[ ] la zone de surchauffe");

quest("C059. - Si un détendeur thermostatique à égalisation de pression externe est installé sur un évaporateur, cela signifie que les pertes de charges y sont :");
rep("[ ] faibles");
rep("[x] élevées");
rep("[ ] négligeables");

quest("C060. - Un détendeur pompe quand sa puissance devient :");
rep("[ ] nulle");
rep("[ ] inférieure à celle de l'évaporateur");
rep("[x] supérieure à celle de l'évaporateur");

quest("C061. - Après un dégivrage électrique, on ne risque pas de :");
rep("[x] couper au pressostat BP");
rep("[ ] couper au pressostat HP");
rep("[ ] couper au thermique du moteur du compresseur");

quest("C062. - Un régulateur de démarrage bride la pression :");
rep("[ ] d'évaporation");
rep("[x] d'aspiration");
rep("[ ] de refoulement");

quest("C063. - Un régulateur de pression d'évaporation ne protège pas :");
rep("[ ] des pressions d'évaporation trop basse");
rep("[x] des coups de liquide");
rep("[ ] des températures de surface d'évaporation trop basse");

quest("C064. - Pour un régulateur de capacité, si la pression à l'aspiration augmente, alors...");
rep("[ ] le régulateur s'ouvre");
rep("[x] le régulateur se ferme");
rep("[ ] il n'y a pas d'action sur le régulateur");

quest("C065. - Pour un régulateur de pression d'évaporation, si la pression d'aspiration augmente, alors…");
rep("[x] il n'y a pas d'action sur le régulateur");
rep("[ ] le régulateur se ferme");
rep("[ ] le régulateur s'ouvre");

quest("C066. - Pour un régulateur de démarrage, si la pression à l'aspiration augmente, alors...");
rep("[ ] le régulateur s'ouvre");
rep("[ ] il n'y a pas d'action sur le régulateur");
rep("[x] le régulateur se ferme");

quest("C067. - Pour un régulateur de démarrage, si on visse la vis de réglage, alors...");
rep("[ ] il n'y a pas d'action sur le régulateur");
rep("[x] le régulateur s'ouvre");
rep("[ ] le régulateur se ferme");

quest("C068. - Pour un régulateur de pression d'évaporation, si on visse la vis de réglage, alors...");
rep("[ ] il n'y a pas d'action sur le régulateur");
rep("[x] le régulateur se ferme");
rep("[ ] le régulateur s'ouvre");

quest("C070. - Quel élément possède la même fonction qu'un détendeur à point MOP ?");
rep("[x] un régulateur de démarrage");
rep("[ ] un klixon");
rep("[ ] un régulateur de pression d'évaporation");

quest("C071. - Dans quel élément du circuit frigorifique le fluide passe de l'état vapeur à l'état liquide ?");
rep("[x] condenseur");
rep("[ ] compresseur");
rep("[ ] détendeur");
rep("[ ] évaporateur");

quest("C072. - Dans quel élément du circuit frigorifique le fluide passe de l'état liquide à l'état vapeur ?");
rep("[ ] condenseur");
rep("[x] évaporateur");
rep("[ ] compresseur");

quest("C073. - Le point critique est le point numéro :");
rep("[x] 8");

// ====================================================================================
// SECTION : Technique du froid : Dépannage
// ====================================================================================

theme("St Laurent : Dépannage Technique du froid");
debut("Les différentes pannes classique dans un système frigorifique");


quest("Comment évolue la HP dans la panne d'un détendeur trop petit ?");
rep("[ ] Diminue");
rep("[ ] Reste égale");
rep("[x] Augmente");
aj("images/détendeur.png");

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
 
quest("AgrFroid002 : Lequel ou lesquels des réfrigérants suivants sont les moins nocifs sur le plan de l'effet de serre ?://a");
rep("[ ] Les HCFC");
rep("[ ] Les HFC");
rep("[x] Le NH3 (R717)");
rep("[ ] Les CFC");
 
quest("AgrFroid003 : Par substances appauvrissant la couche d'ozone, on entend :://a");
rep("[ ] l'ammoniac");
rep("[x] les (H)CFC");
rep("[ ] les HFC");
rep("[ ] le CO2");
 
quest("AgrFroid004 : Par gaz à effet de serre fluorés, on désigne :://a");
rep("[ ] l'ammoniac");
rep("[ ] le propane");
rep("[x] les HFC");
rep("[ ] le CO2");
 
quest("AgrFroid005 : Le technicien frigoriste doit-il avoir une bouteille de récupération avec lui pour y transvaser le HFC/HCFC soutiré ?://a");
rep("[ ] Pas obligatoirement car vu la faible toxicité de ces réfrigérants, s'il ne dispose pas d'un récipient, il peut les rejeter à l'atmosphère");
rep("[ ] Oui et cette bouteille peut être soit un cylindre à réfrigérant vide ayant contenu préalablement le même gaz neuf ou une bouteille de récupération agréée pour le gaz concerné");
rep("[x] Oui, il doit avoir avec lui une bouteille de récupération agréée pour le gaz concerné");
rep("[ ] Oui, et pour effectuer cette opération il peut utiliser un récipient de son choix, pour autant qu'il résiste à la pression attendue");
 
quest("AgrFroid006 : A quoi se réfère-t-on pour évaluer la mesure dans laquelle les réfrigérants contribuent à l'effet de serre ?://a");
rep("[ ] Au réfrigérant R11");
rep("[ ] A un réchauffement effectif de 0,5 °C par an");

theme("St Laurent : L'agrégation du froid - Part2");
debut("Préparation à l'examen sur l'agrégation frigorifique");

quest("AgrFroid100 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 800 tonnes équivalent CO2 de HFC, tenant compte du fait qu'un système de détection de fuites a dû être installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");

quest("AgrFroid101 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 5 tonnes équivalent CO2 d'agent réfrigérant HFO sans détecteur de fuite ?://a");
rep("[x] agent réfrigérant non soumis à une obligation de contrôle");
rep("[ ] 6 mois");
rep("[ ] 1 mois");
rep("[ ] 12 mois");

quest("AgrFroid102 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 50 tonnes équivalant CO2 et plus de HFO ?://a");
rep("[ ] 6 mois");
rep("[ ] 3 mois");
rep("[ ] 12 mois");
rep("[x] agent réfrigérant non soumis à une obligation de contrôle");

quest("AgrFroid103 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 500 tonnes équivalant CO2 ou plus d'agent réfrigérant fluoré pourvu d'un système de détection des fuites?://a");
rep("[x] 6 mois");
rep("[ ] 3 mois");
rep("[ ] 12 mois");
rep("[ ] 1 mois");

quest("AgrFroid104 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 50 tonnes équivalent CO2 d'agent réfrigérant fluoré ou plus sans système de détection des fuites ?://a");
rep("[ ] 3 mois");
rep("[ ] 1 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");

quest("AgrFroid105 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation intérieure contenant 500 tonnes équivalent CO2 d'agent réfrigérant fluoré et plus sans système de détection des fuites ?://a");
rep("[ ] 12 mois");
rep("[ ] 6mois");
rep("[ ] 1 mois");
rep("[x] Cette situation est en contradiction avec le règlement n° 517/2014");

quest("AgrFroid106 : un équipement contenant 2 kg de HFC est-il soumis à un contrôle d'étanchéité en application du R842/2006 ?://a");
rep("[ ] non jamais");
rep("[ ] oui toujours");
rep("[x] depuis le 1/01/2017 si sa capacité est supérieure ou égale à 5 tonnes équivalent C02 ou 10 tonnes équivalent C02 si hermétique");
rep("[ ] à partir du 1/01/2018 si sa capacité est supérieure ou égale à 5 tonnes équivalent C02 ou 10 tonnes équivalent C02 si hermétique");

quest("AgrFroid107 : quelles sont les actes autorisés par le règlement R2015/2067 pour le technicien de catégorie III ?://a");
rep("[ ] récupération sur tous les équipements");
rep("[x] récupération sur des équipements contenant moins de 3 kg d'agent réfrigérant ou 6 kg si équipement reconnu hermétique");
rep("[ ] récupération sur des équipements contenant moins de 3 kg d'agent réfrigérant ou 6 kg si équipement reconnu hermétique ainsi que les contrôles d'étanchéité");
rep("[ ] récupération sur des équipements contenant moins de 3 kg d'agent réfrigérant ou 6 kg si équipement reconnu hermétique, les contrôles d'étanchéité et l'installation");

quest("AgrFroid108 : Un technicien frigoriste peut-il encore ajouter du HCFC ?://a");
rep("[ ] Oui, s'il est certifié");
rep("[x] Non, l'usage du HCFC est totalement interdit depuis 2015");
rep("[ ] Oui, mais uniquement dans des installations construites avant 2001");
rep("[ ] Oui, mais uniquement du HCFC recyclé");

quest("AgrFroid109 : Quand a lieu le contrôle obligatoire de l'étanchéité d'une installation aux HFC dont le système de détection des fuites est en état de marche et qui contient plus de 500 tonnes équivalent CO2 de réfrigérant ?://a");
rep("[ ] Tous les 3 mois + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[ ] Une fois par an + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[x] Tous les 6 mois + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[ ] Une fois tous les 2 ans + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");

quest("AgrFroid110 : Qui peut effectuer le test de pression et le remplissage d'un équipement frigorifique contenant 50 tonnes équivalent CO2 ?://a");
rep("[ ] Un technicien frigoriste certifié ou une personne travaillant sous sa responsabilité");
rep("[x] Exclusivement un technicien frigoriste disposant du certificat adéquat");
rep("[ ] Toute personne travaillant pour le compte de l'exploitant de l'équipement frigorifique");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique spécialisée/enregistrée");

quest("AgrFroid111 : Qui peut intervenir sur les parties d'un équipement frigorifique contenant 100 t éq. CO2 de HFC ?://a");
rep("[ ] Un technicien frigoriste certifié de catégorie I ou une personne travaillant sous sa responsabilité");
rep("[x] Exclusivement un technicien disposant du certificat de catégorie I");
rep("[ ] Exclusivement un technicien disposant du certificat de catégorie I ou II");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique spécialisée/enregistrée");

quest("AgrFroid112 : A partir de quand l'exploitant est-il obligé d'installer un système de détection de fuites ?://a");
rep("[ ] Si la puissance de l'équipement est supérieure à 300 kw frigorifique");
rep("[x] Si l'équipement frigorifique contient plus de 500 tonnes équivalent CO2 d'agent réfrigérant fluoré");
rep("[ ] Si la charge en agent réfrigérant fluoré est supérieure à 50 tonne équivalent CO2");
rep("[ ] Si l'équipement frigorifique contient un agent réfrigérant fluoré dont le GWP est supérieur à 1500");

quest("AgrFroid113 : L'intervalle de temps entre deux contrôles d'étanchéité d’un équipement contenant des HFC non pourvu d'un système de détection de fuites :://a");
rep("[ ] est plus important comparativement au même équipement pourvu d’un système de détection des fuites");
rep("[x] est plus faible comparativement au même équipement pourvu d’un système de détection des fuites");
rep("[ ] est identique comparativement au même équipement pourvu d’un système de détection des fuites");
rep("[ ] est d'une fois tous les 3 mois, quelle que soit la masse nominale d'agent réfrigérant");

quest("AgrFroid114 : Quelles sont les conditions minimales que doit remplir une entreprise en technique du froid pour pouvoir être agréée ?://a");
rep("[ ] Le chef de cette entreprise doit disposer du certificat requis");
rep("[ ] Les travailleurs occupés par cette entreprise sont exclusivement des techniciens frigoristes disposant du certificat requis");
rep("[x] Elle doit employer du personnel titulaire d'un certificat pour les activités pertinentes, en nombre suffisant pour faire face au volume d'activité escompté, et apporter la preuve que le personnel dispose de l'outillage et des procédures nécessaires.");
rep("[ ] Son équipement doit correspondre au minimum à celui visé dans la règlementation régionale et son dirigeant doit disposer de l'accès à la profession de frigoriste");

quest("AgrFroid115 : Le test de pression est réalisé par://a");
rep("[ ] un monteur frigoriste");
rep("[ ] un technicien agréé BA5");
rep("[ ] un technicien en possession d'un diplôme de frigoriste délivré par le jury central");
rep("[x] un technicien frigoriste disposant du certificat adéquat");

quest("AgrFroid116 : Le test d'étanchéité d'une installation contenant 7 kg de HFC ou HCFC est réalisé par :://a");
rep("[x] un technicien frigoriste certifié de catégorie I");
rep("[ ] un technicien frigoriste certifié de catégorie II");
rep("[ ] un technicien agréé BA4");
rep("[ ] un technicien en possession d'un accès à la profession de frigoriste");

quest("AgrFroid117 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation, équipée d'un système de détection de fuite, contenant 40 tonnes équivalent CO2 de gaz à effet de serre fluoré ?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");

quest("AgrFroid118 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HCF si aucun système de détection des fuites n'est installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");

quest("AgrFroid119 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HFC si il y a un système de détection des fuites ?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");

quest("AgrFroid120 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 800 tonnes équivalent CO2 de HFC, tenant compte du fait qu'un système de détection de fuites a été installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");

quest("AgrFroid121 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation, sans détecteur de fuite, contenant 5 tonnes équivalent CO2, ou plus, d'agent réfrigérant HFC ou HFO ?://a");
rep("[ ] 3mois");
rep("[ ] 6 mois");
rep("[ ] 1 mois");
rep("[x] 12 mois");

quest("AgrFroid122 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation, sans détécteur de fuite, contenant 50 tonnes équivalant CO2 et plus d'agent réfrigérant fluoré HFC et HFO ?://a");
rep("[x] 6 mois");
rep("[ ] 3 mois");
rep("[ ] 12 mois");
rep("[ ] 1 mois");

quest("AgrFroid123 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 500 tonnes équivalant CO2 et plus d'agent réfrigérant fluoré et plus avec détecteur de fuite?://a");
rep("[x] 6 mois");
rep("[ ] 3 mois");
rep("[ ] 12 mois");
rep("[ ] 1 mois");

quest("AgrFroid124 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 50 tonnes équivalent CO2 d'agent réfrigérant fluoré et plus sans détecteur de fuite ?://a");
rep("[ ] 3 mois");
rep("[ ] 1 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");

quest("AgrFroid125 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 500 tonnes équivalent CO2 d'agent réfrigérant fluoré et plus, sans détecteur de fuite ?://a");
rep("[ ] 12 mois");
rep("[ ] 6mois");
rep("[ ] 1 mois");
rep("[x] 3 mois");

quest("AgrFroid126 : Le règlement n° 517/ 2014 abroge://a");
rep("[x] le règlement n° 842/2006");
rep("[ ] le règlement n°1005/2009");
rep("[ ] le règlement n° 2037/2000");
rep("[ ] le règlement n° 1516/2007");

quest("AgrFroid127 : Les PFC sont-ils visés par le règlement n° 517/ 2014?://a");
rep("[x] Oui");
rep("[ ] Non");
rep("[ ] Oui, dès que leur pouvoir de réchauffement est supérieur ou égal à 1500");
rep("[ ] Non, sauf s'ils présentent un caractère inflammable");

quest("AgrFroid128 : L'objectif européen de réduction de 80 à 95% des émissions de gaz à effet de serre est attendu à l'horizon:://a");
rep("[ ] 2020");
rep("[ ] 2025");
rep("[ ] 2030");
rep("[x] 2050");

quest("AgrFroid129 : Une entreprise travaillant sur des circuits frigorifiques de camions et remorques réfrigérés au HFC doit-elle être agréée/enregistrée?://a");
rep("[ ] Oui dans tous les cas");
rep("[ ] Oui, uniquement si les équipements contiennent plus de 5 téq. CO2");
rep("[x] Non, seul le personnel intervenant sur les circuits doit être certifié/qualifié");
rep("[ ] Non, les camions et remorques réfrigérés au HFC ne sont pas visés par le règlement n° 517/2014");

quest("AgrFroid130 : PRP/GWP://a");
rep("[x] potentiel de réchauffement planétaire");
rep("[ ] pourcentage de réduction de pression");
rep("[ ] potentiel de refroidissement particulier");
rep("[ ] potentiel de refroidissement planétaire");

quest("AgrFroid131 : Quel est le PRP/GWP maximal des réfrigérants présents dans les réfrigérateurs et congélateurs domestiques actuellement mis sur le marché ?://a");
rep("[ ] 2500");
rep("[x] 150");
rep("[ ] 1500");
rep("[ ] 5000");

quest("AgrFroid132 : Quelle est la date limite de mise sur le marché des réfrigérateurs et congélateurs à usage commercial hermétiquement scellés contenant des HFC ayant un PRP supérieur ou égal à 2500?://a");
rep("[ ] le 1 janvier 2022");
rep("[ ] le 1 janvier 2019");
rep("[x] le 1 janvier 2020");
rep("[ ] le 1 janvier 2030");

quest("AgrFroid133 : Quelle est la date limite de mise sur le marché des réfrigérateurs et congélateurs à usage commercial hermétiquement scellés contenant des HFC ayant un PRP supérieur ou égal à 150?://a");
rep("[x] le 1 janvier 2022");
rep("[ ] le 1 janvier 2015");
rep("[ ] le 1 janvier 2020");
rep("[ ] le 1 janvier 2030");

quest("AgrFroid134 : Quelle est la date limite de mise sur le marché des équipements de réfrigération fixes contenant des HFC ayant un PRP/GWP supérieur ou égal à 2500 (sauf applications conçues pour refroidir à -50°c ou plus bas) ?://a");
rep("[ ] le 1 janvier 2022");
rep("[ ] le 1 janvier 2015");
rep("[x] le 1 janvier 2020");
rep("[ ] le 1 janvier 2030");

quest("AgrFroid135 : A partir de quelle date les systèmes de réfrigération centralisés multipostes à usage commercial d'une capacité nominale de 40kW ou plus contenant des gaz à effet de serre fluorés dont le PRP est supérieur ou égal à 150 ne pourront plus être installés?://a");
rep("[ ] le 1 janvier 2022, dans tous les cas");
rep("[x] le 1 janvier 2022, excepté pour les circuits primaires de réfrigération des systèmes en cascade qui peuvent contenir un réfrigérant dont le PRP est inférieur ou égal à 1500");
rep("[ ] le 1 janvier 2020, dans tous les cas");
rep("[ ] le 1 janvier 2022, excepté pour les circuits primaires de réfrigération des systèmes en cascade qui peuvent contenir un réfrigérant dont le PRP est inférieur ou égal à 2500");

quest("AgrFroid136 : A partir de quand la vente d'équipements de climatisation mobiles (hermétiquement scellés que l'utilisateur final peut transporter d'un local à l'autre) contenant des HFC ayant un PRP (GWP) de 150 ou plus sera-t-elle interdite ?://a");
rep("[ ] le 1 janvier 2022");
rep("[ ] le 1 janvier 2015");
rep("[x] le 1 janvier 2020");
rep("[ ] le 1 janvier 2030");

quest("AgrFroid137 : A partir de quand la vente d'équipements de climatisation bi-bloc (split system) contenant 3 kg ou moins de HFC dont le PRP/GWP est supérieur ou égal à 750 est-elle interdite ?://a");
rep("[ ] le 1 janvier 2022");
rep("[x] le 1 janvier 2025");
rep("[ ] le 1 janvier 2020");
rep("[ ] le 1 janvier 2030");

quest("AgrFroid138 : Quelle est l'information principale devant être vérifiée par les entreprises fournissant des gaz à effets de serre fluorés ?://a");
rep("[ ] Que le numéro BCE de la société qui achète le gaz soit valide");
rep("[ ] Que l'entreprise achetant le gaz dispose d'un numéro d'agrément/enregistrement valide auprès du SPF Environnement");
rep("[x] Que l'entreprise achetant le gaz dispose d'un numéro d'agrément/enregistrement régional valide");
rep("[ ] Que le numéro ONSS de la société qui achète le gaz soit valide");

quest("AgrFroid139 : Quels équipements sont visés par le règlement 517/2014 qui ne l'étaient pas par le règlement 842/2006 ?://a");
rep("[ ] Les unités de réfrigération de camions frigorifiques et les iso-containers (reefers)");
rep("[x] Les unités de réfrigération de camions frigorifiques et les remorques frigorifiques");
rep("[ ] Les iso-containers (reefers) et les remorques frigorifiques");
rep("[ ] La climatisation des bus et des poids lourds (de MMA > 3.5 t)");

quest("AgrFroid140 : Quelle est la principale différence de traitement instaurée par le R517/2014 entre les installations frigorifiques fixes et celles équipant les camions et remorques frigorifiques?://a");
rep("[x] Pour les camions et remorques frigorifiques il n'est pas prévu de certification des entreprises");
rep("[ ] Vu que les équipements des camions présentent des taux de fuites plus élevés, la fréquence de contrôle est double");
rep("[ ] Un technicien de catégorie II pourra intervenir sur un camion frigorifique contenant 3 kg de HFC ou plus");
rep("[ ] Le fait que les techniciens certifiés pour les équipements frigorifiques fixes pourront travailler sur les équipements des camions mais pas l'inverse");

quest("AgrFroid141 : Qui est habilité à réaliser des interventions sur les circuits frigorifiques contenant des HFCs de camions ou remorques?://a");
rep("[ ] Les techniciens certifiés /agréés, à condition qu'ils travaillent pour le compte d'une entreprise agréée /enregistrée");
rep("[x] Exclusivement les techniciens certifiés /agréés de catégorie I, ou II si la charge est < 3 kg");
rep("[ ] Exclusivement les techniciens certifiés /agréés de catégorie III");
rep("[ ] Tous les frigoristes qualifiés, les camions et remorques frigorifiques n'étant pas couverts par le règlement n°517/2014");

quest("AgrFroid142 : Le test d'étanchéité à l'aide d'un détecteur de fuite d'une installation contenant 7 kg de HFC ou HCFC est réalisé par://a");
rep("[x] un technicien frigoriste certifié de catégorie I, II ou IV");
rep("[ ] Exclusivement par un technicien de catégorie I");
rep("[ ] Exclusivement par un technicien de catégorie I ou II");
rep("[ ] Exclusivement par un technicien de catégorie I ou IV");

quest("AgrFroid143 : L'Accord de Paris://a");
rep("[ ] a été adopté en vue de réduire exclusivement les émissions de gaz à effet de serre fluorés");
rep("[ ] remplace le protocole de Montréal");
rep("[ ] a permis la modification de la norme EN 378");
rep("[x] vise principalement à contenir l’élévation de la température moyenne de la planète nettement en dessous de 2 °C par rapport aux niveaux préindustriels");

quest("AgrFroid144 : L'Amendement de Kigali://a");
rep("[x] est un accord global visant la réduction des HFC");
rep("[ ] a été signé lors du Sommet de Paris pour le climat");
rep("[ ] vise l'interdiction mondiale des gaz appauvrissant la couche d'ozone");
rep("[ ] vise l'interdiction d'utilisation des HFC au Rwanda");

quest("AgrFroid145 : Lequel de ces réfrigérants a le PRP/GWP le plus bas?://a");
rep("[x] Ammoniac");
rep("[ ] CO2");
rep("[ ] HFC-1234yf");
rep("[ ] HFE-125");

quest("AgrFroid146 : Qui doit conserver les informations consignées dans le registre (logbook)?://a");
rep("[ ] Uniquement l'exploitant");
rep("[x] L'exploitant et l'entreprise agréée/enregistrée");
rep("[ ] L'administration régionale compétente");
rep("[ ] Le technicien agréé et son employeur");

quest("AgrFroid147 : L'entreprise agréée/enregistrée doit-elle conserver une copie des informations notifiées dans le registre de ses clients?://a");
rep("[x] Oui toujours");
rep("[ ] Non, sauf si l'exploitant ne dispose pas de registre");
rep("[ ] Non, les interventions doivent être uniquement consignée dans le registre de l'exploitant");
rep("[ ] Uniquement si une fuite a été constatée sur l'équipement");

quest("AgrFroid148 : A partir de 2020, les HFC de GWP/PRP > à 2500 ne pourront plus être utilisés pour effectuer l'appoint dans les systèmes de réfrigération existants sauf si://a");
rep("[x] il s'agit de gaz régénérés, conformément étiquetés");
rep("[ ] les systèmes de réfrigération contiennent moins de 500 t éq. CO2");
rep("[ ] les équipements disposent de système de détection des fuites");
rep("[ ] l'équipement a été installé avant le 01/01/2015");

quest("AgrFroid149 : Quel gaz pourra encore être utilisé en 2022 pour effectuer l'appoint d'un équipement contenant 30 t éq. CO2 de R404a ?://a");
rep("[ ] Uniquement du gaz régénéré");
rep("[x] Un gaz neuf (vierge), recyclé ou régénéré");
rep("[ ] Uniquement du gaz recyclé");
rep("[ ] Uniquement du gaz régénéré ou recyclé");

quest("AgrFroid150 : A partir de quand l'appoint d'un équipement contenant 50 t éq. CO2 de R404A sera interdite avec du gaz neuf ?://a");
rep("[x] 01/01/20");
rep("[ ] 01/01/25");
rep("[ ] 01/01/30");
rep("[ ] 01/01/22");

quest("AgrFroid150 : A partir de quand l'appoint d'un équipement contenant 50 t éq. CO2 de R404A sera interdite avec du gaz neuf ?://a");
rep("[x] 01/01/20");
rep("[ ] 01/01/25");
rep("[ ] 01/01/30");
rep("[ ] 01/01/22");

quest("AgrFroid151 : A partir de quand l'appoint d'un équipement contenant 50 t éq. CO2 de R404A sera totalement interdite ?://a");
rep("[ ] 01/01/20");
rep("[ ] 01/01/25");
rep("[x] 01/01/30");
rep("[ ] 01/01/22");

quest("AgrFroid152 : Qui peut travailler avec des HFE/HFO ?://a");
rep("[ ] Un technicien disposant du certificat requis, ayant suivi un module complémentaire sur la sécurité");
rep("[x] Ce n'est pas prévu par la réglementation sur les gaz à effet de serre fluorés");
rep("[ ] Vu leur caractère inflammable, exclusivement un technicien de catégorie I");
rep("[ ] Personne, l'utilisation de ces gaz est interdite sur le territoire de l'Union européenne");

quest("AgrFroid153 : Quelle affirmation relative aux HFE/HFO est correcte :://a");
rep("[ ] Ces gaz doivent être récupérés par du personnel certifié");
rep("[ ] Les équipements contenant ces gaz doivent faire l'objet de contrôles d'étanchéité périodiques réglementaires");
rep("[ ] Ces gaz ne contribuent pas au réchauffement climatique");
rep("[x] L'installation de systèmes contenant ces gaz peut ne pas être réalisée par un technicien disposant du certificat requis");

quest("AgrFroid154 : En cas de présomption de fuite :://a");
rep("[x] Je dois appliquer la méthode directe de contrôle des fuites");
rep("[ ] Je dois appliquer la méthode indirecte de contrôle des fuites");
rep("[ ] Je peux appliquer la méthode directe ou indirecte de contrôle des fuites");
rep("[ ] Je dois appliquer la méthode directe et indirecte de contrôle des fuites");

quest("AgrFroid155 : L'application d'une solution savonneuse :://a");
rep("[x] Est une méthode directe de contrôle d'étanchéité");
rep("[ ] Est une méthode indirecte de contrôle d'étanchéité");
rep("[ ] N'est ni une méthode directe, ni indirecte de contrôle d'étanchéité, mais uniquement une technique permettant de localiser une fuite, une fois que la méthode directe ou indirecte met en évidence une fuite");
rep("[ ] N'est pas autorisée par la réglementation européenne car peu précise");

quest("AgrFroid156 : Une réparation de fuite :://a");
rep("[ ] doit-être suivie par : 1. une recharge ; 2. un test d'étanchéité.");
rep("[ ] ne peut être réalisée que si l'équipement a été reconnu conforme aux exigences de la directive PED.");
rep("[x] doit être suivie par :1. un test de pression avec de l'azote sec ou un autre gaz sec approprié.2. une évacuation ;3. une recharge ;4. un test d'étanchéité.");
rep("[ ] ne doit pas obligatoirement être renseignée dans le registre (seul l'éventuel appoint de gaz doit l'être).");

quest("AgrFroid157 : Le contrôle complémentaire réalisé dans le mois qui suit une réparation de fuite :://a");
rep("[ ] peut toujours être considéré comme un contrôle périodique de fuite, à partir duquel il convient de comptabiliser les délais");
rep("[x] peut uniquement être considéré comme un contrôle périodique de fuite, à partir duquel il convient de comptabiliser les délais, s'il porte sur l'ensemble de l'équipement");
rep("[ ] ne peut pas être considéré comme un contrôle périodique de fuite");
rep("[ ] peut uniquement être considéré comme un contrôle périodique de fuite si la charge en réfrigérant est < 50 t éq.CO2 2 Questions d'examen portant sur la connaissance de la législation wallonne");

quest("AgrFroid158 : Dans quel délai doit-on vidanger le réfrigérant d'une installation après sa mise hors service définitive ?://a");
rep("[ ] Dans un délai de 6 mois");
rep("[x] Dans le mois qui suit");
rep("[ ] Dès que l'autorisation de reprise a été délivrée par l'administration régionale compétente en matière de déchets");
rep("[ ] Le ferrailleur disposant d'un agrément pour la collecte et le transport de déchets dangereux dispose d'un mois après le transport de l'installation pour la faire vidanger par une personne disposant du certificat requis");

quest("AgrFroid159 : Qui a l'autorisation de détruire du réfrigérant ?://a");
rep("[ ] Toute personne possédant l'équipement nécessaire");
rep("[ ] Tous les techniciens frigoristes certifiés");
rep("[x] Uniquement les sociétés autorisées à cette fin");
rep("[ ] Exclusivement les fabricants de réfrigérants");

quest("AgrFroid160 : Qu'entend-on par examen de mise à niveau ?://a");
rep("[x] C'est l'examen que l'on doit réussir pour obtenir une prolongation de 5 ans de la validité du certificat");
rep("[ ] C'est l'examen que les techniciens certifiés provenant d'un autre Etat membre de l'UE doivent passer");
rep("[ ] C'est l'examen que l'on doit passer quand on a échoué à la première épreuve");
rep("[ ] C'est l'examen qui doit être passé chaque fois que les techniques de réfrigération évoluent sensiblement");

quest("AgrFroid161 : Il doit y avoir un registre :://a");
rep("[ ] dans la camionnette du technicien frigoriste");
rep("[ ] dans les bureaux de l'entreprise en technique du froid");
rep("[x] tenu par l'exploitant et mis à disposition de l'autorité publique chargée du contrôle");
rep("[ ] auprès de chaque équipement contenant moins de 5 t éq. de CO2");

quest("AgrFroid162 : Une entreprise agréée/enregistrée en technique du froid est obligée de tenir une comptabilité des fluides récupérés :://a");
rep("[x] Oui");
rep("[ ] Non");
rep("[ ] Seulement si elle récupère plus de 30 kg de réfrigérant par an");
rep("[ ] Seulement si elle récupère plus de 300 kg de réfrigérant par an");

quest("AgrFroid163 : Quand le réfrigérant d'une installation définitivement mise hors service doit-il être récupéré ?://a");
rep("[ ] Immédiatement après la mise hors service");
rep("[x] Dans le mois suivant la mise hors service");
rep("[ ] Dans les 3 mois suivant la mise hors service");
rep("[ ] Dans les 6 mois suivant la mise hors service");

quest("AgrFroid164 : Une installation de réfrigération a une capacité de 25 t éq.CO2 de HFC. Qui doit, selon la réglementation relative au permis d'environnement, pouvoir fournir à l'autorité compétente la preuve de conformité de l'installation au test de pression ?://a");
rep("[ ] Cette preuve n'est pas nécessaire car elle n'est imposée qu'à partir d'une capacité de 200 téq. CO2");
rep("[ ] L'installateur de l'installation de réfrigération");
rep("[x] L'exploitant de l'installation de réfrigération");
rep("[ ] L'organisme de contrôle accréditée qui a réceptionné l'installation");

quest("AgrFroid165 : Un certificat délivré par un centre d'examen agrée par la RW ou la RBC destiné aux techniciens frigoristes est valable:://a");
rep("[x] pour une durée de 5 ans");
rep("[ ] pour 10 ans");
rep("[ ] pour une durée d'un an");
rep("[ ] ce certificat doit être renouvelé chaque année");

quest("AgrFroid166 : L'entreprise en technique frigorifique spécialisée/enregistrée qui effectue le stockage d'agents réfrigérants://a");
rep("[ ] peut transporter ses bouteilles remplies à maximum 80% de sa contenance dans un parc à container");
rep("[ ] peut remettre sur le marché des bouteilles de fluides récupéré");
rep("[ ] doit s'enregistrer sur le site http://ec.europa.eu/clima/policies/f-gas/ de la Commission européenne");
rep("[x] doit tenir à jour un registre des déchets stockés");

quest("AgrFroid167 : Vis-à-vis de la protection de l'environnement, quelle doit être la ligne de conduite d'un technicien frigoriste certifié vis-à-vis de l'agent réfrigérant fluoré://a");
rep("[ ] il doit veiller à ce que le fluide soit constamment exempt d'huile, d'acides et autres impuretés");
rep("[ ] il doit le remplacer régulièrement et chaque fois qu'il présente des signes d'usures");
rep("[x] il doit effectuer les opérations pouvant être à l'origine d'émissions d'agent réfrigérant en se conformant aux recommandations de la norme NBN EN 378");
rep("[ ] il doit signaler toute fuite et se procurer le fluide nécessaire pour remplir l'installation sans délai");

quest("AgrFroid168 : Les interventions sur les parties d'un équipement frigorifique contenant ou pouvant contenir de l'agent réfrigérant fluoré ne peuvent être effectuées que par://a");
rep("[ ] un technicien agréé BA4 qui dispose du certificat de catégorie adéquate");
rep("[ ] un technicien agréé BA5 qui dispose du certificat de catégorie adéquate");
rep("[x] un technicien frigoriste qui dispose du certificat de catégorie adéquate et travaille pour le compte d’une entreprise en technique frigorifique agréée/enregistrée qu'il s’agisse d’installation, d’entretien, de réparation ou de récupération.");
rep("[ ] un technicien en possession d'e l'accès à la profession de frigoriste.");

quest("AgrFroid169 : Le technicien certifié peut-il laisser s'échapper des agents réfrigérants fluorés vers l'atmosphère ?://a");
rep("[ ] Oui, sauf lorsqu'un phénomène d'inversion de température est observé");
rep("[ ] Oui, sauf si il s'agit d'un gaz toxique");
rep("[ ] Oui, moyennant accord fourni par l'AWAC/IBGE");
rep("[x] Non, jamais");

quest("AgrFroid170 : Est-ce qu'un technicien frigoriste certifié doit disposer d'un équipement technique minimum, réglementairement défini, pour pouvoir intervenir.://a");
rep("[ ] Oui, chaque technicien frigoriste certifié doit être propriétaire du matériel repris en annexe de l'arrêté relatif à la reconnaissance des techniciens et des sociétés en technique frigorifique");
rep("[x] Oui, et c'est la responsabilité de l'entreprise en technique frigorifique agréée/enregistrée pour laquelle il travaille de le lui fournir");
rep("[ ] Non, c'est la responsabilité de chaque entreprise en technique frigorifique agréé de définir le matériel minimum que chaque technicien frigoriste certifié doit posséder");
rep("[ ] Uniquement s'il intervient sur des équipements contenant plus de 50 tonnes équivalent CO2 de réfrigérant fluoré");

quest("AgrFroid171 : Qui le technicien frigoriste certifié doit il impérativement informer en cas de pertes relatives en agent réfrigérant fluoré trop élevées.://a");
rep("[ ] L'administration wallonne/bruxelloise");
rep("[ ] La Direction de l'entreprise dans laquelle travaille le technicien frigoriste");
rep("[x] L'exploitant de l'équipement concern");
rep("[ ] La police compétente sur le territoire où est implanté l'équipement concerné");

quest("AgrFroid172 : Une entreprise en technique frigorifique agréée/enregistrée://a");
rep("[x] doit pouvoir fournir à ses techniciens frigoristes certifiés au minimum la matériel défini dans les arrêtés régionaux");
rep("[ ] doit posséder un groupe de récupération sauf si elle ne travaille que sur des équipements de climatisation de type monosplit");
rep("[ ] doit posséder un groupe de récupération sauf si elle ne travaille que sur des pompes à chaleur");
rep("[ ] doit disposer d'un groupe de récupération uniquement si elle travaille sur des équipements contenant des HCFC");

quest("AgrFroid173 : Une entreprise en technique frigorifique spécialisée / enregistrée doit posséder://a");
rep("[x] une pompe à vide à deux étages");
rep("[ ] une pompe à vide à 1 étage");
rep("[ ] une pompe à vide à galets");
rep("[ ] une pompe permettant de vider les vannes de l'air et de l'humidité");

quest("AgrFroid174 : Au vu de la réglementation de la RW/RBC, à quelle exigence une pompe à vide doit-elle satisfaire ?://a");
rep("[ ] Elle doit aspirer au moins 250 m3/h");
rep("[x] Il doit s'agir d'un modèle à deux étages");
rep("[ ] Il doit s'agir d'un modèle à trois étages");
rep("[ ] Il est nécessaire qu'elle puisse aspirer jusqu'à 270 torr");

quest("AgrFroid175 : Au vu de la réglementation de la RW/RBC, quelle exigence la balance d'un technicien frigoriste doit-elle notamment satisfaire ?://a");
rep("[ ] il doit s'agir d'une balance électronique");
rep("[ ] une balance à deux aiguilles une pour les kilos et une pour les grammes");
rep("[x] elle doit posséder une précision minimale de 10 g pour des poids inférieurs à 30kg");
rep("[ ] elle doit posséder une précision de 1g pour des poids inférieurs à 30kg");

quest("AgrFroid176 : L'huile vidangée d'un compresseur frigorifique://a");
rep("[x] est considérée comme déchet dangereux");
rep("[ ] est considérée comme déchet non dangereux");
rep("[ ] après filtration, peut être brûlée dans un foyer au mazout");
rep("[ ] peut être utilisée pour graisser l'extérieur de certains raccords flare");

quest("AgrFroid177 : Une entreprise en technique frigorifique agréée/enregistrée://a");
rep("[x] peut transporter les déchets résultant exclusivement des interventions menées par ses propres techniciens frigoristes certifiés");
rep("[ ] peut transporter tous les déchets d'un chantier y compris, ceux des autres corps de métier");
rep("[ ] ne peut en aucune manière transporter des déchets quels qu'ils soient");
rep("[ ] ne peut transporter que les déchets non dangereux d'un client");

quest("AgrFroid178 : Lors de la mise hors service définitive d'une installation frigorifique, le technicien certifié/qualifié://a");
rep("[ ] doit démonter l'installation dans les 24 heures suivant la décision prise par l'administration régionale compétente en matière de déchets");
rep("[ ] peut la démonter sans problème et mettre au rebut toutes les pièces");
rep("[x] doit récupérer le fluide frigorigène et l'huile avant démontage");
rep("[ ] doit d'abord marquer les éléments avant de les démonter");

quest("AgrFroid179 : L'entreprise en technique frigorifique spécialisée/enregistrée peut confier les fluides récupérés qu'elle a stockés://a");
rep("[x] à une entreprise agréé pour la collecte et le transport de déchets dangereux");
rep("[ ] à tous les transporteurs de déchets");
rep("[ ] à n'importe quel transporteur à condition qu'il soit localisé à moins de 50 km et ce en vue de limiter les impacts environnementaux liés au transport");
rep("[ ] à un transporteur qui possède une citerne pour évider une fuite vers l'extérieur");

quest("AgrFroid180 : La validité du certificat délivré aux techniciens en RBC ou en RW://a");
rep("[ ] Est valable 5 ans mais le certificat perd sa validité si le technicien change d'employeur");
rep("[x] Est de 5 ans et peut être renouvelé si le technicien réussit un examen de mise à niveau");
rep("[ ] Est de 10 ans et peut être renouvelé si le technicien réussit un examen de mise à niveau");
rep("[ ] Est indéterminée mais tous les 5 ans le technicien doit suivre une formation continuée d'une durée minimale de 8 heures");

quest("AgrFroid181 : Où peut-on passer l'examen en vue de l'obtention du certificat d'aptitude en technique du froid?://a");
rep("[ ] Dans tous les centres de formation ouverts aux classes moyennes");
rep("[ ] Dans toutes les universités de Belgique");
rep("[x] Uniquement dans un centre d'examen reconnu par les autorités régionales");
rep("[ ] Dans chaque école ou centre de formation où l'on donne des cours sur la technique du froid");

quest("AgrFroid182 : Qui peut intervenir sur le circuit frigorifique d'un équipement contenant 10 kg de NH3 ?://a");
rep("[ ] Un technicien frigoriste certifié ou une personne travaillant sous sa responsabilité");
rep("[ ] Exclusivement un technicien frigoriste certifié");
rep("[x] Le NH3 n'est pas visé par la réglementation européenne ou régionale sur les gaz fluorés. Ces réglementations ne définissent dès lors rien à ce sujet");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique agrée");

quest("AgrFroid183 : Un technicien frigoriste qualifié doit disposer d'une balance précise à 10 g près :://a");
rep("[ ] s'il est muni d'un cylindre à réfrigérant d'une capacité de plus de 30 kg");
rep("[ ] s'il est muni d'un cylindre à réfrigérant d'une capacité de 300 kg");
rep("[x] s'il est muni d'un cylindre d'une capacité inférieure à 30 kg");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid184 : A quelle fréquence le technicien de catégorie I doit-il mettre à jour ses compétences ?://a");
rep("[ ] Deux ans à compter de la date de délivrance");
rep("[ ] Trois ans à compter de la date de délivrance");
rep("[x] Cinq ans à compter de la date de délivrance");
rep("[ ] Six ans à compter de la date de délivrance");

quest("AgrFroid185 : Le certificat d'un technicien frigoriste lui est délivré :://a");
rep("[ ] par un organisme de contrôle accrédité");
rep("[x] par l'Agence wallonne de l'Air et du Climat");
rep("[ ] par une entreprise en technique du froid");
rep("[ ] Par un centre d'examen reconnu");

quest("AgrFroid186 : Une entreprise agréée en technique du froid employant des frigoristes certifiés est une entreprise disposant d'un agrément :://a");
rep("[ ] de durée indéterminée, mais qui doit faire réaliser un contrôle par un organisme accrédité tous les 5 ans");
rep("[ ] qui ne remonte pas à plus de 2 ans à compter de la date de délivrance de l'agrément");
rep("[ ] qui ne remonte pas à plus de 5 ans à compter de la date de délivrance de l'agrément");
rep("[x] de durée indéterminée, sous condition de respecter les critères d'agrément");

quest("AgrFroid187 : Une entreprise en technique du froid agréée peut être contrôlée par :://a");
rep("[ ] une tierce entreprise en technique du froid agréée qui exécute des travaux sur les installations de réfrigération");
rep("[ ] un centre d'examen agréé");
rep("[ ] un technicien frigoriste disposant du certificat requis et travaillant pour le compte d'une tierce entreprise");
rep("[x] Le fonctionnaire chargé de la surveillance");

quest("AgrFroid188 : Comment doit être estimée la masse nominale en agent réfrigérant fluoré d'un équipement frigorifique neuf ?://a");
rep("[x] En effectuant une pesée des bonbonnes contenant le gaz de remplissage avant et après cette opération");
rep("[ ] Le technicien certifié peut utiliser toute méthode permettant de déterminer avec une précision de 5% la masse nominale en agent réfrigérant fluoré");
rep("[ ] Par estimation, sur base de données fournies par le(s) fournisseur(s) des organes constituant l'équipement frigorifique");
rep("[ ] En effectuant une pesée de l'équipement frigorifique avant et après remplissage en agent réfrigérant fluoré");

quest("AgrFroid189 : Quand est-ce que l'exploitant d'un équipement frigorifique est tenu de faire effectuer une détermination de la masse nominale en agent réfrigérant par vidange suivie d'un remplissage ?://a");
rep("[ ] Lors de chaque contrôle périodique de l'équipement frigorifique");
rep("[x] Si la masse nominale en agent réfrigérant n'est pas mentionnée dans les documents relatifs à l'équipement frigorifique ou si celle-ci n'est plus connue suite à des modifications");
rep("[ ] Une fois tous les 5 ans, mais exclusivement si l'équipement contient plus de 300 kg d'agent réfrigérant fluoré");
rep("[ ] Lorsqu'un équipement frigorifique change d'exploitant");

quest("AgrFroid190 : La récupération de l'agent réfrigérant fluoré est effectuée...://a");
rep("[x] ...dans une bouteille prévue à cette effet, à condition de ne pas être remplie à plus de 80%");
rep("[ ] …dans une bouteille ayant contenu le même gaz neuf");
rep("[ ] ...dans une bouteille prévue à cette effet, à condition de ne pas être remplie à plus de 90%");
rep("[ ] … dans une bouteille prévue à cet effet, à condition de posséder une vanne rouge et une vanne bleue");

quest("AgrFroid191 : Une entreprise en technique frigorifique agrée doit posséder://a");
rep("[ ] un thermomètre de fonction");
rep("[ ] un thermomètre au mercure pour mesurer avec précision");
rep("[x] un thermomètre digital avec sonde de contact");
rep("[ ] un thermomètre électronique mesurant la température en Kelvin");

quest("AgrFroid192 : Que peut notamment faire une entreprise en technique frigorifique agrée dans son siège d'exploitation situé en Région wallonne ?://a");
rep("[ ] stocker sans aucune formalité toute sorte de déchets et de fluides frigorigènes");
rep("[x] stocker de manière transitoire les déchets résultant des interventions de ses techniciens, notamment les agents réfrigérants récupérés, en tenant un inventaire bien précis");
rep("[ ] stocker de manière transitoire tous les fluides frigorigènes sans tenir d'inventaire");
rep("[ ] elle ne peut rien stocker puisque les fluides frigorigènes sont considérés comme déchets dangereux");

quest("AgrFroid193 : Lors d'une intervention sur un équipement, à la fin de son travail, le technicien certifié...://a");
rep("[ ] … doit faire signer une attestation de conformité par l'exploitant");
rep("[ ] …doit avertir le fonctionnaire chargé de la surveillance si un taux de fuite d'agent réfrigérant supérieur à 5% a été constaté");
rep("[x] … doit, lorsqu'il y a production de déchets, remettre à l'exploitant de l'équipement frigorifique une attestation concernant ces déchets");
rep("[ ] … doit remettre à l'exploitant une attestation, dans laquelle, il stipule que son installation est conforme à la directive PED");

quest("AgrFroid194 : Le document général de suivi des déchets est un document qui :://a");
rep("[ ] doit obligatoirement se trouver dans le bureau de l'exploitant");
rep("[x] doit accompagner les déchets résultant de chaque intervention effectuée par un technicien frigoriste certifié");
rep("[ ] doit être gardée chez l'exploitant et être disponible en cas de contrôle par l'administration wallonne");
rep("[ ] peut uniquement être utilisé en cas de litige porté devant un tribunal");

quest("AgrFroid195 : Lors de la mise hors service d'une installation frigorifique, après récupération du fluide frigorigène et des autres fluides, le technicien certifié://a");
rep("[x] établit en trois exemplaires l'attestation de dépollution");
rep("[ ] doit porter directement les déchets vers des installations autorisées d'élimination ou de valorisation de déchets");
rep("[ ] doit prévenir le marchand de mitrailles");
rep("[ ] peut faire enlever l'armoire électrique par un transporteur agréé");

quest("AgrFroid196 : Un exemplaire de l'attestation de dépollution :://a");
rep("[x] doit être apposé de façon visible sur l'équipement frigorifique");
rep("[ ] doit être envoyé à l'usine de destruction");
rep("[ ] doit figurer sur la camionnette du technicien");
rep("[ ] doit être envoyé au directeur de la société");

quest("AgrFroid197 : Un exemplaire de l'attestation de dépollution :://a");
rep("[ ] doit être envoyé à l'usine d'origine de l'équipement");
rep("[x] doit être transmis à l'administration wallonne compétente pour l'environnement (DGO3)");
rep("[ ] doit être envoyé à l'usine de destruction");
rep("[ ] doit être envoyé à l'organisme notifié de contrôle accrédité");

quest("AgrFroid198 : Lorsque les déchets sont laissés sur le site suite à une intervention du technicien certifié,://a");
rep("[ ] ceux-ci peuvent être évacués dans un parc à conteneurs.");
rep("[ ] un organisme notifié par les trois régions doit les contrôler du point de vue de leur toxicité");
rep("[ ] ceux sont broyés par le propriétaire des déchets");
rep("[x] le technicien certifié établit un inventaire destiné au collecteur ou au transporteur");

quest("AgrFroid199 : Le technicien certifié doit établir des consignes…://a");
rep("[ ] ...permettant à l'exploitant de réduire les consommations énergétiques de ses équipements frigorifiques");
rep("[ ] … sur l'évacuation de secours de la salle des machines");
rep("[x] … permettant de prévenir tout risque d'émission des déchets vers l'environnement lors de leur stockage, transport et traitement");
rep("[ ] … permettant à l'exploitant de récupérer le réfrigérant fluoré selon les règles de l'art");

quest("AgrFroid200 : Chaque bouteille de récupération de fluide frigorigène :://a");
rep("[ ] doit obligatoirement être stockée dans un frigo");
rep("[ ] peut être remplie jusqu'à 90% de sa capacité");
rep("[x] doit être accompagnée de son document de suivi des déchets");
rep("[ ] peut être stockée et transportée sur le territoire belge sans aucune formalité spécifique");

theme("St Laurent : L'agrégation du froid - Part3");
debut("Préparation à l'examen sur l'agrégation frigorifique");

quest("AgrFroid200 : Chaque bouteille de récupération de fluide frigorigène :://a");
rep("[ ] doit obligatoirement être stockée dans un frigo");
rep("[ ] peut être remplie jusqu'à 90% de sa capacité");
rep("[x] doit être accompagnée de son document de suivi des déchets");
rep("[ ] peut être stockée et transportée sur le territoire belge sans aucune formalité spécifique");

quest("AgrFroid201 : Lorsque des déchets sont laissés sur le site, le technicien certifié établit un inventaire…://a");
rep("[ ] … qu'il transmet sans délai à l'administration de l'environnement (DGO3)");
rep("[ ] … qu'il transmet à l'entreprise ayant fourni les fluides qui reste responsable de la fin de vie des produites qu'elle a vendu");
rep("[ ] … qu'il notifie dans les 15 jours sur le site internet du Département du Sol et de Déchets de la DGO3");
rep("[x] … qui est daté et signé par lui-même et par l'exploitant de l'équipement frigorifique ou son préposé 3 Questions d'examen portant sur la connaissance de la législation Bruxelles-Capitale");

quest("AgrFroid202 : Un exemplaire de l'attestation de dépollution :://a");
rep("[x] doit être jointe au livret de bord");
rep("[ ] doit être gardée par le technicien");
rep("[ ] doit être envoyée à l'usine de destruction du fluide");
rep("[ ] doit être validée par un organisme agréé");

quest("AgrFroid203 : Lorsque des déchets sont laissés sur le site, l'identité et le délai d'intervention des collecteurs et transporteurs doivent être connus :://a");
rep("[ ] pour la fin du mois qui suit l'intervention du technicien certifié");
rep("[x] à la fin de l'intervention du technicien certifié et être mentionnés dans l'inventaire des déchets");
rep("[ ] au premier janvier de chaque année, ces informations devant être transmises à la Région Wallonne (DGO3) au plus tard le 31/01");
rep("[ ] pour la fin de l'année ainsi que le nom du transporteur agréé");

quest("AgrFroid204 : Dans quel délai doit-on vidanger le réfrigérant d'une installation après sa mise hors service définitive ?://a");
rep("[ ] Dans un délai de 6 mois");
rep("[x] Dans le mois qui suit");
rep("[ ] Dès que l'autorisation de reprise a été délivrée par l'administration régionale compétente en matière de déchets");
rep("[ ] Le ferrailleur disposant d'un agrément pour la collecte et le transport de déchets dangereux dispose d'un mois après le transport de l'installation pour la faire vidanger par une personne disposant du certificat requis");

quest("AgrFroid205 : Qui a l'autorisation de détruire du réfrigérant ?://a");
rep("[ ] Toute personne possédant l'équipement nécessaire");
rep("[ ] Tous les techniciens frigoristes certifiés");
rep("[x] Uniquement les sociétés autorisées à cette fin");
rep("[ ] Exclusivement les fabricants de réfrigérants");

quest("AgrFroid206 : Qu'entend-on par examen de mise à niveau ?://a");
rep("[x] C'est l'examen que l'on doit réussir pour obtenir une prolongation de 5 ans de la validité du certificat");
rep("[ ] C'est l'examen que les techniciens certifiés provenant d'un autre Etat membre de l'UE doivent passer");
rep("[ ] C'est l'examen que l'on doit passer quand on a échoué à la première épreuve");
rep("[ ] C'est l'examen qui doit être passé chaque fois que les techniques de réfrigération évoluent sensiblement");

quest("AgrFroid207 : Il doit y avoir un registre :://a");
rep("[ ] dans la camionnette du technicien frigoriste");
rep("[ ] dans les bureaux de l'entreprise en technique du froid");
rep("[x] tenu par l'exploitant et mis à disposition de l'autorité publique chargée du contrôle");
rep("[ ] auprès de chaque équipement contenant moins de 5 t éq. de CO2");

quest("AgrFroid208 : Une entreprise agréée/enregistrée en technique du froid est obligée de tenir une comptabilité des fluides récupérés :://a");
rep("[x] Oui");
rep("[ ] Non");
rep("[ ] Seulement si elle récupère plus de 30 kg de réfrigérant par an");
rep("[ ] Seulement si elle récupère plus de 300 kg de réfrigérant par an");

quest("AgrFroid209 : Quand le réfrigérant d'une installation définitivement mise hors service doit-il être récupéré ?://a");
rep("[ ] Immédiatement après la mise hors service");
rep("[x] Dans le mois suivant la mise hors service");
rep("[ ] Dans les 3 mois suivant la mise hors service");
rep("[ ] Dans les 6 mois suivant la mise hors service");

quest("AgrFroid210 : Une installation de réfrigération a une capacité de 25 t éq.CO2 de HFC. Qui doit, selon la réglementation relative au permis d'environnement, pouvoir fournir à l'autorité compétente la preuve de conformité de l'installation au test de pression ?://a");
rep("[ ] Cette preuve n'est pas nécessaire car elle n'est imposée qu'à partir d'une capacité de 200 téq. CO2");
rep("[ ] L'installateur de l'installation de réfrigération");
rep("[x] L'exploitant de l'installation de réfrigération");
rep("[ ] L'organisme de contrôle accréditée qui a réceptionné l'installation");

quest("AgrFroid211 : Un certificat délivré par un centre d'examen agrée par la RW ou la RBC destiné aux techniciens frigoristes est valable:://a");
rep("[x] pour une durée de 5 ans");
rep("[ ] pour 10 ans");
rep("[ ] pour une durée d'un an");
rep("[ ] ce certificat doit être renouvelé chaque année");

quest("AgrFroid212 : L'entreprise en technique frigorifique spécialisée/enregistrée qui effectue le stockage d'agents réfrigérants://a");
rep("[ ] peut transporter ses bouteilles remplies à maximum 80% de sa contenance dans un parc à container");
rep("[ ] peut remettre sur le marché des bouteilles de fluides récupéré");
rep("[ ] doit s'enregistrer sur le site http://ec.europa.eu/clima/policies/f-gas/ de la Commission européenne");
rep("[x] doit tenir à jour un registre des déchets stockés");

quest("AgrFroid213 : Vis-à-vis de la protection de l'environnement, quelle doit être la ligne de conduite d'un technicien frigoriste certifié vis-à-vis de l'agent réfrigérant fluoré://a");
rep("[ ] il doit veiller à ce que le fluide soit constamment exempt d'huile, d'acides et autres impuretés");
rep("[ ] il doit le remplacer régulièrement et chaque fois qu'il présente des signes d'usures");
rep("[x] il doit effectuer les opérations pouvant être à l'origine d'émissions d'agent réfrigérant en se conformant aux recommandations de la norme NBN EN 378");
rep("[ ] il doit signaler toute fuite et se procurer le fluide nécessaire pour remplir l'installation sans délai");

quest("AgrFroid214 : Les interventions sur les parties d'un équipement frigorifique contenant ou pouvant contenir de l'agent réfrigérant fluoré ne peuvent être effectuées que par://a");
rep("[ ] un technicien agréé BA4 qui dispose du certificat de catégorie adéquate");
rep("[ ] un technicien agréé BA5 qui dispose du certificat de catégorie adéquate");
rep("[x] un technicien frigoriste qui dispose du certificat de catégorie adéquate et travaille pour le compte d’une entreprise en technique frigorifique agréée/enregistrée qu'il s’agisse d’installation, d’entretien, de réparation ou de récupération");
rep("[ ] un technicien en possession de l'accès à la profession de frigoriste");

quest("AgrFroid215 : Le technicien certifié peut-il laisser s'échapper des agents réfrigérants fluorés vers l'atmosphère ?://a");
rep("[ ] Oui, sauf lorsqu'un phénomène d'inversion de température est observé");
rep("[ ] Oui, sauf si il s'agit d'un gaz toxique");
rep("[ ] Oui, moyennant accord fourni par l'AWAC/IBGE");
rep("[x] Non, jamais");

quest("AgrFroid216 : Est-ce qu'un technicien frigoriste certifié doit disposer d'un équipement technique minimum, réglementairement défini, pour pouvoir intervenir.://a");
rep("[ ] Oui, chaque technicien frigoriste certifié doit être propriétaire du matériel repris en annexe de l'arrêté relatif à la reconnaissance des techniciens et des sociétés en technique frigorifique");
rep("[x] Oui, et c'est la responsabilité de l'entreprise en technique frigorifique agréée/enregistrée pour laquelle il travaille de le lui fournir");
rep("[ ] Non, c'est la responsabilité de chaque entreprise en technique frigorifique agréé de définir le matériel minimum que chaque technicien frigoriste certifié doit posséder");
rep("[ ] Uniquement s'il intervient sur des équipements contenant plus de 50 tonnes équivalent CO2 de réfrigérant fluoré");

quest("AgrFroid217 : Qui le technicien frigoriste certifié doit il impérativement informer en cas de pertes relatives en agent réfrigérant fluoré trop élevées.://a");
rep("[ ] L'administration wallonne/bruxelloise");
rep("[ ] La Direction de l'entreprise dans laquelle travaille le technicien frigoriste");
rep("[x] L'exploitant de l'équipement concerné");
rep("[ ] La police compétente sur le territoire où est implanté l'équipement concerné");

quest("AgrFroid218 : Une entreprise en technique frigorifique agréée/enregistrée://a");
rep("[x] doit pouvoir fournir à ses techniciens frigoristes certifiés au minimum la matériel défini dans les arrêtés régionaux");
rep("[ ] doit posséder un groupe de récupération sauf si elle ne travaille que sur des équipements de climatisation de type monosplit");
rep("[ ] doit posséder un groupe de récupération sauf si elle ne travaille que sur des pompes à chaleur");
rep("[ ] doit disposer d'un groupe de récupération uniquement si elle travaille sur des équipements contenant des HCFC");

quest("AgrFroid219 : Une entreprise en technique frigorifique spécialisée / enregistrée doit posséder://a");
rep("[x] une pompe à vide à deux étages");
rep("[ ] une pompe à vide à 1 étage");
rep("[ ] une pompe à vide à galets");
rep("[ ] une pompe permettant de vider les vannes de l'air et de l'humidité");

quest("AgrFroid220 : Au vu de la réglementation de la RW/RBC, à quelle exigence une pompe à vide doit-elle satisfaire ?://a");
rep("[ ] Elle doit aspirer au moins 250 m3/h");
rep("[x] Il doit s'agir d'un modèle à deux étages");
rep("[ ] Il doit s'agir d'un modèle à trois étages");
rep("[ ] Il est nécessaire qu'elle puisse aspirer jusqu'à 270 torr");

quest("AgrFroid221 : Au vu de la réglementation de la RW/RBC, quelle exigence la balance d'un technicien frigoriste doit-elle notamment satisfaire ?://a");
rep("[ ] il doit s'agir d'une balance électronique");
rep("[ ] une balance à deux aiguilles une pour les kilos et une pour les grammes");
rep("[x] elle doit posséder une précision minimale de 10 g pour des poids inférieurs à 30kg");
rep("[ ] elle doit posséder une précision de 1g pour des poids inférieurs à 30kg");

quest("AgrFroid222 : L'huile vidangée d'un compresseur frigorifique://a");
rep("[x] est considérée comme déchet dangereux");
rep("[ ] est considérée comme déchet non dangereux");
rep("[ ] après filtration, peut être brûlée dans un foyer au mazout");
rep("[ ] peut être utilisée pour graisser l'extérieur de certains raccords flare");

quest("AgrFroid223 : Une entreprise en technique frigorifique agréée/enregistrée://a");
rep("[x] peut transporter les déchets résultant exclusivement des interventions menées par ses propres techniciens frigoristes certifiés");
rep("[ ] peut transporter tous les déchets d'un chantier y compris, ceux des autres corps de métier");
rep("[ ] ne peut en aucune manière transporter des déchets quels qu'ils soient");
rep("[ ] ne peut transporter que les déchets non dangereux d'un client");

quest("AgrFroid224 : Lors de la mise hors service définitive d'une installation frigorifique, le technicien certifié/qualifié://a");
rep("[ ] doit démonter l'installation dans les 24 heures suivant la décision prise par l'administration régionale compétente en matière de déchets");
rep("[ ] peut la démonter sans problème et mettre au rebut toutes les pièces");
rep("[x] doit récupérer le fluide frigorigène et l'huile avant démontage");
rep("[ ] doit d'abord marquer les éléments avant de les démonter");

quest("AgrFroid225 : L'entreprise en technique frigorifique spécialisée/enregistrée peut confier les fluides récupérés qu'elle a stockés://a");
rep("[x] à une entreprise agréé pour la collecte et le transport de déchets dangereux");
rep("[ ] à tous les transporteurs de déchets");
rep("[ ] à n'importe quel transporteur à condition qu'il soit localisé à moins de 50 km et ce en vue de limiter les impacts environnementaux liés au transport");
rep("[ ] à un transporteur qui possède une citerne pour évider une fuite vers l'extérieur");

quest("AgrFroid226 : La validité du certificat délivré aux techniciens en RBC ou en RW://a");
rep("[ ] Est valable 5 ans mais le certificat perd sa validité si le technicien change d'employeur.");
rep("[x] Est de 5 ans et peut être renouvelé si le technicien réussit un examen de mise à niveau.");
rep("[ ] Est de 10 ans et peut être renouvelé si le technicien réussit un examen de mise à niveau.");
rep("[ ] Est indéterminée mais tous les 5 ans le technicien doit suivre une formation continuée d'une durée minimale de 8 heures.");

quest("AgrFroid227 : Où peut-on passer l'examen en vue de l'obtention du certificat d'aptitude en technique du froid?://a");
rep("[ ] Dans tous les centres de formation ouverts aux classes moyennes");
rep("[ ] Dans toutes les universités de Belgique");
rep("[x] Uniquement dans un centre d'examen reconnu par les autorités régionales");
rep("[ ] Dans chaque école ou centre de formation où l'on donne des cours sur la technique du froid");

quest("AgrFroid228 : Qui peut intervenir sur le circuit frigorifique d'un équipement contenant 10 kg de NH3 ?://a");
rep("[ ] Un technicien frigoriste certifié ou une personne travaillant sous sa responsabilité");
rep("[ ] Exclusivement un technicien frigoriste certifié");
rep("[x] Le NH3 n'est pas visé par la réglementation européenne ou régionale sur les gaz fluorés. Ces réglementations ne définissent dès lors rien à ce sujet");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique agrée");

quest("AgrFroid229 : Un technicien frigoriste qualifié doit disposer d'une balance précise à 10 g près :://a");
rep("[ ] s'il est muni d'un cylindre à réfrigérant d'une capacité de plus de 30 kg");
rep("[ ] s'il est muni d'un cylindre à réfrigérant d'une capacité de 300 kg");
rep("[x] s'il est muni d'un cylindre d'une capacité inférieure à 30 kg");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid230 : A quelle fréquence le technicien de catégorie I doit-il mettre à jour ses compétences ?://a");
rep("[ ] Deux ans à compter de la date de délivrance");
rep("[ ] Trois ans à compter de la date de délivrance");
rep("[x] Cinq ans à compter de la date de délivrance");
rep("[ ] Six ans à compter de la date de délivrance");

quest("AgrFroid231 : Le registre est-il toujours obligatoire ?://a");
rep("[ ] Oui, dans tous les cas, le registre est obligatoire pour les installations de réfrigération");
rep("[x] Non. Il ne l'est que pour les installations d'une capacité nominale de >= 3 kg de réfrigérant ou dont la puissance électrique est supérieure à 10 kW ou dont la capacité nominale du fluide est supérieur ou égale à 5 T éq. CO2");
rep("[ ] Non. Il ne l'est que pour les installations d'une capacité nominale >= 5 kg de réfrigérant ou dont la capacité nominale du fluide est supérieur ou égale à 6 T éq. CO2 ou dont la puissance électrique est > 10 kW");
rep("[ ] Non. Il ne l'est que pour les installations d'une capacité nominale de plus de 300 kg de réfrigérant");

quest("AgrFroid232 : Le chargement ou l'ajout de réfrigérant dans une installation contenant du HFC doit être réalisé par :://a");
rep("[x] un technicien frigoriste qualifié travaillant dans une entreprise en technique du froid enregistrée");
rep("[ ] un technicien qualifié travaillant dans une entreprise en technique du froid non enregistrée");
rep("[ ] un technicien sous la surveillance d'un frigoriste expérimenté");
rep("[ ] Aucune des 3 réponses précédentes ne sont correctes");

quest("AgrFroid233 : Le chargement ou l'ajout de réfrigérant dans une installation contenant du HCFC :://a");
rep("[ ] est réalisé par un technicien frigoriste qualifié travaillant dans une entreprise en technique du froid enregistrée");
rep("[ ] un technicien qualifié travaillant dans une entreprise en technique du froid non enregistrée");
rep("[x] est interdit");
rep("[ ] Aucune des 3 réponses précédentes ne sont correctes");

quest("AgrFroid234 : La perte maximale relative par fuite des installations d'une capacité nominale en réfrigérant de 3 kg ou plus et utilisant des gaz à effet de serre fluorés ne peut pas dépasser :://a");
rep("[ ] 3 % par an");
rep("[x] 5 % par an");
rep("[ ] 10 % par an");
rep("[ ] 15 % par an");

quest("AgrFroid235 : Le certificat d'un technicien frigoriste lui est délivré :://a");
rep("[ ] par un organisme de contrôle");
rep("[x] par un centre d'examen agréé");
rep("[ ] par une entreprise en technique du froid");
rep("[ ] Bruxelles Environnement");

quest("AgrFroid236 : Une entreprise enregistrée en technique du froid employant des frigoristes de catégorie I est une entreprise disposant d'un enregistrement://a");
rep("[ ] qui ne remonte pas à plus de 12 mois à compter de la date du contrôle");
rep("[ ] qui ne remonte pas à plus de 24 mois à compter de la date du contrôle");
rep("[ ] qui ne remonte pas à plus de 3 ans à compter de la date du contrôle");
rep("[x] de durée indéterminée, sous condition de respecter les critères d'enregistrement");

quest("AgrFroid237 : Une entreprise en technique du froid enregistrée doit être contrôlée par :://a");
rep("[ ] une entreprise en technique du froid enregistrée qui exécute des travaux sur les installations de réfrigération");
rep("[ ] un centre d'examen agréé");
rep("[ ] un technicien frigoriste certifié");
rep("[x] par BE (Bruxelles Environnement) ou par toutes autres modalités fixées par l'institut");

quest("AgrFroid238 : L'entreprise en technique du froid enregistrée doit notamment conserver de manière centralisée les données suivantes :://a");
rep("[x] la quantité d'agent réfrigérant qui a été ajoutée ou vidangée dans chaque installation (+le motif de l'opération)");
rep("[ ] cette obligation ne relève pas de sa responsabilité, mais de celle de l'exploitant de l'installation");
rep("[ ] le lieu du stockage du réfrigérant chez le client");
rep("[ ] un registre des prestations (heures normales et supplémentaires) de ses techniciens frigoristes");

quest("AgrFroid239 : Un frigoriste est-il autorisé à réutiliser du réfrigérant de type HFC recyclé et, si oui, où ?://a");
rep("[ ] Oui, après l'avoir déshydraté et après s'être fait délivrer un document attestant de sa qualité");
rep("[ ] Oui, s'il a été déclaré apte à une réutilisation, et ce où que ce soit");
rep("[x] Oui, s'il a été jugé en bon état, il peut être réutilisé sur le même site que celui où se trouve l'installation de réfrigération");
rep("[ ] On ne peut jamais réutiliser du réfrigérant vidangé");

quest("AgrFroid240 : Le réfrigérant d'une installation contenant 10 kg de HCFC doit être vidangé par :://a");
rep("[ ] un technicien frigoriste certifié travaillant dans une entreprise en technique du froid qui n'a pas été enregistrée");
rep("[ ] un technicien frigoriste sous la surveillance d'un frigoriste expérimenté");
rep("[x] un technicien frigoriste certifié travaillant dans une entreprise en technique du froid enregistrée.");
rep("[ ] Les 3 réponses précédentes sont possibles");

quest("AgrFroid241 : Quelles sont les installations classées soumises à un contrôle obligatoire régulier de leur étanchéité ?://a");
rep("[x] Uniquement celles fonctionnant au HFC et d'une capacité nominale en réfrigérant de plus de 5 tonnes équivalent CO2 (de plus de 10 tonnes équivalent CO2 si hermétique)");
rep("[ ] Uniquement celles fonctionnant au HFC, au HCFC, au NH3 ou au CO2 et d'une capacité nominale en réfrigérant de plus de 3 kg");
rep("[ ] Toutes les installations classées, quel que soit le type d'agent réfrigérant et la capacité nominale en réfrigérant");
rep("[ ] Toutes les installations classées fonctionnant au HFC et au HCFC, quelle que soit leur capacité");

quest("AgrFroid242 : S'il s'avère après réparation que la perte par fuite d'une installation classée au R134a ne peut pas être ramenée en dessous de 5 %, dans quel délai doit-elle être normalement mise hors service ?://a");
rep("[ ] Dans un délai de 6 mois");
rep("[x] Dans un délai de 12 mois");
rep("[ ] Dans un délai de 18 mois");
rep("[ ] Après 3 essais infructueux pour en restaurer l'étanchéité 4 Questions en relation avec les réfrigérants et le risque d’émission");

quest("AgrFroid243 : Pour quelle raison pourrait-on utiliser de l'eau dans le circuit secondaire en vue d'appliquer un refroidissement indirect ?://a");
rep("[ ] Pour réduire le coût de l'installation");
rep("[ ] Le recours à un réfrigérant secondaire permet de consommer beaucoup moins d'énergie");
rep("[x] Cela permet de réduire la quantité de réfrigérant dans le circuit primaire");
rep("[ ] Cela permet d'opérer à une température d'évaporation plus basse et donc, de consommer moins d'énergie");

quest("AgrFroid244 : Pourquoi est-il si important de charger la bonne quantité de réfrigérant dans une installation ?://a");
rep("[ ] Parce qu'il est important d'économiser le réfrigérant");
rep("[ ] On doit toujours de charger avec une réserve de 20 %");
rep("[ ] Parce que c'est la loi");
rep("[x] Parce c'est seulement ainsi que l'installation fonctionnera dans des conditions optimales");

quest("AgrFroid245 : Comment mettre hors pression et vider de son réfrigérant une petite installation dépourvue de vannes d'isolement avec prises de pression?://a");
rep("[ ] On fait prudemment un trou dans la conduite de liquide et on laisse le réfrigérant s'échapper");
rep("[x] On place une vanne à percer sur une conduite appropriée sur laquelle on place les manifolds, ainsi que le groupe de récupération");
rep("[ ] On perce prudemment un trou dans la conduite de liquide et on y branche un raccord rapide spécial relié à un dispositif d'aspiration");
rep("[ ] On a l'habitude de mettre ces installations à la casse telles quelles");

quest("AgrFroid246 : Quelle est la quantité maximale de réfrigérant (en pourcentage) avec laquelle on peut remplir une bouteille de récupération?://a");
rep("[ ] 55,00 %");
rep("[ ] 98,00 %");
rep("[x] 80,00 %");
rep("[ ] 60,00 %");

quest("AgrFroid247 : Le tirage au vide d'une installation a pour but :://a");
rep("[ ] De permettre un nettoyage de la surface intérieure du tuyau");
rep("[ ] D'en aspirer les gaz incondensables");
rep("[ ] D'en aspirer l'humidité");
rep("[x] D'enlever les gaz incondensables et l'humidité");

quest("AgrFroid248 : On peut éviter la présence d'humidité dans une installation neuve en :://a");
rep("[ ] Utilisant des tuyaux inoxydables");
rep("[x] Après avoir effectué le test de pression, en appliquant un vide poussé dans l'installation après son montage");
rep("[ ] En employant exclusivement de l'huile sans humidité");
rep("[ ] En n'utilisant jamais d'eau pour refroidir des pièces après les avoir soudées");

quest("AgrFroid249 : Que se passe-t-il lorsque des réfrigérants fluorés entrent en contact avec le feu ?://a");
rep("[ ] Ils prennent immédiatement feu");
rep("[ ] Rien, ces réfrigérants sont ininflammables");
rep("[x] Il se produit un dégagement de substances toxiques provenant de la décomposition du fluide");
rep("[ ] Il se forme des produits de décomposition, mais ceux-ci ne sont pas toxiques");

quest("AgrFroid250 : Combien de fois faut-il changer l'huile d'un compresseur qui a grillé (burn-out) ?://a");
rep("[ ] Deux fois maximum : une fois après le burn-out et une fois avant la pose du filtre définitif");
rep("[x] Autant de fois que nécessaire pour éliminer toutes traces d'acides contenues dans l'huile");
rep("[ ] Une fois après le burn-out et une fois lors du démontage du filtre de burn-out");
rep("[ ] Il ne faut jamais changer l'huile des compresseurs");

quest("AgrFroid251 : Une fuite de réfrigérant fluoré, de R134a par exemple, dans un espace clos :://a");
rep("[ ] Est dangereuse parce que les réfrigérants fluorés sont toxiques");
rep("[x] Peut être mortelle à fortes concentrations, car elle abaisse la concentration d'oxygène dans l'air et provoquent l'asphyxie");
rep("[ ] Est dangereuse parce que les vapeurs de réfrigérant fluoré forment un mélange inflammable avec l'air ambiant");
rep("[ ] Est sans danger parce que la densité des vapeurs de réfrigérant fluoré est beaucoup plus basse que celle de l'air");

quest("AgrFroid252 : Quels problèmes se produisent à haute température lorsque des HFC sont utilisés comme réfrigérants ?://a");
rep("[x] Des composés acides se forment");
rep("[ ] Aucun problème car ils sont conçus pour résister à des températures élevées");
rep("[ ] Un risque d'explosion apparaît");
rep("[ ] Des composés basiques se forment");

quest("AgrFroid253 : Le sol de la salle des machines :://a");
rep("[x] Doit toujours être propre pour pouvoir détecter les traces d'huile liée à une fuite de fluide frigorigène");
rep("[ ] Doit être réalisé exclusivement en béton lisse");
rep("[ ] Doit pouvoir supporter une charge d'au moins 2 t/m²");
rep("[ ] Doit être lisse et lavable");

quest("AgrFroid254 : Quand doit-on craindre des problèmes de corrosion lorsqu'on utilise de l'huile polyol ester dans une installation ?://a");
rep("[x] Quand l'huile ester a absorbé de l'humidité");
rep("[ ] L'huile polyester est un lubrifiant moderne avec lequel ce problème ne se pose pas");
rep("[ ] Il ne faut pas en craindre, car ils n'apparaissent qu'avec des huiles minérales");
rep("[ ] Quand on n'a pas ajouté d'additif à l'huile");

quest("AgrFroid255 : Selon le Règlement européen 517/2014 comment peut-on déterminer la quantité totale de fluide frigorigène à récupérer d'une installation et donc prévoir le nombre de bouteilles de récupération://a");
rep("[x] en consultant le registre (livret de bord) de l'installation");
rep("[ ] en pesant l'installation et en déterminant son poids à vide à partir des catalogues");
rep("[ ] exclusivement en pesant la quantité de fluide récupéré au terme d'une vidange complète de l'installation");
rep("[ ] en prenant le même volume que la bouteille à liquide");

quest("AgrFroid256 : Peut-on réaliser un essai de pression avec un réfrigérant fluoré ?://a");
rep("[ ] Oui, parce que cela facilite le repérage des fuites avec un détecteur électronique");
rep("[x] Non, il faut utiliser un gaz inerte sec");
rep("[ ] Oui, un mélange de réfrigérant et de gaz inerte facilite la détection des fuites");
rep("[ ] Les trois réponses précédentes sont bonnes");

quest("AgrFroid257 : De quelle façon des vibrations peuvent-elles donner lieu à des fuites sur une installation ?://a");
rep("[ ] Les vibrations et les chocs provoquent l'ouverture des soupapes de sûreté");
rep("[x] En engendrant une fatigue du métal susceptible d'entraîner une rupture des conduites et des raccords");
rep("[ ] Les vibrations induisent un ceintrage des tuyauteries, qui peuvent induire des fuites");
rep("[ ] Le bouchon de remplissage de réfrigérant se desserrera sous l'effet des vibrations, ce qui provoquera des fuites");

quest("AgrFroid258 : Pourquoi un détendeur thermostatique à raccords flare est-il source de fuites?://a");
rep("[x] car le raccord côté évaporateur se desserre sous l'effet de la différence de température");
rep("[ ] car le capillaire peut se casser suite aux vibrations et laisser partir le fluide frigorigène de l'installation");
rep("[ ] car les vibrations du détendeur provoquent le desserrage des raccords internes");
rep("[ ] car la HP et la BP sont dans le détendeur. Cette différence de pression peut provoquer des fuites vers l'atmosphère");

quest("AgrFroid259 : Quelles est la meilleure méthode pour prévenir les fuites au niveau du détendeur thermostatique?://a");
rep("[ ] en l'isolant convenablement");
rep("[ ] en fixant son capillaire solidement");
rep("[x] en utilisant un détendeur à braser");
rep("[ ] en limitant au maximum la différence de pression");

quest("AgrFroid260 : Pourquoi un raccord brasé ne doit-il pas être refroidi trop rapidement ?://a");
rep("[x] Pour éviter l'apparition de fissures par retrait");
rep("[ ] Pour éviter que le tube externe ne se fissure");
rep("[ ] Pour ne pas que le cuivre perde de sa dureté");
rep("[ ] Pour éviter une oxydation excessive du tuyau");

quest("AgrFroid261 : Selon les codes de bonne pratique, à quoi doit-on être attentif quand on utilise un manifold sur différentes installations ?://a");
rep("[ ] A rien de spécial, car les manifolds sont à usage universel");
rep("[x] Il est déconseillé d'employer le même manifold sur des installations contenant des huiles de nature différente");
rep("[ ] On doit impérativement employer un manifold différent pour chaque réfrigérant");
rep("[ ] Il faut nettoyer soigneusement le manifold à l'eau et au savon avant de l'utiliser avec une autre huile");

quest("AgrFroid262 : Quel fluide doit-on utiliser pour soumettre une nouvelle installation à un essai de pression avant de la mettre en service ?://a");
rep("[ ] De l'air comprimé");
rep("[ ] De l'oxygène");
rep("[x] De l'azote sec");
rep("[ ] De l'eau");

quest("AgrFroid263 : Le remplissage d'une installation de réfrigération avec du réfrigérant doit au minimum se faire avec :://a");
rep("[ ] un manifold à raccords souples, un cylindre à réfrigérant et un cylindre de remplissage");
rep("[ ] un manifold à raccords souples, un cylindre de réfrigérant et une balance. Si l'installation est dotée d'un voyant liquide la balance n'est pas nécessaire");
rep("[x] un manifold à raccords souples, un cylindre de réfrigérant et une balance à réfrigérant");
rep("[ ] Les 3 réponses précédentes sont bonnes");

quest("AgrFroid264 : Comment peut-on détecter une fuite pendant un essai de pression à l'azote sec ?://a");
rep("[ ] En utilisant un détecteur électronique de fuites");
rep("[ ] En utilisant une lampe de détection de fuites marchant au gaz");
rep("[x] En appliquant une solution savonneuse");
rep("[ ] Avec la flamme d'un brûleur à gaz");

quest("AgrFroid265 : Dans une installation conçue pour fonctionner avec des HFC, un manque de réfrigérant occasionné par une fuite provoque:://a");
rep("[x] l'apparition de bulles dans le voyant liquide");
rep("[ ] une augmentation de la haute pression");
rep("[ ] une augmentation de l'ampérage du moteur du compresseur");
rep("[ ] l'apparition de givre sur la ligne liquide et une augmentation de la BP");

quest("AgrFroid266 : L'apparition de bulles dans le voyant liquide://a");
rep("[ ] Est toujours due à un manque de réfrigérant");
rep("[x] Peut par exemple être due à une électrovanne défectueuse ou à un filtre partiellement bouché");
rep("[ ] A une condensation adéquate");
rep("[ ] A un détendeur trop fermé");

quest("AgrFroid267 : Après avoir monté le circuit, peut-on le soumettre à un essai de pression avec du réfrigérant ?://a");
rep("[ ] Il est recommandé de le tester avec du réfrigérant parce que cela facilite la détection des fuites");
rep("[x] Non, on ne peut mettre du fluide frigorigène dans une installation qu'après avoir constaté son étanchéité grâce au test de pression et au tirage au vide");
rep("[ ] En général, le circuit des installations à compresseur ouvert sera soumis à un essai de pression avec du réfrigérant");
rep("[ ] Avant de procéder à des essais de pression avec du réfrigérant, il faut attendre qu'il soit à une pression suffisamment élevée");

quest("AgrFroid268 : Vis-à-vis de la protection de l'environnement, lors du choix du compresseur quel est celui qu'il vaut mieux éviter://a");
rep("[x] compresseur ouvert");
rep("[ ] compresseur hermétique");
rep("[ ] compresseur semi-hermétique");
rep("[ ] aucun, tous les compresseurs sont bons");

quest("AgrFroid269 : Quand on pose une conduite de réfrigérant, de quoi faut-il tenir compte en fonction des variations de température et des longueurs mises en œuvre ?://a");
rep("[ ] Il faut que les tuyaux soient suffisamment épais");
rep("[ ] Il faut une isolation d'au moins 35 mm");
rep("[ ] Il faut des amortisseurs de vibrations tous les 10 mètres");
rep("[x] Il faut tenir compte des phénomènes de dilatation et de contraction");

quest("AgrFroid270 : Quels sont les raccords qu'il vaut mieux réaliser par brasage fort ?://a");
rep("[ ] Les raccords indémontables");
rep("[x] le maximum de raccord");
rep("[ ] Les raccords aux filtres et aux électrovannes");
rep("[ ] Les raccords exposés à des pressions supérieures à 25 bar");

quest("AgrFroid271 : Quelle installation faut-il préférer pour réduire le plus possible le risque de fuites ?://a");
rep("[ ] Une installation comportant peu de raccords évasés");
rep("[ ] Une installation comprenant un compresseur semi-hermétique et le plus possible de raccords évasés");
rep("[ ] Une installation à compresseur ouvert tournant à bas régime");
rep("[x] Une installation comprenant un compresseur hermétique et le maximum de raccord à souder");

quest("AgrFroid272 : Quelle sera l'installation qui engendrera le moins de fuites?://a");
rep("[ ] une installation avec des raccords flare");
rep("[ ] une installation avec un compresseur hermétique et des raccords flare");
rep("[ ] une installation dans laquelle la moitié des raccords sont brasés et l'autre moitié sont des flares");
rep("[x] une installation avec un compresseur semi-hermétique et un maximum de raccords brasés");

quest("AgrFroid273 : Un manque de fluide dans une installation en fonctionnement provoque les symptômes suivants:://a");
rep("[ ] une BP et une HP élevées");
rep("[ ] de faibles températures d'aspiration et de refoulement");
rep("[ ] une surchauffe faible et une température d'évaporation élevée");
rep("[x] une surchauffe élevée et une température d'évaporation basse");

quest("AgrFroid274 : Quand une installation fonctionne bien, que voit-on dans le voyant liquide monté en aval du filtre déshydrateur?://a");
rep("[ ] Le niveau de l'huile");
rep("[ ] On voit qu'il est rempli à moitié de réfrigérant");
rep("[ ] Des bulles de gaz");
rep("[x] qu'il est rempli à 100 % de réfrigérant et qu'il ne contient pas de bulles de gaz");

quest("AgrFroid275 : Une fuite de R134a dans un espace clos://a");
rep("[ ] est dangereuse parce que ce réfrigérant est toxique");
rep("[x] peut être mortelle à fortes concentrations, car elle provoque une baisse de la concentration d'oxygène dans l'air");
rep("[ ] est dangereuse parce que le mélange R134a/air est inflammable");
rep("[ ] est sans danger parce que la masse spécifique de la vapeur de ce réfrigérant est nettement plus basse que celle de l'air");

quest("AgrFroid276 : Une fuite sur la ligne liquide de R134a dans une cave://a");
rep("[x] peut être dangereuse car les hautes concentrations de fluide provoquent l'asphyxie");
rep("[ ] peut être dangereuse car le fluide fluoré est caractérisé par une toxicité élevée");
rep("[ ] n'est pas dangereuse car le fluide fluoré est plus léger que l'air et part à l'extérieur");
rep("[ ] n'est pas dangereuse puisque le fluide restera à l'état liquide et partira à l'égout");

quest("AgrFroid277 : Qu'est-ce qui détermine principalement le choix du réfrigérant d'une installation ?://a");
rep("[ ] Le prix");
rep("[ ] Le type de compresseur");
rep("[x] Ses propriétés thermodynamiques, ainsi que son GWP et TEWI");
rep("[ ] Le type du réfrigérant n'a pas tellement d'importance. Ce qui compte, c'est que ce soit un réfrigérant");

quest("AgrFroid278 : Quel est le principal avantage d'un compresseur hermétique ?://a");
rep("[ ] Sa plus grande capacité");
rep("[x] Sa bonne étanchéité");
rep("[ ] Sa plus grande plage de régimes");
rep("[ ] Un choix plus vaste d'entraînements");

quest("AgrFroid279 : Quel réfrigérant à faible PRP/GWP est maintenant employé dans les climatiseurs split ?://a");
rep("[ ] Le R134a");
rep("[x] Le R32");
rep("[ ] Le R1234yf");
rep("[ ] Le R410A");

quest("AgrFroid280 : Où installe-t-on le plus fréquemment un système électronique de détection des fuites permanent ?://a");
rep("[x] Dans la salle des machines");
rep("[ ] A proximité d'une fuite supposée");
rep("[ ] A proximité d'une pièce contenant du réfrigérant");
rep("[ ] L'emplacement de montage ne joue aucun rôle, l'appareil se réarmera automatiquement partout");

quest("AgrFroid281 : Quand et pourquoi applique-t-on la méthode directe de détection des fuites ?://a");
rep("[x] Soit parce que cette méthode a été choisie pour effectuer un contrôle d'étanchéité. Ou alors en vue de déterminer avec précision l'emplacement de la fuite, suite a une présomption de fuite constatée par la méthode indirecte");
rep("[ ] Lorsque la méthode de Mollier ou la méthode avec égalisation de pression externe est insuffisante");
rep("[ ] La méthode de mesure directe ne s'emploie que dans les locaux où la ventilation ou la circulation d'air est intense");
rep("[ ] La méthode de mesure directe ne peut s'employer que si l'installation a été entièrement tirée au vide");

quest("AgrFroid282 : Quand applique-t-on la méthode indirecte de détection des fuites ?://a");
rep("[ ] Cette méthode doit être utilisée lorsque la méthode de Mollier ou la méthode avec égalisation de pression externe est insuffisante");
rep("[ ] La méthode de mesure indirecte ne peut s'employer que si l'installation a été entièrement tirée au vide. Elle doit être systématiquement mise en œuvre avant la mise en fonctionnement d'une installation neuve");
rep("[x] Elle est appliquée en vue d'un contrôle périodique d'étanchéité");
rep("[ ] Elle est utilisée pour déterminer avec précision l'emplacement de la fuite au moyen de détecteurs");

quest("AgrFroid283 : En quoi consiste la méthode indirecte de détection des fuites.://a");
rep("[ ] Par opposition à la détection à l'aide d'un détecteur manuel, elle consiste à détecter la présence d'une fuite à l'aide d'un détecteur de gaz fixe placé dans le local technique");
rep("[ ] Elle consiste à réaliser une analyse des risques de fuites par utilisation d'un logiciel adapté, qui tient compte des différents éléments constitutifs de l'équipement frigorifique");
rep("[ ] Elle consiste à détecter les fuites à l'aide d'un gaz traceur introduit dans l'équipement frigorifique");
rep("[x] Elle consiste à d'abord effectuer un contrôle visuel et manuel de l'équipement, puis à analyser un ou plusieurs paramètres de fonctionnement influencés par une perte de réfrigérant");

quest("AgrFroid284 : Quels paramètres peut-on analyser selon la méthode indirecte pour vérifier que l'installation a ou n'a pas de fuite?://a");
rep("[x] La pression, la température, le courant du compresseur, les niveaux de liquides et le volume de la quantité rechargée");
rep("[ ] Uniquement la pression, la température, les niveaux de liquides et le volume de la quantité rechargée ; le courant du compresseur est sans intérêt");
rep("[ ] Uniquement la pression, les niveaux de liquides et le volume de la quantité rechargée ; le courant du compresseur est sans intérêt");
rep("[ ] La pression, la température, le courant du compresseur et les niveaux de liquides ; le volume de la quantité rechargée est sans intérêt");

quest("AgrFroid285 : Comment peut-on éviter les gaz incondensables dans une installation qui n'a pas encore fonctionné ?://a");
rep("[ ] Il n'y a pas besoin de les éliminer");
rep("[ ] En faisant soigneusement le vide jusqu'à une pression de 470 pascals ou moins");
rep("[x] Après son montage, on réalise le test de pression pour vérifier l'absence de fuite, puis on effectue soigneusement le vide, jusqu'à une pression de 270 Pa ou moins");
rep("[ ] En plaçant un déshydrateur");

quest("AgrFroid286 : Comment peut-on éliminer les gaz incondensables d'une installation déjà en service ?://a");
rep("[ ] En plaçant des dessiccateurs conçus spécialement à cette fin (dessiccateurs dits Pascal)");
rep("[ ] En vidangeant le réfrigérant et en rechargeant l'installation avec du réfrigérant neuf");
rep("[x] 1. Vérifier le réglage et le fonctionnement du pressostat BP. 2. Si le pressostat BP coupe en dessous de 0 bar. 2. vérifier l'absence de fuites côté BP. 3. Vidanger et tirer au vide. 4. Recharger avec du fluide neuf ou régénéré");
rep("[ ] Toutes les réponses précédentes sont correctes");

quest("AgrFroid287 : Un technicien certifié doit-il aussi avoir avec lui une solution savonneuse ou un produit similaire lorsqu'il est déjà équipé d'un détecteur électronique de fuites ?://a");
rep("[ ] Non, la solution savonneuse est superflue");
rep("[ ] Pas spécifiquement. Il doit être muni soit d'un détecteur de fuites, soit d'une solution savonneuse");
rep("[x] Oui, car en cas de fuite importante, le détecteur ne permettra pas de localiser la fuite");
rep("[ ] Oui, parce car si la sonde du détecteur est détériorée suite à une concentration trop élevée de réfrigérant, il peut continuer à travailler avec une solution savonneuse 5 Questions relatives aux connaissances générales en technique frigorifique");

quest("AgrFroid288 : Quel est le paramètre qui permet le réglage de la pression de condensation sur les condenseurs refroidis par eau?://a");
rep("[ ] Le débit de réfrigérant");
rep("[ ] Le débit d'eau et de réfrigérant");
rep("[x] Le débit d'eau");
rep("[ ] Le débit dans la conduite de refoulement");

quest("AgrFroid289 : Pourquoi doit-on se servir d'un coupe-tubes plutôt que d'une scie ?://a");
rep("[ ] Parce que l'assemblage soudé de tubes sciés est de moins bonne qualité");
rep("[ ] Parce qu'avec un tube scié, il n'est pas possible de faire un raccord évasé");
rep("[x] Parce que lorsque le tuyau est scié des limailles peuvent tomber à l'intérieur");
rep("[ ] Parce qu'avec un coupe-tubes, on peut couper des tubes beaucoup plus épais qu'avec une scie");

quest("AgrFroid290 : La brasure sous atmosphère d'azote sec permet:://a");
rep("[ ] de refroidir les pièces pour empêcher qu'elles ne fondent");
rep("[ ] de garder une réserve de température");
rep("[x] de garder propre l'intérieur des pièces et éviter l'oxydation");
rep("[ ] de garder en réserve de la soudure et donc l'installation sera moins chère");

quest("AgrFroid291 : Remplir une installation avec un réfrigérant en phase liquide comporte un risque. Lequel ?://a");
rep("[ ] On n'a aucun contrôle sur la quantité de réfrigérant à ajouter");
rep("[ ] Le risque de mettre une quantité de fluide trop importante est plus élevé");
rep("[ ] Il se peut que la pression d'aspiration de l'installation soit trop basse de ce fait");
rep("[x] Il existe un risque de coup de liquide");

quest("AgrFroid292 : Un remplissage en phase vapeur est :://a");
rep("[ ] Préférable au remplissage en phase liquide parce que le processus est plus facile à contrôler dans ce cas-là");
rep("[x] plus lent que le remplissage en phase liquide (Il est néanmoins techniquement requis avec certains réfrigérants)");
rep("[ ] Tout aussi indiqué que le remplissage en phase liquide");
rep("[ ] Uniquement réalisable sur de grandes installations");

quest("AgrFroid293 : Peut-on se servir d'eau comme fluide pour tester l'étanchéité d'un circuit de réfrigération ?://a");
rep("[x] Non, jamais dans une installation frigorifique");
rep("[ ] Uniquement si c'est de l'eau distillée");
rep("[ ] Oui, de préférence");
rep("[ ] Uniquement à des pressions supérieures à 20 bar");

quest("AgrFroid294 : Quelles prescriptions doivent respecter les tuyauteries frigorifiques en cuivre?://a");
rep("[ ] Etre faites en un alliage de cuivre spécial, facile à souder en technique du froid et possédant un point de fusion égal à 987 °C");
rep("[ ] Etre en cuivre doux, pur, spécialement recuit et livré exclusivement en bobine");
rep("[ ] Avoir des parois d'une épaisseur minimale de 1 mm et résister à une pression d'au moins 25 bar");
rep("[x] Etre en cuivre pur, déshydratées et polies à l'intérieur, et également prévues pour travailler sous pression");

quest("AgrFroid295 : Quelle précaution doit-on généralement prendre lors de travaux de brasure réalisés sur les détendeurs thermostatiques?://a");
rep("[ ] on utilise la brasure tendre et avec une petite flamme");
rep("[ ] on ne doit pas prendre aucune précaution particulière si ce n'est travailler le plus rapidement possible et avec une petite flamme");
rep("[x] on doit éviter de surchauffer l'intérieur du détendeur en protégeant la tête thermostatique, par exemple en l'enveloppant avec un linge mouillé");
rep("[ ] on ne doit jamais braser un détendeur, il faut pour cela exclusivement utiliser des raccords flare");

quest("AgrFroid296 : Quels sont les symptômes possibles traduisant un manque de fluide frigorigène dans une installation en fonctionnement?://a");
rep("[x] grande surchauffe à la sortie de l'évaporateur et une température de refoulement élevée");
rep("[ ] petite surchauffe à la sortie de l'évaporateur et une faible température de refoulement");
rep("[ ] des températures d'évaporation et de condensation élevées");
rep("[ ] les pressions d'évaporation et de condensation sont élevées");

quest("AgrFroid297 : Le tirage au vide d'une installation a principalement pour but :://a");
rep("[x] de réaliser sa déshydratation");
rep("[ ] de contrôler son étanchéité");
rep("[ ] d'injecter de l'huile dans les conduites pour lubrifier les pièces mobiles");
rep("[ ] de vérifier que le fluide circule bien dans le détendeur");

quest("AgrFroid298 : La brasure sous atmosphère d'azote sec permet:://a");
rep("[ ] de refroidir les pièces pour empêcher qu'elles ne fondent");
rep("[ ] de garder une réserve de température");
rep("[x] de garder propre l'intérieur des pièces et éviter l'oxydation");
rep("[ ] de garder en réserve de la soudure et donc l'installation sera moins chère");

quest("AgrFroid299 : Le remplissage en phase gazeuse (vapeur) est toujours possible dans le cas :://a");
rep("[x] du R134a");
rep("[ ] du R404A");
rep("[ ] du R407C");
rep("[ ] de tous les fluides réfrigérants");

quest("AgrFroid300 : Le remplissage en phase liquide est requis dans le cas :://a");
rep("[ ] du R134a");
rep("[ ] du R507");
rep("[x] du R407C");
rep("[ ] de tous les agents réfrigérants");

theme("St Laurent : L'agrégation du froid - Part4");
debut("Préparation à l'examen sur l'agrégation frigorifique");

quest("AgrFroid300 : Le remplissage en phase liquide est requis dans le cas :://a");
rep("[ ] du R134a");
rep("[ ] du R507");
rep("[x] du R407C");
rep("[ ] de tous les agents réfrigérants");

quest("AgrFroid301 : Le remplissage en phase liquide est :://a");
rep("[ ] préférable au remplissage en phase vapeur parce qu'il facilite le contrôle du processus");
rep("[x] requis pour les mélanges non-azéotropes (R4--)");
rep("[ ] aussi bon que le remplissage en phase vapeur à condition de bien appliquer la méthode à suivre");
rep("[ ] réservé seulement aux grandes installations");

quest("AgrFroid302 : Selon la norme NBN EN 378, le test de pression doit être réalisé://a");
rep("[ ] à 10 bars de pression efficace");
rep("[ ] à 20 bars de pression absolus");
rep("[ ] à 2 fois la pression maximale admissible (PS)");
rep("[x] à une fois la pression maximale admissible (PS)");

quest("AgrFroid303 : Que se passe-t-il dans une installation de réfrigération si la température d'évaporation baisse ?://a");
rep("[ ] La puissance frigorifique augmente et la puissance absorbée diminue");
rep("[ ] La puissance frigorifique baisse et la puissance absorbée augmente");
rep("[x] La puissance frigorifique et la puissance absorbée diminuent");
rep("[ ] La puissance frigorifique et la puissance absorbée augmentent");

quest("AgrFroid304 : Que se passe-t-il dans une installation de réfrigération si la température de condensation augmente ?://a");
rep("[ ] La puissance frigorifique augmente et la puissance absorbée diminue");
rep("[x] La puissance frigorifique diminue et la puissance absorbée augmente");
rep("[ ] La puissance frigorifique et la puissance absorbée diminuent toutes les deux");
rep("[ ] La puissance frigorifique et la puissance absorbée augmentent toutes les deux");

quest("AgrFroid305 : Lorsque la HP diminue://a");
rep("[ ] la puissance absorbée augmente");
rep("[ ] la puissance frigorifique diminue");
rep("[ ] la puissance absorbée augmente, la puissance frigorifique diminue et la puissance du moteur augmente");
rep("[x] la puissance frigorifique augmente");

quest("AgrFroid306 : Sachant que les compresseurs de deux installations frigorifiques différentes, une positive ( + 2°C) et l'autre négative (- 25°C), fournissent la même puissance frigorifique (5 kW par exemple), quelle sera l'affirmation correcte parmi les affirmations suivantes ?://a");
rep("[ ] Les deux compresseurs possèdent le même volume balayé et sont entrainés par le même moteur");
rep("[ ] Le compresseur de l'installation positive possède un volume balayé plus élevé et un moteur électrique plus puissant");
rep("[ ] Les deux compresseurs possèdent le même volume balayé, mais le compresseur de l'installation positive a besoin d'un moteur moins puissant");
rep("[x] Le compresseur de l'installation négative possède un volume balayé plus important ainsi qu'un moteur électrique plus puissant");

quest("AgrFroid307 : Quelle affirmation est correcte dans le cas d'une installation frigorifique avec condenseur à air se trouvant à l'extérieur et une chambre froide négative ?://a");
rep("[ ] les températures de condensation et d'évaporation sont pratiquement constantes toute l'année");
rep("[x] la température de condensation varie plus que la température d'évaporation durant une année");
rep("[ ] la température de condensation reste constante pendant toute l'année, alors que la température d'évaporation varie");
rep("[ ] durant toute l'année, la température de condensation comme la température d'évaporation varient très fortement");

quest("AgrFroid308 : Il y a une flèche sur l'électrovanne. Laquelle des affirmations suivantes est correcte ?://a");
rep("[ ] Si l'on monte l'électrovanne à l'envers, elle fonctionnera correctement malgré tout");
rep("[x] Si l'on monte l'électrovanne à l'envers, il se peut qu'elle ne fonctionne pas, qu'elle fonctionne mal ou qu'elle s'ouvre intempestivement");
rep("[ ] Si l'on monte l'électrovanne à l'envers, elle pourra fonctionner, mais elle opposera une grande résistance à l'écoulement du fluide");
rep("[ ] Cette flèche indique que l'électrovanne doit être montée à l'horizontale");

quest("AgrFroid309 : Quelle influence une hausse de la teneur en argent de la du métal d'apport a-t-elle sur la température ?://a");
rep("[x] Plus la teneur en argent est élevée, plus la température de fusion est basse");
rep("[ ] Plus la teneur en argent est élevée, plus la température de fusion est élevée");
rep("[ ] La teneur en argent n'a pas d'influence sur la température de fusion de la soudure");
rep("[ ] Cela risque de réduire la durabilité de la soudure");

quest("AgrFroid310 : Pour réaliser une bonne brasure dans un circuit frigorifique dont les tuyauteries sont en cuivre il faut utiliser:://a");
rep("[ ] comme métal d'apport de l'étain");
rep("[x] comme métal d'apport de l'argent et utiliser un décapant");
rep("[ ] comme métal d'apport de l'étain et utiliser un décapant");
rep("[ ] comme métal d'apport de l'argent pur");

quest("AgrFroid311 : La teneur minimale en argent pour réaliser une brasure cuivre-cuivre est de://a");
rep("[ ] 40,00 %");
rep("[ ] 20,00 %");
rep("[ ] 10,00 %");
rep("[x] 5,00 %");

quest("AgrFroid312 : La teneur minimale en argent pour réaliser une brasure cuivre-acier est de://a");
rep("[x] 30,00 %");
rep("[ ] 20,00 %");
rep("[ ] 10,00 %");
rep("[ ] 5,00 %");

quest("AgrFroid313 : Quand doit-on remplir une installation frigorifique avec son fluide frigorigène://a");
rep("[ ] le plus rapidement possible après son montage");
rep("[ ] après avoir obtenu la permission du propriétaire de l'installation");
rep("[x] le plus rapidement après avoir réalisé le test de pression et le tirage au vide de l'installation");
rep("[ ] après qu'un organisme agréé ait contrôlé l'installation");

quest("AgrFroid314 : Peut-on relier deux conduites en les soudant à un morceau de tuyau de diamètre plus grand ?://a");
rep("[ ] On peut accepter un raccord réalisé de cette façon s'il subit avec succès un essai de pression");
rep("[ ] Oui, bien entendu, ces raccords sont étanches et de bonne qualité. De plus, c'est ainsi que l'on fait depuis des années");
rep("[ ] Les raccords de ce genre ne sont acceptables que dans la mesure où ils sont réalisés sous flux d'azote");
rep("[x] Non, car cette technique ne permet pas de réaliser un raccord capillaire séparé par fusion ; c'est pourquoi elle est déconseillée et il est préférable d'employer des manchons spéciaux");

quest("AgrFroid315 : Est-il indiqué de réutiliser le réfrigérant provenant d'un moteur de compresseur hermétique grillé ?://a");
rep("[ ] Oui, car cela n'a pas d'influence sur le fonctionnement");
rep("[ ] Oui, moyennant le remplacement des filtres-déshydrateurs de l'installation");
rep("[ ] Oui, si l'on ajoute suffisamment de réfrigérant neuf");
rep("[x] Non, il doit être récupéré et envoyé à l'usine pour y être soit traité, soit détruit");

quest("AgrFroid316 : Une HP élevée et un grand sous-refroidissement peuvent signifier:://a");
rep("[x] qu'il y a trop de fluide dans l'installation ou parfois des incondensables");
rep("[ ] qu'il y a trop peu de fluide dans l'installation");
rep("[ ] que la température ambiante est élevée");
rep("[ ] que la température de condensation est faible");

quest("AgrFroid317 : Une pression de refoulement trop élevée et un sous-refroidissement important peuvent être le signe :://a");
rep("[ ] d'un manque de réfrigérant");
rep("[ ] d'une température ambiante trop élevée");
rep("[x] d'un excès de réfrigérant ou parfois la présence d'incondensables");
rep("[ ] d'une température de condensation trop basse");

quest("AgrFroid318 : Tant un condenseur encrassé qu'un excès de réfrigérant feront monter la haute pression. Comment distinguer ces deux causes ?://a");
rep("[x] Quand il y a un excès de réfrigérant, le sous-refroidissement est important");
rep("[ ] Quand le condenseur est encrassé, le sous-refroidissement est important");
rep("[ ] En cas d'excès de réfrigérant, le sous-refroidissement est peu important");
rep("[ ] En cas d'excès de réfrigérant, la surchauffe est faible");

quest("AgrFroid319 : Une faible pression d'aspiration, une grande surchauffe et un petit sous-refroidissement peuvent signifier:://a");
rep("[ ] qu'il y trop de fluide dans l'installation");
rep("[x] qu'il n'y a pas assez de fluide dans l'installation");
rep("[ ] que le condenseur de l'installation est sale");
rep("[ ] que l'évaporateur de l'installation est sale");

quest("AgrFroid320 : Une faible pression d'aspiration et une petite surchauffe peuvent signifier:://a");
rep("[x] un évaporateur qui ne peut pas évaporer correctement le fluide");
rep("[ ] qu'il y a trop peu de fluide dans l'installation");
rep("[ ] qu'il y a trop de fluide dans l'installation");
rep("[ ] que le réfrigérant est contaminé");

quest("AgrFroid321 : Quels sont les symptômes possibles d'un manque de réfrigérant dans une installation de réfrigération en service ?://a");
rep("[x] Une faible pression d'aspiration, une surchauffe importante et une température de refoulement élevée");
rep("[ ] Une faible surchauffe du réfrigérant à l'extrémité de l'évaporateur et une basse température du gaz refoulé par le compresseur");
rep("[ ] Des températures élevées d'évaporation et de condensation du réfrigérant");
rep("[ ] Une pression d'aspiration élevée, une faible surchauffe du réfrigérant à l'extrémité de l'évaporateur et un sous-refroidissement important");

quest("AgrFroid322 : En dehors de l'azote, quels sont les gaz inertes dont l'usage est autorisé ?://a");
rep("[ ] L'hydrogène et l'hélium");
rep("[ ] Le néon et le radon");
rep("[ ] L'oxygène et l'air");
rep("[x] L'argon et l'hélium");

quest("AgrFroid323 : A quelles exigences les soupapes de sécurité doivent-elles satisfaire ?://a");
rep("[ ] Elles doivent être dotées d'un obturateur spécial destiné à faciliter leur remplacement");
rep("[x] Elles doivent déclencher à 1,1 fois la pression maximale admissible");
rep("[ ] Elles doivent s'ouvrir si la pression dépasse de 2 bar celle indiquée sur la soupape");
rep("[ ] Elles doivent déclencher à 2 fois la pression maximale admissible");

quest("AgrFroid324 : Quels sont les quatre principaux composants d'une installation de réfrigération à compression ?://a");
rep("[ ] L'évaporateur, le condenseur, le filtre-dessiccateur et le regard");
rep("[ ] La conduite d'aspiration, celle de refoulement, celle du liquide et celle de condensation");
rep("[ ] L'évaporateur, le condenseur, le séparateur de liquide et le compresseur");
rep("[x] L'évaporateur, le compresseur, le condenseur et le détendeur");

quest("AgrFroid325 : Qu'est-ce que la conduite d'aspiration ?://a");
rep("[ ] La conduite qui relie le détendeur à l'évaporateur");
rep("[ ] Un synonyme de conduite de refoulement");
rep("[ ] La conduite qui relie le compresseur au filtre-dessiccateur");
rep("[x] La conduite qui relie l'évaporateur au compresseur");

quest("AgrFroid326 : A quelles exigences de qualité l'huile d'une installation de réfrigération doit-elle répondre ?://a");
rep("[ ] Elle ne peut en aucun cas être miscible avec le réfrigérant");
rep("[x] Elle ne doit pas être acide, elle doit être déshydratée et exempte d'impuretés");
rep("[ ] Afin de permettre une meilleure lubrification du compresseur, sa teneur en humidité doit être supérieure à 2 ppm");
rep("[ ] Elle doit être légèrement acide pour prévenir la corrosion");

quest("AgrFroid327 : Pour quelle raison est-il préférable d'avoir une huile miscible avec le réfrigérant://a");
rep("[ ] Afin de la récupérer complètement lors du démantèlement de l'installation");
rep("[ ] Une installation ne peut fonctionner que si ils sont miscibles");
rep("[x] Afin de permettre le retour d'huile au compresseur");
rep("[ ] Pour permettre une meilleure lubrification du compresseur");

quest("AgrFroid328 : Peut-on avoir des problèmes avec l'huile ester (POE), et quand?://a");
rep("[ ] Il s'agit d'un produit de haute qualité qui ne pose aucun problème");
rep("[x] Oui, quand elle a absorbé l'humidité");
rep("[ ] non, puisque c'est un produit pur, les problèmes sont nuls");
rep("[ ] oui, lorsqu'on la mélange avec de l'azote et du fluide frigorigène");

quest("AgrFroid329 : Parmi les définitions suivantes, quelle est celle d'un condenseur ?://a");
rep("[ ] Echangeur de chaleur dans lequel un liquide est refroidi et s'évapore pour former un gaz");
rep("[ ] Pompe à liquide qui produit une hausse de pression en réduisant la chambre de compression");
rep("[x] Echangeur de chaleur dans lequel un gaz comprimé est refroidi et se condense pour former un liquide");
rep("[ ] Echangeur de chaleur qui assure l'évacuation de la vapeur d'eau condensée");

quest("AgrFroid330 : Pourquoi place-t-on un piège à huile ?://a");
rep("[ ] Pour évacuer toute l'huile vers le compresseur lorsque l'installation est à l'arrêt");
rep("[ ] On dote les manomètres haute et basse pression d'un piège à huile pour éviter qu'ils ne soient endommagés");
rep("[ ] L'huile étant plus lourde, elle se déposerait au fond du réservoir de liquide en l'absence de piège");
rep("[x] Pour obtenir un retour d'huile optimal dans la conduite montante");

quest("AgrFroid331 : La teneur minimale en argent pour réaliser une brasure cuivre-laiton est de://a");
rep("[x] 30% ou plus");
rep("[ ] 20,00 %");
rep("[ ] 10,00 %");
rep("[ ] 5,00 %");

quest("AgrFroid332 : A quoi sert un filtre-déshydrateur?://a");
rep("[ ] A séparer l'huile du réfrigérant");
rep("[ ] A éliminer les saletés présentes dans le réfrigérant");
rep("[ ] A débarrasser l'huile de ses particules les plus grosses");
rep("[x] A retenir les impuretés et l'humidité du réfrigérant");

quest("AgrFroid333 : Le compresseur d'une installation de réfrigération :://a");
rep("[x] aspire la vapeur produite dans l'évaporateur et la refoule vers le condenseur");
rep("[ ] aspire la vapeur et refoule le réfrigérant liquide vers l'évaporateur");
rep("[ ] maintient la pression dans l'évaporateur au même niveau que la pression de vapeur saturante");
rep("[ ] maintient au même niveau les pressions dans l'évaporateur et le condenseur");

quest("AgrFroid334 : Dans le condenseur :://a");
rep("[ ] le réfrigérant liquide s'évapore à pression constante");
rep("[ ] la température de la vapeur provenant du compresseur augmente jusqu'à la température de condensation");
rep("[x] la température de la vapeur provenant du compresseur doit au minimum descendre jusqu'à la température de condensation");
rep("[ ] la pression tombe en dessous de la valeur de la pression de vapeur saturante");

quest("AgrFroid335 : En technique du froid, que désigne-t-on par cuivrage ?://a");
rep("[ ] L'emploi de pignons coniques en cuivre doux pour réaliser des raccords évasés");
rep("[ ] L'emploi de pignons en cuivre pour fixer des boulons");
rep("[x] Le dépôt d'une couche de cuivre sur les parties en acier de l'installation");
rep("[ ] L'attaque du cuivre dans les installations à l'ammoniac");

quest("AgrFroid336 : Comment éviter le cuivrage ?://a");
rep("[ ] En n'utilisant pas d'huile minérale");
rep("[x] En évitant qu'il y ait de l'humidité dans l'installation");
rep("[ ] En n'employant aucun réfrigérant non condensable");
rep("[ ] En employant exclusivement de l'huile-ester");

quest("AgrFroid337 : Quelle est l'organe de l'installation dont le fonctionnement rique d'être le plus perturbé par la présence d'humidité dans le réfrigérant ?://a");
rep("[ ] La pompe à huile");
rep("[x] Le détendeur");
rep("[ ] Le réservoir de liquide");
rep("[ ] Le séparateur de liquide");

quest("AgrFroid338 : Le sous-refroidissement du réfrigérant : [complétez la phrase]://a");
rep("[ ] a toujours lieu dans le condenseur");
rep("[ ] a toujours lieu hors du condenseur");
rep("[x] peut avoir lieu tant en dehors qu'à l'intérieur du condenseur");
rep("[ ] peut avoir lieu tant dans le condenseur que dans l'évaporateur");

quest("AgrFroid339 : Quel changement d'état le réfrigérant subit-il dans le condenseur ?://a");
rep("[ ] Il passe de l'état solide à l'état liquide");
rep("[ ] Il passe de l'état liquide à l'état gazeux");
rep("[ ] Il passe de l'état gazeux à l'état solide");
rep("[x] Il passe de l'état gazeux à l'état liquide");

quest("AgrFroid340 : Y a-t-il toujours un rapport connu entre la pression et la température dans une installation au R134a ?://a");
rep("[ ] Oui. La réglette réfrigérant permet toujours de savoir à quelle température correspond telle pression");
rep("[ ] Non, la pression et la température sont toujours indépendantes l'une de l'autre");
rep("[x] Non, il n'y en a un que dans la zone où se produit un changement d'état");
rep("[ ] Non, il n'y en a un que dans la phase gazeuse et dans la zone liquide");

quest("AgrFroid341 : Qu'est-ce que le sous-refroidissement ?://a");
rep("[ ] Une condensation à trop basse température");
rep("[ ] Le givrage du compresseur");
rep("[x] Un refroidissement supplémentaire du réfrigérant après sa condensation complète");
rep("[ ] Un refroidissement supplémentaire du réfrigérant après son évaporation complète");

quest("AgrFroid342 : Qu'est-ce que la surchauffe ?://a");
rep("[ ] Une évaporation à température trop élevée");
rep("[ ] Une compression excessive");
rep("[x] Un réchauffement supplémentaire du réfrigérant après son évaporation complète");
rep("[ ] Un réchauffement supplémentaire du réfrigérant après sa condensation complète");

quest("AgrFroid343 : Une surchauffe (excessive) :://a");
rep("[ ] accroît le rendement du transfert de chaleur dans l''évaporateur");
rep("[ ] dégrade le rendement du condenseur");
rep("[ ] provoque des coups de liquide dans le compresseur");
rep("[x] réduit le rendement de l'installation de réfrigération");

quest("AgrFroid344 : Une surchauffe trop importante://a");
rep("[x] augmente la température de refoulement");
rep("[ ] abaisse les températures finales de compression");
rep("[ ] accroît la pression d'aspiration");
rep("[ ] abaisse la pression d'aspiration");

quest("AgrFroid345 : Le sous-refroidissement :://a");
rep("[ ] dégrade le rendement de l'installation de réfrigération");
rep("[x] améliore le rendement de l'installation de réfrigération");
rep("[ ] provoque des coups de liquide dans le compresseur");
rep("[ ] provoque un givrage du compresseur");

quest("AgrFroid346 : Comment peut-on détecter des gaz incondensables, généralement de l'air, dans une installation de réfrigération à l'arrêt, disposant d'un condenseur à air ?://a");
rep("[ ] En vérifiant que la pression d'aspiration n'est pas trop basse");
rep("[x] En comparant la température ambiante à celle du manomètre HP. (après rappel du fluide dans la bouteille et son refroidissement jusqu'à t° ambiante)");
rep("[ ] En comparant le rapport entre la pression d'évaporation et la température sur la réglette réfrigérant");
rep("[ ] En vérifiant que la pression d'aspiration n'est pas trop élevée");

quest("AgrFroid347 : Un condenseur à air encrassé a pour effet :://a");
rep("[ ] exclusif de faire monter la pression de condensation");
rep("[ ] d'empêcher exclusivement la condensation complète du réfrigérant");
rep("[ ] de provoquer exclusivement un trop faible sous-refroidissement");
rep("[x] possible de pouvoir induire les trois conséquences mentionnées");

quest("AgrFroid348 : Qu'est-ce qui permet de dimensionner le volume du réservoir de liquide ?://a");
rep("[ ] La taille des évaporateurs");
rep("[ ] La taille du condenseur");
rep("[ ] La taille du compresseur");
rep("[x] La quantité de fluide de l'installation");

quest("AgrFroid349 : Une conduite de liquide de diamètre trop faible provoque:://a");
rep("[ ] un sous-refroidissement trop important");
rep("[ ] une trop faible chute de pression dans le détendeur");
rep("[x] une prédétente ou flash-gaz suite à une perte de charge trop importante dans la conduite");
rep("[ ] une trop importante chute de pression dans le détendeur");

quest("AgrFroid350 : Qu'est-ce que le flash-gaz ?://a");
rep("[ ] Du gaz fortement surchauffé");
rep("[ ] Du gaz qui se forme quand de l'huile s'évapore dans le carter");
rep("[x] La formation de gaz dans la conduite de liquide");
rep("[ ] La présence d'air dans le condenseur");

quest("AgrFroid351 : Dans un compresseur mono-étagé refroidi par les gaz aspirés, la pression dans le carter est égale :://a");
rep("[x] à la basse pression");
rep("[ ] à la haute pression");
rep("[ ] à la pression atmosphérique");
rep("[ ] à la pression absolue");

quest("AgrFroid352 : Que signifient les lettres MOP?://a");
rep("[ ] Marginal Operating Pressure");
rep("[ ] Mean Operating Pressure");
rep("[x] Maximum Operating pressure");
rep("[ ] Minimum Operating pressure");

quest("AgrFroid353 : Quelle est la conséquence d'une conduite d'aspiration de trop faible diamètre ?://a");
rep("[ ] Un sous-refroidissement excessif");
rep("[x] Une surchauffe excessive à l'aspiration du compresseur");
rep("[ ] La formation de flash-gaz");
rep("[ ] Une surchauffe insuffisante à l'aspiration du compresseur");

quest("AgrFroid354 : Quelle est la conséquence d'une conduite d'aspiration de trop faible diamètre ?://a");
rep("[ ] Un sous-refroidissement excessif");
rep("[x] une température de refoulement plus élevée");
rep("[ ] La formation de flash-gaz");
rep("[ ] Une surchauffe insuffisante à l'aspiration du compresseur");

quest("AgrFroid355 : A pression de condensation constante, plus un compresseur travaille à une pression d'aspiration basse, alors :://a");
rep("[ ] meilleur est le rendement");
rep("[x] moins bon est le rendement");
rep("[ ] plus la température de condensation sera élevée");
rep("[ ] plus la température de condensation sera faible");

quest("AgrFroid356 : A pression de condensation inchangée, plus un compresseur travaille à une pression d'aspiration élevée,://a");
rep("[x] meilleur est le rendement");
rep("[ ] moins bon est le rendement");
rep("[ ] plus la pression de condensation augmente");
rep("[ ] plus la pression de condensation baisse");

quest("AgrFroid357 : Plus la pression de condensation est basse,://a");
rep("[x] meilleur est le rendement");
rep("[ ] plus le rendement se dégrade");
rep("[ ] plus la pression d'évaporation est élevée");
rep("[ ] plus la pression d'évaporation est basse");

quest("AgrFroid358 : Lorsque la HP diminue et que la BP reste constante://a");
rep("[ ] la puissance absorbée augmente");
rep("[ ] la puissance frigorifique diminue");
rep("[ ] la puissance absorbée augmente, la puissance frigorifique diminue et la puissance du moteur augmente");
rep("[x] la puissance frigorifique augmente");

quest("AgrFroid359 : lorsque la HP augmente, et que la BP reste constante alors:://a");
rep("[ ] le COP augmente");
rep("[x] le COP diminue");
rep("[ ] la puissance frigorifique augmente");
rep("[ ] la puissance absorbée diminue");

quest("AgrFroid360 : lorsque la BP augmente, et que la HP reste constante alors:://a");
rep("[x] le COP augmente");
rep("[ ] le COP diminue");
rep("[ ] la puissance frigorifique diminue");
rep("[ ] la puissance absorbée diminue");

quest("AgrFroid361 : Du point de vue de la puissance électrique du moteur, peut-on utiliser une installation de froid négatif (-25°C) pour produire du froid positif (+2°C) ?://a");
rep("[ ] Oui, il n'y a aucune différence entre les compresseurs pour application de congélation et ceux destinés à un usage frigorifique positif");
rep("[ ] Oui, car dans ce cas, le moteur électrique du compresseur est d'une puissance plus que suffisante");
rep("[x] Non, car il est fort probable que la puissance du moteur électrique du compresseur soit insuffisante");
rep("[ ] Non, il faut remplacer les dispositifs d'étanchéité");

quest("AgrFroid362 : Du point de vue de la puissance électrique du moteur, peut-on utiliser une installation de froid positif (+ 2°C) pour produire du froid négatif (-25°C) ?://a");
rep("[ ] Oui, il n'y a aucune différence entre les compresseurs pour application de congélation et ceux destinés à un usage frigorifique positif");
rep("[x] Oui, car dans ce cas, le moteur électrique du compresseur sera d'une puissance plus que suffisante");
rep("[ ] Non, car il est fort probable que le moteur électrique du compresseur ne sera pas assez puissant");
rep("[ ] Non, il faut remplacer les dispositifs d'étanchéité");

quest("AgrFroid363 : Quel fonctionnement de l'installation fournira un meilleur rendement ?://a");
rep("[ ] évaporation -10°C et condensation +40°C");
rep("[ ] évaporation -5°C et condensation +40°C");
rep("[ ] évaporation 0°C et condensation +40°C");
rep("[x] évaporation +5°C et condensation +40°C");

quest("AgrFroid364 : Quel fonctionnement de l'installation fournira un meilleur rendement ?://a");
rep("[x] évaporation -10°C et condensation +40°C");
rep("[ ] évaporation -10°C et condensation +45°C");
rep("[ ] évaporation -10°C et condensation +50°C");
rep("[ ] évaporation -10°C et condensation +55°C");

quest("AgrFroid365 : Quel fonctionnement de l'installation fournira un meilleur rendement ?://a");
rep("[ ] évaporation -10°C et condensation +40°C");
rep("[x] évaporation -5°C et condensation +40°C");
rep("[ ] évaporation -10°C et condensation +50°C");
rep("[ ] évaporation -5°C et condensation +50°C");

quest("AgrFroid366 : la puissance absorbée par un compresseur est d'autant plus élevée que :://a");
rep("[x] la température d'évaporation du réfrigérant est basse et que sa température de condensation est élevée");
rep("[ ] les températures d'évaporation et de condensation du réfrigérant sont élevées");
rep("[ ] les températures d'évaporation et de condensation du réfrigérant sont basses");
rep("[ ] la température d'évaporation du réfrigérant est élevée et que sa température de condensation est basse");

quest("AgrFroid367 : Quelles caractéristiques présenteront deux installations de même puissance frigorifique et utilisant respectivement du R134a et du R404A ?://a");
rep("[x] le compresseur au R134a aura un volume balayé plus important que le compresseur au R404A");
rep("[ ] le compresseur au R134a aura un volume balayé plus petit que le compresseur au R404A");
rep("[ ] le compresseur au R134a aura le même volume balayé que le compresseur au R404A");
rep("[ ] le compresseur au R134a sera plus faible que le compresseur au R404A");

quest("AgrFroid368 : Dans une installation existante, la puissance frigorifique absorbée par l'évaporateur sera plus petite si :://a");
rep("[ ] l'on en choisit un dont la surface est plus grande");
rep("[ ] l'écart de température entre la température de la chambre froide et la température d'évaporation est élevée");
rep("[x] l'écart de température entre la température de la chambre froide et la température d'évaporation est faible");
rep("[ ] la température de la chambre froide est élevée");

quest("AgrFroid369 : Dans une installation commerciale avec détendeur thermostatique, dont le compresseur a été choisi avec un volume balayé un peu trop grand et l'évaporateur avec une puissance un peu trop faible, nous aurons:://a");
rep("[x] une température d'évaporation plus basse que la valeur prédéfinie");
rep("[ ] une température d'évaporation supérieure à la valeur prédéfinie");
rep("[ ] une température d'évaporation qui sera encore déterminée par le réglage du thermostat");
rep("[ ] besoin de régler le thermostat sur une valeur un peu plus basse");

quest("AgrFroid370 : Lorsque la température du bulbe d'un détendeur thermostatique augmente alors:://a");
rep("[x] le détendeur s'ouvrira plus fort et laissera passer plus de réfrigérant");
rep("[ ] le détendeur s'ouvrira davantage et retiendra plus de réfrigérant");
rep("[ ] le détendeur s'ouvrira moins et laissera passer plus de réfrigérant");
rep("[ ] le détendeur s'ouvrira moins et laissera passer moins de réfrigérant");

quest("AgrFroid371 : Le choix d'un détendeur à égalisation externe de pression dépend de la puissance :://a");
rep("[ ] du compresseur");
rep("[x] de l'évaporateur");
rep("[ ] du condenseur");
rep("[ ] du condenseur et du compresseur");

quest("AgrFroid372 : Le choix d'utiliser ou non un détendeur MOP dépend des caractéristiques:://a");
rep("[ ] du compresseur");
rep("[ ] de l'évaporateur");
rep("[ ] du condenseur");
rep("[x] du moteur d'entraînement du compresseur");

quest("AgrFroid373 : Un détendeur MOP remplit en quelque sorte la même fonction :://a");
rep("[ ] qu'un régulateur de pression d'évaporation");
rep("[x] qu'un régulateur de pression de démarrage");
rep("[ ] qu'un régulateur de pression de condensation");
rep("[ ] qu'un by-pass des gaz chauds");

quest("AgrFroid374 : La puissance fournie par un condenseur refroidi par air augmente si :://a");
rep("[ ] la température de condensation et la température ambiante montent de façon proportionnelle");
rep("[ ] la température de condensation et la température ambiante diminuent de façon proportionnelle");
rep("[x] la température de condensation monte et que la température ambiante baisse");
rep("[ ] la température de condensation baisse et la température ambiante monte");

quest("AgrFroid375 : Un groupe frigorifique à condensation à air, délivre sa puissance frigorifique maximale lorsque:://a");
rep("[ ] la température d'évaporation est basse et que le groupe se trouve à une température ambiante élevée");
rep("[ ] la température d'évaporation est élevée et que le groupe se trouve à une température ambiante élevée");
rep("[ ] la température d'évaporation est basse et que le groupe se trouve à une température ambiante faible");
rep("[x] la température d'évaporation est élevée et que le groupe se trouve à une température ambiante stable");

quest("AgrFroid376 : Une installation doit déclencher à 0,5 bar et se réenclencher à 2 bars, comment réglez- vous le pressostat BP ?://a");
rep("[ ] consigne : 0,5 bar et diff. : 2 bars");
rep("[ ] consigne : 2 bars et diff. : 0,5 bar");
rep("[x] consigne : 2 bars et diff. : 1,5 bars");
rep("[ ] consigne : 2,5 bars et diff. : 0,5 bar");

quest("AgrFroid377 : Que mesure-t-on avec un anémomètre ?://a");
rep("[ ] La viscosité");
rep("[x] La vitesse de l'air");
rep("[ ] Le degré d'acidité de l'huile");
rep("[ ] L'humidité de l'air");

quest("AgrFroid378 : Pourquoi utilise-t-on un flow-switch sur un condenseur ou un évaporateur à eau ?://a");
rep("[x] Pour arrêter le compresseur si le débit d'eau est trop faible");
rep("[ ] Pour arrêter la pompe à eau si le débit d'eau devient trop important");
rep("[ ] Pour activer les condenseurs si la pression de condensation monte trop");
rep("[ ] Pour ouvrir un by-pass dans le circuit d'eau afin d'empêcher l'apparition d'une surpression excessive");

quest("AgrFroid379 : Dans une chambre froide, pourquoi est-il préférable de monter plusieurs évaporateurs sur un compresseur central non régulé en capacité ?://a");
rep("[ ] Pour pouvoir placer un compresseur plus petit");
rep("[x] Pour être sûr que la même température règnera partout dans la chambre froide");
rep("[ ] Pour pouvoir en couper un à charge partielle");
rep("[ ] Pour pouvoir procéder à un dégivrage électrique simultané de tous les évaporateurs");

quest("AgrFroid380 : Quels paramètres un technicien doit-il mesurer pour connaître la capacité d'un groupe de production d'eau glacée (chiller) ?://a");
rep("[ ] Les pressions de refoulement et d'aspiration");
rep("[ ] La température extérieure et la température de condensation");
rep("[x] Le débit d'eau et la différence de température d'entrée et sortie d'eau de l'évaporateur (chiller)");
rep("[ ] Le débit d'eau et celui du réfrigérant");

quest("AgrFroid381 : Dans un système HVAC à centrale de traitement d'air, le ventilateur est presque toujours :://a");
rep("[ ] un ventilateur axial");
rep("[x] un ventilateur centrifuge");
rep("[ ] un ventilateur hélicoïdal");
rep("[ ] un ventilateur tangentiel");

quest("AgrFroid382 : En cas de manque d'antigel, quel serait la conséquence du givrage des tuyaux frigorifique d'un refroidisseur d'eau ?://a");
rep("[x] Une diminution de la puissance frigorifique");
rep("[ ] Une hausse de la puissance frigorifique");
rep("[ ] Une diminution de la chute de pression");
rep("[ ] Une hausse de la pression de refoulement");

quest("AgrFroid383 : Une centrale frigorifique comprenant 4 compresseurs identiques pouvant fonctionner de la manière suivante: 0 - 50% - 100% de leur capacité. Quelle sera la puissance minimale en pourcentage que peut fournir cette centrale?://a");
rep("[ ] 25,00 %");
rep("[x] 12,50 %");
rep("[ ] 10,00 %");
rep("[ ] 5,00 %");

quest("AgrFroid384 : Une centrale frigorifique comprenant 4 compresseurs identiques pouvant fonctionner de la manière suivante: 0 - 50% - 100% de leur capacité. Quelle est le nombre d'étages de régulation de cette centrale?://a");
rep("[ ] 4");
rep("[ ] 6");
rep("[x] 8");
rep("[ ] 10");

quest("AgrFroid385 : Une centrale frigorifique d'une puissance frigorifique nominale de 100 kW à 50 Hz comprend 4 compresseurs identiques dont l'un est commandé en fréquence. À combien s'élève la puissance maximale de cette centrale si nous réglons la fréquence du variateur à 60 Hz ?://a");
rep("[x] A 105 kW");
rep("[ ] A 100 kW");
rep("[ ] A 120 kW");
rep("[ ] A 90 kW");

quest("AgrFroid386 : Une centrale frigorifique d'une puissance frigorifique nominale de 100 kW à 50 Hz comprend 4 compresseurs identiques dont l'un est commandé en fréquence. À combien s'élève la puissance minimale de cette centrale si nous réglons la fréquence du variateur à 30 Hz ?://a");
rep("[ ] A 33 kW");
rep("[ ] A 25 kW");
rep("[x] A 15 kW");
rep("[ ] A 12,5 kW");

quest("AgrFroid387 : Dans un compresseur spiro-orbital (scroll) :://a");
rep("[ ] le gaz entre par le centre de la double spirale (scroll) et en sort par le côté extérieur");
rep("[ ] le gaz est comprimé par la force centrifuge du scroll");
rep("[ ] il y a une spirale fixe et une spirale en révolution");
rep("[x] il y a une spirale fixe et une spirale animée d'un mouvement spiro-orbital");

quest("AgrFroid388 : Une centrale frigorifique permet :://a");
rep("[x] de réguler la puissance et, ainsi, de réduire la consommation d'énergie");
rep("[ ] de réduire la puissance d'entraînement par compresseur");
rep("[ ] de disposer en permanence d'une réserve d'huile");
rep("[ ] de dégivrer le gaz comprimé");

quest("AgrFroid389 : A quoi sert le tiroir de régulation de puissance d'un compresseur à vis ?://a");
rep("[ ] A diminuer la puissance");
rep("[ ] A augmenter la puissance");
rep("[x] A diminuer la puissance ou à l'augmenter");
rep("[ ] A obtenir un retour d'huile proportionnel dans le carter");

quest("AgrFroid390 : A quoi sert la conduite d'égalisation d'huile d'une centrale frigorifique ?://a");
rep("[ ] A abaisser la pression d'huile dans le système");
rep("[ ] A augmenter la pression d'huile dans le système");
rep("[x] A maintenir un niveau d'huile identique dans tous les compresseurs");
rep("[ ] A fournir une pression d'huile identique à tous les détecteurs de niveau d'huile à flotteur");

quest("AgrFroid391 : A quoi servent surtout les régulateurs de fréquence des compresseurs ?://a");
rep("[x] A en adapter la puissance à la demande");
rep("[ ] A obtenir une correction automatique du facteur de puissance");
rep("[ ] A faire démarrer le compresseur à vide");
rep("[ ] A faire tourner le moteur à une tension réduite");

quest("AgrFroid392 : Lorsque plusieurs évaporateurs sont raccordés à une conduite centrale d'aspiration, quelle est la pression de référence à l'entrée du compresseur ?://a");
rep("[x] Elle est égale à la pression de l'évaporateur qui se trouve à la température d'évaporation la plus basse");
rep("[ ] Elle est égale à la pression de l'évaporateur qui se trouve à la température d'évaporation la plus haute");
rep("[ ] Elle est égale à la moyenne des pressions de l'évaporateur à la température la plus haute et de celui à la température la plus basse");
rep("[ ] Elle est égale à la pression commandée par le régulateur de pression de l'évaporateur dont la température d'évaporation est la plus haute");

quest("AgrFroid393 : Dans une installation de réfrigération, un régulateur de pression d'évaporation doit :://a");
rep("[x] S'ouvrir quand la pression d'admission monte");
rep("[ ] Se fermer quand la pression d'admission monte");
rep("[ ] S'ouvrir quand la pression de sortie monte");
rep("[ ] Se fermer quand la pression de sortie monte");

quest("AgrFroid394 : Dans une installation de réfrigération, un régulateur de pression d'évaporation doit :://a");
rep("[ ] S'ouvrir quand la pression d'admission baisse");
rep("[x] Se fermer quand la pression d'admission baisse");
rep("[ ] S'ouvrir quand la pression de sortie baisse");
rep("[ ] Se fermer quand la pression de sortie baisse");

quest("AgrFroid395 : Quelle est la fonction d'un régulateur de pression d'aspiration du compresseur (régulateur de démarrage) dans une installation de réfrigération ?://a");
rep("[ ] S'ouvrir quand la pression d'admission monte");
rep("[ ] Se fermer quand la pression d'admission monte");
rep("[ ] S'ouvrir quand la pression de sortie monte");
rep("[x] Se fermer quand la pression de sortie du régulateur monte");

quest("AgrFroid396 : Quelle est la fonction d'un régulateur de pression d'aspiration du compresseur (régulateur de démarrage) dans une installation de réfrigération ?://a");
rep("[ ] S'ouvrir quand la pression d'admission baisse");
rep("[ ] Se fermer quand la pression d'admission baisse");
rep("[x] S'ouvrir quand la pression de sortie du régulateur baisse");
rep("[ ] Se fermer quand la pression de sortie baisse");

quest("AgrFroid397 : Les détendeurs à égalisation externe de pression s'emploient avec :://a");
rep("[ ] les évaporateurs présentant un pas d'ailettes supérieur à 7 mm");
rep("[ ] les évaporateurs présentant un pas d'ailettes inférieur à 7 mm");
rep("[x] les évaporateurs présentant une grande chute de pression (perte de charge)");
rep("[ ] les évaporateurs présentant une petite chute de pression");

quest("AgrFroid398 : Les détendeurs à égalisation externe de pression s'emploient avec :://a");
rep("[ ] les évaporateurs présentant un pas d'ailettes supérieur à 7 mm");
rep("[x] les évaporateurs qui possèdent un distributeur de liquide");
rep("[ ] les évaporateurs présentant une petite chute de pression");
rep("[ ] les évaporateurs possédant une grande puissance frigorifique");

quest("AgrFroid399 : Quand un régulateur de pression d'évaporation commence-t-il à se fermer ?://a");
rep("[ ] Lorsque la pression d'aspiration dans le compresseur tombe sous une certaine valeur");
rep("[ ] Lorsque la pression d'aspiration dans le compresseur dépasse une certaine valeur");
rep("[x] Lorsque la pression d'évaporation tombe en dessous de la valeur de réglage de la vanne de régulation d'évaporation");
rep("[ ] Lorsque la pression d'évaporation dépasse une certaine valeur");

quest("AgrFroid400 : Qu'y a-t-il dans le capteur d'un détendeur à PMA (MOP) ?://a");
rep("[ ] Plus de réfrigérant que dans un détendeur normal");
rep("[x] Moins de réfrigérant que dans un détendeur normal");
rep("[ ] Pas de réfrigérant");
rep("[ ] Un type spécial d'antigel");

theme("St Laurent : L'agrégation du froid - Part5");
debut("Préparation à l'examen sur l'agrégation frigorifique");


quest("AgrFroid400 : Qu'y a-t-il dans le capteur d'un détendeur à PMA (MOP) ?://a");
rep("[ ] Plus de réfrigérant que dans un détendeur normal");
rep("[x] Moins de réfrigérant que dans un détendeur normal");
rep("[ ] Pas de réfrigérant");
rep("[ ] Un type spécial d'antigel");

quest("AgrFroid401 : l'utilisation d'un détendeur capillaire : [complétez] :://a");
rep("[x] permet de monter des compresseurs à bas couple de démarrage");
rep("[ ] permet au système de s'adapter rapidement à une modification de la charge");
rep("[ ] facilite l'égalisation de la pression côté haute pression en cas d'arrêt du ventilateur du condenseur");
rep("[ ] permet de réguler la surchauffe avec précision");

quest("AgrFroid402 : Comment fait-on pour que le réfrigérant se mélange le moins possible à l'huile dans le carter d'un compresseur ?://a");
rep("[ ] On place dans la conduite de liquide une électrovanne qui bascule la machine en mode tirage au vide (pump down) et qui évite ainsi que du réfrigérant migre dans le carter");
rep("[x] On place dans le carter une résistance qui porte l'huile à une température telle que la solubilité du gaz frigorifique soit minimale");
rep("[ ] On place un régulateur de la pression d'aspiration qui règle une pression suffisamment élevée dans le carter");
rep("[ ] On place l'évaporateur dans le compresseur pour empêcher le réfrigérant de refluer en amont vers le compresseur");

quest("AgrFroid403 : Sur quoi repose le processus de dégivrage aux gaz chauds ?://a");
rep("[x] Sur la chaleur latente de condensation du gaz comprimé");
rep("[ ] Sur l'agrandissement des conduites de gaz chauds");
rep("[ ] Sur l'exclusion de toutes les résistances électriques");
rep("[ ] Sur l'utilisation d'une vanne à quatre voies");

quest("AgrFroid404 : Pourquoi avant tout se sert-on d'un refroidisseur intermédiaire dans un compresseur bi- étagé ?://a");
rep("[ ] Pour augmenter la température des gaz aspirés au niveau de l'étage intermédiaire");
rep("[ ] Pour accroître la température finale du gaz comprimé");
rep("[ ] Pour sous-refroidir davantage le réfrigérant avant qu'il ne soit amené vers l'évaporateur");
rep("[x] Pour abaisser la température finale de compression");

quest("AgrFroid405 : Comment contrôle-t-on la puissance dans une centrale frigorifique ?://a");
rep("[ ] En activant et en désactivant les ventilateurs du condenseur");
rep("[ ] En montant des limiteurs de pression de carter");
rep("[x] En coupant un ou plusieurs compresseurs ou en faisant varier la vitesse des compresseurs");
rep("[ ] En montant des régulateurs de la pression d'évaporation");

quest("AgrFroid406 : Comment éviter un coup de liquide pendant le dégivrage par gaz chauds ?://a");
rep("[x] En plaçant un séparateur de liquide dans la conduite d'aspiration");
rep("[ ] En dégivrant tous les évaporateurs en même temps");
rep("[ ] En montant des batteries de réévaporation pour que le réfrigérant s'évapore à nouveau");
rep("[ ] En faisant passer les liquides dans un échangeur de chaleur par gaz aspirés");

quest("AgrFroid407 : Comment peut-on empêcher une montée excessive de la pression dans l'évaporateur pendant le dégivrage électrique ?://a");
rep("[x] En faisant une régulation pump down");
rep("[ ] En contournant le détendeur");
rep("[ ] En montant un limiteur de pression de carter");
rep("[ ] En plaçant un régulateur de pression d'évaporation");

quest("AgrFroid408 : Dans une centrale frigorifique, le débit de réfrigérant :://a");
rep("[ ] est toujours supérieur au volume débité par le réservoir de liquide");
rep("[ ] est toujours inférieur au volume débité par le réservoir de liquide");
rep("[x] dépend de la charge des évaporateurs");
rep("[ ] est indépendant de la charge des évaporateurs");

quest("AgrFroid409 : Dans une installation équipée d'un condenseur à air comment peut-on permettre une production frigorifique correcte si la température de condensation diminue ?://a");
rep("[ ] En coupant les ventilateurs sur le condenseur afin qu'une pression suffisamment élevée soit encore garantie");
rep("[ ] En augmentant la pression dans le réservoir de liquide au moyen d'un régulateur de pression de condensation associé à un clapet antiretour à pression différentielle (NRD)");
rep("[ ] En montant une tête de distribution sur le détendeur pour augmenter la vitesse et le refroidissement résultant produit par les turbulences");
rep("[x] En montant un détendeur électronique dont le fonctionnement est indépendant de la pression de condensation");

quest("AgrFroid410 : Un évaporateur monté dans une chambre froide est relié à un groupe frigorifique monté à l'extérieur. La température de condensation baisse. Que se passe-t-il ?://a");
rep("[x] La température d'évaporation va baisser");
rep("[ ] La température d'évaporation va monter");
rep("[ ] Cela n'a pas d'influence sur la température d'évaporation, car l'évaporateur se trouve dans la chambre froide");
rep("[ ] La puissance frigorifique totale de l'installation diminuera sous l'effet de la baisse de la température extérieure");

quest("AgrFroid411 : On ferme le robinet de service BP d'un compresseur à piston alors qu'il tourne encore et jusqu'à ce qu'il s'arrête par manque de pression (sécurité). On remarque que la basse pression remonte très vite.://a");
rep("[ ] C'est normal");
rep("[ ] C'est le signe qu'il y a une fuite au niveau des soupapes d'aspiration");
rep("[x] C'est le signe qu'il y a une fuite au niveau des soupapes de refoulement");
rep("[ ] C'est peut-être le signe d'une fuite tant au niveau des soupapes de refoulement que des soupapes d'aspiration");

quest("AgrFroid412 : Que se passe-t-il quand les filtres à air d'un petit climatiseur à détendeur capillaire s'encrassent côté aspiration ?://a");
rep("[ ] La température de refoulement de l'installation augmentera");
rep("[x] Il existe un risque de coup de liquide");
rep("[ ] Il existe un risque que la surchauffe soit excessive et que le moteur chauffe");
rep("[ ] Le moteur de l'évaporateur n'est plus suffisamment refroidi et peut donc chauffer");

quest("AgrFroid413 : Qu'est-ce qui réduit le rendement volumétrique d'un compresseur ?://a");
rep("[ ] La hausse de la pression d'aspiration");
rep("[x] La baisse de la pression d'aspiration");
rep("[ ] La diminution de la pression de refoulement");
rep("[ ] La diminution de l'espace nuisible");

quest("AgrFroid414 : Qu'est-ce qui augmente le rendement volumétrique du compresseur ?://a");
rep("[ ] La hausse de la pression de refoulement");
rep("[x] La hausse de la pression d'aspiration");
rep("[ ] La hausse du taux de compression");
rep("[ ] La baisse de la pression d'aspiration");

quest("AgrFroid415 : Sur un compresseur, on mesure une pression relative d'aspiration de 3 bar et une pression relative de refoulement de 11 bar. Quel est le taux de compression ?://a");
rep("[ ] 3,67");
rep("[ ] 0,27");
rep("[ ] On ne peut pas le déterminer parce qu'on ne sait pas de quel réfrigérant il s'agit");
rep("[x] 3");

quest("AgrFroid416 : Le volume balayé d'un compresseur :://a");
rep("[x] est le volume théorique de gaz aspiré");
rep("[ ] est le volume effectif de gaz déplacé qui entre par la soupape d'aspiration");
rep("[ ] varie avec la pression d'aspiration");
rep("[ ] varie avec la pression de refoulement");

quest("AgrFroid417 : Sur quel type de compresseur emploie-t-on généralement un tiroir pour adapter sa puissance frigorifique ?://a");
rep("[ ] Sur un compresseur à piston");
rep("[ ] Sur un compresseur de type scroll");
rep("[x] Sur un compresseur à vis");
rep("[ ] Sur un compresseur centrifuge");

quest("AgrFroid418 : Quel type de compresseur emploie des clapets de refoulement ?://a");
rep("[ ] Un compresseur centrifuge");
rep("[ ] Un compresseur à vis");
rep("[x] Un compresseur à piston");
rep("[ ] Un compresseur de type scroll");

quest("AgrFroid419 : Lequel des systèmes suivants ne peut pas servir à égaliser le niveau d'huile dans une centrale frigorifique ?://a");
rep("[ ] Une conduite d'égalisation de pression de carter associée à une conduite d'égalisation du niveau d'huile");
rep("[ ] Des détecteurs de niveau d'huile à flotteur sur chaque compresseur, l'alimentation en huile étant assurée par un réservoir central");
rep("[ ] Un gros tuyau qui relie et égalise tous les niveaux d'huile et toutes les pressions de gaz de tous les compresseurs");
rep("[x] Aucun des systèmes mentionnés précédemment n'est interdit");

quest("AgrFroid420 : Le débit massique qu'un compresseur déplace par heure à régime constant, [complétez] lorsque la température d'évaporation monte.://a");
rep("[x] augmente");
rep("[ ] diminue");
rep("[ ] reste le même");
rep("[ ] n'a aucune influence");

quest("AgrFroid421 : Le débit massique qu'un compresseur déplace par heure à régime constant, [complétez] lorsque la température de condensation baisse.://a");
rep("[x] augmente");
rep("[ ] diminue");
rep("[ ] reste le même");
rep("[ ] n'a aucune influence");

quest("AgrFroid422 : Lorsque la surchauffe est trop élevée, la température finale de compression [complétez] :://a");
rep("[x] augmente");
rep("[ ] baisse");
rep("[ ] reste la même");
rep("[ ] dépend de la température d'évaporation");

quest("AgrFroid423 : Plus le sous-refroidissement est important, plus le COP d'une installation de réfrigération [complétez]://a");
rep("[x] augmente");
rep("[ ] diminue");
rep("[ ] reste le même");
rep("[ ] Le COP n'a rien à voir avec le sous-refroidissement.");

quest("AgrFroid424 : La surchauffe [complétez] le risque de voir arriver du réfrigérant liquide dans le compresseur.://a");
rep("[ ] augmente");
rep("[x] réduit");
rep("[ ] n'a pas d'influence sur");
rep("[ ] Cela dépend de la température d'évaporation");

quest("AgrFroid425 : Si la charge d'un système frigorifique sans régulation de puissance diminue, le temps de fonctionnement du compresseur :://a");
rep("[ ] augmentera");
rep("[x] diminuera");
rep("[ ] restera le même");
rep("[ ] dépendra du type de réfrigérant");

quest("AgrFroid426 : Si la vanne d'aspiration du compresseur est couverte de givre :://a");
rep("[ ] l'installation tournera certainement avec une surchauffe trop faible");
rep("[ ] la température ambiante dans la salle des machines sera sûrement inférieure à 0 °C");
rep("[ ] le compresseur tournera certainement avec du liquide");
rep("[x] il se peut que ce soit la situation normale");

quest("AgrFroid427 : Lorsque la température de l'eau servant à refroidir un condenseur baisse, la puissance absorbée par ce compresseur :://a");
rep("[ ] augmentera");
rep("[x] diminuera");
rep("[ ] restera la même");
rep("[ ] On manque de données pour déterminer ce qui se passera");

quest("AgrFroid428 : La chaleur massique de l'air est [complétez] que celle de l'eau.://a");
rep("[ ] plus grande");
rep("[x] plus petite");
rep("[ ] la même");
rep("[ ] Tout dépend de l'application");

quest("AgrFroid429 : Quelles sont les trois zones que l'on distingue dans un condenseur ?://a");
rep("[ ] Condensation - sous-refroidissement - surchauffe");
rep("[x] désurchauffe - condensation - sous-refroidissement");
rep("[ ] Surchauffe - évacuation de la chaleur de surchauffe - condensation");
rep("[ ] Sous-refroidissement - évaporation - condensation");

quest("AgrFroid430 : Dans un condenseur horizontal refroidi par air, l'air est presque toujours [complétez] au travers de la batterie :://a");
rep("[x] aspiré");
rep("[ ] soufflé");
rep("[ ] aspiré ou soufflé");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid431 : La température extérieure est de 30 °C et le fabricant a indiqué la puissance de son condenseur pour un T de 10 K. Laquelle des affirmations suivantes est correcte ?://a");
rep("[x] Le réfrigérant se condensera à 40 °C");
rep("[ ] Le réfrigérant se condensera à 30 °C et il y aura un sous-refroidissement de 10 K");
rep("[ ] Le réfrigérant se condensera à 40 °C et il y aura un sous-refroidissement de 10 K");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid432 : De quoi a-t-on besoin pour réduire le plus possible les effets d'une grande chute de pression d'un évaporateur sur le fonctionnement du détendeur thermostatique?://a");
rep("[ ] D'une membrane");
rep("[ ] D'une égalisation interne");
rep("[x] D'une égalisation externe");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid433 : Parmi les éléments suivants, lequel n'est pas pris en compte pour déterminer la différence de pression lors de la sélection d'un détendeur ?://a");
rep("[ ] La tête de distribution");
rep("[ ] La pression du liquide");
rep("[x] Le montage de l'installation à un niveau supérieur à celui de la mer");
rep("[ ] La pression d'évaporation");

quest("AgrFroid434 : Où place-t-on le bulbe du détendeur lorsqu'un coude est monté en aval de l'évaporateur ?://a");
rep("[x] Avant le coude");
rep("[ ] Après le coude");
rep("[ ] Au milieu du coude");
rep("[ ] Cela n'a pas d'importance");

quest("AgrFroid435 : Quand on choisit un détendeur doté d'un orifice beaucoup trop petit :://a");
rep("[x] la surchauffe augmentera");
rep("[ ] la surchauffe diminuera");
rep("[ ] la pression d'évaporation augmentera");
rep("[ ] la puissance frigorifique de l'évaporateur augmentera");

quest("AgrFroid436 : Quand on choisit un détendeur doté d'un orifice beaucoup trop grand :://a");
rep("[x] la surchauffe diminuera");
rep("[ ] la surchauffe augmentera");
rep("[ ] la pression d'évaporation diminuera");
rep("[ ] le risque de coup de liquide diminuera");

quest("AgrFroid437 : Si l'on place un capillaire plus long que nécessaire :://a");
rep("[x] l'évaporateur ne recevra pas assez de réfrigérant");
rep("[ ] l'alimentation en réfrigérant augmentera");
rep("[ ] la chute de pression dans le capillaire sera moindre");
rep("[ ] la surchauffe diminuera");

quest("AgrFroid438 : Parmi les éléments suivants, lequel ne prend on pas en considération pour sélectionner un capillaire ?://a");
rep("[ ] La pression de condensation");
rep("[ ] La pression d'évaporation");
rep("[x] La chaleur du compresseur");
rep("[ ] La température ambiante dans les conditions de conception");

quest("AgrFroid439 : Que fait un régulateur de la pression d'évaporation ?://a");
rep("[x] Il empêche la température d'évaporation de baisser trop dans un évaporateur");
rep("[ ] Il empêche la température d'évaporation de monter trop dans un évaporateur");
rep("[ ] Il adapte continuellement la température d'évaporation d'un évaporateur à la charge");
rep("[ ] Toutes les réponses précédentes sont bonnes");

quest("AgrFroid440 : Contre quoi un régulateur de pression de démarrage protège-t-il le compresseur ?://a");
rep("[ ] Contre une pression d'aspiration trop basse");
rep("[x] Contre une pression d'aspiration trop élevée induisant une surintensité du moteur du compresseur");
rep("[ ] Contre une pression de condensation trop élevée");
rep("[ ] Contre une pression d'huile trop élevée induisant une diminution de l'intensité du moteur du compresseur");

quest("AgrFroid441 : Dans une régulation pump-down :://a");
rep("[x] l'électrovanne se ferme, puis le compresseur vide le réfrigérant de l'évaporateur et s'arrête par action du pressostat BP");
rep("[ ] l'électrovanne se ferme et l'installation s'arrête simultanément");
rep("[ ] le ventilateur de l'évaporateur est coupé et le compresseur peut ensuite s'arrêter en fonction du thermostat de l'évaporateur");
rep("[ ] le compresseur fera le vide dans l'installation, puis l'électrovanne se fermera pour empêcher un reflux du réfrigérant");

quest("AgrFroid442 : Laquelle des pièces suivantes ne protège pas le compresseur d'une surcharge ?://a");
rep("[ ] Le régulateur de démarrage");
rep("[x] La vanne de régulation de puissance");
rep("[ ] Le détendeur à PMA (MOP)");
rep("[ ] Le régulateur de démarrage et/ou détendeur à PMA (MOP)");

quest("AgrFroid443 : Qu'emploie-t-on pour éliminer les résidus acides d'un système ?://a");
rep("[x] Un filtre burn-out");
rep("[ ] Un filtre à gaz aspirés");
rep("[ ] Un filtre à liquide");
rep("[ ] Un filtre à huile");

quest("AgrFroid444 : Lequel de ces régulateurs ne réagit pas en fonction de sa pression d'entrée ?://a");
rep("[ ] Le régulateur de pression d'évaporation");
rep("[x] Le régulateur de pression d'aspiration / régulateur de démarrage");
rep("[ ] Le régulateur de pression de condensation");
rep("[ ] Toutes les réponses précédentes sont bonnes");

quest("AgrFroid445 : Un by-pass à gaz chauds réagit aux variations de la [complétez] du système.://a");
rep("[ ] pression de liquide");
rep("[x] pression d'aspiration");
rep("[ ] pression de refoulement");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid446 : Si la sonde d'un thermostat d'ambiance mécanique classique monté dans une chambre froide se casse, le thermostat :://a");
rep("[x] sera inopérant");
rep("[ ] sera activé");
rep("[ ] ne subira aucune modification");
rep("[ ] basculera sur une position de sécurité");

quest("AgrFroid447 : A quoi sert un séparateur de liquide (bouteille anti coup de liquide) ?://a");
rep("[ ] A empêcher l'huile de refluer dans le carter");
rep("[x] A éviter un coup de liquide et permettre un retour d'huile en douceur");
rep("[ ] A éviter que du réfrigérant liquide ne reflue dans le compresseur et à ramener l'huile dans le compresseur en la faisant passer dans un séparateur d'huile");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid448 : A quoi est-il préférable de raccorder le pressostat HP en technique du froid ?://a");
rep("[ ] Au robinet de service du compresseur");
rep("[x] Directement au compresseur");
rep("[ ] Au réservoir de liquide");
rep("[ ] N'importe où du moment que l'on prend un raccord HP");

quest("AgrFroid449 : A quoi est-il préférable de raccorder le pressostat BP en technique du froid ?://a");
rep("[ ] Au robinet de service du compresseur");
rep("[x] Directement au compresseur");
rep("[ ] a la conduite d'aspiration");
rep("[ ] N'importe où du moment que l'on prenne un raccord BP");

quest("AgrFroid450 : Quand un liquide s'évapore à pression constante, son enthalpie :://a");
rep("[x] augmente");
rep("[ ] diminue");
rep("[ ] reste la même");
rep("[ ] L'enthalpie n'a rien à voir avec cela");

quest("AgrFroid451 : Qu'est-ce que le R407C ?://a");
rep("[x] Un fluide zéotrope (non-azéotrope)");
rep("[ ] Un fluide azéotrope");
rep("[ ] Un absorbant");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid452 : Quand un mélange zéotrope (non-azéotrope) s'évapore à pression constante, on note :://a");
rep("[x] un glissement de température");
rep("[ ] l'absence de glissement de température");
rep("[ ] une température stable");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid453 : Dans un mélange azéotrope :://a");
rep("[x] il existe une relation fixe entre pression et température");
rep("[ ] il n'existe pas de relation fixe entre pression et température");
rep("[ ] il se produit un glissement nettement perceptible");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid454 : Nous disposons à l'atelier de deux bouteilles de réfrigérant contenant du R134a. La première est remplie sur une hauteur de 5 cm et il y règne une pression de 4 bar. La seconde est remplie sur une hauteur de 10 cm. Quelle sera la valeur de la pression rég://a");
rep("[x] 4 bar");
rep("[ ] 2 bar");
rep("[ ] 8 bar");
rep("[ ] Pour pouvoir répondre à cette question, il faut connaître la hauteur de la bouteille");

quest("AgrFroid455 : Qu'indiquent les bulles de gaz dans le voyant liquide d'une installation de réfrigération en service normal ?://a");
rep("[ ] Un manque de réfrigérant à coup sûr");
rep("[ ] Un sous-refroidissement");
rep("[x] La présence d'un flash-gaz (pré-détente)");
rep("[ ] Une pression de condensation trop basse");

quest("AgrFroid456 : Il est conseillé de placer le réservoir de liquide [complétez] que le condenseur.://a");
rep("[x] plus bas");
rep("[ ] plus haut");
rep("[ ] exactement à la même hauteur");
rep("[ ] Ce détail n'a aucune influence positive ou négative");

quest("AgrFroid457 : Comment peut-on éviter la formation de flash-gaz dans la majorité des cas ?://a");
rep("[ ] En plaçant de fins tuyaux");
rep("[ ] En réglant une grande vitesse d'écoulement dans la conduite de liquide");
rep("[x] En plaçant le réservoir de liquide plus haut que le détendeur");
rep("[ ] En réalisant la condensation à basse température");

quest("AgrFroid458 : La présence de flash-gaz dans une conduite :://a");
rep("[ ] n'a pas d'influence sur le bon fonctionnement d'un détendeur");
rep("[x] a une influence sur le bon fonctionnement d'un détendeur");
rep("[ ] augmente la puissance frigorifique de l'évaporateur en favorisant une injection turbulente");
rep("[ ] améliore l'arrivée de réfrigérant dans le détendeur");

quest("AgrFroid459 : Que mesure un pressostat de sécurité d'huile ?://a");
rep("[ ] La pression d'huile et la pression d'évaporation");
rep("[x] La pression d'huile et la pression de carter");
rep("[ ] La pression d'huile et la pression de liquide");
rep("[ ] La pression et la température de l'huile");

quest("AgrFroid460 : Un pressostat de sécurité d'huile intègre-t-il une temporisation ?://a");
rep("[ ] parfois");
rep("[x] toujours");
rep("[ ] uniquement dans les applications à basse température");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid461 : La plupart des pressostats mécaniques de sécurité d'huile :://a");
rep("[x] comportent un dispositif de réarmement manuel");
rep("[ ] comportent un dispositif de réarmement automatique");
rep("[ ] ne comportent pas du tout de dispositif de réarmement");
rep("[ ] comportent rarement un dispositif de réarmement");

quest("AgrFroid462 : La pression d'huile à la sortie de la pompe à huile doit :://a");
rep("[ ] toujours être inférieure à la pression d'évaporation");
rep("[x] toujours être supérieure à la pression de carter");
rep("[ ] toujours être supérieure à la différence entre la pression de carter et la pression d'évaporation");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid463 : Si l'on monte un séparateur d'huile :://a");
rep("[ ] on ne doit plus placer de coudes");
rep("[ ] on empêche toute entrée d'huile dans le système");
rep("[ ] la pression d'huile reste toujours constante");
rep("[x] la majorité de l'huile est ramenée dans le carter");

quest("AgrFroid464 : A quoi sert-il d'effectuer le tirage au vide (pump-down) d'un évaporateur avant de procéder à son dégivrage électrique ?://a");
rep("[x] A empêcher la migration d'une quantité importante de fluide vers le compresseur");
rep("[ ] A éviter que l'huile ne se mette à bouillir dans l'évaporateur");
rep("[ ] A éviter de devoir effectuer un tirage au vide de l'installation");
rep("[ ] A éviter une décomposition du réfrigérant");

quest("AgrFroid465 : Le distributeur de liquide d'un évaporateur :://a");
rep("[ ] doit toujours être monté à l'horizontale");
rep("[ ] ne peut être monté qu'à la verticale et orienté vers le haut");
rep("[ ] peut être monté dans n'importe quelle position");
rep("[x] doit être monté à la verticale et orienté vers le bas");

quest("AgrFroid466 : Pour quelle(s) raison(s) le ventilateur d'un évaporateur peut-il se trouver bloqué par de la glace ?://a");
rep("[ ] Exclusivement parce que le dégivrage ne s'est pas fait pas correctement");
rep("[ ] Exclusivement suite à un mauvais sens de rotation du ventilateur de l'évaporateur");
rep("[ ] Exclusivement suite à l'encrassement de l'évaporateur");
rep("[x] Toutes les causes évoquées dans les réponses précédentes sont possibles");

quest("AgrFroid467 : Dans quelles unités est exprimée l'enthalpie spécifique ?://a");
rep("[ ] kCal/watt");
rep("[ ] kJ/kg.K");
rep("[x] kJ/kg");
rep("[ ] kJ/W.s");

quest("AgrFroid468 : Quelle est la fonction d'un condenseur évaporatif ?://a");
rep("[ ] Absorber la chaleur sensible afin que le gaz se liquéfie");
rep("[ ] Céder la chaleur sensible afin que le gaz se liquéfie");
rep("[ ] Absorber la chaleur latente afin que le gaz se liquéfie");
rep("[x] Comparativement à un condenseur à air, il continuera à remplir sa fonction lorsque la t° extérieure est élevée");

quest("AgrFroid469 : Quand y a-t-il sous-refroidissement ?://a");
rep("[x] Quand un réfrigérant liquide est amené à une température plus basse que son point de condensation");
rep("[ ] Quand on augmente le régime des ventilateurs du condenseur");
rep("[ ] Quand on injecte du réfrigérant");
rep("[ ] Quand on abaisse sensiblement la température de condensation");

quest("AgrFroid470 : A quelles températures assure t on le meilleur rendement d'une chambre froide sachant que la température y est maintenue à 2 °C et que le condenseur est exposé à une température ambiante de 32 °C ?://a");
rep("[x] Evaporation à -8 °C et condensation à 48 °C");
rep("[ ] Evaporation à -8 °C et condensation à 50 °C");
rep("[ ] Evaporation à -8 °C et condensation à 52 °C");
rep("[ ] Evaporation à -8 °C et condensation à 54 °C");

quest("AgrFroid471 : A quelles températures de fonctionnement le rendement d'une machine frigorifique sera le plus élevé ?://a");
rep("[ ] Evaporation à -8 °C et condensation à 40 °C");
rep("[ ] Evaporation à -10 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 40 °C");
rep("[x] Evaporation à -5 °C et condensation à 35 °C");

quest("AgrFroid472 : A quelles températures de fonctionnement le rendement d'une machine frigorifique sera le moins bon ?://a");
rep("[ ] Evaporation à -8 °C et condensation à 40 °C");
rep("[x] Evaporation à -10 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 35 °C");

quest("AgrFroid473 : A quelles températures de fonctionnement la température de refoulement sera la plus élevée ?://a");
rep("[ ] Evaporation à -8 °C et condensation à 40 °C");
rep("[x] Evaporation à -10 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 35 °C");

quest("AgrFroid474 : A quelles températures de fonctionnement la température de refoulement sera la plus basse ?://a");
rep("[ ] Evaporation à -8 °C et condensation à 40 °C");
rep("[ ] Evaporation à -10 °C et condensation à 40 °C");
rep("[ ] Evaporation à -5 °C et condensation à 40 °C");
rep("[x] Evaporation à 0°C et condensation à 40°C");

quest("AgrFroid475 : Dans quel cas la température de refoulement sera la plus élevée ?://a");
rep("[ ] évaporation -10°C et condensation +40°C et surchauffe de 5K");
rep("[ ] évaporation -10°C et condensation +40°C et surchauffe de 0K");
rep("[x] évaporation -10°C et condensation +40°C et surchauffe de 10K");
rep("[ ] évaporation -10°C et condensation +40°C et surchauffe de 7K");

quest("AgrFroid476 : Dans quel cas la température de refoulement sera la plus élevée ?://a");
rep("[ ] évaporation -5°C et condensation +40°C et surchauffe de 5K");
rep("[ ] évaporation -10°C, condensation +40°C et surchauffe de 5K");
rep("[ ] évaporation -15°C, condensation +40°C et surchauffe de 5K");
rep("[x] évaporation -20°C, condensation +40°C et surchauffe de 5K");

quest("AgrFroid477 : Quel réfrigérant risque le plus de changer de composition en cas de fuite ?://a");
rep("[ ] Le R717");
rep("[ ] Le R134a");
rep("[ ] Le R507");
rep("[x] Le R407C");

quest("AgrFroid478 : Quelle est la fonction du voyant liquide ?://a");
rep("[ ] Un liquide saturé et une vapeur saturée");
rep("[ ] Un mélange diphasique saturé");
rep("[x] visualiser la présence de liquide dans le circuit");
rep("[ ] Un liquide surchauffé");

quest("AgrFroid479 : Comment calcule-t-on le coefficient de performance (COP) d'une pompe à chaleur en mode chauffage ?://a");
rep("[ ] En multipliant la puissance thermique par la puissance absorbée par le moteur du compresseur");
rep("[ ] En multipliant la puissance thermique par la puissance totale absorbée par le système");
rep("[x] En divisant la puissance évacuée par le condenseur, par la puissance absorbée par le compresseur");
rep("[ ] En divisant la puissance thermique par la puissance totale absorbée par le système");

quest("AgrFroid480 : Quand la différence entre la température de condensation et celle d'évaporation diminue, la puissance absorbée:://a");
rep("[x] diminue et la température de refoulement baisse");
rep("[ ] diminue et la température de refoulement augmente");
rep("[ ] augmente et la température de refoulement baisse");
rep("[ ] augmente et la température de refoulement monte");

quest("AgrFroid481 : Comment appelle-t-on la différence entre la température d'évaporation et la température mesurée à la sortie de l'évaporateur ?://a");
rep("[x] La surchauffe");
rep("[ ] Le sous-refroidissement");
rep("[ ] La surchauffe totale");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid482 : Comment appelle-t-on la différence entre la température de condensation et la température mesurée à la sortie du condenseur ?://a");
rep("[ ] La surchauffe");
rep("[x] Le sous-refroidissement");
rep("[ ] La surchauffe totale");
rep("[ ] Toutes les réponses précédentes sont mauvaises");

quest("AgrFroid483 : Quelles sont les fonctions d'un compresseur ?://a");
rep("[x] Aspirer le réfrigérant à l'état de vapeur et le comprimer");
rep("[ ] Réguler l'écoulement du réfrigérant et abaisser la pression");
rep("[ ] Céder la chaleur latente et provoquer un changement d'état");
rep("[ ] Absorber la chaleur latente et provoquer un changement d'état");

quest("AgrFroid484 : Lequel des condenseurs suivants produira la plus basse température de condensation lorsque la température ambiante est élevée ?://a");
rep("[ ] Un condenseur du type 'refroidi par air à convection naturelle'");
rep("[ ] Un condenseur du type 'refroidi par air à ventilation forcée'");
rep("[ ] Un aéroréfrigérant sec");
rep("[x] Un condenseur évaporatif");

quest("AgrFroid485 : Un condenseur propre sur une installation de réfrigération favorisera :://a");
rep("[ ] une hausse de la température de condensation et du rendement");
rep("[ ] une baisse de la température de condensation et du rendement");
rep("[ ] une hausse de la température de condensation et une baisse du rendement");
rep("[x] une baisse de la température de condensation et un bon rendement");

quest("AgrFroid486 : Dans une installation de réfrigération, l'évaporateur est l'appareil :://a");
rep("[ ] qui cède du froid");
rep("[x] qui absorbe l'énergie calorifique");
rep("[ ] dans lequel l'eau chaude s'évapore");
rep("[ ] dans lequel la vapeur chaude se condense");

quest("AgrFroid487 : Le compresseur d'une installation de réfrigération :://a");
rep("[x] aspire le réfrigérant de l'évaporateur et le refoule dans le condenseur");
rep("[ ] aspire du réfrigérant et le refoule à l'état liquide dans l'évaporateur");
rep("[ ] fait en sorte que la pression dans l'évaporateur reste égale à la pression de vapeur saturante");
rep("[ ] fait en sorte que les pressions d'évaporation et de condensation restent identiques");

quest("AgrFroid488 : Que se passe-t-il dans le condenseur ?://a");
rep("[ ] Du réfrigérant liquide s'évapore à une pression constante");
rep("[ ] La température de la vapeur provenant du compresseur augmente jusqu'à la température de condensation");
rep("[x] Le fluide frigorigène se refroidit et se condense");
rep("[ ] La pression tombe en dessous de la pression de vapeur saturante");

quest("AgrFroid489 : Que va permettre un détendeur thermostatique?://a");
rep("[ ] d'alimenter en liquide l'évaporateur de façon que le fluide sorte en liquide pour un meilleur refroidissement du compresseur");
rep("[ ] d'alimenter en gaz l'évaporateur de manière que le fluide se liquéfie pour un meilleur refroidissement des marchandises");
rep("[ ] d'alimenter à une température de zéro degré absolu, l'évaporateur pour bien refroidir la marchandise qui est dans le frigo");
rep("[x] d'alimenter avec suffisamment de liquide l'évaporateur en fonction des besoins calorifiques du frigo");

quest("AgrFroid490 : Si l'on augmente la pression exercée sur un liquide :://a");
rep("[x] on élèvera son point d'ébullition");
rep("[ ] on abaissera son point d'ébullition");
rep("[ ] on ne modifiera pas son point d'ébullition");
rep("[ ] on ne pourra plus déterminer son point d'ébullition");

quest("AgrFroid491 : Qu'est-ce que la température de rosée de l'air humide ?://a");
rep("[ ] La température mesurée au thermomètre à bulbe humide");
rep("[x] La température à laquelle l'humidité de l'air commence à se condenser");
rep("[ ] La température à la surface du refroidisseur dans une enceinte froide");
rep("[ ] La température d'évaporation du réfrigérant");

quest("AgrFroid492 : L'humidité relative de l'air est :://a");
rep("[ ] Le pourcentage de la teneur totale en vapeur d'eau avec lequel il faut humidifier l'air pour le saturer");
rep("[ ] Le rapport en pourcentage entre l'air non humidifié et l'air humidifié");
rep("[x] Le rapport entre la pression de la vapeur d'eau contenue dans l'air et la pression de la vapeur à saturation");
rep("[ ] Le pourcentage d'air qu'il y a dans le mélange air-vapeur d'eau");

quest("AgrFroid493 : Quand on réchauffe l'air à l'aide d'une batterie chaude,://a");
rep("[x] l'humidité relative baisse");
rep("[ ] l'humidité relative reste la même");
rep("[ ] l'humidité relative augmente");
rep("[ ] l'humidité relative peut tant augmenter que baisser");

quest("AgrFroid494 : Quelle est la fonction d'un condenseur ?://a");
rep("[ ] Il sert à faire repasser le réfrigérant à l'état gazeux");
rep("[x] Refroidir le fluide frigorigène afin de le condenser");
rep("[ ] Il porte le réfrigérant à une température plus élevée");
rep("[ ] Il absorbe la chaleur d'une pièce à rafraîchir");

quest("AgrFroid495 : Où a lieu le sous-refroidissement du réfrigérant liquide ?://a");
rep("[ ] Toujours dans le condenseur");
rep("[ ] Toujours hors du condenseur");
rep("[x] Dans le condenseur et/ou dans la ligne liquide");
rep("[ ] Toujours dans la dernière partie de l'évaporateur");

quest("AgrFroid496 : En quoi sont généralement faits les tubes du condenseur d'une installation au HFC si l'atmosphère est non corrosive ?://a");
rep("[ ] En plastique");
rep("[ ] En acier");
rep("[x] En cuivre");
rep("[ ] En aluminium");

quest("AgrFroid497 : En quoi sont faits les tubes du condenseur d'une installation au NH3 ?://a");
rep("[ ] En plastique");
rep("[x] En acier");
rep("[ ] En cuivre");
rep("[ ] En aluminium");

quest("AgrFroid498 : Quel est le risque associé si le gaz aspiré est à une température légèrement supérieure à la pression de vapeur saturante ?://a");
rep("[x] un coup de liquide");
rep("[ ] une importante surchauffe de l'installation");
rep("[ ] une température trop élevée du compresseur");
rep("[ ] un grillage du moteur entraînant le compresseur");

quest("AgrFroid499 : Pour qu'une installation dotée d'un détendeur capillaire fonctionne convenablement, il est important que ce capillaire :://a");
rep("[ ] soit de la bonne longueur");
rep("[ ] soit du bon diamètre");
rep("[ ] soit d'un diamètre un peu plus grand que le strict nécessaire");
rep("[x] soit de la bonne longueur et du bon diamètre");

quest("AgrFroid500 : Pourquoi utilise-t-on un détendeur automatique de pression ?://a");
rep("[ ] Pour adapter la pression d'évaporation à la charge");
rep("[ ] Pour adapter la température d'évaporation à la charge");
rep("[x] Pour que la pression reste constante dans l'évaporateur");
rep("[ ] Pour réguler la surchauffe en fonction de la charge");

quest("AgrFroid500 : Pourquoi utilise-t-on un détendeur automatique de pression ?://a");
rep("[ ] Pour adapter la pression d'évaporation à la charge");
rep("[ ] Pour adapter la température d'évaporation à la charge");
rep("[x] Pour que la pression reste constante dans l'évaporateur");
rep("[ ] Pour réguler la surchauffe en fonction de la charge");

quest("AgrFroid501 : On emploie un détendeur thermostatique à égalisation interne de pression :://a");
rep("[x] sur les évaporateurs à faible perte de charge");
rep("[ ] sur les évaporateurs à grande résistance interne");
rep("[ ] si l'évaporateur est segmenté en plusieurs parties");
rep("[ ] si l'évaporateur est doté d'un distributeur assurant une répartition uniforme du réfrigérant entre ses différentes parties");

quest("AgrFroid502 : On emploie un détendeur thermostatique à égalisation externe de pression :://a");
rep("[ ] sur les évaporateurs à faible résistance interne");
rep("[ ] sur tous les types d'évaporateurs, quelle qu'en soit la taille");
rep("[ ] sur des évaporateurs très petits spécialement conçus pour cela");
rep("[x] lorsque l'évaporateur est doté d'un distributeur assurant une répartition uniforme du réfrigérant entre ses différentes parties, lequel tient compte des pertes de charge");

quest("AgrFroid503 : Quel est l'effet de la baisse de la pression d'aspiration du compresseur ?://a");
rep("[x] une diminution de la puissance frigorifique");
rep("[ ] Une réduction du volume massique du gaz aspiré");
rep("[ ] Une augmentation du volume balayé du compresseur");
rep("[ ] Une augmentation de la puissance frigorifique");

quest("AgrFroid504 : Le taux de compression d'un compresseur frigorifique est le rapport entre :://a");
rep("[ ] le contenu total du cylindre et l'espace nuisible");
rep("[ ] le volume de gaz aspiré et le volume refoulé");
rep("[ ] la pression d'aspiration et la pression de refoulement en valeurs relatives");
rep("[x] la haute pression et la basse pression en valeurs absolues");

quest("AgrFroid505 : Quelle est le principal mode de refroidissement des compresseurs semi-hermétiques ?://a");
rep("[ ] en montant le compresseur à l'extérieur ou dans une salle des machines réfrigérée");
rep("[ ] à l'aide du gaz refoulé par le compresseur");
rep("[ ] en faisant circuler de l'eau dans un circuit secondaire");
rep("[x] à l'aide du gaz aspiré par le compresseur");

quest("AgrFroid506 : Pour obtenir une bonne étanchéité entre les côtés aspiration et refoulement d'un compresseur à double vis :://a");
rep("[x] on injecte de l'huile entre les rotors");
rep("[ ] on injecte du réfrigérant liquide entre les rotors");
rep("[ ] on réalise un entraînement séparé des vis au moyen d'engrenages");
rep("[ ] on place des dispositifs d'étanchéité d'arbre des deux côtés des rotors");

quest("AgrFroid507 : Que désigne le différentiel d'un thermostat ?://a");
rep("[ ] Son point d'enclenchement");
rep("[ ] Son point de déclenchement");
rep("[x] La différence de température entre son point d'enclenchement et son point de déclenchement");
rep("[ ] La différence entre le tarage du ressort de réglage et la pression exercée sur le capteur (bulbe)");

quest("AgrFroid508 : Un échangeur de chaleur sert :://a");
rep("[ ] à empêcher que de la vapeur (flash-gaz) se forme dans une conduite de liquide");
rep("[ ] à empêcher que le compresseur aspire du liquide");
rep("[ ] à améliorer le rendement d'une installation");
rep("[x] Toutes les réponses précédentes sont bonnes");

quest("AgrFroid509 : Où place-t-on généralement un déshydrateur ?://a");
rep("[x] Dans la conduite de liquide en amont du détendeur thermostatique ou capillaire");
rep("[ ] Dans la conduite d'aspiration, tout de suite après l'évaporateur");
rep("[ ] Dans la conduite de refoulement, en amont du condenseur");
rep("[ ] Juste avant l'évaporateur");

quest("AgrFroid510 : Lorsqu'on place deux évaporateurs en parallèle sur le même compresseur et travaillant à des températures différentes, que doit-on placer à la sortie de l'évaporateur travaillant à la température la plus élevée?://a");
rep("[ ] Un pressostat à pression différentielle");
rep("[ ] Un pressostat BP");
rep("[ ] Un clapet antiretour");
rep("[x] Un régulateur de pression d'évaporation");

quest("AgrFroid511 : Pourquoi place-ton un piège à huile au bas de la tuyauterie de refoulement?://a");
rep("[ ] afin d'y collecter l'huile");
rep("[ ] afin que l'huile soit ramenée directement dans le carter du compresseur");
rep("[x] afin d'assurer le retour d'huile vers le compresseur");
rep("[ ] afin que l'huile s'y évapore");

quest("AgrFroid512 : Quelle peut être la conséquence d'une mauvaise conception de la conduite d'aspiration ?://a");
rep("[ ] Une vitesse des gaz trop basse");
rep("[ ] Un retour d'huile défectueux");
rep("[ ] Une vitesse des gaz trop élevée");
rep("[x] Toutes les réponses précédentes sont bonnes");

quest("AgrFroid513 : Pourquoi est-il nécessaire d'isoler la conduite d'aspiration ?://a");
rep("[ ] Pour ramener l'huile au compresseur");
rep("[x] Pour éviter la condensation sur le tube, et limiter la surchauffe des vapeurs dans la ligne d'aspiration");
rep("[ ] Pour sous-refroidir le liquide");
rep("[ ] Pour créer une petite surchauffe afin de préserver le compresseur d'un éventuel coup de liquide");

quest("AgrFroid514 : On égalise le niveau d'huile :://a");
rep("[ ] entre deux condenseurs");
rep("[ ] quand on régule la capacité");
rep("[ ] quand deux évaporateurs sont montés en parallèle");
rep("[x] quand deux compresseurs sont montés en parallèle");

quest("AgrFroid515 : Quand place-t-on une double colonne montante?://a");
rep("[ ] Lorsque la conduite de liquide doit monter sur une hauteur telle qu'il y a un risque de formation de flash-gaz");
rep("[x] Lorsque l'installation possède une régulation de puissance, afin d'assurer le retour d'huile à faible puissance sur les conduites où le fluide est à l'état gazeux");
rep("[ ] Lorsqu'on utilise un condenseur refroidi par eau");
rep("[ ] Lorsque le liquide doit atteindre une hauteur supérieure à +/- 5 m");

quest("AgrFroid516 : Qu'est-ce que le COP théorique ?://a");
rep("[x] le rapport entre la puissance calorifique dégagée au condenseur et la puissance absorbée par le compresseur");
rep("[ ] Le rapport entre la pression d'évaporation et la pression de condensation");
rep("[ ] Le rapport entre la pression d'aspiration saturée et la pression d'évaporation");
rep("[ ] C'est un acronyme désignant une soupape réglant une pression de service constante (Constant Operating Pressure)");

quest("AgrFroid517 : Que se passe-t-il quand on choisit une conduite d'aspiration trop petite ?://a");
rep("[ ] Le compresseur devra pomper davantage");
rep("[x] La température finale de compression augmentera");
rep("[ ] La température finale de compression diminuera");
rep("[ ] Le taux de compression diminuera");

quest("AgrFroid518 : Que se passe-t-il quand on n'isole pas une conduite d'aspiration ou qu'on l'isole mal ?://a");
rep("[x] La surchauffe augmente");
rep("[ ] Le sous-refroidissement diminue");
rep("[ ] La température finale de compression baissera");
rep("[ ] La pression de refoulement augmentera sensiblement");

quest("AgrFroid519 : On emploie un détendeur à égalisation interne de pression :://a");
rep("[x] avec un évaporateur caractérisé par une faible chute de pression");
rep("[ ] avec un évaporateur à cycle de dégivrage électrique");
rep("[ ] avec l'évaporateur d'un refroidisseur rapide industriel");
rep("[ ] avec un évaporateur présentant une grande perte de charge");

quest("AgrFroid520 : L'abréviation PMA/MOP se rapporte :://a");
rep("[x] à un détendeur");
rep("[ ] à un terme indiquant le rapport entre puissance absorbée et puissance frigorifique");
rep("[ ] à une soupape réglant une pression maximale d'aération donnée dans le carter");
rep("[ ] à un pressostat d'huile (pression maximale amont)");

quest("AgrFroid521 : Le pompage ou hunting est un terme qui s'applique :://a");
rep("[x] à un détendeur");
rep("[ ] à un évaporateur");
rep("[ ] à un condenseur");
rep("[ ] à un ventilateur de condenseur (marche-arrêt)");

quest("AgrFroid522 : Que se passe-t-il quand le filtre-déshydrateur se bouche ?://a");
rep("[ ] La pression du liquide monte");
rep("[ ] La différence de pression baisse dans le dessiccateur");
rep("[x] Le risque de flash-gaz devient très réel");
rep("[ ] Le regard passera du vert au jaune");

quest("AgrFroid523 : Quel est l'avantage du sous-refroidissement ?://a");
rep("[ ] de réduire le risque de givrage des robinets du compresseur");
rep("[ ] d'augmenter le puissance frigorifique au compresseur");
rep("[x] d'augmenter l'effet frigorifique");
rep("[ ] de baisser la pression baisse dans le condenseur");

quest("AgrFroid524 : Quelle est la conséquence d'une faible surchauffe ?://a");
rep("[x] Un risque de coup de liquide");
rep("[ ] Un refroidissement moins bon du moteur du compresseur");
rep("[ ] Une hausse de la température des gaz comprimés");
rep("[ ] Toutes les réponses sont correctes");

quest("AgrFroid525 : Quel est le meilleur endroit pour raccorder les pressostats HP et BP d'une installation de réfrigération à compresseur semi-hermétique ?://a");
rep("[ ] au niveau des robinets de service");
rep("[ ] au choix, au niveau des robinets de service ou du compresseur lui-même");
rep("[x] au niveau du compresseur, dans les deux cas");
rep("[ ] sur le robinet de service coté BP et sur le réservoir de liquide coté HP");

quest("AgrFroid526 : Quels seront les symptômes d'un givrage total de l'évaporateur (détendeur thermostatique) ?://a");
rep("[ ] La surchauffe augmentera");
rep("[x] La surchauffe diminuera");
rep("[ ] La température finale de compression augmentera");
rep("[ ] Le refroidissement du moteur sera moins performant dans le cas d'une machine refroidie par les gaz aspirés");

quest("AgrFroid527 : Quel est le réfrigérant le plus employé en congélation ?://a");
rep("[x] Le R404A");
rep("[ ] Le R134a");
rep("[ ] Le R22");
rep("[ ] Le R410A");

quest("AgrFroid528 : Quel est le réfrigérant le plus employé dans les climatiseurs split ?://a");
rep("[ ] Le R134a");
rep("[ ] Le R404A");
rep("[ ] Le R22");
rep("[x] Le R410A");

quest("AgrFroid529 : Comment fonctionne une régulation pump down?://a");
rep("[x] le thermostat coupe l'alimentation de l'électrovanne et le compresseur continue de tourner jusqu'à ce que le pressostat BP déclenche");
rep("[ ] le thermostat arrête le ventilateur de l'évaporateur et un thermostat d'évaporateur arrête le compresseur");
rep("[ ] le thermostat arrête le compresseur et le ventilateur s'arrête aussi tout de suite");
rep("[ ] on vidange toute l'huile et tout le réfrigérant du compresseur");

quest("AgrFroid530 : Pourquoi est-il encore utile de chauffer le carter d'un compresseur à piston lorsque la température ambiante est élevée ?://a");
rep("[ ] Pour éviter la précipitation des incondensables");
rep("[ ] Pour que le compresseur soit plus chaud que le condenseur");
rep("[x] Pour empêcher le plus possible la miscibilité du fluide frigorigène avec l'huile");
rep("[ ] Pour abaisser la viscosité de l'huile");

quest("AgrFroid531 : Pourquoi place-t-on un clapet anti-retour avant un condenseur?://a");
rep("[ ] Ce clapet n'y est pas nécessaire");
rep("[ ] Pour empêcher le gaz comprimé de refluer dans le compresseur");
rep("[x] Pour empêcher un reflux du liquide vers le compresseur");
rep("[ ] Pour être sûr que la pression de refoulement soit supérieure à celle de condensation et que les gaz comprimés soient pompés dans le compresseur");

quest("AgrFroid532 : Pourquoi faut-il éviter d'exposer inutilement de l'huile frigorifique à l'atmosphère ?://a");
rep("[ ] Parce qu'elle a une viscosité élevée");
rep("[x] Parce qu'elle est hygroscopique");
rep("[ ] Parce qu'elle est acide");
rep("[ ] Une huile synthétique ne doit pas être manipulée avec plus de précaution qu'une huile moteur ordinaire");

quest("AgrFroid533 : Dans une installation dotée d'un détendeur thermostatique et fonctionnant bien, la surchauffe se situe entre :://a");
rep("[ ] 0 K et 2 K");
rep("[x] 4 K et 8 K");
rep("[ ] 15 K et 18 K");
rep("[ ] Moins 4 K et moins 8 K");

quest("AgrFroid534 : Lorsque la HP augmente et la BP reste constante, alors:://a");
rep("[ ] la puissance frigorifique et la puissance absorbée diminuent");
rep("[ ] le débit massique augmentent");
rep("[x] la puissance frigorifique diminue");
rep("[ ] La puissance absorbée par le compresseur diminue");

quest("AgrFroid535 : Dans une chambre froide à 1 °C, on veut un taux d'humidité de 90 % à 95 %. On doit donc opter pour une installation où l'évaporation se fait à :://a");
rep("[ ] -13 °C");
rep("[ ] 1°C");
rep("[x] -6°C");
rep("[ ] -10°C");

quest("AgrFroid536 : Un pressostat BP est réglé sur 4 bar et son différentiel, sur 3 bar. Laquelle des phrases suivantes est correcte ?://a");
rep("[ ] Le pressostat enclenchera le compresseur à 3 bar et le déclenchera à 1 bar");
rep("[ ] Le pressostat enclenchera le compresseur à 4 bar et le déclenchera à 3 bar");
rep("[x] Le pressostat enclenchera le compresseur à 4 bar et le déclenchera à 1 bar");
rep("[ ] Le pressostat déclenchera le compresseur à 4 bar et l'enclenchera à 7 bar");

quest("AgrFroid537 : Un pressostat HP est réglé sur 17 bar et son différentiel sur 3 bar. Laquelle des phrases suivantes est correcte ?://a");
rep("[x] Le pressostat déclenchera le compresseur à 17 bar et l'enclenchera à 14 bar");
rep("[ ] Le pressostat déclenchera le compresseur à 14 bar et l'enclenchera à 17 bar");
rep("[ ] Le pressostat enclenchera le compresseur à 17 bar et le déclenchera à 20 bar");
rep("[ ] Le pressostat déclenchera le compresseur à 17 bar et l'enclenchera à 20 bar");

quest("AgrFroid538 : Un dispositif de protection interne (un relais Kriwan par exemple) du moteur d'un compresseur à piston le protège contre :://a");
rep("[ ] les surintensités");
rep("[x] un échauffement excessif");
rep("[ ] les court-circuits");
rep("[ ] un ordre des phases");

quest("AgrFroid539 : Un dispositif de protection interne ou intégrale du moteur d'un compresseur à piston (un relais Kriwan par exemple) :://a");
rep("[ ] mesure une valeur ohmique des enroulements du moteur");
rep("[ ] déclenche un contact dans les enroulements du moteur");
rep("[x] mesure la température des bobinages du moteur via une thermistance");
rep("[ ] mesure un courant dans le compresseur");

quest("AgrFroid540 : Que mesure-t-on avec un vacuo-manomètre ?://a");
rep("[x] La pression absolue");
rep("[ ] La pression relative");
rep("[ ] Les pressions absolue et relative");
rep("[ ] La différence entre la pression absolue et la pression du réfrigérant");
