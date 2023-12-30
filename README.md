# ReadMe: Projet fullstack
***ne pas oublier de mettre le répo en public !!***

**Tout a été fait (plus ou moins bien) sauf les points qui se situent dans la partie "Reste à faire".**

Le front de l'application de recherche de centres de vaccination se situe dans le dossier **VaccinationCenterApp** et le back dans le dossier **demo**. L'utilisation de "material" pour le design n'est présent que sur une page.
Les tests sont là: `https://github.com/CuteCookie36/fullstack/tree/main/demo/src/test/java/com/example/demo/VaccinationCenter/service` et il ne faut les lancer qu'une fois, sinon il y aura des doubles dans la BDD ce qui créera des erreurs ! Les mots de passe sont chiffrés dans la base de données, il ne faut pas les oublier.


## Reste à faire:
- les métriques
- le jwt à finaliser, car commencé dans une des branches
- rajout d'un super-admin (car les admins des centres sont comme des super-admins)
- erreurs présentes sur les liens (autorisations)


## Lancement de l'application:
Le front de l'application se situe dans le dossier "VaccinationCenterApp", pour le lancer, il faut se situer dans le dossier et lancer la commande `ng serve`.
Le back de l'application se situe dans le dossier "demo", pour le lancer, il faut se situer dans le dossier et **dans VisualStudio** faire un clic droit sur le fichier "DemoApplication.java" et cliquer sur "Run Java".

>  Attention !! Ce projet a pris beaucoup beaucoup de temps, et il n'est pas fini, donc ne pas continuer à travailler dessus si :
> - manque de volonté
> - manque de temps (prévoir au moins une demi-journée pour une petite modification et plusieurs jours pour l'ajout d'une fonctionnalité)
