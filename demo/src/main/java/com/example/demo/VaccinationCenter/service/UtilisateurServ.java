package com.example.demo.VaccinationCenter.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.VaccinationCenter.config.JwtService;
import com.example.demo.VaccinationCenter.entity.AuthReponse;
import com.example.demo.VaccinationCenter.entity.Utilisateur;
import com.example.demo.VaccinationCenter.repository.UtilisateurRepo;

@Service
public class UtilisateurServ implements UserDetailsService {
    
    @Autowired
    private UtilisateurRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;

    public Utilisateur SaveUtilisateur(Utilisateur user){
        System.out.println("affichage erreur" + user.getId());
        Utilisateur user1 = new Utilisateur();
        user1.setEmail(user.getEmail());
        user1.setLogin(user.getLogin());
        user1.setNom(user.getNom());
        user1.setPrenom(user.getPrenom());
        user1.setPassword(passwordEncoder.encode(user.getPassword()));
        user1.setRoles(user.getRoles());
        user1.setVaccinationCenter(user.getVaccinationCenter());

        return userRepo.save(user1);
    }

    public List<Utilisateur> findAll(){
        return userRepo.findAll();
    }

    public AuthReponse authenticate(Utilisateur user) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getLogin(),
                        user.getPassword()
                )
        );
        Utilisateur user2 = userRepo.findByLogin(user.getLogin()).orElseThrow();
        var jwtToken = jwtService.generateToken(user2);
        AuthReponse authReponse = new AuthReponse();
        authReponse.setToken(jwtToken);
        return authReponse;
    }

    public AuthReponse register(Utilisateur user) {
        userRepo.save(user);
        var jwtToken = jwtService.generateToken(user);
        AuthReponse authReponse = new AuthReponse();
        authReponse.setToken(jwtToken);
        return authReponse;
    }

    @Override
    public UserDetails loadUserByUsername(final String login)
            throws UsernameNotFoundException {
        

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

    public Utilisateur updateUser(int id, Utilisateur updatedUser){

        Optional<Utilisateur> user1 = userRepo.findById(id);
        
        if (user1.isPresent()){
            updatedUser.setId(user1.get().getId());
            return userRepo.save(updatedUser);
        }
        else {
            System.out.println("le user est pas présent");
            return null;
        } 
        

    }

    
}
