package com.example.demo.VaccinationCenter.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.VaccinationCenter.entity.AuthReponse;
import com.example.demo.VaccinationCenter.entity.Utilisateur;
import com.example.demo.VaccinationCenter.service.UtilisateurServ;


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

    @PostMapping("/public/auth")
    public AuthReponse authentif(@RequestBody Utilisateur user) {
        return this.userService.authenticate(user);
    }


    @GetMapping("/public/utilisateur")
    public java.util.Optional<Utilisateur> getUtilisateur(String login) {
        return userService.findByLogin(login);
    }
    @GetMapping("/public/utilisateurs")
    public List<Utilisateur> getUser( 
        @RequestParam(name = "roles", required = false) String roles){
            if(roles == null){
                return userService.findAll();
            }
            return userService.findAllByRoles(roles);
        
        } 

    @GetMapping("/public/utilisateur/")
    public List<Utilisateur> getAllUtilisateur() {
        return userService.findAll();
    } 

    @GetMapping("/utilisateur")
    public java.util.Optional<Utilisateur> getUtilisateur_f(String login) {
        return userService.findByLogin(login);
    }
     
    @DeleteMapping("/admin/utilisateur/delete/{id}")
    public void deleteCenter(@PathVariable("id") int id) {
        userService.deleteUserById(id);
    }
        
    @PatchMapping("/admin/utilisateur/patch/{id}")
    public Utilisateur updateUser(@PathVariable("id") int id , @RequestBody Utilisateur updatedUser) {
        return userService.updateUser(id, updatedUser);
    }
   
}
