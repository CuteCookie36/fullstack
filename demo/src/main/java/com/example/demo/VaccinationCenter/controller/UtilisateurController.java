package com.example.demo.VaccinationCenter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.VaccinationCenter.entity.Utilisateur;
import com.example.demo.VaccinationCenter.service.UtilisateurServ;




@RestController
@RequestMapping(value = "/api/private")
public class UtilisateurController {
    
    @Autowired
    private UtilisateurServ userService;

    @GetMapping(path = "/utilisateurs")
    public List<Utilisateur> get(
    @RequestParam(name = "login", required = false) String login){
        if(login == null){
            return userService.findAll();
        }
        return userService.findAllByLogin(login);
    }


    @PostMapping(path = "/utilisateurs/save" )
    public Utilisateur save(
        @RequestBody Utilisateur User  ){
            return userService.SaveUtilisateur(User);
        } 

}
