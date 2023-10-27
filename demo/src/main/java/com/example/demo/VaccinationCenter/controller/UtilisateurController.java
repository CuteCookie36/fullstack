package com.example.demo.VaccinationCenter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.VaccinationCenter.entity.Utilisateur;
import com.example.demo.VaccinationCenter.service.UtilisateurServ;




@RestController
@RequestMapping(value = "/api/admin")
public class UtilisateurController {
    
    @Autowired
    private UtilisateurServ userService;

     @PostMapping(path = "/utilisateurs" )
    public Utilisateur saveUser(
        @RequestBody Utilisateur User  ){
            return userService.SaveUtilisateur(User);
        } 


    @GetMapping(path = "/utilisateurs/")
    public List<Utilisateur> getUser( ){
        return userService.findAll();
    }

   
}
