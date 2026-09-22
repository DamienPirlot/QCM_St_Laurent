// LES OPTIONS

mode_presentation("1");
mode_evaluation("1");
mode_sauvegarde("1");
//code(" "," ");
//code("essai","essai");
titre("QCM : Comprendre l'électricité");
introduction("Évaluez vos connaissances sur les différents thèmes.");
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
theme("Bac 1 : La Loi d'Ohm");

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
// SECTION : Le multimètre
// ====================================================================================

theme("Bac 1 : Le Multimètre");

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
// SECTION : Le courant continu
// ====================================================================================

theme("Bac 1 : Courant Continu (DC)");

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
// SECTION : L'électrotechnique 
// ====================================================================================

theme("Bac 1 / Bac 2 : L'electro - technique ");

quest("electro00 : Reliez chaque grandeur à son unité ://2");
rep("Tension : [Volt]");
rep("Intensité : [Ampère]");
rep("Résistance : [Ohm]");
rep("Puissance : [Watt]");

quest("electro01 : Quelle est l’unité de l’intensité du courant électrique ?://a");
rep("[x] L’ampère (A)");
rep("[ ] Le volt (V)");
rep("[ ] Le watt (W)");
rep("[ ] L’ohm (Ω)");

quest("electro02 : Quelle est l’unité de la tension électrique ?://a");
rep("[ ] L’ampère (A)");
rep("[x] Le volt (V)");
rep("[ ] Le watt (W)");
rep("[ ] L’ohm (Ω)");

quest("electro03 : Quelle est l’unité de la résistance électrique ?://a");
rep("[ ] Le volt (V)");
rep("[ ] L’ampère (A)");
rep("[x] L’ohm (Ω)");
rep("[ ] Le watt (W)");

quest("electro04 : Que représente le courant électrique ?://a");
rep("[ ] Une différence de potentiel");
rep("[x] Un déplacement d’électrons");
rep("[ ] Une résistance au passage du courant");
rep("[ ] Une puissance");

quest("electro05 : Que représente la tension électrique ?://a");
rep("[x] Une différence de potentiel entre deux points");
rep("[ ] Un flux d’électrons");
rep("[ ] Une puissance");
rep("[ ] Une fréquence");

quest("electro06 : Quelle est la loi d’Ohm ?://a");
rep("[ ] U = R / I");
rep("[ ] I = U × R");
rep("[x] U = R × I");
rep("[ ] R = U × I");

quest("electro07 : Dans un circuit, si la résistance augmente, que se passe-t-il pour le courant (à tension constante) ?://a");
rep("[x] Il diminue");
rep("[ ] Il augmente");
rep("[ ] Il reste constant");
rep("[ ] Il disparaît");

quest("electro08 : Une pile fournit quel type de courant ?://a");
rep("[ ] Courant alternatif");
rep("[x] Courant continu");
rep("[ ] Courant variable");
rep("[ ] Courant triphasé");

quest("electro09 : Le courant alternatif (AC) signifie ://a");
rep("[x] Le courant change de sens périodiquement");
rep("[ ] Le courant est constant");
rep("[ ] Le courant est nul");
rep("[ ] Le courant est stocké");

quest("electro10 : Le courant continu (DC) signifie ://a");
rep("[ ] Le courant change de sens");
rep("[x] Le courant circule toujours dans le même sens");
rep("[ ] Le courant est variable");
rep("[ ] Le courant est alternatif");

quest("electro11 : Quel est le rôle d’une résistance dans un circuit ?://a");
rep("[x] Limiter le courant");
rep("[ ] Augmenter la tension");
rep("[ ] Produire du courant");
rep("[ ] Stocker l’énergie");

quest("electro12 : Que se passe-t-il si on met des résistances en série ?://a");
rep("[x] Les résistances s’additionnent");
rep("[ ] Elles diminuent");
rep("[ ] Elles s’annulent");
rep("[ ] Elles restent identiques");

quest("electro13 : Que se passe-t-il si on met des résistances en parallèle ?://a");
rep("[ ] Elles s’additionnent");
rep("[x] La résistance équivalente diminue");
rep("[ ] Elles augmentent");
rep("[ ] Elles deviennent nulles");

quest("electro14 : Une diode laisse passer le courant ://a");
rep("[ ] Dans les deux sens");
rep("[x] Dans un seul sens");
rep("[ ] Aucun sens");
rep("[ ] Seulement en alternatif");

quest("electro15 : Quel est le rôle d’une LED ?://a");
rep("[ ] Stocker de l’énergie");
rep("[ ] Amplifier un signal");
rep("[x] Émettre de la lumière");
rep("[ ] Résister au courant");

quest("electro16 : Pourquoi utilise-t-on une résistance avec une LED ?://a");
rep("[x] Pour limiter le courant et éviter de la griller");
rep("[ ] Pour augmenter la luminosité");
rep("[ ] Pour changer la couleur");
rep("[ ] Pour stocker l’énergie");

quest("electro17 : Une LED RGB permet ://a");
rep("[ ] D’émettre une seule couleur");
rep("[x] De produire plusieurs couleurs");
rep("[ ] De mesurer la tension");
rep("[ ] De stocker des données");

quest("electro19 : Dans une LED RGB, que signifie RGB ?://a");
rep("[ ] Rouge Gris Bleu");
rep("[x] Rouge Vert Bleu");
rep("[ ] Résistance Générale Basse");
rep("[ ] Rotation Génératrice Binaire");

quest("electro20 : Dans un circuit série, le courant est ://a");
rep("[x] Identique partout");
rep("[ ] Différent à chaque endroit");
rep("[ ] Nul");
rep("[ ] Variable uniquement");

quest("electro21 : Dans un circuit parallèle, la tension est ://a");
rep("[x] Identique sur chaque branche");
rep("[ ] Différente partout");
rep("[ ] Nulle");
rep("[ ] Variable uniquement");

quest("electro22 : Que se passe-t-il si une LED est branchée à l’envers ?://a");
rep("[ ] Elle s’allume plus fort");
rep("[ ] Elle explose");
rep("[x] Elle ne s’allume pas");
rep("[ ] Elle change de couleur");

quest("electro23 : Une pile transforme ://a");
rep("[ ] Énergie mécanique en électrique");
rep("[x] Énergie chimique en électrique");
rep("[ ] Énergie électrique en thermique");
rep("[ ] Énergie lumineuse en électrique");

quest("electro24 : Quelle est l’unité de la tension électrique ?");
rep("[ ] l’ampère");
rep("[x] le volt");
rep("[ ] l’ohm");

quest("electro25 : Quelle est l’unité de l’intensité du courant ?");
rep("[x] l’ampère");
rep("[ ] le watt");
rep("[ ] le volt");

quest("electro26 : À quoi sert un fusible dans un circuit ?");
rep("[x] à protéger contre les surintensités");
rep("[ ] à augmenter la tension");
rep("[ ] à stocker l’énergie");

quest("electro27 : Quelle est la formule de base de la loi d’Ohm ?");
rep("[ ] U = I + R");
rep("[x] U = R × I");
rep("[ ] P = U × I");

quest("electro28 : Que se passe-t-il si on met deux piles en série ?");
rep("[x] la tension augmente");
rep("[ ] le courant diminue toujours");
rep("[ ] la tension reste la même");

quest("electro29 : Quelle est l’unité de la puissance électrique ?");
rep("[ ] le volt");
rep("[ ] l’ampère");
rep("[x] le watt");

quest("electro30 : Un court-circuit correspond à :");
rep("[x] une résistance très faible dans le circuit");
rep("[ ] une coupure du circuit");
rep("[ ] une tension nulle");

quest("electro31 : À quoi sert la terre dans une installation électrique ?");
rep("[x] à protéger les personnes");
rep("[ ] à augmenter la puissance");
rep("[ ] à stocker l’énergie");

quest("electro32 : Que mesure un voltmètre ?");
rep("[ ] le courant");
rep("[x] la tension");
rep("[ ] la résistance");

quest("electronique33 - En électronique, une diode permet :");
rep("[x] de laisser passer le courant dans un seul sens");
rep("[ ] d’augmenter la tension");
rep("[ ] de stocker l’énergie");

// ====================================================================================
// SECTION : Bac2 : Protections des personnes
// ====================================================================================

theme("Bac 2 : Les protections des personnes");

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

theme("Bac 2 : Courant Alternatif (AC)");

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

theme("Bac 2 : Les différents appareils électriques");

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

theme("Bac 2 : Les Moteurs Triphasés");

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

theme("Bac 2 : Synchrone vs Asynchrone");

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

theme("Bac 2 : Moteurs CC et Universel");
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
theme("Bac 2 : La courant triphasé");

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
theme("Bac 3 : La pneumatique");

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
theme("Bac 3 : Les capteurs");

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
// SECTION : Lien vers un site internet
// ====================================================================================
theme("St laurent : QCM appareillage (1 Question : Lien vers un QCM extérieur");

quest("APP00 : Lancer le QCM electrotoile en ligne//a");
fenetre_info("MODE D'EMPLOI","https://electrotoile.eu/qcm/qcm_appareillage/");

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

theme("St Laurent : L'agrégation du froid");

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
rep("[ ] A l'effet de serre tel qu'il existait en 1900");
rep("[x] Au dioxyde de carbone (CO2) à un horizon de 100 ans");

quest("AgrFroid007 : Quelles sont les substances visées par le Protocole de Montréal ?://a");
rep("[ ] Exclusivement les gaz à effet de serre fluorés");
rep("[ ] Exclusivement les substances qui appauvrissent la couche d'ozone");
rep("[x] Les substances qui appauvrissent la couche d'ozone et depuis l'accord de Kigali, les gaz à effet de serre fluorés");
rep("[ ] Les hydrocarbures polyaromatiques");

quest("AgrFroid008 : De quelle propriété des réfrigérants traite le Protocole de Montréal ?://a");
rep("[ ] Exclusivement de la cause de l'effet de serre");
rep("[ ] Exclusivement du réchauffement climatique");
rep("[x] De l'appauvrissement de la couche d'ozone et depuis l'accord de Kigali, des changements climatiques");
rep("[ ] De l'atténuation du rayonnement solaire");

quest("AgrFroid009 : Quelles sont les substances visées par le Protocole de Kyoto ?://a");
rep("[ ] Les substances qui appauvrissent la couche d'ozone");
rep("[x] Les gaz à effet de serre");
rep("[ ] Les composés organiques volatils");
rep("[ ] Les hydrocarbures polyaromatiques");

quest("AgrFroid010 : De quelle propriété des réfrigérants traite le Protocole de Kyoto ?://a");
rep("[ ] De la diminution de la couche d'ozone");
rep("[x] De leur pouvoir de réchauffement climatique");
rep("[ ] De la réduction de la pollution atmosphérique photochimique");
rep("[ ] De l'interdiction de l'utilisation de substances dangereuses pour l'environnement");

quest("AgrFroid011 : Lequel des agents suivants est un gaz à effet de serre fluoré réglementé par l'annexe I du règlement 517/2014 ?://a");
rep("[ ] Le R717");
rep("[ ] Le R1234yf");
rep("[ ] L'eau glycolée");
rep("[x] Le R407C");

quest("AgrFroid012 : Lequel des agents suivants est un gaz à effet de serre fluoré ?://a");
rep("[ ] Le R717");
rep("[ ] R290");
rep("[ ] R744");
rep("[x] Le R407C");

quest("AgrFroid013 : Lequel des agents suivants n'appartient pas au groupe des HFC réglementés par l'annexe I du règlement 517/2014 (gaz à effet de serre fluorés) ?://a");
rep("[x] Le R22");
rep("[ ] Le R404A");
rep("[ ] Le R134a");
rep("[ ] Le R407C");

quest("AgrFroid014 : Quel est le PRG/GWP du R404A ?://a");
rep("[ ] 250");
rep("[ ] 1");
rep("[x] 3922");
rep("[ ] 1 340");

quest("AgrFroid015 : Une entreprise en technique du froid agréée/enregistrée peut-elle laisser ses techniciens qualifiés réparer des pièces contenant du réfrigérant réglementé alors qu'ils ne disposent pas de l'équipement technique minimal requis pour cela ?://a");
rep("[ ] Oui, elle peut toujours partir du principe que ses techniciens ont l'équipement nécessaire avec eux");
rep("[x] Non");
rep("[ ] Elle ne peut les y autoriser que s'ils ont une expérience d'au moins 5 ans");
rep("[ ] Elle ne peut les y autoriser que s'ils travaillent sous la surveillance d'un technicien certifié");

quest("AgrFroid016 : Qu'entend-on par réfrigérant recyclé ?://a");
rep("[x] Un réfrigérant récupéré qui a été soumis à un processus de nettoyage simple");
rep("[ ] Un réfrigérant récupéré qui a été traité de façon à le rendre comparable à du réfrigérant vierge");
rep("[ ] Un réfrigérant récupéré qui n'a été soumis à aucun nettoyage ou autre traitement préalable à sa réutilisation");
rep("[ ] Il s'agit d'un mélange dont la composition a été rééquilibrée");

quest("AgrFroid017 : La couche d'ozone :://a");
rep("[ ] n'est pas attaquée par le R12, ni par le R22");
rep("[ ] n'est pas attaquée par les réfrigérants chlorés");
rep("[ ] est attaquée par le R134a");
rep("[x] est attaquée par les réfrigérants chlorés");

quest("AgrFroid018 : Laquelle des affirmations suivantes est correcte ?://a");
rep("[ ] Le rejet de 1 kg de R134a aggrave autant l'effet de serre que le rejet de 1,43 kg de CO2");
rep("[ ] Le rejet de 1 kg de R134a aggrave autant l'effet de serre que le rejet de 14,3 kg de CO2");
rep("[ ] Le rejet de 1 kg de R134a aggrave autant l'effet de serre que le rejet de 143 kg de CO2");
rep("[x] Le rejet de 1 kg de R134a aggrave autant l'effet de serre que le rejet de 1 430 kg de CO2");

quest("AgrFroid019 : Lequel de ces réfrigérants a un PACO/ODP non nul ?://a");
rep("[x] Le R22");
rep("[ ] Le R404A");
rep("[ ] Le R134a");
rep("[ ] Le R407C");

quest("AgrFroid020 : Quel est l'effet direct de la diminution de la couche d'ozone ?://a");
rep("[x] Elle augmente la quantité de rayons solaires UV nocifs qui atteignent la surface de la Terre");
rep("[ ] Elle favorise le réchauffement de la Terre");
rep("[ ] Elle favorise la fonte des calottes polaires");
rep("[ ] Elle augmente les pluies acides");

quest("AgrFroid021 : Qu'entend-on par 'régénérer' un réfrigérant ?://a");
rep("[ ] Récupérer un réfrigérant");
rep("[ ] Réutiliser un réfrigérant récupéré, mais sans nettoyage ou traitement préalable");
rep("[ ] Réutiliser un réfrigérant récupéré et soumis à un processus de nettoyage simple");
rep("[x] Réutiliser un réfrigérant récupéré et traité de façon à le rendre comparable à un réfrigérant vierge");

quest("AgrFroid022 : De quelle catégorie de certificat une personne a-t-elle besoin pour prélever 4 kg de R407C sur un petit système de climatisation (split system) ?://a");
rep("[x] D'un certificat de catégorie I");
rep("[ ] D'un certificat de catégorie II");
rep("[ ] D'un certificat de catégorie III");
rep("[ ] D'un certificat de catégorie IV");

quest("AgrFroid023 : Lequel de ces réfrigérants possède le PACO/ODP le plus bas ?://a");
rep("[x] Le NH3");
rep("[ ] Le R408A");
rep("[ ] Le R409A");
rep("[ ] Le R22");

quest("AgrFroid024 : Lequel de ces agents a un PACO/ODP non nul ?://a");
rep("[x] Le R22");
rep("[ ] Le R134a");
rep("[ ] Le R600a");
rep("[ ] Le R744");

quest("AgrFroid025 : Quel est le constituant du R22 qui a entraîné son interdiction d'utilisation ?://a");
rep("[ ] Le fluor");
rep("[x] Le chlore");
rep("[ ] L'hydrogène");
rep("[ ] Le carbone");

quest("AgrFroid026 : A quel terme correspond l'abréviation PACO ?://a");
rep("[ ] Protocole d'accord sur le monoxyde de carbone (CO)");
rep("[x] Potentiel d'appauvrissement de la couche d'ozone");
rep("[ ] Procédé d'atténuation de la consommation d'oxygène");
rep("[ ] Pic d'assimilation des composés organiques");

quest("AgrFroid027 : Les titulaires d'un certificat de catégorie III ://a");
rep("[x] peuvent récupérer du HFC dans les installations qui en contiennent moins de 3 kg (ou moins de 6 kg si le système est du type hermétique)");
rep("[ ] peuvent effectuer des réparations du circuit frigorifique d'installations contenant moins de 3 kg de HFC");
rep("[ ] peuvent effectuer des réparations du circuit frigorifique des installations contenant 3 kg ou plus de HFC");
rep("[ ] peuvent récupérer le HFC des installations qui en contiennent 3 kg ou plus");

quest("AgrFroid028 : Quel est le réfrigérant dont les émissions ont la plus grande influence directe négative sur l'effet de serre ?://a");
rep("[ ] Le NH3");
rep("[ ] Le CO2");
rep("[x] Les HFC");
rep("[ ] Tous les agents réfrigérants");

quest("AgrFroid029 : Un livret de bord / carnet d'entretien / registre ://a");
rep("[x] est obligatoire pour une installation dont la contenance en agent réfrigérant fluoré est supérieure ou égale à 5 t éq. CO2 de HFC");
rep("[ ] n'est pas du tout obligatoire quelle que soit l'installation");
rep("[ ] est uniquement obligatoire pour les installations dont la contenance en agent réfrigérant fluoré est supérieure à 50 t éq. CO2 de HFC");
rep("[ ] n'est pas obligatoire pour les installations de climatisation");

quest("AgrFroid030 : Est-ce qu'une intervention sur le circuit frigorifique d'une installation de climatisation contenant 1 kg de HFC doit être effectuée par un technicien frigoriste disposant du certificat adéquat ?://a");
rep("[ ] Non jamais");
rep("[x] Oui toujours");
rep("[ ] Seulement si l'installation a nécessité la connexion d'au moins 2 éléments contenant de l'agent réfrigérant");
rep("[ ] Seulement si cette installation est visée par la norme NBN EN 378");

quest("AgrFroid031 : Est-ce qu'une intervention sur le circuit frigorifique d'une installation de climatisation contenant 2 kg de HFC doit être effectuée par un technicien frigoriste certifié ?://a");
rep("[ ] Non jamais");
rep("[x] Oui toujours");
rep("[ ] Oui, sauf si il s'agit d'un équipement à circuit hermétique");
rep("[ ] Oui si cette installation est visée par la norme NBN EN 378");

quest("AgrFroid032 : Est-ce que l'installation d'un circuit frigorifique contenant 500 tonnes équivalent CO2 ou plus de HFC doit être effectuée par un technicien frigoriste disposant du certificat adéquat ?://a");
rep("[ ] Seulement si cet équipement est visé par la Directive européenne sur les équipements sous pression");
rep("[ ] Oui excepté le brasage qui peut être réalisé par des braseurs titulaires de la qualification requise, mais sous la responsabilité d'un technicien frigoriste disposant du certificat adéquat");
rep("[x] Oui toujours");
rep("[ ] Non, car l'installation des équipements frigorifiques n'est pas visée par les règlementations régionales");

quest("AgrFroid033 : Est-ce que lorsque le personnel certifié effectue des opérations pour laquelle sa certification est requise il est obligé de notifier certaines informations dans le registre / livret de bord de l'équipement ?://a");
rep("[ ] Uniquement si l'exploitant de l'équipement dispose d'une certification ISO 14001 ou EMAS");
rep("[ ] Non, c'est l'exploitant qui doit notifier les informations adéquates dans le livret de bord");
rep("[ ] Uniquement si une fuite d'agent réfrigérant fluoré a été observée");
rep("[x] Oui, toujours");

quest("AgrFroid034 : Les agents réfrigérants fluorés récupérés ://a");
rep("[ ] à moins qu'ils soient toxiques, ne doivent faire l'objet d'aucun traitement spécifique");
rep("[ ] sont considérés comme déchets non dangereux s'il s'agit de HFC");
rep("[ ] sont des déchets non dangereux puisqu'ils ne sont pas toxiques");
rep("[x] sont considérés comme déchets dangereux et doivent être éliminés comme tel");

quest("AgrFroid035 : Le technicien frigoriste disposant du certificat adéquat délivré conformément au Règlement UE 2015/2067 est le seul habilité à ://a");
rep("[ ] intervenir dans les armoires électriques");
rep("[x] récupérer les agents réfrigérants fluorés contenus dans les équipements frigorifiques");
rep("[ ] dimensionner une nouvelle installation frigorifique");
rep("[ ] transporter les agents réfrigérants fluorés issus des équipements frigorifiques");

quest("AgrFroid036 : Selon la norme NBN EN 378, à quelle pression doit-on effectuer le test d'étanchéité à l'azote sur la totalité d'une installation de réfrigération ?://a");
rep("[ ] A sa pression de service maximale admissible");
rep("[ ] A une pression de 16 bars côté HP et 6 bars côté BP");
rep("[x] A une pression égale à 1,5 fois la pression de service maximale");
rep("[ ] A une pression égale à 1,1 fois la pression maximale de service");

quest("AgrFroid037 : A partir de quelle pression régnant dans l'installation la soupape de surpression doit-elle s'ouvrir afin de libérer le réfrigérant dans l'atmosphère ?://a");
rep("[ ] A une pression supérieure de 30 % à la pression maximale de service");
rep("[ ] A une pression supérieure à 1,1 fois la pression maximale de service");
rep("[x] Lorsque la surpression dépasse d'au moins 15 % la pression maximale de service");
rep("[ ] La soupape ne peut en aucun cas laisser du réfrigérant s'échapper dans l'atmosphère");

quest("AgrFroid038 : Une notice d'utilisation doit-elle accompagner chaque installation de réfrigération ?://a");
rep("[ ] Il n'en faut une que si la puissance dépasse 100 kW");
rep("[ ] La norme NBN EN 378 ne comprend pas de dispositions");
rep("[ ] C'est le fabricant du compresseur qui doit fournir la notice");
rep("[x] Selon la norme NBN-EN 378, toute installation conforme doit être accompagnée d'une notice d'utilisation");

quest("AgrFroid039 : Selon la norme NBN-EN 378, sur quelle pression les pressostats de sécurité du côté haute pression doivent-ils être réglés ?://a");
rep("[ ] Sur une pression supérieure à 25 bars");
rep("[x] Sur une pression qui ne peut pas être > à 90% de la pression maximale admissible");
rep("[ ] Sur une pression correspondant à la température d'évaporation");
rep("[ ] Sur une pression inférieure à 25 bar");

quest("AgrFroid040 : Qui peut réparer les pannes et fuites d'un circuit frigorifique contenant des gaz à effet de serre fluorés ?://a");
rep("[ ] Tout le monde");
rep("[ ] Toute personne disposant de l'accès à la profession");
rep("[ ] Le propriétaire/exploitant");
rep("[x] Un technicien frigoriste disposant du certificat requis");

quest("AgrFroid041 : Sur base des informations collectées en application du Règlement 517/2014, de quelle façon peut-on établir formellement quand une installation a été contrôlée pour la dernière fois ?://a");
rep("[x] En consultant le registre de l'équipement");
rep("[ ] En vérifiant les factures et bons de travail");
rep("[ ] En consultant une base de données centralisée");
rep("[ ] En se renseignant auprès de la personne chargée de l'entretien");

quest("AgrFroid042 : Quand on ajoute du réfrigérant de type HFC dans une installation d'une capacité nominale en frigorigène de 5 t éq. CO2 ou plus pour compenser une perte, faut-il également le noter dans le registre ?://a");
rep("[x] Oui, tous les ajouts doivent y être notés");
rep("[ ] Il ne faut y noter que les pertes dues à des fuites");
rep("[ ] On ne doit pas le noter");
rep("[ ] L'ajout doit être noté dans un registre des pertes accidentelles");

quest("AgrFroid043 : Quand doit-on contrôler l'étanchéité d'une installation contenant 20 t éq. CO2 de réfrigérant ?://a");
rep("[ ] Tous les 12 mois");
rep("[ ] Tous les 3 mois");
rep("[ ] Tous les 6 mois");
rep("[x] Tous les 6 mois (ou 12 mois si détecteur de fuite)");

quest("AgrFroid044 : Dans quel délai doit-on procéder à un nouveau contrôle d'étanchéité sur une installation où une fuite a été réparée ?://a");
rep("[ ] Dans un délai maximum de 2 semaines");
rep("[x] Dans un délai maximum d'un mois");
rep("[ ] Dans un délai maximum de 12 mois");
rep("[ ] Dans un délai maximum de 3 mois");

quest("AgrFroid045 : Quand doit-on contrôler l'étanchéité d'une installation d'une capacité de 5 à < 50 tonnes équivalent CO2 de réfrigérant non équipée d'un détecteur de fuite fixe ?://a");
rep("[ ] Tous les 2 ans");
rep("[x] Tous les ans");
rep("[ ] Tous les ans (+ réparation sous 6 mois)");
rep("[ ] Tous les 6 mois");

quest("AgrFroid046 : Quand est-il obligatoire de contrôler l'étanchéité d'une installation de 50 à < 500 tonnes équivalent CO2 sans détecteur ?://a");
rep("[ ] Tous les ans");
rep("[ ] Tous les 14 jours");
rep("[x] Tous les 6 mois");
rep("[ ] Deux fois par an");

quest("AgrFroid047 : Quand est-il obligatoire de contrôler l'étanchéité d'une installation >500 tonnes équivalent CO2 équipée d'un système de détection de fuite ?://a");
rep("[x] Tous les 3 mois");
rep("[ ] Tous les 6 mois");
rep("[ ] Une fois par an");
rep("[ ] Tous les 2 ans");

quest("AgrFroid048 : Quand est-il obligatoire de contrôler l'étanchéité d'une installation de 50 à 500 t éq. CO2 équipée d'un système de détection de fuite ?://a");
rep("[ ] Tous les 6 mois");
rep("[ ] Tous les 2 ans");
rep("[x] Tous les ans");
rep("[ ] Tous les 6 mois (+ 2 mois réparation)");

quest("AgrFroid049 : Lequel des agents suivants ne peut plus être utilisé ?://a");
rep("[ ] Le R134a");
rep("[ ] Le R410A");
rep("[x] Le R22");
rep("[ ] Le R507");

quest("AgrFroid050 : Quelle doit être la sensibilité minimale d'un détecteur électronique de fuites utilisé pour effectuer un contrôle d'étanchéité périodique réglementaire ?://a");
rep("[ ] 5 g/an");
rep("[ ] 5 % de la capacité");
rep("[ ] 1 000 ppm");
rep("[x] 100 g/an");

quest("AgrFroid051 : Depuis quand ne peut-on plus utiliser du HCFC recyclé ?://a");
rep("[x] Depuis le 01/01/2015");
rep("[ ] Depuis le 01/01/2016");
rep("[ ] Depuis le 01/01/2017");
rep("[ ] Depuis l'Amendement de Kigali");

quest("AgrFroid052 : Qui peut effectuer le nettoyage externe des appareils de réfrigération ?://a");
rep("[x] Tout le monde");
rep("[ ] N'importe quel membre d'une entreprise agréée");
rep("[ ] Sous surveillance d'un frigoriste");
rep("[ ] Exclusivement un technicien certifié");

quest("AgrFroid053 : Qui peut effectuer des réparations électriques sur une installation de réfrigération ?://a");
rep("[x] Une personne possédant les compétences techniques requises");
rep("[ ] Exclusivement un technicien frigoriste certifié");
rep("[ ] Certifié + module électricité-froid");
rep("[ ] Sous surveillance");

quest("AgrFroid054 : Quelles installations ne doivent pas subir de contrôle annuel d'étanchéité ?://a");
rep("[ ] <10 t CO2");
rep("[ ] Hermétiques <10 t CO2 + <5 t CO2");
rep("[x] Hermétiques <10 t CO2 avec marquage");
rep("[ ] <50 t CO2 avec détecteur");

quest("AgrFroid055 : Le type de réfrigérant doit-il être indiqué sur le registre ?://a");
rep("[ ] Oui à partir de 5 kg");
rep("[ ] Oui à partir de 50 t CO2");
rep("[x] Oui à partir de 5 t CO2");
rep("[ ] Oui à partir de 500 t CO2");

quest("AgrFroid056 : Si aucune fuite, quand vérifier une installation de 20 t CO2 sans détecteur ?://a");
rep("[ ] Chaque semaine");
rep("[ ] Tous les 3 mois");
rep("[x] Tous les 12 mois");
rep("[ ] Tous les mois");

quest("AgrFroid057 : Les raccords évasés flare sont-ils toujours autorisés ?://a");
rep("[ ] Seulement démontables");
rep("[x] Oui mais non recommandés");
rep("[ ] Interdits");
rep("[ ] Remplacés par euroraccords");

quest("AgrFroid058 : Quand contrôler une installation 5 à <50 t CO2 sans détecteur ?://a");
rep("[ ] Tous les 3 mois");
rep("[ ] Tous les 6 mois");
rep("[x] Tous les 12 mois");
rep("[ ] Tous les 24 mois");

quest("AgrFroid059 : Une installation de 10 t CO2 doit comprendre ://a");
rep("[ ] Détection fuite");
rep("[ ] Contrôle T° et pression");
rep("[x] Un registre");
rep("[ ] Voyant liquide");

quest("AgrFroid060 : A quoi sert essentiellement le registre ?://a");
rep("[ ] A disposer d'un document qui est régulièrement paraphé");
rep("[ ] A disposer d'un document dont l'exactitude des données est vérifiée par un organisme de contrôle");
rep("[ ] A disposer d'un document qui sert exclusivement à consigner tous les travaux d'entretien");
rep("[x] A disposer d'un document dans lequel on note tous les travaux d'entretien et les quantités de réfrigérant qui sont vidangées ou ajoutées");

quest("AgrFroid061 : Selon la réglementation européenne, quelles sont les installations utilisant des réfrigérants fluorés à effet de serre qui doivent subir au minimum un contrôle périodique d'étanchéité ?://a");
rep("[x] Uniquement celles dont la capacité nominale en réfrigérant est de 5 t équivalent CO2 ou plus (et 10 t éq. CO2 si hermétiques)");
rep("[ ] Uniquement celles dont la capacité nominale en réfrigérant est de 15 tonnes équivalent CO2 ou plus");
rep("[ ] Uniquement celles dont la capacité nominale en réfrigérant est de 10 tonnes équivalent CO2 ou plus");
rep("[ ] Uniquement celles dont la capacité nominale en réfrigérant est de 20 tonnes équivalent CO2 ou plus");

quest("AgrFroid062 : Une installation au R134a a été réparée suite à une fuite. Dans quel délai doit-on en contrôler à nouveau l'étanchéité ?://a");
rep("[x] Dans un délai de 2 semaines");
rep("[ ] Dans un délai de 6 mois");
rep("[ ] Dans un délai de 12 mois");
rep("[ ] Dans un délai de 1 mois");

quest("AgrFroid063 : A partir de quelle capacité en réfrigérant les installations au HFC doivent-elles être dotées d'un système fixe de détection de fuites ?://a");
rep("[x] > 50 t éq. CO2");
rep("[ ] > 500 t éq. CO2");
rep("[ ] > 300 kg de réfrigérant de type HFC");
rep("[ ] > 50 kg réfrigérant");

quest("AgrFroid064 : Le contrôle obligatoire des systèmes fixes de détection de fuites doit être réalisé :://a");
rep("[ ] tous les 6 mois");
rep("[ ] tous les 3 mois");
rep("[x] tous les 12 mois");
rep("[ ] tous les 24 mois");

quest("AgrFroid065 : Lequel de ces agents a le moins d'influence sur le réchauffement global ?://a");
rep("[ ] Le R134a");
rep("[ ] Le R404A");
rep("[x] Le R717");
rep("[ ] Le R744");

quest("AgrFroid066 : Les titulaires d'un certificat de catégorie II (complétez) :://a");
rep("[ ] peuvent effectuer des réparations du circuit frigorifique des installations contenant 3 kg ou plus de HFC");
rep("[x] peuvent effectuer des réparations du circuit frigorifique d'installations contenant moins de 3 kg de HFC (ou moins de 6 kg si le système est du type hermétique)");
rep("[ ] peuvent récupérer le HFC d'installations qui en contiennent 3 kg ou plus");
rep("[ ] peuvent exclusivement récupérer du HFC dans les installations qui en contiennent moins de 3 kg (ou moins de 6 kg si le système est du type hermétique)");

quest("AgrFroid067 : La réglementation européenne distingue deux méthodes de contrôle de l'étanchéité des installations de réfrigération contenant des gaz à effet de serre fluorés. Lesquelles ?://a");
rep("[ ] La méthode de Mollier et la méthode de mesure directe");
rep("[x] Les méthodes de contrôle directe et indirecte");
rep("[ ] La méthode de Mollier et la méthode de mesure indirecte");
rep("[ ] La méthode de l'égalisation de pression interne et celle de l'égalisation de pression externe");

quest("AgrFroid068 : Un technicien peut-t-il encore ajouter du HCFC dans des installations ?://a");
rep("[ ] Oui, s'il dispose du certificat requis");
rep("[x] Non, l'usage du HCFC est totalement interdit depuis le 01/01/2015");
rep("[ ] Oui, mais uniquement dans des installations construites avant 2001");
rep("[ ] Oui, mais uniquement du HCFC recyclé");

quest("AgrFroid069 : Quand a lieu le contrôle obligatoire de l'étanchéité d'une installation aux HFC dont le système de détection des fuites est en état de marche et qui contient plus de 500 t éq. CO2 de réfrigérant ?://a");
rep("[ ] Tous les 3 mois + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[x] Une fois par an + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[ ] Tous les 6 mois + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");
rep("[ ] Une fois tous les 2 ans + si réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation");

quest("AgrFroid070 : Qui peut effectuer la mise en service d'un équipement frigorifique contenant 50 tonnes équivalent CO2 de réfrigérant ?://a");
rep("[ ] Un technicien frigoriste certifié ou une personne travaillant sous sa responsabilité");
rep("[x] Exclusivement un technicien frigoriste disposant du certificat adéquat");
rep("[ ] Toute personne travaillant pour le compte de l'exploitant de l'équipement frigorifique");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique spécialisée/enregistrée");

quest("AgrFroid071 : A combien de t éq. CO2 correspondent 30 kg de HFC 134a (GWP = 1430) ?://a");
rep("[ ] 39,6 t éq. CO2");
rep("[ ] 4,290 t éq. CO2");
rep("[x] 42,9 t éq. CO2");
rep("[ ] 30 t éq. CO2");

quest("AgrFroid072 : Qui peut intervenir sur les parties d'un équipement frigorifique contenant 10 kg d'agent réfrigérant.://a");
rep("[x] Un technicien frigoriste certifié de catégorie I ou une personne travaillant sous sa responsabilité");
rep("[ ] Exclusivement un technicien disposant du certificat de catégorie I");
rep("[ ] Exclusivement un technicien disposant du certificat de catégorie I ou II");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique spécialisée/enregistrée");

quest("AgrFroid073 : A partir de quand l'exploitant est-il obligé d'installer un système de détection de fuites ?://a");
rep("[ ] Si la puissance de l'équipement est supérieure à 300 kW frigorifique");
rep("[x] Si l'équipement frigorifique contient plus de 500 t éq. CO2 d'agent réfrigérant fluoré");
rep("[ ] Si la charge en agent réfrigérant fluoré est supérieure à 300 kg");
rep("[ ] Si l'équipement frigorifique contient un agent réfrigérant fluoré dont le GWP est supérieur à 1500");

quest("AgrFroid074 : Quelles sont les conditions minimales que doit remplir une entreprise en technique du froid pour pouvoir être agréée/enregistrée ?://a");
rep("[ ] Le chef de cette entreprise doit être un technicien disposant du certificat requis");
rep("[ ] Les travailleurs occupés par cette entreprise sont exclusivement des techniciens frigoristes disposant du certificat requis");
rep("[x] \"Elle doit employer du personnel titulaire d'un certificat pour les activités pertinentes, en nombre suffisant pour faire face au volume d'activité escompté, et apporter la preuve que le personnel dispose de l'outillage et des procédures nécessaires.\"");
rep("[ ] Son équipement doit correspondre au minimum à celui visé dans la règlementation régionale et son dirigeant doit disposer de l'accès à la profession de frigoriste");

quest("AgrFroid075 : Le test de pression est réalisé par://a");
rep("[ ] un monteur frigoriste");
rep("[ ] un technicien agréé BA5");
rep("[ ] une personne disposant de l'accès à la profession de frigoriste");
rep("[x] un technicien frigoriste disposant du certificat adéquat");

quest("AgrFroid076 : Le test d'étanchéité à l'aide d'un détecteur électronique d'une installation contenant 5 t éq. CO2 de HFC est réalisé par://a");
rep("[x] un technicien frigoriste certifié de catégorie I, II ou IV");
rep("[ ] un technicien frigoriste certifié de catégorie II");
rep("[ ] un technicien frigoriste certifié de catégorie III");
rep("[ ] un technicien en possession d'un diplôme de frigoriste validé par une entitée reconnue par les administrations régionales de l'environnement");

quest("AgrFroid077 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 40 tonnes équivalent CO2 de gaz à effet de serre fluoré non équipé d'un système de détection de fuites ?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");

quest("AgrFroid078 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HFC si aucun système de détection des fuites n'est installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");

quest("AgrFroid079 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 250 t éq. CO2 de HFC si aucun système de détection des fuites n'est installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");

quest("AgrFroid080 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HFC s'il y a un système de détection de fuites ?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");

quest("AgrFroid081 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 2500 t éq. CO2 de HFC, tenant compte du fait qu'un système de détection de fuites a du être installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");

quest("AgrFroid082 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 4200 tonnes équivalent CO2 de HFC, tenant compte du fait qu'un système de détection de fuites a du être installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");

quest("AgrFroid083 : Les gaz à effet de serre fluorés visés à l'annexe II du Règlement 517/2014 :://a");
rep("[ ] Sont exclusivement visés par une obligation de communication d'informations sur les quantités produites, importées et exportées");
rep("[x] Sont soumis aux mêmes règles que les gaz visés à l'annexe I");
rep("[ ] Doivent être manipulés par des techniciens certifiés de catégorie correspondante");
rep("[ ] Doivent être manipulés par des techniciens certifiés de catégorie V, qui vise les interventions sur des gaz inflammables");

quest("AgrFroid084 : Le réfrigérant d'une installation contenant de l'agent réfrigérant fluoré peut être vidangé par :://a");
rep("[x] le personnel d'une entreprise agréée/enregistrée, sous la surveillance et la responsabilité d'un technicien disposant du certificat requis");
rep("[ ] le personnel d'une entreprise disposant d'un certificat de catégorie IV");
rep("[ ] un technicien disposant du certificat requis, travaillant dans une entreprise agréée/enregistrée");
rep("[ ] une entreprise agréée pour la collecte et le transport de déchets dangereux");

quest("AgrFroid085 : Qui est responsable de la conservation du registre/livret de bord d'un équipement frigorifique ?://a");
rep("[x] L'exploitant de l'équipement, les entreprises en techique frigorifique devant en conserver une copie");
rep("[ ] Le technicien frigoriste certifié");
rep("[ ] Exclusivement l'entreprise en technique frigorifique");
rep("[ ] Exclusivement l'exploitant d'équipements");

quest("AgrFroid086 : Un technicien frigoriste a oublié sa bouteille d'azote alors qu'il doit effectuer un brasage fort pour réparer une installation. Peut-il quand même faire cette soudure ?://a");
rep("[x] Non, ca ne répond pas aux règles de l'art");
rep("[ ] Oui, mais il doit apposer un marquage spécifique sur cette soudure");
rep("[ ] Oui, à condition de la réaliser avec 30 % d'argent");
rep("[ ] Oui, si l'exploitant de l'autorisation lui en donne l'autorisation");

quest("AgrFroid087 : Les titulaires d'un certificat de catégorie II (complétez) :://a");
rep("[ ] peuvent exclusivement récupérer des HFC");
rep("[ ] peuvent effectuer des réparations le circuit d'installations frigorifiques contenant plus de 10 kg de HFC");
rep("[ ] peuvent récupérer du HFC dans les installations qui en contiennent plus de 6 kg (ou plus de 12 kg si le système est de type hermétique)");
rep("[x] peuvent récupérer du HFC exclusivement dans les installations qui en contiennent moins de 3 kg (ou moins de 6 kg si le système est du type hermétique)");

quest("AgrFroid088 : Un technicien frigoriste peut-il encore ajouter du HCFC?://a");
rep("[ ] Oui, s'il est certifié");
rep("[x] Non, l'utilisation du HCFC est totalement interdite depuis 2015");
rep("[ ] Oui, mais uniquement dans des installations construites avant 2001");
rep("[ ] Oui, mais uniquement du HCFC recyclé");

quest("AgrFroid089 : Quand a lieu le contrôle obligatoire de l'étanchéité d'une installation HFC qui comprend un système de détection des fuites de plus de 500 tonnes équivalent CO2 de réfrigérant ?://a");
rep("[ ] Tous les 3 mois (et en cas de réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation)");
rep("[x] Une fois par an (et en cas de réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation)");
rep("[ ] Tous les 6 mois (et en cas de réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation)");
rep("[ ] Une fois tous les 2 ans (et en cas de réparation d'une fuite: directement après cet acte et dans le mois suivant la réparation)");

quest("AgrFroid090 : Qui peut effectuer le remplissage d'un équipement frigorifique contenant 50 tonnes équivalent CO2 ?://a");
rep("[ ] Un technicien frigoriste certifié/qualifié ou une personne travaillant sous sa responsabilité");
rep("[x] Exclusivement un technicien frigoriste disposant du certificat adéquat");
rep("[ ] Toute personne travaillant pour le compte de l'exploitant de l'équipement frigorifique");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique agréée/enregistrée");

quest("AgrFroid091 : Qui peut intervenir sur les parties d'un équipement contenant 20 tonnes équivalent CO2 de HFC ?://a");
rep("[x] Un technicien frigoriste certifié de catégorie I ou toute personne travaillant sous sa responsabilité");
rep("[ ] Exclusivement un technicien disposant du certificat de catégorie I");
rep("[ ] Exclusivement un technicien disposant du certificat de catégorie I ou II");
rep("[ ] Toute personne travaillant pour le compte d'une entreprise en technique frigorifique agréée/enregistrée");

quest("AgrFroid092 : A partir de quand l'exploitant est-il obligé d'installer un système de détection de fuites ?://a");
rep("[ ] Si la puissance de l'équipement est supérieure à 300 kw frigorifique");
rep("[x] Si l'équipement frigorifique contient plus de 500 tonnes équivalent CO2 d'agent réfrigérant fluoré");
rep("[ ] Si la charge en agent réfrigérant fluoré est supérieure à 50 tonne équivalent CO2");
rep("[ ] Si l'équipement frigorifique contient un agent réfrigérant fluoré dont le GWP est supérieur à 1500");

quest("AgrFroid093 : La période entre deux contrôles d'étanchéité d'équipements contenant des HFC non pourvus d'un système de détection de fuites :://a");
rep("[x] est moins longue comparativement à celle d'un équipement contenant la même masse nominale de HFC équipé d'un système de détection de fuites");
rep("[ ] est plus longue comparativement à celle d'un équipement contenant la même masse nominale de HFC équipé d'un système de détection de fuites");
rep("[ ] est identique à celle d'un équipement contenant la même masse nominale de HFC pourvu d'un système de détection de fuites");
rep("[ ] est d'une fois par an, quelle que soit la masse nominale d'agent réfrigérant");

quest("AgrFroid094 : Quelles sont les conditions minimales que doit remplir une entreprise en technique du froid pour pouvoir être agréée ?://a");
rep("[ ] Le chef de cette entreprise doit être un technicien disposant du certificat requis et son entreprise doit satisfaire aux prescriptions de la loi sur l'établissement");
rep("[ ] Les travailleurs occupés par cette entreprise sont exclusivement des techniciens frigoristes disposant du certificat ou de l'accès à la profession requis");
rep("[x] \"Elle doit employer du personnel titulaire d'un certificat pour les activités pertinentes, en nombre suffisant pour faire face au volume d'activité escompté, et apporter la preuve que le personnel dispose de l'outillage et des procédures nécessaires.\"");
rep("[ ] Son équipement doit correspondre au minimum à celui visé dans la règlementation régionale et son dirigeant doit disposer de l'accès à la profession de frigoriste");

quest("AgrFroid095 : Le test de pression est réalisé par://a");
rep("[ ] un monteur frigoriste");
rep("[ ] un technicien agréé BA5");
rep("[ ] une personne disposant de l'accès à la profession de frigoriste");
rep("[x] un technicien frigoriste disposant du certificat adéquat");

quest("AgrFroid096 : Le test réglementaire d'étanchéité à l'aide d'un détecteur d'une installation contenant 70 tonnes équivalent CO2 de HFC est réalisé par://a");
rep("[x] un technicien frigoriste certifié de catégorie I, II ou IV");
rep("[ ] un technicien frigoriste certifié de catégorie I ou II");
rep("[ ] un technicien frigoriste certifié de catégorie I ou IV");
rep("[ ] un technicien non obligatoirement certifié, le certificat est uniquement obligatoire pour les contrôles nécessitant d'accéder au circuit");

quest("AgrFroid097 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 40 tonnes équivalent CO2 d'agent réfrigérant fluoré non équipée d'un système de détection des fuites?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep"[x] 6 mois");
rep("[ ] 12 mois");

quest("AgrFroid098 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HCF si aucun système de détection des fuites n'est installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");

quest("AgrFroid099 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 400 tonnes équivalent CO2 de HFC si il y a un système de détection des fuites ?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[ ] 6 mois");
rep("[x] 12 mois");

quest("AgrFroid100 : Quelles sont les fréquences du contrôle d'étanchéité d'une installation contenant 800 tonnes équivalent CO2 de HFC, tenant compte du fait qu'un système de détection de fuites a dû être installé?://a");
rep("[ ] 1 mois");
rep("[ ] 3 mois");
rep("[x] 6 mois");
rep("[ ] 12 mois");


