---
title: "Cloud Architecture"
type: "architect"

date: 2025-06-09T12:12:20-04:00
draft: false
image: "/images/architect_banner.png"

# --- Parámetros para la barra lateral ---
instructor: "Victor S. Recio"
lectures: "16 Módulos"
duration: "40+ horas"
labs: "Sí"
skill_level: "Intermedio a Avanzado"
language: "Español"
quiz: "Sí"
certificate: "Sí"

# --- Temario Completo del Curso de Arquitectura Cloud ---
modules:
- title: "Fundamentos de Cloud Computing"
  topics:
  - "Qué es la nube: historia, evolución y beneficios"
  - "Modelos de servicio: IaaS, PaaS, SaaS"
  - "Modelos de despliegue: Pública, Privada, Híbrida, Multinube"
  - "Ventajas técnicas vs. ventajas de negocio"
  - "Shared Responsibility Model (AWS, Azure, GCP)"
- title: "Virtualización y Contenedores"
  topics:
  - "Fundamentos de virtualización (Hypervisores, VMs)"
  - "Contenedores vs. VMs: diferencias arquitectónicas"
  - "Introducción a Docker y OCI"
  - "Ejecución de contenedores en la nube"
  - "Container Runtimes (Docker, containerd, CRI-O)"
- title: "Redes en la Nube (Networking)"
  topics:
  - "Arquitectura básica de red (OSI, TCP/IP)"
  - "Subredes, direccionamiento IP y CIDR"
  - "Servicios de red en AWS (VPC, Subnets, IGW, NAT, SG, NACLs)"
  - "Servicios de red en Azure (VNet, Subnets, NSG, UDR, Azure Firewall)"
  - "Topologías: Hub-and-Spoke, Full Mesh, Hybrid Cloud, Multi-Cloud"
- title: "Identidad y Control de Acceso"
  topics:
  - "Azure Active Directory y AWS IAM"
  - "Principios de identidad: usuarios, grupos, roles, políticas"
  - "RBAC vs ABAC"
  - "Autenticación, autorización, MFA"
  - "Identidades administradas (MSI, STS, Workload Identity)"
- title: "Almacenamiento y Bases de Datos"
  topics:
  - "Tipos de almacenamiento: blob, file, disk, object"
  - "Azure Blob Storage, AWS S3"
  - "Backup y recuperación"
  - "Bases de datos relacionales y no relacionales"
  - "Arquitecturas de bases de datos distribuidas (Cosmos DB, DynamoDB)"
- title: "Compute & Serverless"
  topics:
  - "Máquinas virtuales (EC2, Azure VM): sizing, regiones, zonas"
  - "Autoescalado y alta disponibilidad"
  - "Funciones serverless: AWS Lambda, Azure Functions"
  - "Containers as a Service: ECS, AKS, EKS, Cloud Run"
  - "Event-driven architecture"
- title: "Orquestación y Kubernetes"
  topics:
  - "Arquitectura de Kubernetes"
  - "Pods, deployments, services, volumes, secrets"
  - "AKS (Azure Kubernetes Service) vs EKS (Elastic Kubernetes Service)"
  - "Escalado automático, salud y actualizaciones"
  - "Observabilidad y logging en clústeres"
  - "GitOps y ArgoCD"
- title: "Automatización e Infraestructura como Código (IaC)"
  topics:
  - "Terraform vs Bicep vs ARM vs CloudFormation"
  - "Arquitectura declarativa vs imperativa"
  - "CI/CD pipelines para infraestructura"
  - "Módulos reutilizables y GitOps para IaC"
  - "Estado remoto y gestión de secretos"
- title: "Seguridad en la Nube"
  topics:
  - "Zero Trust Architecture"
  - "Azure Defender, AWS GuardDuty"
  - "Firewalls, WAF, NSG, NACL, IAM Policies"
  - "Monitoreo de cumplimiento (Azure Policy, SCPs)"
  - "Rotación de secretos (Key Vault, Secrets Manager)"
  - "Seguridad de contenedores y supply chain"
- title: "Observabilidad y Gestión Operacional"
  topics:
  - "Logging, métricas, trazabilidad"
  - "Azure Monitor, AWS CloudWatch, Grafana, Prometheus"
  - "Integración con incident response"
  - "Dashboards para SRE y KPIs"
  - "Alertas inteligentes y runbooks automatizados"
- title: "Alta Disponibilidad y Resiliencia"
  topics:
  - "Zonas de disponibilidad y regiones"
  - "Arquitectura activa-activa y activa-pasiva"
  - "Load Balancers (L4/L7), Application Gateways"
  - "Patrón Circuit Breaker, Retry, Timeout"
  - "Chaos Engineering"
- title: "Diseño de Arquitectura Multi-Cloud y Híbrida"
  topics:
  - "Principios de diseño híbrido (Azure Arc, Outposts)"
  - "Multi-cloud patterns: federación, redundancia, bursting"
  - "Retos de red, identidad y replicación de datos"
  - "Herramientas de gestión centralizada (Anthos, Azure Arc, Terraform Cloud)"
- title: "Costeo y Gobernanza"
  topics:
  - "Azure Cost Management y AWS Budgets"
  - "Etiquetado y control financiero por unidad de negocio"
  - "Análisis de TCO y ROI de soluciones cloud"
  - "Azure Policy y AWS Config para cumplimiento"
  - "Resource Locks, Blueprints y Landing Zones"
- title: "Patrones y Estilos Arquitectónicos"
  topics:
  - "12 Factor App"
  - "Arquitectura hexagonal y clean architecture"
  - "Event Sourcing y CQRS"
  - "Domain-Driven Design aplicado a la nube"
  - "Microservicios vs Monolitos Modernos vs Serverless"
- title: "Casos de Uso Empresariales"
  topics:
  - "Arquitectura para SaaS multi-tenant"
  - "Cloud-native data pipelines"
  - "Aplicaciones móviles globales"
  - "Arquitectura de AI/ML en la nube"
  - "Arquitectura para cumplimiento (HIPAA, PCI-DSS, SOC 2)"
- title: "Examen Final y Proyecto de Arquitectura"
  topics:
  - "Escenario real de negocio"
  - "Construcción de arquitectura multi-servicio"
  - "Diagrama técnico y documento de decisión"
  - "Justificación de componentes y costos"
  - "Defensa ante arquitecto senior"
---

## Descripción del Curso

Bienvenido al curso definitivo de **Arquitectura de Nube Multi-Cloud**. En esta formación intensiva y práctica, dominarás los principios, patrones y herramientas para diseñar, implementar y gestionar soluciones robustas en entornos de **AWS, Azure y GCP**.

Este programa está diseñado para llevarte de los fundamentos teóricos a la aplicación práctica, preparándote para los desafíos del mundo real en la ingeniería de nube. Aprenderás a construir sistemas **escalables, resilientes, seguros y optimizados en costos**, utilizando las mejores prácticas de la industria como Infraestructura como Código (IaC), GitOps y arquitecturas serverless.