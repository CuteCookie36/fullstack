package com.example.demo.VaccinationCenter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.VaccinationCenter.entity.Utilisateur;
import com.example.demo.VaccinationCenter.service.UtilisateurServ;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;


@RestController
@RequestMapping(value = "/api")
public class UtilisateurController {
    
    @Autowired
    private UtilisateurServ userService;

     @PostMapping(path = "/admin/utilisateurs" )
    public Utilisateur saveUser(
        @RequestBody Utilisateur User  ){
            return userService.SaveUtilisateur(User);
        } 


    @GetMapping(path = "/admin/utilisateurs/")
    public List<Utilisateur> getUser( ){
        return userService.findAll();
    }


    @GetMapping("/public/login")
    public ResponseEntity<Void> login() {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/public/utilisateur")
    public java.util.Optional<Utilisateur> getUtilisateur(String login) {
        return userService.findByLogin(login);
    } 
    @GetMapping("/public/utilisateur/")
    public List<Utilisateur> getAllUtilisateur() {
        return userService.findAll();
    } 

    @GetMapping("/utilisateur")
    public java.util.Optional<Utilisateur> getUtilisateur_f(String login) {
        return userService.findByLogin(login);
    }
            
        

   
}
