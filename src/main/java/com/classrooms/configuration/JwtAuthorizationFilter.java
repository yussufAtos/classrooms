package com.classrooms.configuration;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;


public class JwtAuthorizationFilter extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws IOException, ServletException {

		/*response.addHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Access-Control-Allow-Header", "Origin", "Accept");*/

	/*	response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
		response.setHeader("Access-Control-Max-Age", "3600");
		response.setHeader("Access-Control-Allow-Headers","x-requested-with, authorization, x-auth-token, origin, content-type, accept");*/

		String jwt = request.getHeader(JwtProperties.HEADER_STRING);

		System.out.println("jwt : " + jwt);

		if (jwt == null ) {
			filterChain.doFilter(request, response);
			System.out.println("jwt 1 : ");
			return;
		}
		System.out.println("jwt 2 : ");
		Claims claims = Jwts.parser().setSigningKey(JwtProperties.SECRET)
				.parseClaimsJws(jwt.replace(JwtProperties.TOKEN_PREFIX, ""))

				.getBody();

		String username = claims.getSubject();
		System.out.println("claims.getExpiration() : "+claims.getExpiration());

		System.out.println("claims.getSubject() : " + username);

		ArrayList<Map<String, String>> roles = (ArrayList<Map<String, String>>) claims.get("roles");

		Collection<GrantedAuthority> autorities = new ArrayList<>();

		// Collection<SimpleGrantedAuthority> autorities = new ArrayList<>();

		roles.forEach(r -> {
			autorities.add(new SimpleGrantedAuthority(r.get("authority")));

			 System.out.println("r.getRole() : " + r.get("authority"));
		});

		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,
				null, autorities);
		SecurityContextHolder.getContext().setAuthentication(authenticationToken);

		filterChain.doFilter(request, response);

	}

}
