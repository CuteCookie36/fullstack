package com.example.demo.VaccinationCenter.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.VaccinationCenter.entity.Utilisateur;

@Repository
public interface UtilisateurRepo extends JpaRepository<Utilisateur, Integer> {
    
    public Optional<Utilisateur> findByLoginAndPassword(String login, String password);
    public List<Utilisateur> findAllByLogin(String login);
    public Optional<Utilisateur> findByLogin(String login);
    public List<Utilisateur> findAllByRolesLike(String roles);
    public Utilisateur findByEmail(String email);
}
