package com.example.demo.VaccinationCenter.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.VaccinationCenter.entity.Utilisateur;
import com.example.demo.VaccinationCenter.repository.UtilisateurRepo;

@Service
public class UtilisateurServ implements UserDetailsService {
    
    @Autowired
    private UtilisateurRepo userRepo;
    private static org.slf4j.Logger log = LoggerFactory.getLogger(UtilisateurServ.class);

    public Utilisateur SaveUtilisateur(Utilisateur user){
        System.out.println("affichage erreur" + user.getId());
        
        return userRepo.save(user);
    }

    public List<Utilisateur> findAll(){
        return userRepo.findAll();
    }
    @Override
    public UserDetails loadUserByUsername(final String login)
            throws UsernameNotFoundException {
        log.info("recuperation de {}", login);

        java.util.Optional<Utilisateur> optionalUtilisateur = userRepo.findByLogin(login);
        if (optionalUtilisateur.isPresent()) {
            Utilisateur utilisateur = optionalUtilisateur.get();
            return new User(utilisateur.getLogin(), utilisateur.getPassword(), List.of());
        } else {
            throw new UsernameNotFoundException("L'utilisateur" + login + " n'existe pas");
        }

    }

    public Optional<Utilisateur> findByLogin(String login){
        return userRepo.findByLogin(login);
    }

    public List<Utilisateur> findAllByRoles(String roles){
        return userRepo.findAllByRolesLike(roles);
    }


    public boolean validationUtilisateur(String login, String password, String nom, String prenom, String mail, String roles){
        Utilisateur utilisateur = userRepo.findByLogin(login).get();
        this.userRepo.save(utilisateur);

        return true;
    }

    public void deleteUserById(Integer id) {
        java.util.Optional<Utilisateur> user = userRepo.findById(id);

        if(user.isPresent()) userRepo.deleteById(id);
        else System.out.println("le user est pas présent");
    }

    
}
