package com.example.demo.VaccinationCenter.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.assertj.core.api.Assertions;
import com.example.demo.VaccinationCenter.entity.Utilisateur;
import com.example.demo.VaccinationCenter.repository.UtilisateurRepo;


@SpringBootTest
public class UtilisateurServiceTest {
    
    @Autowired
    UtilisateurServ utilisateurService;
    @Autowired
    UtilisateurRepo utilisateurRepository;

    @Test
    public void test1(){
        var User1 = new Utilisateur();
        User1.setLogin("choucroute");
        User1.setPassword("frite");
        User1.setEmail("nuggets@salut.com");
        User1.setNom("lasagne");
        User1.setPrenom("tiramisu");
        User1.setRoles("med");
        this.utilisateurService.SaveUtilisateur(User1);

        var resultat = utilisateurService.validationUtilisateur("choucroute", "frite", "lasagne", "tiramisu", "nuggets@salut.com", "med" );
        System.out.println("resultat: " + resultat);
        Assertions.assertThat(resultat).isTrue();
        Assertions.assertThat(this.utilisateurRepository.findByEmail("nuggets@salut.com").getPrenom()).isEqualTo("tiramisu");
    }
}
