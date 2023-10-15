// package com.example.demo.VaccinationCenter.service;


// import java.util.List;
// import java.util.Optional;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.security.core.userdetails.User;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import com.example.demo.VaccinationCenter.entity.Utilisateur;
// import com.example.demo.VaccinationCenter.repository.UtilisateurRepository;

// import jakarta.annotation.PostConstruct;
// // import com.example.demo.VaccinationCenter.UtilisateurRepository;
// // import com.example.demo.VaccinationCenter.Utilisateur;

// @Service
// public class UtilisateurService implements UserDetailsService {
//     private static Logger log = LoggerFactory.getLogger(UtilisateurService.class);
//     private final UtilisateurRepository utilisateurRepository;
//     private final PasswordEncoder passwordEncoder;

//     public UtilisateurService(UtilisateurRepository utilisateurRepository, PasswordEncoder passwordEncoder) {
//         this.utilisateurRepository = utilisateurRepository;
//         this.passwordEncoder = passwordEncoder;
//     }

//     /**
//      * Pour l'exemple j'enregistre un utilisateur au demarrage
//      */
//     @PostConstruct
//     public void createUserDefault() {
//         log.info("Creation du user test");
//         // en base 64 : dXNlcjpwYXNzd29yZA==
//         Utilisateur utilisateur = new Utilisateur();
//         utilisateur.setLogin("toto");
//         utilisateur.setPassword(passwordEncoder.encode("coucou"));
//         this.utilisateurRepository.save(utilisateur);
//     }

//     @Override
//     public UserDetails loadUserByUsername(final String login)
//             throws UsernameNotFoundException {
//         log.info("recuperation de {}", login);

//         Optional<Utilisateur> optionalUtilisateur = utilisateurRepository.findByLogin(login);
//         if (optionalUtilisateur.isPresent()) {
//             Utilisateur utilisateur = optionalUtilisateur.get();
//             return new User(utilisateur.getLogin(), utilisateur.getPassword(), List.of());
//         } else {
//             throw new UsernameNotFoundException("L'utilisateur" + login + " n'existe pas");
//         }

//     }
// }
