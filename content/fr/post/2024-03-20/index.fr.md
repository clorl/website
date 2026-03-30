+++
title = "Comment estimer une feature ?"
description = "Voici ma méthode pour créer des estimations 'basses résolutions' de features qui peuvent être larges, en début de production. Cela permet d'estimer avec une part de certitude une deadline que l'on peut se fixer."
date = 2024-03-01T23:36:21+01:00
categories = "Articles"
draft = true
+++

J'ai utilisé cette méthode plusieurs fois lors d'un de mes précédents postes pour estimer des *features* en début de production. Il arrivait régulièrement que la direction demande des estimations en tout début de *prod*, avant même que quoi que ce soit ne soit *designé*. Nous avions une direction générale pour une *feature*, mais rien de plus. Comment donner un ordre de grandeur des délais à ce stade si précoce?

Je me suis inspiré de [https://www.youtube.com/watch?v=7tEXWBYXIXs](cette conférence GDC) de Chris Cobb, producer chez Riot Games. Il ne s'agit pas uniquement de réduire le crunch, mais de pouvoir donner des ordres de grandeurs de deadlines, ce qui permet d'estimer le coût maximum d'une feature avant même d'y avoir consacré du temps. C'est un élément essentiel de la **gestion des coûts** d'un projet de jeu vidéo, qui est l'un des trois fondements de tout jeu à succès (à suivre sur mon blog).

Le temps de développement d'une *feature*, du design jusqu'au Q.A. et à la release, ne dépend pas uniquement de la complexité de la tâche, ni du nombre de membres d'un équipe. Les relations humaines sont étranges, et l'on sait depuis longtemps grâce à l'étude des foules que l'efficacité d'une équipe n'équivaut pas à la somme de l'éfficacité de chacun des membres individuellement. En fait, beaucoup de paramètres sont à prendre en compte, la composition de l'équipe, les dynamiques qui existent en son sein, ainsi que l'environnement. 

Dans son talk, Chris Cobb part du postulat que la durée de production d'une feature est aléatoire, on ne peut *jamais* la prédire correctement. Cela s'explique par plusieurs phénomènes, notamment la découverte de *complexité cachée* sur une feature. Seulement, nous sommes tous d'accord que nous avons globalement une idée du temps que prendra une feature, mais ce sera parfois plus, parfois moins. Alors Chris Cobb propose que la durée de production d'une feature suivrait une loi normale.

La **moyenne** de cette loi normale correspond à l'estimation donnée par l'équipe. "Je pense que ça prendra 10 jours". On peut demander à l'équipe, à quel point sont-ils confiants en cette prédiction et utiliser ceci pour calculer l'écart-type de cette loi normale. Il est souvent naturel que l'on donne une fourchette lorsqu'on estime une feature "ça prendra entre 2 et 3 semaines", ce qui nous permet également d'estime un écart-type. 

Voici le processus que j'ai utilisé étape par étape pour estimer de grandes features encore nébuleuses en début de production, avec un bon succès prédictif. Il ne s'agit pas de *mathifier* la gestion de prod, c'est avant tout une question humaine. Cela permet simplement de rationaliser sur le papier les croyances de l'équipe en un nombre facile à manipuler pour les décideurs.

**Les estimations de features ne doivent jamais devenir une garantie que l'équipe se doit de tenir. La deadline réelle doit être affinée petit à petit, à mesure que la compréhension de la complexité des features évolue et s'affine.**

# 1. Définition des besoins
Une feature commence souvent par un brief de la part d'un/e lead. Je m'entretenais alors avec celui/celle-ci afin de définir les besoins de la feature de manière la plus exhaustive. Il convient de les catégoriser : 
- Les **nécessités** : pourquoi a-t-on besoin de cette feature, quel est l'objectif recherché
- Les **envies** : les intentions créatives de mon lead, les prioritées liées aux piliers de design du projet ou à la vision

En second temps, je vais faire des recherches et benchmarks sur des features similaires, interviewer des collègues de travail sur leurs expériences de jeu et leurs références. Cela me permet d'affiner les deux premières catégories de besoins, et d'en déduire une troisième : 
- Les **standards** : quelles sont les caractéristiques quasi-universelles dont a besoin la feature

# 2. Découper dans une feature list
